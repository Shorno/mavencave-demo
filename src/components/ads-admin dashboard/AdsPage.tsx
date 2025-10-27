import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {
  Upload,
  Plus,
  MoreVertical,
  Search,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  Check,
  Pencil,
  Trash2,
  BarChart3,
} from "lucide-react";

export type Campaign = {
  id: string;
  title: string;
  impressions: number;
  clicks: number;
  cost: number;
  date: string;
  status: "চলমান" | "খসড়া" | "বন্ধ";
};

const initialData: Campaign[] = [
  { id: "1", title: "ভিসা নির্দেশিকা", impressions: 24868, clicks: 263, cost: 60569, date: "১৯ অক্টোবর ২০২৫", status: "চলমান" },
  { id: "2", title: "বিদেশে পড়াশোনার প্রচারণা", impressions: 56398, clicks: 378, cost: 86969, date: "১৯ অক্টোবর ২০২৫", status: "চলমান" },
  { id: "3", title: "যুক্তরাজ্যে বৃত্তি খুঁজুন", impressions: 82489, clicks: 328, cost: 89125, date: "১৯ অক্টোবর ২০২৫", status: "চলমান" },
  { id: "4", title: "ফোনে ভর্তি সাপোর্ট", impressions: 20985, clicks: 168, cost: 89756, date: "১৯ অক্টোবর ২০২৫", status: "চলমান" },
  { id: "5", title: "ইউরোপে ভর্তি অভিযান", impressions: 23856, clicks: 163, cost: 58657, date: "১৯ অক্টোবর ২০২৫", status: "খসড়া" },
  { id: "6", title: "SAT মক টেস্ট চালু", impressions: 17054, clicks: 129, cost: 58909, date: "১৮ অক্টোবর ২০২৫", status: "বন্ধ" },
];

const formatBDN = (n: number) => new Intl.NumberFormat("bn-BD").format(n);

const StatCard = ({ label, value, delta }:{label:string; value:string; delta:string}) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
    <div className="text-sm text-slate-500">{label}</div>
    <div className="mt-3 flex items-baseline gap-3">
      <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
        <ArrowUpRight className="h-3.5 w-3.5" />
        {delta}
      </div>
    </div>
  </div>
);

