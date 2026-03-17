import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, CheckCircle, ArrowRight, Info } from "lucide-react";
import { toast } from "sonner";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const email = "alex.user@example.com";

  const handleResend = () => {
    toast.success("Verification email resent!");
  };

  const handleSimulateVerify = () => {
    setVerified(true);
    toast.success("Email verified successfully!");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Nav */}
      <header className="h-14 border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">T</span>
          </div>
          <span className="text-foreground font-bold text-sm">TradeVed <span className="text-muted-foreground font-normal">CRM</span></span>
        </div>
        <span className="text-sm text-muted-foreground">English</span>
      </header>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
          {/* Verification Sent Card */}
          <div className="bg-card border border-border rounded-xl p-8 space-y-6">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <ArrowRight className="w-3 h-3 text-primary-foreground" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">Verification link sent!</h2>
              <p className="text-sm text-muted-foreground mt-2">
                We've sent a secure link to <span className="text-primary font-medium">{email}</span>.
                <br />Please check your inbox to activate your account.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleResend}
                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Resend Email
              </button>
              <button
                onClick={() => navigate("/login")}
                className="w-full h-12 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
              >
                Back to Login
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="w-3.5 h-3.5" />
              <span>Didn't receive it? Check your spam folder.</span>
            </div>

            {/* Dev helper */}
            <button
              onClick={handleSimulateVerify}
              className="text-xs text-primary underline"
            >
              (Dev: Simulate verification)
            </button>
          </div>

          {/* Verified Card */}
          <div className={`bg-card border border-border rounded-xl p-8 space-y-6 relative overflow-hidden transition-opacity ${verified ? "opacity-100" : "opacity-40"}`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-bl-full" />

            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center relative z-10">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground">Email Verified Successfully!</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Your account is now active. You're ready to start managing your trades and CRM workflows.
              </p>
            </div>

            <button
              onClick={() => navigate("/onboarding")}
              disabled={!verified}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 relative z-10"
            >
              Proceed to Onboarding <ArrowRight className="w-4 h-4" />
            </button>

            {/* Progress indicator */}
            <div className="relative z-10">
              <div className="flex gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-primary" />
                <div className="flex-1 h-1.5 rounded-full bg-secondary" />
                <div className="flex-1 h-1.5 rounded-full bg-secondary" />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mt-2">Step 1 of 3: Verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center space-y-3">
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs">🌐</span>
          <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs">🛡</span>
          <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs">🔗</span>
        </div>
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">© 2024 TradeVed CRM. Secure Trading Infrastructure.</p>
      </footer>
    </div>
  );
};

export default EmailVerification;
