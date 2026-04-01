import { useNavigate } from "react-router-dom";
import { Users, Activity, ShieldAlert, CheckCircle, MoreVertical, ArrowRight } from "lucide-react";

const stats = [
  { label: "TOTAL ADMIN USERS", value: "124", extra: "+5 this month", icon: Users },
  { label: "MFA COMPLIANCE", value: "98.2%", extra: null, icon: CheckCircle },
];

const admins = [
  { name: "Elena Rodriguez", email: "elena.r@tradeved.com", role: "SUPER ADMIN", roleColor: "bg-[hsl(72,70%,45%)]", lastActive: "2 mins ago", ip: "192.168.1.45", mfa: "ACTIVE" },
  { name: "Marcus Thorne", email: "m.thorne@tradeved.com", role: "COMPLIANCE MANAGER", roleColor: "bg-[hsl(72,70%,80%)]", lastActive: "45 mins ago", ip: "45.23.11.201", mfa: "DISABLED" },
  { name: "Sarah Jenkins", email: "s.jenkins@tradeved.com", role: "SUPPORT TIER 2", roleColor: "bg-[hsl(50,15%,85%)]", lastActive: "3 hours ago", ip: "89.102.4.55", mfa: "ACTIVE" },
  { name: "David Chen", email: "d.chen@tradeved.com", role: "SUPER ADMIN", roleColor: "bg-[hsl(72,70%,45%)]", lastActive: "6 hours ago", ip: "212.4.55.90", mfa: "ACTIVE" },
  { name: "Linda Okafor", email: "l.okafor@tradeved.com", role: "AUDIT LEAD", roleColor: "bg-red-100", lastActive: "1 day ago", ip: "103.44.12", mfa: "DISABLED" },
];

const AdminOverview = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div>
        <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">ADMIN CENTRAL / <span className="text-[hsl(72,70%,35%)]">USER REGISTRY V3</span></p>
        <div className="flex items-start justify-between mt-1">
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Admin User Registry</h1>
          <div className="flex gap-2">
            <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-white text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)] flex items-center gap-2">
              <Activity className="w-4 h-4" /> FILTER
            </button>
            <button
              onClick={() => navigate("/superadmin/user-detail/new")}
              className="h-9 px-4 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)] flex items-center gap-2"
            >
              <Users className="w-4 h-4" /> ADD ADMINISTRATOR
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)] p-5">
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">TOTAL ADMIN USERS</p>
          <p className="text-3xl font-extrabold text-[hsl(72,70%,35%)] mt-1">124</p>
          <p className="text-xs text-[hsl(72,70%,35%)] mt-1 flex items-center gap-1">↗ +5 this month</p>
        </div>
        <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)] p-5">
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">MFA COMPLIANCE</p>
          <p className="text-3xl font-extrabold text-[hsl(30,5%,15%)] mt-1">98.2%</p>
          <div className="w-full h-1.5 bg-[hsl(50,15%,90%)] rounded-full mt-2">
            <div className="h-full bg-[hsl(72,70%,45%)] rounded-full" style={{ width: "98.2%" }} />
          </div>
        </div>
        <div className="bg-[hsl(72,70%,45%)]/10 border border-[hsl(72,70%,45%)]/30 rounded-xl p-5">
          <p className="text-[10px] text-red-600 uppercase tracking-wider font-bold">SECURITY ALERT</p>
          <p className="text-lg font-extrabold text-[hsl(30,5%,15%)] mt-1">3 Accounts identified with MFA Disabled status.</p>
          <button className="text-xs font-bold text-[hsl(72,70%,30%)] uppercase tracking-wider mt-2 underline">REVIEW IMMEDIATELY</button>
        </div>
      </div>

      {/* Administrator Ledger */}
      <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)]">
        <div className="flex items-center justify-between p-4 border-b border-[hsl(50,15%,88%)]">
          <p className="text-xs font-extrabold text-[hsl(30,5%,15%)] uppercase tracking-wider">Administrator Ledger</p>
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(72,70%,45%)]" /> MFA Active</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400" /> MFA Disabled</span>
          </div>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["ADMIN NAME", "ASSIGNED ROLE", "LAST ACTIVE", "MFA STATUS", "ACTIONS"].map(h => (
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
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center text-xs font-bold text-[hsl(30,5%,45%)]">
                      {a.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{a.name}</p>
                      <p className="text-xs text-[hsl(30,5%,50%)]">{a.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded ${a.roleColor} text-[hsl(30,5%,15%)]`}>{a.role}</span>
                </td>
                <td className="px-4 py-3">
                  <p className="text-sm text-[hsl(30,5%,25%)]">{a.lastActive}</p>
                  <p className="text-[10px] text-[hsl(30,5%,55%)]">IP: {a.ip}</p>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-bold flex items-center gap-1.5 ${a.mfa === "ACTIVE" ? "text-[hsl(72,70%,35%)]" : "text-red-500"}`}>
                    {a.mfa === "ACTIVE" ? <CheckCircle className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                    {a.mfa}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={e => { e.stopPropagation(); }}
                    className="w-8 h-8 rounded-lg hover:bg-[hsl(50,15%,90%)] flex items-center justify-center"
                  >
                    <MoreVertical className="w-4 h-4 text-[hsl(30,5%,45%)]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3">
          <p className="text-xs text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Showing 1 to 5 of 124 Administrators</p>
          <div className="flex gap-1">
            {["<", "1", "2", "3", ">"].map((p, i) => (
              <button key={i} className={`w-8 h-8 rounded-md text-xs font-bold flex items-center justify-center ${p === "1" ? "bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]" : "border border-[hsl(50,15%,85%)] text-[hsl(30,5%,45%)] hover:bg-[hsl(50,15%,90%)]"}`}>
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MFA Governance Note */}
      <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
        <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-2">NOTE ON MFA GOVERNANCE</p>
        <p className="text-sm text-[hsl(30,5%,35%)]">
          TradeVed Policy TV-801 mandates that all administrative accounts must have Multi-Factor Authentication (MFA) enabled. Accounts currently showing <span className="text-red-500 font-semibold">Disabled</span> status are subject to automatic session revocation within 24 hours if not remediated.
        </p>
      </div>
    </div>
  );
};

export default AdminOverview;
