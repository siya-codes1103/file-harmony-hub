import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, ArrowRight, AlertCircle, HelpCircle, Settings, Lock } from "lucide-react";
import { toast } from "sonner";

const AdminResetPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 12) {
      setError("Passwords must contain at least 12 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      toast.success("Password reset successfully");
      navigate("/admin/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(50,30%,95%)]">
      {/* Top Nav */}
      <header className="h-14 flex items-center justify-between px-8 border-b border-[hsl(50,15%,88%)]">
        <span className="text-[hsl(30,5%,15%)] font-extrabold text-base">TradeVed</span>
        <div className="flex gap-3">
          <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)]">
            <HelpCircle className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)]">
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex">
        {/* Left */}
        <div className="hidden lg:flex lg:w-[45%] flex-col justify-center p-16 bg-[hsl(50,25%,90%)]">
          <p className="text-xs font-bold text-[hsl(90,30%,30%)] uppercase tracking-wider mb-4">Security Protocol</p>
          <h1 className="text-5xl font-extrabold leading-tight text-[hsl(30,5%,15%)]">
            Reset<br />Access.
          </h1>
          <p className="mt-6 text-[hsl(30,5%,40%)] text-sm leading-relaxed max-w-sm">
            Enter your new credentials to regain access to the High-Precision Ledger System.
          </p>

          <div className="mt-10 p-5 bg-[hsl(350,60%,95%)] border border-[hsl(350,40%,85%)] rounded-xl max-w-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-[hsl(0,62%,50%)]" />
              <span className="text-sm font-bold text-[hsl(0,62%,40%)]">Action Required</span>
            </div>
            <p className="text-xs text-[hsl(0,30%,45%)] leading-relaxed">
              Passwords must contain at least 12 characters, including one special symbol and a numeric digit.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">New Password</label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                    placeholder="••••••••••••"
                    className="w-full h-14 pl-4 pr-12 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                  <button type="button" onClick={() => setShowNew(!showNew)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(30,5%,55%)]">
                    {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                    placeholder="••••••••••••"
                    className="w-full h-14 pl-4 pr-12 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(30,5%,55%)]">
                    <Lock className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)] transition-colors disabled:opacity-50 uppercase tracking-wider"
              >
                {loading ? "Resetting..." : <>Reset Password <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>

            {error && (
              <div className="flex items-start gap-3 p-4 bg-[hsl(0,60%,97%)] border-l-4 border-[hsl(0,62%,50%)] rounded-r-lg">
                <AlertCircle className="w-5 h-5 text-[hsl(0,62%,50%)] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[hsl(0,40%,45%)]">{error}</p>
              </div>
            )}

            <div className="border-t border-[hsl(50,15%,85%)] pt-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[hsl(50,15%,90%)] flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[hsl(30,5%,55%)] uppercase tracking-wider">Assistance Needed?</p>
                  <p className="text-sm font-bold text-[hsl(90,30%,30%)] cursor-pointer hover:underline">Contact Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="h-12 border-t border-[hsl(50,15%,88%)] flex items-center justify-between px-8 bg-[hsl(50,20%,97%)]">
        <span className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider">© 2024 TradeVed Financial Group. High-Precision Ledger System.</span>
        <div className="flex gap-6 text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider">
          <span className="cursor-pointer">Privacy Policy</span>
          <span className="cursor-pointer">Terms of Service</span>
          <span className="cursor-pointer">Security Audit</span>
        </div>
      </footer>
    </div>
  );
};

export default AdminResetPassword;
