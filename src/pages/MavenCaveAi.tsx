import { type FormEvent, useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router";
import { Loader2, Plus, Send, Trash2, Pencil } from "lucide-react";
import { chatApi } from "@/lib/api";
import { toast } from "sonner";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
  pending?: boolean;
}

interface ChatSessionSummary {
  _id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface ChatMessageResponse {
  role: "user" | "assistant";
  content: string;
  createdAt?: string;
}

const sidebarOptions = [
  { label: "Visa Predictor", path: "/resources/sop" },
  { label: "SOP Generator", path: "/visa-predictor" },
];

const DEFAULT_TITLE = "New chat";

const formatMessages = (messages: ChatMessageResponse[] = [], sessionId: string): ChatMessage[] =>
  messages.map((message, index) => ({
    id: `${sessionId}-${index}-${message.createdAt ?? index}`,
    role: message.role === "assistant" ? "assistant" : "user",
    content: message.content,
    createdAt: message.createdAt,
    pending: false,
  }));

export default function MavenCaveAi() {
  const [selectedOption, setSelectedOption] = useState(sidebarOptions[0]?.label ?? "Visa Predictor");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [sessions, setSessions] = useState<ChatSessionSummary[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [isLoadingSessions, setIsLoadingSessions] = useState(false);
  const [isLoadingMessages, setIsLoadingMessages] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async (sessionToSelect?: string) => {
    setIsLoadingSessions(true);
    try {
      const response = await chatApi.getSessions();
      const data: ChatSessionSummary[] = Array.isArray(response.data) ? response.data : [];
      setSessions(data);

      const sessionId =
        sessionToSelect ??
        (activeSessionId && data.some((session) => session._id === activeSessionId)
          ? activeSessionId
          : data[0]?._id ?? null);

      if (sessionId) {
        handleSelectSession(sessionId);
      } else {
        setActiveSessionId(null);
        setMessages([]);
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to load your chats.";
      toast.error(message);
    } finally {
      setIsLoadingSessions(false);
    }
  };

  const handleSelectSession = async (sessionId: string) => {
    setActiveSessionId(sessionId);
    setIsLoadingMessages(true);
    setMessages([]);

    try {
      const response = await chatApi.getSessionById(sessionId);
      const sessionMessages = formatMessages(response?.data?.messages ?? [], sessionId);
      setMessages(sessionMessages);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Unable to load this chat.";
      toast.error(message);
      setActiveSessionId(null);
    } finally {
      setIsLoadingMessages(false);
    }
  };

  const handleNewChat = async () => {
    try {
      const response = await chatApi.createSession();
      const newSession: ChatSessionSummary = response.data;
      setSessions((prev) => [newSession, ...prev]);
      setActiveSessionId(newSession._id);
      setMessages([]);
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to create a new chat.";
      toast.error(message);
    }
  };

  const handleDeleteSession = async (sessionId: string) => {
    if (!window.confirm("Delete this chat? This cannot be undone.")) {
      return;
    }
    try {
      await chatApi.deleteSession(sessionId);
      setSessions((prev) => prev.filter((session) => session._id !== sessionId));

      if (activeSessionId === sessionId) {
        const remaining = sessions.filter((session) => session._id !== sessionId);
        const nextSessionId = remaining[0]?._id ?? null;
        if (nextSessionId) {
          handleSelectSession(nextSessionId);
        } else {
          setActiveSessionId(null);
          setMessages([]);
        }
      }
      toast.success("Chat deleted.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to delete chat.";
      toast.error(message);
    }
  };

  const handleRenameSession = async (session: ChatSessionSummary) => {
    const nextTitle = window.prompt("Rename chat", session.title);
    if (!nextTitle || nextTitle.trim() === session.title) {
      return;
    }
    try {
      const response = await chatApi.updateSessionTitle(session._id, { title: nextTitle.trim() });
      const updatedSession: ChatSessionSummary = response.data;
      setSessions((prev) =>
        prev.map((item) => (item._id === session._id ? { ...item, ...updatedSession } : item))
      );
      toast.success("Chat renamed.");
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to rename chat.";
      toast.error(message);
    }
  };

  const ensureActiveSession = async (): Promise<string | null> => {
    if (activeSessionId) {
      return activeSessionId;
    }
    try {
      const response = await chatApi.createSession();
      const session: ChatSessionSummary = response.data;
      setSessions((prev) => [session, ...prev]);
      setActiveSessionId(session._id);
      setMessages([]);
      return session._id;
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to start a new chat.";
      toast.error(message);
      return null;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const sessionId = await ensureActiveSession();
    if (!sessionId) {
      return;
    }

    setInput("");
    const userMessage: ChatMessage = {
      id: `${sessionId}-user-${Date.now()}`,
      role: "user",
      content: trimmed,
      pending: false,
    };
    const assistantPlaceholderId = `${sessionId}-assistant-${Date.now()}`;
    const assistantPlaceholder: ChatMessage = {
      id: assistantPlaceholderId,
      role: "assistant",
      content: "",
      pending: true,
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);

    setIsSending(true);
    try {
      const response = await chatApi.sendMessage(sessionId, { prompt: trimmed });
      const updatedSession = response?.data?.session;

      if (!updatedSession) {
        throw new Error("No session data returned from server.");
      }

      setMessages(formatMessages(updatedSession.messages ?? [], updatedSession._id));

      setSessions((prev) => {
        const existing = prev.find((session) => session._id === updatedSession._id);
        const updatedSummary: ChatSessionSummary = {
          _id: updatedSession._id,
          title: updatedSession.title ?? existing?.title ?? DEFAULT_TITLE,
          createdAt: existing?.createdAt ?? updatedSession.createdAt ?? new Date().toISOString(),
          updatedAt: updatedSession.updatedAt ?? new Date().toISOString(),
        };
        const remaining = prev.filter((session) => session._id !== updatedSession._id);
        return [updatedSummary, ...remaining];
      });
    } catch (error: any) {
      const message = error?.response?.data?.message || "Failed to send your message.";
      toast.error(message);
      setMessages((prev) =>
        prev.filter((message) => message.id !== userMessage.id && message.id !== assistantPlaceholderId)
      );
    } finally {
      setIsSending(false);
    }
  };

  const isConversationEmpty = useMemo(
    () => !messages.length && !isLoadingMessages,
    [messages.length, isLoadingMessages]
  );

  const activeSession = useMemo(
    () => sessions.find((session) => session._id === activeSessionId) ?? null,
    [sessions, activeSessionId]
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fc]">
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between h-16">
        <h1 className="text-2xl font-bold text-indigo-700">MavenCave AI</h1>
      </header>

      <div className="flex flex-1 overflow-hidden" style={{ height: "calc(100vh - 16rem)" }}>
        <aside className="flex flex-col w-64 bg-white border-r shadow-lg">
          <div className="p-4">
            <button
              onClick={handleNewChat}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
            >
              <Plus className="h-4 w-4" />
              New chat
            </button>
          </div>

          <nav className="flex flex-col px-4 pb-3 gap-1">
            {sidebarOptions.map((opt) => (
              <NavLink
                key={opt.label}
                to={opt.path}
                onClick={() => setSelectedOption(opt.label)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 ${
                    selectedOption === opt.label || isActive
                      ? "bg-indigo-600 text-white shadow"
                      : "text-gray-700 hover:bg-indigo-100"
                  }`
                }
              >
                {opt.label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-gray-200 mx-4"></div>

          <div className="flex-1 overflow-y-auto px-4 py-3">
            <h3 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
              Chats
            </h3>
            {isLoadingSessions ? (
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Loader2 className="h-4 w-4 animate-spin" />
                Loading chats...
              </div>
            ) : sessions.length === 0 ? (
              <p className="text-gray-400 italic text-sm">No chats yet</p>
            ) : (
              <ul className="flex flex-col gap-2 text-sm">
                {sessions.map((session) => {
                  const isActive = session._id === activeSessionId;
                  return (
                    <li
                      key={session._id}
                      className={`group rounded-lg border px-3 py-2 shadow-sm transition ${
                        isActive ? "border-indigo-500 bg-indigo-50" : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <button
                        onClick={() => handleSelectSession(session._id)}
                        className="flex w-full items-center justify-between gap-2 text-left"
                      >
                        <span className="truncate font-medium text-gray-800">
                          {session.title || DEFAULT_TITLE}
                        </span>
                      </button>
                      <div className="mt-2 flex items-center gap-2 opacity-0 transition group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={() => handleRenameSession(session)}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-500 hover:bg-gray-100"
                        >
                          <Pencil className="h-3 w-3" />
                          Rename
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteSession(session._id)}
                          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs text-red-500 hover:bg-red-50"
                        >
                          <Trash2 className="h-3 w-3" />
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </aside>

        <main className="flex-1 flex flex-col p-8 overflow-hidden bg-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Ask Maven AI</h2>
              {activeSession && (
                <p className="text-sm text-gray-500">
                  {activeSession.title || DEFAULT_TITLE}
                </p>
              )}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {isLoadingMessages ? (
              <div className="flex items-center justify-center h-full text-gray-500">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Loading conversation...
              </div>
            ) : isConversationEmpty ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <p className="text-lg font-medium mb-2">Start a conversation with MavenCave AI</p>
                <p className="text-sm">
                  Ask visa questions, request SOP help, or explore study abroad advice.
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  {message.role === "user" ? (
                    <div className="flex justify-end">
                      <div className="max-w-[75%] rounded-2xl rounded-br-md bg-indigo-600 px-4 py-3 text-white shadow-lg">
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex justify-start">
                      <div className="max-w-[75%] rounded-2xl rounded-bl-md bg-gray-100 px-4 py-3 text-gray-800 shadow">
                        {message.pending ? (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            MavenCave AI is thinking...
                          </div>
                        ) : (
                          <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                        )}
                      </div>
                    </div>
                  )}
                  {message.createdAt && !message.pending && (
                    <div
                      className={`text-xs text-gray-400 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}
                    >
                      {new Date(message.createdAt).toLocaleString()}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              rows={4}
              placeholder="Type your question or prompt here..."
              className="w-full resize-none rounded-xl border border-gray-300 p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              disabled={isSending}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
                  !input.trim() || isSending
                    ? "cursor-not-allowed bg-gray-300 text-gray-500"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {isSending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
