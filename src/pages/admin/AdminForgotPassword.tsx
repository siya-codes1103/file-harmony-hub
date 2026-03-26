import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, ArrowLeft, AlertCircle, Shield } from "lucide-react";
import { toast } from "sonner";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("The provided email address does not match our security records.");
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      toast.success("Reset link sent to your administrative email");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(50,30%,95%)]">
      {/* Top Nav */}
      <header className="h-14 flex items-center justify-between px-8 border-b border-[hsl(50,15%,88%)]">
        <div className="flex items-center gap-2">
          <span className="text-[hsl(30,5%,15%)] font-extrabold text-base">TradeVed</span>
          <span className="text-[hsl(30,5%,55%)] text-xs uppercase tracking-wider font-medium">Ledger Console</span>
        </div>
        <div className="flex gap-6 text-xs text-[hsl(30,5%,50%)] uppercase tracking-wider font-medium">
          <span className="hover:text-[hsl(30,5%,20%)] cursor-pointer">Security Audit</span>
          <span className="hover:text-[hsl(30,5%,20%)] cursor-pointer">System Status</span>
        </div>
      </header>

      {/* Main */}
      <div className="flex-1 flex">
        {/* Left */}
        <div className="hidden lg:flex lg:w-[45%] flex-col justify-center p-16 bg-[hsl(50,25%,90%)]">
          <h1 className="text-5xl font-extrabold leading-tight text-[hsl(30,5%,15%)]">
            <span className="italic">Secure</span><br />
            <span className="italic">Access</span><br />
            <span className="italic">Recovery.</span>
          </h1>
          <div className="w-20 h-1 bg-[hsl(72,70%,45%)] mt-6 rounded-full" />
          <p className="mt-8 text-[hsl(30,5%,40%)] text-sm leading-relaxed max-w-sm">
            Protecting your high-precision ledger data with military-grade encryption protocols. Enter your verified email to initiate the reset sequence.
          </p>
          <div className="flex items-center gap-3 mt-10 p-4 bg-[hsl(50,20%,85%)] rounded-xl w-fit">
            <Shield className="w-8 h-8 text-[hsl(90,25%,35%)]" />
            <div>
              <p className="text-xs font-bold text-[hsl(72,70%,35%)] uppercase tracking-wider">Encryption Tier IV</p>
              <p className="text-xs text-[hsl(30,5%,50%)]">Active Session Monitoring</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,88%)] rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-[hsl(30,5%,15%)]">Forgot Password</h2>
              <p className="mt-1 text-sm text-[hsl(30,5%,50%)]">Input your administrative email for a secure reset link.</p>
            </div>

            {error && (
              <div className="flex items-start gap-3 p-4 bg-[hsl(0,60%,97%)] border-l-4 border-[hsl(0,62%,50%)] rounded-r-lg">
                <AlertCircle className="w-5 h-5 text-[hsl(0,62%,50%)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[hsl(0,62%,40%)]">Identity Not Verified</p>
                  <p className="text-xs text-[hsl(0,40%,45%)] mt-1">{error}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Administrative Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="name@tradeved.com"
                    className="w-full h-14 pl-11 pr-4 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)] transition-colors disabled:opacity-50 uppercase tracking-wider"
              >
                {loading ? "Sending..." : <>Send Reset Link <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>

            <div className="border-t border-[hsl(50,15%,88%)] pt-4">
              <Link to="/admin/login" className="flex items-center justify-center gap-2 text-sm font-medium text-[hsl(30,5%,35%)] hover:text-[hsl(30,5%,15%)] uppercase tracking-wider">
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </Link>
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

export default AdminForgotPassword;
