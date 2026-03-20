import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Reset link sent! Check your inbox.");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center p-10 bg-gradient-to-br from-background via-card to-background overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <span className="text-primary font-bold text-lg">T</span>
            </div>
            <span className="text-foreground font-bold text-xl tracking-tight uppercase">TradeVed CRM</span>
          </div>

          <div className="w-64 h-44 rounded-xl bg-card border border-border overflow-hidden flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-card via-secondary to-card flex items-center justify-center">
              <div className="w-20 h-14 rounded-lg bg-background/50 border border-border" />
            </div>
          </div>

          <p className="text-primary text-sm text-center max-w-xs">
            Securing your trading workspace with advanced encryption.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-card/50">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Reset Your Password</h2>
            <p className="mt-2 text-muted-foreground text-sm">Enter your email to receive a reset link.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full h-12 pl-10 pr-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Sending..." : <>Send Reset Link <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>

          <Link
            to="/login"
            className="flex items-center justify-center gap-2 text-sm text-primary font-medium hover:underline"
          >
            ← Back to Login
          </Link>

          <div className="border-t border-border pt-4">
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
              <span className="hover:text-foreground cursor-pointer">Terms of Service</span>
              <span className="hover:text-foreground cursor-pointer">Contact Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
