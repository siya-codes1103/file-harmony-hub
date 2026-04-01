import { useNavigate } from "react-router-dom";
import { CheckCircle, Building2, BarChart3, FileText, Users, Clock } from "lucide-react";

const modifications = [
  { icon: Building2, label: "CA Management", change: "Edit Granted" },
  { icon: BarChart3, label: "Market Analytics", change: "View Access Only" },
  { icon: FileText, label: "Ledger Reconciliation", change: "Write Access Enabled" },
  { icon: Users, label: "User Provisioning", change: "Unchanged" },
];

const PermissionFeedback = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex items-center justify-center min-h-[calc(100vh-3.5rem)]">
      <div className="bg-white rounded-2xl border border-[hsl(50,15%,88%)] p-10 max-w-xl w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-2xl bg-[hsl(72,70%,45%)]/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[hsl(72,70%,35%)]" />
        </div>

        <h1 className="text-2xl font-extrabold text-[hsl(30,5%,15%)] uppercase tracking-wide">System Permissions Updated</h1>
        <p className="text-sm text-[hsl(30,5%,50%)] mt-2">Changes to the Super Admin role have been successfully propagated across 12 active accounts.</p>

        {/* Modification Summary */}
        <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5 mt-6 text-left">
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-3">Modification Summary</p>
          <div className="grid grid-cols-2 gap-3">
            {modifications.map((m, i) => (
              <div key={i} className="bg-white border border-[hsl(50,15%,88%)] rounded-lg p-3 flex items-center gap-3">
                <m.icon className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                <div>
                  <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{m.label}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)]">{m.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={() => navigate("/superadmin/audit-logs")}
            className="flex-1 h-12 rounded-lg border border-[hsl(50,15%,85%)] text-sm font-bold text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]"
          >
            VIEW AUDIT LOG
          </button>
          <button
            onClick={() => navigate("/superadmin/permission-matrix")}
            className="flex-1 h-12 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)]"
          >
            DONE
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <Clock className="w-3.5 h-3.5 text-[hsl(30,5%,55%)]" />
          <p className="text-[10px] text-[hsl(30,5%,55%)]">UPDATED AT 14:32:01 UTC • REF: PERM_98822</p>
        </div>
      </div>
    </div>
  );
};

export default PermissionFeedback;
