import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, UserPlus, Eye, Ban, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { toast } from "sonner";

const ambassadors = [
  { initials: "AS", name: "Arjun Sharma", email: "arjun.s@iitd.ac.in", college: "IIT Delhi", status: "Active", leads: 342, joined: "Oct 12, 2023" },
  { initials: "RM", name: "Riya Malhotra", email: "riya.m@srcc.du.ac.in", college: "SRCC, Delhi University", status: "Pending", leads: 0, joined: "Jan 05, 2024" },
  { initials: "VK", name: "Vikram Kapoor", email: "v.kapoor@bits-pilani.ac.in", college: "BITS Pilani", status: "Active", leads: 1105, joined: "Aug 22, 2023" },
];

const stats = [
  { label: "Total Ambassadors", value: "1,284" },
  { label: "Pending Approval", value: "42", highlight: true },
  { label: "Leads This Month", value: "8,420", highlight: true },
  { label: "Conversion Rate", value: "12.4%", accent: true },
];

type Tab = "Active" | "Pending" | "All";

const CAManagement = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("Active");

  const filtered = tab === "All" ? ambassadors : ambassadors.filter((a) => tab === "Pending" ? a.status === "Pending" : a.status === "Active");

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">CA Management</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Manage your Campus Ambassador network and verify new applications.</p>
        </div>
        <div className="flex border border-[hsl(50,15%,85%)] rounded-lg overflow-hidden">
          {(["Active", "Pending", "All"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2 text-sm font-medium transition-colors ${tab === t ? "bg-[hsl(30,5%,15%)] text-white" : "bg-[hsl(50,20%,97%)] text-[hsl(30,5%,45%)] hover:bg-[hsl(50,15%,93%)]"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`p-5 rounded-xl border ${s.accent ? "border-[hsl(72,70%,45%)] bg-[hsl(72,70%,45%)]" : "border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)]"}`}>
            <p className={`text-[10px] uppercase tracking-wider font-bold ${s.accent ? "text-[hsl(30,5%,15%)]" : "text-[hsl(30,5%,50%)]"}`}>{s.label}</p>
            <p className={`text-3xl font-extrabold mt-2 ${s.accent ? "text-[hsl(30,5%,15%)]" : s.highlight ? "text-[hsl(72,70%,40%)]" : "text-[hsl(30,5%,15%)]"}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl">
        <div className="flex items-center justify-between p-5 border-b border-[hsl(50,15%,88%)]">
          <h2 className="text-lg font-bold text-[hsl(30,5%,15%)]">Campus Ambassador Roster</h2>
          <div className="flex gap-3">
            <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,35%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
              <Filter className="w-3 h-3" /> Filter
            </button>
            <button className="h-9 px-4 rounded-lg bg-[hsl(30,5%,15%)] text-white text-sm font-medium flex items-center gap-2 hover:bg-[hsl(30,5%,25%)]">
              <UserPlus className="w-3 h-3" /> Add Ambassador
            </button>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["Name", "College", "Status", "Leads", "Joined", "Actions"].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((a) => (
              <tr key={a.email} className="border-b border-[hsl(50,15%,92%)] hover:bg-[hsl(50,15%,95%)] transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center text-sm font-bold text-[hsl(30,5%,35%)]">{a.initials}</div>
                    <div>
                      <p className="text-sm font-bold text-[hsl(30,5%,15%)]">{a.name}</p>
                      <p className="text-xs text-[hsl(30,5%,50%)]">{a.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-[hsl(30,5%,35%)]">{a.college}</td>
                <td className="px-5 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${a.status === "Active" ? "bg-[hsl(72,70%,45%)]/15 text-[hsl(72,70%,35%)]" : "bg-[hsl(330,70%,50%)]/10 text-[hsl(330,70%,40%)]"}`}>
                    {a.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-bold text-[hsl(30,5%,15%)]">{a.leads}</td>
                <td className="px-5 py-4 text-sm text-[hsl(30,5%,45%)]">{a.joined}</td>
                <td className="px-5 py-4">
                  {a.status === "Pending" ? (
                    <div className="flex items-center gap-2">
                      <button onClick={() => toast.success(`${a.name} approved`)} className="px-4 py-1.5 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-xs font-bold hover:bg-[hsl(72,70%,40%)]">Approve</button>
                      <button onClick={() => toast.error(`${a.name} rejected`)} className="text-[hsl(30,5%,55%)] hover:text-[hsl(0,62%,50%)]">×</button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button onClick={() => navigate(`/admin/ca-profile/${a.initials.toLowerCase()}`)} className="text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]"><Eye className="w-4 h-4" /></button>
                      <button onClick={() => toast.warning("Disable account action")} className="text-[hsl(30,5%,45%)] hover:text-[hsl(0,62%,50%)]"><Ban className="w-4 h-4" /></button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-5 py-4">
          <p className="text-xs text-[hsl(30,5%,50%)]">Showing {filtered.length} of 1,284 Ambassadors</p>
          <div className="flex gap-1">
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronLeft className="w-3 h-3" /></button>
            <button className="w-8 h-8 rounded-md border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,55%)]"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex gap-8">
          <div>
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Verified Network</p>
            <p className="text-sm font-bold text-[hsl(30,5%,15%)]">98.2% Accuracy</p>
          </div>
          <div>
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Payouts Pending</p>
            <p className="text-sm font-bold text-[hsl(30,5%,15%)]">₹ 14,20,500</p>
          </div>
        </div>
        <div className="flex gap-4 text-xs text-[hsl(30,5%,50%)]">
          <span className="cursor-pointer hover:text-[hsl(30,5%,25%)]">System Health</span>
          <span className="cursor-pointer hover:text-[hsl(30,5%,25%)]">Download Report</span>
        </div>
        <button className="w-12 h-12 rounded-full bg-[hsl(72,70%,45%)] flex items-center justify-center text-[hsl(30,5%,10%)] shadow-lg hover:bg-[hsl(72,70%,40%)]">
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CAManagement;
