import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CheckCircle, DollarSign, Network, Award } from "lucide-react";
import { toast } from "sonner";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [emailVerified, setEmailVerified] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const updateField = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleEmailBlur = () => {
    if (form.email.endsWith(".edu")) {
      setEmailVerified(true);
    } else if (form.email.length > 5) {
      setEmailVerified(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.password) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (form.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    if (!form.agreeTerms) {
      toast.error("Please agree to the Terms of Service");
      return;
    }
    if (emailVerified === false) {
      navigate("/unauthorized");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully!");
      navigate("/onboarding");
    }, 1200);
  };

  const benefits = [
    { icon: DollarSign, title: "Earn Commissions", desc: "Get rewarded for every successful referral and milestone achieved within your campus network." },
    { icon: Network, title: "Build Networks", desc: "Connect with top-tier professionals and fellow student leaders across the globe." },
    { icon: Award, title: "Exclusive Rewards", desc: "Access premium features, limited-edition merchandise, and career mentorship opportunities." },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-5/12 relative flex-col justify-between p-10 bg-gradient-to-br from-background via-card to-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">T</span>
          </div>
          <span className="text-foreground font-bold text-xl">TradeVed</span>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            Join the TradeVed
            <br /><span className="text-primary">Ambassador</span> Elite
          </h1>
          <div className="mt-10 space-y-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2024 TradeVed CRM. Empowering the next generation of campus leaders.
        </p>
      </div>

      {/* Right Panel - Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-card/50">
        <div className="w-full max-w-lg space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Create Ambassador Account</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Only approved ambassadors from partner universities can create accounts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="John Doe"
                className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => { updateField("email", e.target.value); setEmailVerified(null); }}
                  onBlur={handleEmailBlur}
                  placeholder="alex.walker@university.edu"
                  className="w-full h-11 px-4 pr-10 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
                {emailVerified === true && (
                  <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[hsl(var(--success))]" />
                )}
              </div>
              {emailVerified === true && (
                <p className="text-xs text-[hsl(var(--success))] mt-1">University email verified successfully</p>
              )}
              {emailVerified === false && (
                <p className="text-xs text-destructive mt-1">Please use a valid university email (.edu)</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => updateField("password", e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Confirm Password</label>
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => updateField("confirmPassword", e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-11 px-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={form.agreeTerms}
                onChange={(e) => updateField("agreeTerms", e.target.checked)}
                className="w-4 h-4 rounded border-border bg-input accent-primary"
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the <span className="text-primary cursor-pointer">Terms of Service</span> and{" "}
                <span className="text-primary cursor-pointer">Privacy Policy</span>.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-semibold hover:underline">Sign in</Link>
          </p>

          <p className="text-center text-xs text-muted-foreground">
            Having trouble? <span className="text-primary cursor-pointer">Contact support</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
