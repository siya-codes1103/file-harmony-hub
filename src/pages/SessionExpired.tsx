import { Link } from "react-router-dom";
import { Shield, ArrowRight, Lock } from "lucide-react";

const SessionExpired = () => (
  <div className="min-h-screen flex items-center justify-center bg-background p-6">
    <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 space-y-6 text-center">
      {/* Logo */}
      <div className="flex items-center justify-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
          <span className="text-primary font-bold text-sm">T</span>
        </div>
        <span className="text-foreground font-bold text-lg">TradeVed</span>
        <span className="text-primary font-bold text-lg">CRM</span>
      </div>

      {/* Shield illustration */}
      <div className="w-full h-36 rounded-xl bg-gradient-to-b from-secondary to-card border border-border flex items-center justify-center">
        <Shield className="w-16 h-16 text-primary/60" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Session Expired</h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Your session has expired. For your security, please sign in again to continue.
        </p>
      </div>

      <Link
        to="/login"
        className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
      >
        Sign In Again <ArrowRight className="w-4 h-4" />
      </Link>

      <Link
        to="/"
        className="block text-sm text-primary font-semibold uppercase tracking-wider hover:underline"
      >
        Return to Home
      </Link>

      <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
        <Lock className="w-3 h-3" />
        <span className="uppercase tracking-wider">Secure Connection</span>
      </div>
    </div>
  </div>
);

export default SessionExpired;
