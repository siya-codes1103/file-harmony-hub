import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Building2, FileInput, Wallet, Bell, Settings, CheckSquare, Info, Shield } from "lucide-react";
import { toast } from "sonner";

const initialModules = [
  { name: "Dashboard", desc: "Global performance metrics", icon: LayoutDashboard, view: true, edit: true, approve: false, del: false },
  { name: "CA Management", desc: "Chartered Accountant profiles", icon: Building2, view: true, edit: true, approve: true, del: false },
  { name: "Lead Ingestion", desc: "Pipeline and entry points", icon: FileInput, view: true, edit: false, approve: false, del: false },
  { name: "Financials", desc: "Revenue and tax reporting", icon: Wallet, view: true, edit: false, approve: true, del: false },
  { name: "Notifications", desc: "System and user alerts", icon: Bell, view: true, edit: true, approve: false, del: false },
  { name: "System Settings", desc: "Core environment configuration", icon: Settings, view: true, edit: false, approve: false, del: false },
];

const PermissionMatrix = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState(initialModules);
  const [showConfirm, setShowConfirm] = useState(false);
  const [unsavedCount, setUnsavedCount] = useState(7);

  const togglePerm = (idx: number, perm: "view" | "edit" | "approve" | "del") => {
    setModules(prev => prev.map((m, i) => i === idx ? { ...m, [perm]: !m[perm] } : m));
  };

  const handleSave = () => setShowConfirm(true);

  const confirmSave = () => {
    setShowConfirm(false);
    navigate("/superadmin/permission-feedback");
  };

  return (
    <div className="p-6 space-y-6 relative">
      <div className="flex items-center gap-3 text-xs font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">
        <span className="text-[hsl(72,70%,35%)]">PERMISSION MATRIX</span> / EDITING: SENIOR AUDITOR ROLE
      </div>

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)] flex items-center gap-3">
            Role Management Matrix
            <span className="text-[10px] font-bold px-2 py-1 rounded bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]">V3.1.2</span>
          </h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Modify access levels for the Senior Auditor profile. Changes are logged in real-time.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[hsl(72,70%,45%)] animate-pulse" />
          <span className="text-xs font-bold text-[hsl(30,5%,15%)]">Active Session</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Matrix Table */}
        <div className="col-span-3">
          <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)]">
            <table className="w-full">
              <thead>
                <tr className="bg-[hsl(72,70%,45%)]/10 border-b border-[hsl(50,15%,88%)]">
                  {["MODULE NAME", "VIEW", "EDIT", "APPROVE", "DELETE"].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-[hsl(72,70%,35%)] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {modules.map((m, i) => (
                  <tr key={i} className="border-b border-[hsl(50,15%,93%)]">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <m.icon className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                        <div>
                          <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{m.name}</p>
                          <p className="text-xs text-[hsl(30,5%,50%)]">{m.desc}</p>
                        </div>
                      </div>
                    </td>
                    {(["view", "edit", "approve", "del"] as const).map(perm => (
                      <td key={perm} className="px-4 py-4 text-center">
                        <button
                          onClick={() => togglePerm(i, perm)}
                          className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                            m[perm]
                              ? "bg-[hsl(72,70%,45%)] border-[hsl(72,70%,35%)]"
                              : "border-[hsl(50,15%,80%)] bg-white hover:border-[hsl(50,15%,70%)]"
                          }`}
                        >
                          {m[perm] && <CheckSquare className="w-4 h-4 text-white" />}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer bar */}
          <div className="flex items-center justify-between bg-white rounded-xl border border-[hsl(50,15%,88%)] p-4 mt-4">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[hsl(30,5%,50%)]" />
              <p className="text-sm text-[hsl(30,5%,35%)]">{unsavedCount} unsaved changes detected for Senior Auditor role.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => setModules(initialModules)} className="text-sm font-medium text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]">Discard</button>
              <button onClick={handleSave} className="h-10 px-6 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)]">SAVE CHANGES</button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-[hsl(72,70%,35%)]" />
              <p className="text-xs font-bold text-[hsl(30,5%,15%)] uppercase">Security Tip</p>
            </div>
            <p className="text-xs text-[hsl(30,5%,45%)] leading-relaxed">
              Always prioritize Just-In-Time (JIT) elevation for sensitive modules like Financials and System Settings. Limiting permanent "Approve" or "Delete" rights reduces the attack surface for account compromises.
            </p>
            <button className="text-[10px] font-bold text-[hsl(30,5%,15%)] uppercase tracking-wider mt-3 flex items-center gap-1">READ POLICY →</button>
          </div>

          <div className="bg-white border border-[hsl(50,15%,88%)] rounded-xl p-4">
            <p className="text-xs font-bold text-[hsl(30,5%,15%)] mb-3">Editing History</p>
            <div className="space-y-3">
              {[
                { label: "Modified CA Management", time: "2 mins ago by SA_01", active: true },
                { label: "Viewed Permission Set", time: "15 mins ago by SA_01", active: false },
              ].map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`w-2 h-2 rounded-full mt-1.5 ${e.active ? "bg-[hsl(72,70%,45%)]" : "bg-[hsl(30,5%,70%)]"}`} />
                  <div>
                    <p className="text-xs font-semibold text-[hsl(30,5%,15%)]">{e.label}</p>
                    <p className="text-[10px] text-[hsl(30,5%,50%)]">{e.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border-t-4 border-[hsl(72,70%,45%)]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[hsl(72,70%,45%)] flex items-center justify-center">
                <Info className="w-5 h-5 text-[hsl(30,5%,10%)]" />
              </div>
              <h3 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">Confirm Permission Changes?</h3>
            </div>
            <div className="bg-[hsl(50,20%,95%)] border-l-4 border-[hsl(72,70%,45%)] p-3 rounded-r-lg mb-4">
              <p className="text-sm text-[hsl(30,5%,25%)]">These changes will affect <span className="text-[hsl(72,70%,35%)] font-bold">12 active Super Admin users</span> and be logged in the audit trail.</p>
            </div>
            <div className="space-y-2 mb-6">
              <p className="text-xs text-[hsl(30,5%,45%)] flex items-center gap-2">🔒 Permanent record will be created in system logs</p>
              <p className="text-xs text-[hsl(30,5%,45%)] flex items-center gap-2">🔄 Synchronization will occur across all cluster nodes</p>
            </div>
            <div className="flex gap-3">
              <button onClick={confirmSave} className="flex-1 h-11 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)]">CONFIRM & APPLY</button>
              <button onClick={() => setShowConfirm(false)} className="flex-1 h-11 rounded-lg border border-[hsl(50,15%,85%)] text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">CANCEL</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionMatrix;
