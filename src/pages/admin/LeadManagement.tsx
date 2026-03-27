import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, FileSpreadsheet, Upload, Filter, Download, Plus, CheckCircle, AlertCircle, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const dataSources = [
  { icon: FileText, name: "Google Sheets", desc: "Main Marketing Pipe (Sheet ID: TV-882)", status: "ACTIVE SYNC", statusColor: "hsl(72,70%,35%)", syncInfo: "Last synced: 2m ago", syncColor: "hsl(72,70%,35%)", progress: 100 },
  { icon: FileSpreadsheet, name: "Web Forms", desc: "Organic Inbound API", status: "LISTENING", statusColor: "hsl(72,70%,35%)", syncInfo: "Status: Healthy", syncColor: "hsl(72,70%,35%)", progress: 80 },
];

const leads = [
  { name: "Arjun Malhotra", uid: "UID: 99821-X", source: "Google Sheets", sourceIcon: FileText, ca: "Rajesh Sharma", caInitials: "RS", status: "INGESTED", statusColor: "hsl(72,70%,35%)", error: false },
  { name: "Sarah Jenkins", uid: "UID: 99824-A", source: "Web Forms", sourceIcon: FileSpreadsheet, ca: "Unmapped", caInitials: null, status: "ERROR", statusColor: "hsl(0,62%,50%)", error: true },
  { name: "David O'Neil", uid: "UID: 99825-L", source: "Excel Bulk", sourceIcon: Upload, ca: "Priya Varma", caInitials: "PV", status: "PENDING", statusColor: "hsl(38,92%,45%)", error: false },
  { name: "Zhang Wei", uid: "UID: 99829-M", source: "Google Sheets", sourceIcon: FileText, ca: "Zhang Wei", caInitials: "ZW", status: "INGESTED", statusColor: "hsl(72,70%,35%)", error: false },
];

const LeadManagement = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Lead Flow Control</h1>
        <p className="text-sm text-[hsl(30,5%,50%)] mt-2 max-w-xl">Real-time ingestion pipeline and CA mapping registry. Precision data management for high-frequency lead generation.</p>
      </div>

      {/* Data Sources */}
      <div className="grid grid-cols-3 gap-4">
        {dataSources.map((ds) => (
          <div key={ds.name} className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[hsl(50,15%,90%)] flex items-center justify-center">
                <ds.icon className="w-6 h-6 text-[hsl(30,5%,35%)]" />
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: ds.statusColor }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: ds.statusColor }} />
                {ds.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[hsl(30,5%,15%)]">{ds.name}</h3>
            <p className="text-xs text-[hsl(30,5%,50%)] mt-1">{ds.desc}</p>
            <div className="mt-4 h-1 rounded-full bg-[hsl(50,15%,85%)]">
              <div className="h-full rounded-full bg-[hsl(220,60%,50%)]" style={{ width: `${ds.progress}%` }} />
            </div>
            <p className="text-xs font-medium mt-2" style={{ color: ds.syncColor }}>{ds.syncInfo}</p>
          </div>
        ))}

        {/* Excel Upload Card */}
        <div className="p-5 border-2 border-dashed border-[hsl(50,15%,80%)] rounded-xl flex flex-col items-center justify-center text-center">
          <Upload className="w-8 h-8 text-[hsl(30,5%,45%)] mb-3" />
          <h3 className="text-lg font-bold text-[hsl(30,5%,15%)]">Excel Upload</h3>
          <p className="text-xs text-[hsl(30,5%,50%)] mt-1">Bulk process legacy lead lists</p>
          <button onClick={() => toast.info("Opening batch upload...")} className="mt-4 w-full h-10 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold uppercase tracking-wider hover:bg-[hsl(72,70%,40%)]">
            New Batch
          </button>
        </div>
      </div>

      {/* Leads Master Ledger */}
      <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-[hsl(50,15%,88%)]">
          <h2 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">Leads Master Ledger</h2>
          <div className="flex gap-3">
            <button onClick={() => toast.info("Applying filters...")} className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-xs font-bold text-[hsl(30,5%,35%)] uppercase tracking-wider hover:bg-[hsl(50,15%,93%)]">
              Filter
            </button>
            <button onClick={() => toast.success("CSV export started")} className="h-9 px-4 rounded-lg border border-[hsl(72,70%,45%)] bg-[hsl(72,70%,45%)] text-xs font-bold text-[hsl(30,5%,10%)] uppercase tracking-wider hover:bg-[hsl(72,70%,40%)]">
              Export CSV
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["Name", "Source", "CA Mapped", "Status", "Error Flag"].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leads.map((l) => (
              <tr key={l.uid} className="border-b border-[hsl(50,15%,92%)] hover:bg-[hsl(50,15%,95%)] cursor-pointer transition-colors" onClick={() => navigate("/admin/error-resolution")}>
                <td className="px-5 py-4">
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)]">{l.name}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)]">{l.uid}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[hsl(50,15%,90%)] text-xs font-medium text-[hsl(30,5%,25%)]">
                    <l.sourceIcon className="w-3 h-3" /> {l.source}
                  </span>
                </td>
                <td className="px-5 py-4">
                  {l.caInitials ? (
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center text-[10px] font-bold text-[hsl(30,5%,35%)]">{l.caInitials}</div>
                      <span className="text-sm text-[hsl(30,5%,25%)]">{l.ca}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-[hsl(30,5%,55%)] italic">Unmapped</span>
                  )}
                </td>
                <td className="px-5 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase" style={{ backgroundColor: `${l.statusColor}18`, color: l.statusColor }}>
                    {l.status}
                  </span>
                </td>
                <td className="px-5 py-4 text-center">
                  {l.error ? (
                    <AlertCircle className="w-5 h-5 text-[hsl(0,62%,50%)] mx-auto" />
                  ) : l.status === "PENDING" ? (
                    <Clock className="w-5 h-5 text-[hsl(38,92%,45%)] mx-auto" />
                  ) : (
                    <CheckCircle className="w-5 h-5 text-[hsl(72,70%,45%)] mx-auto" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-xs text-[hsl(30,5%,50%)]">Showing 4 of 1,240 leads</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronLeft className="w-3 h-3" /></button>
            {[1, 2, 3].map((p) => (
              <button key={p} onClick={() => setPage(p)} className={`w-8 h-8 rounded-md text-xs font-bold ${page === p ? "bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]" : "border border-[hsl(50,15%,85%)] text-[hsl(30,5%,45%)]"}`}>{p}</button>
            ))}
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button onClick={() => toast.info("Adding new lead...")} className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-[hsl(72,70%,45%)] flex items-center justify-center text-[hsl(30,5%,10%)] shadow-lg hover:bg-[hsl(72,70%,40%)] z-40">
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
};

export default LeadManagement;
