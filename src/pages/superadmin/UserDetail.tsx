import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Edit, LayoutDashboard, Building2, Wallet, Shield, CheckCircle, AlertTriangle, User } from "lucide-react";

const modules = [
  {
    title: "Dashboard Ecosystem", icon: LayoutDashboard, color: "border-[hsl(72,70%,45%)]", active: true,
    permissions: [
      { label: "Global Performance Metrics", desc: "Access to real-time consolidated growth data across all sectors." },
      { label: "Custom Widget Generation", desc: "Full rights to modify personal and shared organizational views." },
      { label: "Trend Forecasting Engine", desc: "Ability to run predictive models based on historical audit data." },
      { label: "Data Export (XLS/PDF)", desc: "High-level clearance for mass extraction of dashboard summaries." },
    ],
  },
  {
    title: "CA Management", icon: Building2, color: "border-[hsl(72,70%,45%)]",
    items: ["Approve New CA Registrations", "Revoke CA Licenses", "Verify Compliance Documents", "Assign Dedicated Account Managers"],
  },
  {
    title: "Financial Controls", icon: Wallet, color: "border-blue-400",
    items: ["View Global Revenue Sheets", "Authorize Refund Requests", "Modify Pricing Tiers", "Tax Liability Overrides"],
  },
  {
    title: "Security & System", icon: Shield, color: "border-[hsl(72,70%,45%)]",
    items: ["User Provisioning (Internal)", "Security Protocol Management", "API Credential Generation", "Audit Log Integrity Review"],
  },
];

const UserDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="p-6 space-y-6">
      <button onClick={() => navigate("/superadmin/user-management")} className="flex items-center gap-2 text-xs font-bold text-[hsl(72,70%,35%)] uppercase tracking-wider hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to Admin List
      </button>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Alex Rivera - Super Admin</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1 max-w-2xl">Account created on July 14, 2023. This view represents the active functional scope and data access privileges currently assigned to this identity within the TradeVed CA ecosystem.</p>
        </div>
        <button
          onClick={() => navigate("/superadmin/permission-matrix")}
          className="h-11 px-6 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)] flex items-center gap-2"
        >
          <Edit className="w-4 h-4" /> Edit Permissions
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Module */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)] p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[hsl(72,70%,45%)]/20 flex items-center justify-center">
                  <LayoutDashboard className="w-5 h-5 text-[hsl(72,70%,35%)]" />
                </div>
                <h2 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">Dashboard Ecosystem</h2>
              </div>
              <span className="text-[10px] font-bold px-3 py-1 rounded-full border border-[hsl(72,70%,45%)] text-[hsl(72,70%,35%)] uppercase">Active Module</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {modules[0].permissions?.map((p, i) => (
                <div key={i} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-[hsl(72,70%,35%)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{p.label}</p>
                    <p className="text-xs text-[hsl(30,5%,50%)] mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {modules.slice(1).map((m, i) => (
              <div key={i} className={`bg-white rounded-xl border-l-4 ${m.color} p-5`}>
                <div className="flex items-center gap-2 mb-3">
                  <m.icon className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                  <h3 className="text-sm font-extrabold text-[hsl(30,5%,15%)]">{m.title}</h3>
                </div>
                <div className="space-y-2">
                  {m.items?.map((item, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[hsl(72,70%,35%)]" />
                      <p className="text-xs text-[hsl(30,5%,35%)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-[hsl(50,15%,93%)] rounded-xl border border-[hsl(50,15%,85%)] p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-[hsl(50,15%,85%)] mx-auto flex items-center justify-center border-4 border-[hsl(72,70%,45%)]">
            <User className="w-10 h-10 text-[hsl(30,5%,45%)]" />
          </div>
          <h3 className="text-lg font-extrabold text-[hsl(30,5%,15%)] mt-4">Alex Rivera</h3>
          <p className="text-xs text-[hsl(72,70%,35%)] font-bold uppercase tracking-wider">Super Admin Identity</p>
          <div className="mt-4 space-y-2 text-left">
            {[
              { label: "Status", value: "AUTHORIZED", color: "text-[hsl(72,70%,35%)]" },
              { label: "Last Login", value: "2 hours ago", color: "text-[hsl(30,5%,15%)]" },
              { label: "Access Level", value: "Tier 1 Global", color: "text-[hsl(30,5%,15%)]" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-1.5">
                <span className="text-xs text-[hsl(30,5%,50%)]">{item.label}</span>
                <span className={`text-xs font-bold ${item.color}`}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Critical Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-500" />
        </div>
        <div>
          <p className="text-sm font-bold text-red-700">Critical Access Level Detected</p>
          <p className="text-xs text-red-600 mt-0.5">Alex Rivera possesses 'Super Admin' status. This grants absolute control over all databases, financial records, and user identities. Any changes to these rights should be logged and double-authorized per the "Two-Person Rule" policy.</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
