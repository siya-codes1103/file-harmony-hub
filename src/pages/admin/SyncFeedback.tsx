import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight, Filter, Download, ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const syncMeta = [
  { label: "Job ID", value: "#TS-99821-X" },
  { label: "Duration", value: "4.2 Seconds" },
  { label: "Data Source", value: "External API (v3)" },
  { label: "Initiated By", value: "System Cron" },
];

const failedRecords = [
  { type: "VAL", typeColor: "hsl(220,60%,50%)", email: "j.doe@enterprise.com", org: "Enterprise Sector B", reason: "Invalid Phone Format: String contains non-numeric characters in country code field.", time: "14:02:41.002", action: "EDIT" },
  { type: "DUP", typeColor: "hsl(72,70%,35%)", email: "m.smith@global.io", org: "Global FinTech Grp", reason: "Duplicate Record: Lead identity already exists in partition [Alpha-3].", time: "14:02:41.045", action: "MERGE" },
  { type: "VAL", typeColor: "hsl(220,60%,50%)", email: "s.connor@cyber.net", org: "Unknown Territory", reason: "Missing Required Field: 'Annual_Revenue' cannot be null for Tier-1 lead processing.", time: "14:02:41.110", action: "FIX" },
  { type: "SYS", typeColor: "hsl(0,62%,50%)", email: "l.skywalker@rebel.org", org: "Outer Rim Sector", reason: "Timeout Error: Remote server did not respond within the 500ms SLA window.", time: "14:02:41.229", action: "RETRY" },
];

const SyncFeedback = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  return (
    <div className="p-6 space-y-6">
      {/* Hero */}
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-8 bg-[hsl(50,15%,90%)] rounded-xl">
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Bulk Lead Sync</h1>
          <p className="text-3xl font-extrabold text-[hsl(72,70%,35%)]">Operation Complete</p>

          <div className="flex gap-8 mt-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-[hsl(72,70%,35%)]" />
                <span className="text-sm font-medium text-[hsl(30,5%,45%)]">Success State</span>
              </div>
              <p className="text-4xl font-extrabold text-[hsl(72,70%,35%)]">1,240</p>
              <p className="text-xs text-[hsl(30,5%,50%)] mt-1">Leads synced successfully</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-5 h-5 text-[hsl(0,62%,50%)]" />
                <span className="text-sm font-medium text-[hsl(30,5%,45%)]">Error State</span>
              </div>
              <p className="text-4xl font-extrabold text-[hsl(0,62%,50%)]">12</p>
              <p className="text-xs text-[hsl(30,5%,50%)] mt-1">Leads failed to sync</p>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button onClick={() => navigate("/admin/lead-errors")} className="h-12 px-6 rounded-lg bg-[hsl(30,5%,15%)] text-white text-sm font-bold flex items-center gap-2 hover:bg-[hsl(30,5%,25%)]">
              Review Errors <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => navigate("/admin/dashboard")} className="h-12 px-6 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
            <h3 className="text-sm font-bold text-[hsl(30,5%,15%)] mb-4">Sync Metadata</h3>
            <div className="space-y-3">
              {syncMeta.map((m) => (
                <div key={m.label} className="flex justify-between">
                  <span className="text-xs text-[hsl(30,5%,50%)]">{m.label}</span>
                  <span className="text-xs font-bold text-[hsl(30,5%,15%)]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-[hsl(72,70%,45%)]/10 border border-[hsl(72,70%,45%)]/30 rounded-xl">
            <p className="text-sm font-bold text-[hsl(30,5%,15%)]">Sync efficiency increased by 14% compared to last cycle.</p>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="w-4 h-4 text-[hsl(72,70%,35%)]" />
              <span className="text-[10px] font-bold text-[hsl(72,70%,35%)] uppercase tracking-wider">Optimized Engine</span>
            </div>
          </div>
        </div>
      </div>

      {/* Failed Records */}
      <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-[hsl(50,15%,88%)]">
          <h2 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">Failed Records Analysis</h2>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-lg border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]"><Filter className="w-4 h-4" /></button>
            <button className="w-9 h-9 rounded-lg border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]"><Download className="w-4 h-4" /></button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["Type", "Lead Identity", "Error Reason", "Timestamp", "Action"].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {failedRecords.map((r, i) => (
              <tr key={i} className="border-b border-[hsl(50,15%,92%)] hover:bg-[hsl(50,15%,95%)]">
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white" style={{ backgroundColor: r.typeColor }}>{r.type}</span>
                </td>
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)]">{r.email}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)]">{r.org}</p>
                </td>
                <td className="px-5 py-4">
                  <p className="text-xs text-[hsl(0,62%,50%)] max-w-sm flex items-start gap-1.5">
                    <AlertTriangle className="w-3 h-3 flex-shrink-0 mt-0.5" />
                    {r.reason}
                  </p>
                </td>
                <td className="px-5 py-4 text-xs text-[hsl(30,5%,45%)] font-mono">{r.time}</td>
                <td className="px-5 py-4">
                  <button onClick={() => toast.info(`${r.action} action on ${r.email}`)} className="text-xs font-bold text-[hsl(72,70%,35%)] hover:text-[hsl(72,70%,25%)] uppercase tracking-wider">{r.action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-xs text-[hsl(30,5%,50%)]">Showing 4 of 12 failed leads</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronLeft className="w-3 h-3" /></button>
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[hsl(50,15%,88%)]">
        <div>
          <p className="text-2xl font-extrabold text-[hsl(30,5%,25%)]">T.VED</p>
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Sync Protocol V4.0.2</p>
        </div>
        <p className="text-xs text-[hsl(30,5%,55%)] max-w-sm text-right">TradeVed lead synchronization is governed by regional data protection laws and enterprise privacy policies. Records are stored in encrypted partitions for 30 days before archival.</p>
      </div>
    </div>
  );
};

export default SyncFeedback;
