import { useState } from "react";
import { Download, RefreshCw, Edit, Mail, ChevronLeft, ChevronRight, AlertTriangle, Send } from "lucide-react";
import { toast } from "sonner";

const errors = [
  { id: "#LD-98231", source: "FB_Ads_Retargeting", time: "Oct 24, 09:12 AM", type: "Invalid Phone Format", typeColor: "hsl(72,70%,35%)", desc: 'Expected +XX XXXX-XXXXX, received "091223..."' },
  { id: "#LD-98245", source: "Direct_Landing_Page", time: "Oct 24, 10:05 AM", type: "Duplicate Entry", typeColor: "hsl(72,70%,35%)", desc: "Email user@tradeved.com already exists in database" },
  { id: "#LD-98256", source: "Google_SEM", time: "Oct 24, 11:22 AM", type: "Incomplete Profile", typeColor: "hsl(72,70%,35%)", desc: 'Missing field: "Investment_Goal"' },
  { id: "#LD-98288", source: "Partner_Referral", time: "Oct 24, 12:45 PM", type: "API Timeout", typeColor: "hsl(0,62%,50%)", desc: "Webhook failed to acknowledge within 5000ms" },
  { id: "#LD-98301", source: "Insta_Organic", time: "Oct 24, 01:15 PM", type: "Invalid ZIP", typeColor: "hsl(0,62%,50%)", desc: 'Code "ABC-123" does not match regional pattern' },
];

const stats = [
  { label: "Total Failed", value: "128", change: "+12% vs LW" },
  { label: "Critical Errors", value: "42", warning: true },
  { label: "Duplicate Entries", value: "65", sub: "Sync Issue" },
  { label: "Resolved (24H)", value: "214", resolved: true },
];

const LeadErrors = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[hsl(30,5%,50%)] uppercase tracking-wider font-medium">
        <span className="font-bold text-[hsl(30,5%,25%)]">Dashboard</span> <span>›</span> <span>Lead Errors</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Error Resolution: Lead Ingestion</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1 max-w-lg">Detailed audit of failed ingestion events. Resolve formatting discrepancies or flag duplicate records to maintain data integrity.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => toast.info("Exporting logs...")} className="h-10 px-5 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
            <Download className="w-4 h-4" /> Export Logs
          </button>
          <button onClick={() => toast.info("Re-syncing all...")} className="h-10 px-5 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold flex items-center gap-2 hover:bg-[hsl(72,70%,40%)]">
            <RefreshCw className="w-4 h-4" /> Re-Sync All
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="p-5 rounded-xl border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)]">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">{s.label}</p>
            <div className="flex items-end gap-3 mt-2">
              <p className={`text-3xl font-extrabold ${s.warning ? "text-[hsl(0,62%,50%)]" : s.resolved ? "text-[hsl(30,5%,15%)]" : "text-[hsl(30,5%,15%)]"}`}>{s.value}</p>
              {s.change && <span className="text-xs font-bold text-[hsl(0,62%,50%)]">{s.change}</span>}
              {s.warning && <AlertTriangle className="w-4 h-4 text-[hsl(38,92%,50%)] mb-1" />}
              {s.sub && <span className="text-xs font-bold text-[hsl(72,70%,35%)]">{s.sub}</span>}
              {s.resolved && <span className="text-[hsl(142,70%,45%)]">✓</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-[hsl(50,15%,88%)]">
          <h2 className="text-sm font-bold text-[hsl(72,70%,35%)] uppercase tracking-wider">Pending Resolution Queue</h2>
          <div className="flex gap-3 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[hsl(0,62%,50%)]" /> Critical</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[hsl(72,70%,45%)]" /> Warning</span>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["Lead ID", "Source", "Timestamp", "Error Type", "Description", "Actions"].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {errors.map((e) => (
              <tr key={e.id} className="border-b border-[hsl(50,15%,92%)] hover:bg-[hsl(50,15%,95%)]">
                <td className="px-5 py-4 text-sm font-bold text-[hsl(30,5%,15%)]">{e.id}</td>
                <td className="px-5 py-4 text-sm text-[hsl(30,5%,35%)]">{e.source}</td>
                <td className="px-5 py-4 text-sm text-[hsl(30,5%,45%)]">{e.time}</td>
                <td className="px-5 py-4">
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase" style={{ backgroundColor: `${e.typeColor}20`, color: e.typeColor }}>{e.type}</span>
                </td>
                <td className="px-5 py-4 text-xs text-[hsl(30,5%,45%)] max-w-xs">{e.desc}</td>
                <td className="px-5 py-4 flex gap-3">
                  <button className="text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]"><Edit className="w-4 h-4" /></button>
                  <button className="text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]"><Mail className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-xs text-[hsl(30,5%,50%)]">Showing 5 of 128 Lead Errors</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] text-xs text-[hsl(30,5%,55%)]"><ChevronLeft className="w-3 h-3 mx-auto" /></button>
            {[1, 2, 3].map((p) => (
              <button key={p} onClick={() => setPage(p)} className={`w-8 h-8 rounded-md text-xs font-bold ${page === p ? "bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]" : "border border-[hsl(50,15%,85%)] text-[hsl(30,5%,45%)]"}`}>{p}</button>
            ))}
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] text-xs text-[hsl(30,5%,55%)]"><ChevronRight className="w-3 h-3 mx-auto" /></button>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl border-t-4 border-t-[hsl(30,5%,15%)]">
          <h3 className="text-base font-bold text-[hsl(30,5%,15%)]">Fix Manually</h3>
          <p className="text-xs text-[hsl(30,5%,50%)] mt-2">Open lead editor to correct invalid fields and attempt re-ingestion.</p>
          <button onClick={() => toast.info("Launching editor...")} className="mt-4 w-full h-10 rounded-lg bg-[hsl(30,5%,15%)] text-white text-sm font-bold uppercase tracking-wider hover:bg-[hsl(30,5%,25%)]">Launch Editor</button>
        </div>
        <div className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl border-t-4 border-t-[hsl(0,62%,50%)]">
          <h3 className="text-base font-bold text-[hsl(0,62%,50%)]">Bulk Reject</h3>
          <p className="text-xs text-[hsl(30,5%,50%)] mt-2">Archive selected entries as 'Dead' leads to clear the processing queue.</p>
          <button onClick={() => toast.warning("Purging selection...")} className="mt-4 w-full h-10 rounded-lg border-2 border-[hsl(0,62%,50%)] text-[hsl(0,62%,50%)] text-sm font-bold uppercase tracking-wider hover:bg-[hsl(0,62%,97%)]">Purge Selection</button>
        </div>
        <div className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl border-t-4 border-t-[hsl(72,70%,45%)]">
          <h3 className="text-base font-bold text-[hsl(72,70%,35%)]">Notify Channel</h3>
          <p className="text-xs text-[hsl(30,5%,50%)] mt-2">Inform Country Ambassadors about systemic source quality issues.</p>
          <button onClick={() => toast.success("Alerts sent")} className="mt-4 w-full h-10 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold uppercase tracking-wider hover:bg-[hsl(72,70%,40%)] flex items-center justify-center gap-2">
            <Send className="w-4 h-4" /> Send Alerts
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeadErrors;
