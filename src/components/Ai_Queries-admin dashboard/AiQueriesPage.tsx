import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Upload,
  MoreVertical,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Check,
  Pencil,
  Trash2,
} from "lucide-react";

// Structural ref type: works with any HTMLElement-based ref
export type ElRef = { current: HTMLElement | null };
type QueryStatus = "সমাধান হয়েছে" | "ত্রুটি";

type QueryRow = {
  id: string;
  user: string;
  avatar?: string;
  query: string;
  time: string;
  status: QueryStatus;
};

const initialRows: QueryRow[] = [
  {
    id: "1",
    user: "সাদিয়া আক্তার",
    avatar: "/images/Ai_queries-Admin dashboard/user6.jpg",
    query: "কানাডায় কম্পিউটার সায়েন্সের সেরা বিশ্ববিদ্যালয়সমূহ",
    time: "২০-১০-২০২৫ রাত ৮:৩০",
    status: "সমাধান হয়েছে",
  },
  {
    id: "2",
    user: "মামিন দিশা",
    avatar: "/images/Ai_queries-Admin dashboard/user2.jpg",
    query: "আপনার বর্তমান প্রোফাইল দিয়ে F1 ভিসার সফলতার হার",
    time: "২০-১০-২০২৫ রাত ৮:২৪",
    status: "সমাধান হয়েছে",
  },
  {
    id: "3",
    user: "মিনহাজ হোসেন",
    avatar: "/images/Ai_queries-Admin dashboard/user3.jpg",
    query: "স্কলারশিপ অপশনসমূহ যুক্তরাজ্যে এমবিএ প্রোগ্রামসমূহ",
    time: "২০-১০-২০২৫ রাত ৭:৫৯",
    status: "সমাধান হয়েছে",
  },
  {
    id: "4",
    user: "আয়রিন জানিন",
    avatar: "/images/Ai_queries-Admin dashboard/user4.jpg",
    query: "জার্মানিতে ফাউন্ডেশন কোর্স এবং ভিসা যোগ্যতা",
    time: "২০-১০-২০২৫ রাত ৮:৪৮",
    status: "সমাধান হয়েছে",
  },
  {
    id: "5",
    user: "মারিনা তাসনিম",
    avatar: "/images/Ai_queries-Admin dashboard/user5.jpg",
    query: "৪.০ IELTS নিয়ে যুক্তরাজ্যের স্টুডেন্ট ভিসা কেমন সম্ভব?",
    time: "২০-১০-২০২৫ রাত ৭:৩৩",
    status: "ত্রুটি",
  },
  {
    id: "6",
    user: "রাইহান করিম",
    avatar: "/images/Ai_queries-Admin dashboard/user1.jpg",
    query: "যুক্তরাষ্ট্র ও কানাডায় বিশ্ববিদ্যালয়গুলোর তুলনা",
    time: "২০-১০-২০২৫ রাত ৭:২০",
    status: "সমাধান হয়েছে",
  },
];

const bn = new Intl.NumberFormat("bn-BD");

const StatCard = ({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta: string;
}) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
    <div className="text-sm text-slate-500">{label}</div>
    <div className="mt-3 flex items-baseline gap-3">
      <div className="text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
        <ArrowUpRight className="h-3.5 w-3.5" />
        {delta}
      </div>
    </div>
  </div>
);

function useClickOutside(ref: ElRef, onClose: () => void) {
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      onClose();
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, [ref, onClose]);
}

function useFixedPosition(open: boolean, anchorRef: ElRef) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!open || !ref.current || !anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    const el = ref.current;
    let left = rect.left;
    let top = rect.bottom + 8;
    el.style.visibility = "hidden";
    el.style.left = "0px";
    el.style.top = "0px";
    el.style.position = "fixed";
    const { width, height } = el.getBoundingClientRect();
    const pad = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    if (left + width + pad > vw) left = Math.max(pad, vw - width - pad);
    if (top + height + pad > vh) top = Math.max(pad, rect.top - height - 8);
    if (top < pad) top = pad;
    if (left < pad) left = pad;
    el.style.left = `${left}px`;
    el.style.top = `${top}px`;
    el.style.visibility = "visible";
  }, [open, anchorRef]);
  return ref;
}