function useClickOutside(ref: React.RefObject<HTMLElement>, onClose: () => void) {
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

function useFixedPosition(open: boolean, anchorRef: React.RefObject<HTMLElement>) {
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

/** Simple fixed-position, no-scroll dropdown template */
function SimpleDropdown<T>({ open, anchorRef, items, value, onSelect, onClose }:{ 
  open:boolean;
  anchorRef: React.RefObject<HTMLElement>;
  items: { key: T; label: React.ReactNode }[];
  value?: T;
  onSelect: (v:T)=>void;
  onClose: ()=>void;
}) {
  const ref = useFixedPosition(open, anchorRef);
  useClickOutside(ref, onClose);
  if (!open) return null;
  return (
    <div ref={ref} className="fixed z-50 w-48 overflow-hidden rounded-xl bg-white p-1 shadow-lg ring-1 ring-black/10" style={{ visibility: "hidden" }} role="menu">
      {items.map(({key,label}) => (
        <button key={String(key)} onClick={()=>{onSelect(key); onClose();}} role="menuitem"
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm hover:bg-slate-50">
          <span className="inline-flex items-center gap-2">{label}</span>
          {value === key && <Check className="h-4 w-4 text-emerald-600" />}
        </button>
      ))}
    </div>
  );
}

const AdsDashboard: React.FC = () => {
  const [rows, setRows] = useState<Campaign[]>(initialData);
  const [openActionsFor, setOpenActionsFor] = useState<string | null>(null);
  const [openStatusFor, setOpenStatusFor] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<"সব" | Campaign["status"]>("সব");
  const topFilterBtnRef = useRef<HTMLButtonElement>(null);
  const statusBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const actionBtnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [openTopFilter, setOpenTopFilter] = useState(false);

  const filteredRows = useMemo(() => {
    if (statusFilter === "সব") return rows;
    return rows.filter(r => r.status === statusFilter);
  }, [rows, statusFilter]);

  const setStatus = (id: string, status: Campaign["status"]) => {
    setRows((curr) => curr.map(r => r.id === id ? { ...r, status } : r));
  };

  const actionItems = [
    { key: "edit", label: <><Pencil className="h-4 w-4 text-slate-500" /> এডিট</> },
    { key: "delete", label: <><Trash2 className="h-4 w-4 text-slate-500" /> ডিলিট</> },
  ] as const;

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Top Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard label="সক্রিয় বিজ্ঞাপন প্রচারণা" value="১২" delta="গতের চেয়ে ২.৮৭% বেশি" />
          <StatCard label="মোট ইমপ্রেশন" value="১৪,৫৬,৩২১" delta="গতের চেয়ে ২.৮৭% বেশি" />
          <StatCard label="মোট ক্লিক" value="২০,৪৬৩" delta="গতের চেয়ে ২.৮৭% বেশি" />
        </div>

        {/* Ads Table Card */}
        <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">বিজ্ঞাপন</h2>
            <div className="flex flex-wrap items-center gap-2">
              <button className="group inline-flex items-center gap-2 rounded-xl ring-1 ring-slate-200 text-slate-700 bg-white px-4 py-2 text-sm font-medium hover:bg-slate-50 active:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                <Upload className="h-4 w-4" /> এক্সপোর্ট CSV ফাইল
              </button>
              <button className="group inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
                <Plus className="h-4 w-4" /> বিজ্ঞাপন যোগ করুন
              </button>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input placeholder="সার্চ করুন" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"/>
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
              <button
                ref={topFilterBtnRef}
                onClick={()=>setOpenTopFilter((v)=>!v)}
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
            onSelect={(v)=>setStatusFilter(v as any)}
            onClose={()=>setOpenTopFilter(false)}
            items={[
              { key: "সব", label: <>সব দেখান</> },
              { key: "চলমান", label: <><span className="h-2.5 w-2.5 rounded-full bg-sky-500 inline-block"></span> চলমান</> },
              { key: "খসড়া", label: <><span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block"></span> খসড়া</> },
              { key: "বন্ধ", label: <><span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block"></span> বন্ধ</> },
            ]}
          />

          <div className="-mx-5 overflow-x-auto">
            <table className="min-w-full table-fixed text-left text-sm text-slate-700">
              <thead>
                <tr className="bg-indigo-50 text-slate-600">
                  {["প্রচারণা","ইমপ্রেশন","ক্লিক","মোট ব্যয়","তারিখ","অবস্থা","কার্যক্রম"].map((h) => (
                    <th key={h} className="px-6 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/60"}>
                    <td className="px-6 py-4 font-medium text-slate-900">{row.title}</td>
                    <td className="px-6 py-4">{formatBDN(row.impressions)}</td>
                    <td className="px-6 py-4">{formatBDN(row.clicks)}</td>
                    <td className="px-6 py-4">BDT {formatBDN(row.cost)}</td>
                    <td className="px-6 py-4">{row.date}</td>
                    <td className="relative px-6 py-4">
                      <button
                        ref={(el) => (statusBtnRefs.current[row.id] = el)}
                        onClick={() => setOpenStatusFor(openStatusFor === row.id ? null : row.id)}
                        className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 hover:ring-2 hover:ring-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                        aria-haspopup="menu"
                        aria-expanded={openStatusFor === row.id}
                      >
                        {row.status}
                      </button>
                      {/* Row status dropdown */}
                      <SimpleDropdown
                        open={openStatusFor === row.id}
                        anchorRef={{ current: statusBtnRefs.current[row.id] as HTMLButtonElement }}
                        value={row.status}
                        onSelect={(v)=>setStatus(row.id, v as any)}
                        onClose={()=>setOpenStatusFor(null)}
                        items={[
                          { key: "চলমান", label: <><span className="h-2.5 w-2.5 rounded-full bg-sky-500 inline-block"></span> চলমান</> },
                          { key: "খসড়া", label: <><span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block"></span> খসড়া</> },
                          { key: "বন্ধ", label: <><span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block"></span> বন্ধ</> },
                        ]}
                      />
                    </td>
                    <td className="relative px-6 py-4">
                      <button
                        ref={(el) => (actionBtnRefs.current[row.id] = el)}
                        onClick={() => setOpenActionsFor(openActionsFor === row.id ? null : row.id)}
                        className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                        aria-label="More actions"
                        aria-haspopup="menu"
                        aria-expanded={openActionsFor === row.id}
                      >
                        <MoreVertical className="h-5 w-5" />
                      </button>
                      {/* Row actions dropdown */}
                      <SimpleDropdown
                        open={openActionsFor === row.id}
                        anchorRef={{ current: actionBtnRefs.current[row.id] as HTMLButtonElement }}
                        onClose={()=>setOpenActionsFor(null)}
                        onSelect={(v)=>alert(`Row ${row.id}: ${String(v)}`)}
                        items={actionItems as any}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              {`${formatBDN(filteredRows.length)}টি বিজ্ঞাপনের মধ্যে ১ থেকে ${formatBDN(Math.min(filteredRows.length, 6))}টি দেখানো হচ্ছে`} — ফিল্টার: {statusFilter}
            </p>
            <button className="inline-flex items-center gap-1 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400">
              পরবর্তী <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsDashboard;
