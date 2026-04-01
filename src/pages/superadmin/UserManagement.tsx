import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Download, MoreVertical, User, CheckCircle, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const admins = [
  { name: "Marcus Thorne", email: "m.thorne@tradeved.ca", role: "SUPER ADMIN", roleColor: "bg-[hsl(72,70%,45%)]", status: "Active", statusColor: "text-[hsl(72,70%,35%)]", lastInteraction: "Today, 10:42 AM", ip: "192.168.1.45" },
  { name: "Elena Rodriguez", email: "e.rodriguez@tradeved.ca", role: "ADMIN", roleColor: "bg-[hsl(50,15%,85%)]", status: "Pending", statusColor: "text-amber-600", lastInteraction: "Never logged in", ip: null },
  { name: "Julian Vang", email: "j.vang@tradeved.ca", role: "ANALYST", roleColor: "bg-[hsl(72,70%,80%)]", status: "Inactive", statusColor: "text-[hsl(30,5%,50%)]", lastInteraction: "3 days ago", ip: "102.14.88.2" },
  { name: "Sarah Jenkins", email: "s.jenkins@tradeved.ca", role: "ANALYST", roleColor: "bg-[hsl(72,70%,80%)]", status: "Active", statusColor: "text-[hsl(72,70%,35%)]", lastInteraction: "Yesterday, 04:15 PM", ip: "45.12.9.111" },
];

const UserManagement = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(1);

  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">DASHBOARD › <span className="text-[hsl(72,70%,35%)]">ADMIN MANAGEMENT</span></p>
        <div className="flex items-start justify-between mt-1">
          <div>
            <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Admin Users</h1>
            <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Manage internal system access and permission hierarchies.</p>
          </div>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-white text-sm font-medium flex items-center gap-2 text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-white text-sm font-medium flex items-center gap-2 text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">
              <Download className="w-4 h-4" /> Export
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "TOTAL ADMINS", value: "42", extra: "+3 this month" },
          { label: "ACTIVE SESSIONS", value: "18", extra: "Real-time", extraColor: "text-[hsl(72,70%,35%)]" },
          { label: "PENDING APPROVALS", value: "04", extra: "Urgent", extraColor: "text-red-500" },
          { label: "SYSTEM HEALTH", value: "OPTIMAL", dot: true },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-xl border-l-4 border-[hsl(72,70%,45%)] p-4">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">{s.label}</p>
            <p className="text-2xl font-extrabold text-[hsl(30,5%,15%)] mt-1 flex items-center gap-2">
              {s.dot && <span className="w-2.5 h-2.5 rounded-full bg-[hsl(72,70%,45%)]" />}
              {s.value}
            </p>
            {s.extra && <p className={`text-xs mt-1 ${s.extraColor || "text-[hsl(72,70%,35%)]"}`}>{s.extra}</p>}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["ADMIN IDENTITY", "ROLE PROFILE", "OPERATIONAL STATUS", "LAST INTERACTION", "ACTIONS"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {admins.map((a, i) => (
              <tr
                key={i}
                className="border-b border-[hsl(50,15%,93%)] hover:bg-[hsl(50,15%,97%)] cursor-pointer transition-colors"
                onClick={() => navigate(`/superadmin/user-detail/${i + 1}`)}
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[hsl(50,15%,88%)] flex items-center justify-center">
                      <User className="w-4 h-4 text-[hsl(30,5%,45%)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{a.name}</p>
                      <p className="text-xs text-[hsl(30,5%,50%)]">{a.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded ${a.roleColor} text-[hsl(30,5%,15%)]`}>{a.role}</span>
                </td>
                <td className="px-4 py-4">
                  <span className={`flex items-center gap-1.5 text-sm font-medium ${a.statusColor}`}>
                    {a.status === "Active" && <span className="w-2 h-2 rounded-full bg-[hsl(72,70%,45%)]" />}
                    {a.status === "Pending" && <AlertTriangle className="w-3.5 h-3.5" />}
                    {a.status === "Inactive" && <span className="w-2 h-2 rounded-full bg-[hsl(30,5%,70%)]" />}
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <p className="text-sm text-[hsl(30,5%,25%)]">{a.lastInteraction}</p>
                  {a.ip && <p className="text-[10px] text-[hsl(30,5%,55%)]">IP: {a.ip}</p>}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    {a.status === "Pending" && (
                      <button
                        onClick={e => { e.stopPropagation(); toast.success(`${a.name} approved!`); }}
                        className="h-7 px-3 rounded bg-[hsl(72,70%,45%)] text-[10px] font-bold text-[hsl(30,5%,10%)]"
                      >
                        APPROVE
                      </button>
                    )}
                    <button onClick={e => e.stopPropagation()} className="w-8 h-8 rounded-lg hover:bg-[hsl(50,15%,90%)] flex items-center justify-center">
                      <MoreVertical className="w-4 h-4 text-[hsl(30,5%,45%)]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-xs text-[hsl(30,5%,50%)]">Showing <strong>1 - 10</strong> of 42 Admin Users</p>
          <div className="flex gap-1">
            {["<", "1", "2", "3", "...", "5", ">"].map((p, i) => (
              <button key={i} className={`w-8 h-8 rounded-md text-xs font-bold flex items-center justify-center ${p === "1" ? "bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]" : "border border-[hsl(50,15%,85%)] text-[hsl(30,5%,45%)] hover:bg-[hsl(50,15%,90%)]"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