function SimpleDropdown<T>({
  open,
  anchorRef,
  items,
  value,
  onSelect,
  onClose,
}: {
  open: boolean;
  anchorRef: ElRef;
  items: { key: T; label: React.ReactNode }[];
  value?: T;
  onSelect: (v: T) => void;
  onClose: () => void;
}) {
  const ref = useFixedPosition(open, anchorRef);
  useClickOutside(ref as unknown as ElRef, onClose);
  if (!open) return null;
  return (
    <div
      ref={ref}
      className="fixed z-50 w-48 overflow-hidden rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/10"
      style={{ visibility: "hidden" }}
      role="menu"
    >
      {items.map(({ key, label }) => (
        <button
          key={String(key)}
          onClick={() => {
            onSelect(key);
            onClose();
          }}
          role="menuitem"
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-slate-50"
        >
          <span className="inline-flex items-center gap-2">{label}</span>
          {value === key && <Check className="h-4 w-4 text-emerald-600" />}
        </button>
      ))}
    </div>
  );
}

const Avatar = ({ name, src }: { name: string; src?: string }) => {
  if (src) {
    return (
      <img src={src} alt={name} className="h-9 w-9 rounded-full object-cover" />
    );
  }
  const initial = name.trim().charAt(0);
  return (
    <div
      className={`h-9 w-9 bg-slate-400 text-white grid place-items-center rounded-full text-sm font-semibold`}
    >
      {initial}
    </div>
  );
};

export default function AIQueriesDashboard() {
  const [rows, setRows] = useState<QueryRow[]>(initialRows);
  const [statusFilter, setStatusFilter] = useState<"সব" | QueryStatus>("সব");
  const [openTopFilter, setOpenTopFilter] = useState(false);
  const topFilterBtnRef = useRef<HTMLButtonElement>(null);

  const [openRowStatusFor, setOpenRowStatusFor] = useState<string | null>(null);
  const [openActionsFor, setOpenActionsFor] = useState<string | null>(null);
  const rowStatusBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const actionBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const filteredRows = useMemo(() => {
    if (statusFilter === "সব") return rows;
    return rows.filter((r) => r.status === statusFilter);
  }, [rows, statusFilter]);

  const setRowStatus = (id: string, status: QueryStatus) => {
    setRows((curr) => curr.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Stat cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            label="মোট কুয়েরি"
            value={bn.format(2400)}
            delta="গতের চেয়ে ২.৮৭% বেশি"
          />
          <StatCard
            label="গড় সাড়া দেওয়ার সময়"
            value={`${bn.format(300)} মিলিসেকন্ড`}
            delta="গতের চেয়ে ২.৮৭% বেশি"
          />
          <StatCard
            label="কনভার্সন হার"
            value={`৩.৫%`}
            delta="গতের চেয়ে ২.৮৭% বেশি"
          />
        </div>

        {/* Card */}
        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              AI কুয়েরি
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <button className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                <Upload className="h-4 w-4" /> এক্সপোর্ট CSV ফাইল
              </button>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                placeholder="সার্চ করুন"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
              <button
                ref={topFilterBtnRef}
                onClick={() => setOpenTopFilter((v) => !v)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 active:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                aria-haspopup="menu"
                aria-expanded={openTopFilter}
              >
                অবস্থা <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Top filter dropdown */}
          <SimpleDropdown
            open={openTopFilter}
            anchorRef={topFilterBtnRef}
            value={statusFilter}
            onSelect={(v) => setStatusFilter(v as any)}
            onClose={() => setOpenTopFilter(false)}
            items={[
              { key: "সব", label: <>সব দেখান</> },
              {
                key: "সমাধান হয়েছে",
                label: (
                  <>
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"></span>{" "}
                    সমাধান হয়েছে
                  </>
                ),
              },
              {
                key: "ত্রুটি",
                label: (
                  <>
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block"></span>{" "}
                    ত্রুটি
                  </>
                ),
              },
            ]}
          />

          <div className="-mx-5 overflow-x-auto">
            <table className="min-w-full table-fixed text-left text-sm text-slate-700">
              <thead>
                <tr className="bg-indigo-50 text-slate-600">
                  {["ব্যবহারকারী", "কুয়েরি", "সময়", "অবস্থা", "কার্যক্রম"].map(
                    (h) => (
                      <th key={h} className="px-6 py-3 font-medium">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar name={row.user} src={row.avatar} />
                        <span className="font-medium text-slate-900">
                          {row.user}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{row.query}</td>
                    <td className="px-6 py-4">{row.time}</td>
                    <td className="relative px-6 py-4">
                      <button
                        ref={(el) => {
                          rowStatusBtnRefs.current[row.id] = el;
                        }}
                        onClick={() =>
                          setOpenRowStatusFor(
                            openRowStatusFor === row.id ? null : row.id
                          )
                        }
                        className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-medium ${
                          row.status === "ত্রুটি"
                            ? "bg-rose-50 text-rose-700"
                            : "bg-emerald-50 text-emerald-700"
                        } hover:ring-2 ${
                          row.status === "ত্রুটি"
                            ? "hover:ring-rose-200 focus-visible:ring-rose-300"
                            : "hover:ring-emerald-200 focus-visible:ring-emerald-300"
                        } focus-visible:outline-none`}
                        aria-haspopup="menu"
                        aria-expanded={openRowStatusFor === row.id}
                      >
                        {row.status}
                      </button>
                      <SimpleDropdown
                        open={openRowStatusFor === row.id}
                        anchorRef={{
                          current: rowStatusBtnRefs.current[
                            row.id
                          ] as HTMLButtonElement,
                        }}
                        value={row.status}
                        onSelect={(v) => setRowStatus(row.id, v as QueryStatus)}
                        onClose={() => setOpenRowStatusFor(null)}
                        items={[
                          {
                            key: "সমাধান হয়েছে" as QueryStatus,
                            label: (
                              <>
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block"></span>{" "}
                                সমাধান হয়েছে
                              </>
                            ),
                          },
                          {
                            key: "ত্রুটি" as QueryStatus,
                            label: (
                              <>
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block"></span>{" "}
                                ত্রুটি
                              </>
                            ),
                          },
                        ]}
                      />
                    </td>
                    <td className="relative px-6 py-4">
                      <button
                        ref={(el) => {
                          actionBtnRefs.current[row.id] = el;
                        }}
                        onClick={() =>
                          setOpenActionsFor(
                            openActionsFor === row.id ? null : row.id
                          )
                        }
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        aria-label="More actions"
                        aria-haspopup="menu"
                        aria-expanded={openActionsFor === row.id}
                      >
                        <MoreVertical className="h-5 w-5" />
                      </button>
                      <SimpleDropdown
                        open={openActionsFor === row.id}
                        anchorRef={{
                          current: actionBtnRefs.current[
                            row.id
                          ] as HTMLButtonElement,
                        }}
                        onClose={() => setOpenActionsFor(null)}
                        onSelect={(v) => alert(`Row ${row.id}: ${String(v)}`)}
                        items={
                          [
                            {
                              key: "edit",
                              label: (
                                <>
                                  <Pencil className="h-4 w-4 text-slate-500" />{" "}
                                  এডিট
                                </>
                              ),
                            },
                            {
                              key: "delete",
                              label: (
                                <>
                                  <Trash2 className="h-4 w-4 text-slate-500" />{" "}
                                  ডিলিট
                                </>
                              ),
                            },
                          ] as any
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              {`${bn.format(2400)}টি AI কুয়েরির মধ্যে ১ থেকে ${bn.format(
                Math.min(filteredRows.length, 6)
              )}টি দেখানো হচ্ছে`}
            </p>
            <button className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
              পরবর্তী <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
