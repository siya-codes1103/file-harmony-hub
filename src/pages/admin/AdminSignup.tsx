import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, ArrowRight, AtSign, Shield, User, Building2, Globe, Phone } from "lucide-react";
import { toast } from "sonner";

const AdminSignup = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [role, setRole] = useState<"admin" | "super_admin">("admin");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Verification email sent! Please check your inbox.");
      navigate("/admin/verify-email");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(50,30%,95%)]">
      <div className="flex-1 flex">
        {/* Left Panel */}
        <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-12 bg-[hsl(90,15%,30%)] text-[hsl(50,30%,95%)] overflow-hidden">
          <div className="relative z-10 flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[hsl(72,70%,45%)]/20 border border-[hsl(72,70%,45%)]/30 flex items-center justify-center">
              <span className="text-[hsl(72,70%,45%)] font-bold text-sm">T</span>
            </div>
            <span className="text-[hsl(72,70%,45%)] font-bold text-lg">TradeVed</span>
          </div>

          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold leading-tight">
              BUILD YOUR<br />
              <span className="text-[hsl(72,70%,45%)]">COMMAND</span><br />
              CENTER.
            </h1>
            <p className="mt-6 text-[hsl(50,10%,70%)] text-sm max-w-sm leading-relaxed">
              Register your administrative credentials to gain access to the TradeVed management console.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <span className="px-3 py-1 rounded-md bg-[hsl(50,30%,95%)]/10 border border-[hsl(50,30%,95%)]/20 text-xs font-semibold uppercase tracking-wider">V4.2.0-Stable</span>
              <span className="px-3 py-1 rounded-md bg-[hsl(72,70%,45%)]/20 border border-[hsl(72,70%,45%)]/30 text-xs font-semibold uppercase tracking-wider text-[hsl(72,70%,45%)]">Enc-Level 5</span>
            </div>
            <p className="mt-8 text-[10px] uppercase tracking-widest text-[hsl(50,10%,55%)]">
              All registrations are subject to verification and approval.
            </p>
          </div>

          <div />
        </div>

        {/* Right Panel */}
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-lg space-y-7">
            <div>
              <h2 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Create Admin Account</h2>
              <p className="mt-2 text-[hsl(30,5%,50%)] text-sm">Register your credentials to access the TradeVed admin console.</p>
            </div>

            {/* Role Toggle */}
            <div className="flex gap-3">
              {(["admin", "super_admin"] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                    role === r
                      ? "border-[hsl(72,70%,45%)] bg-[hsl(72,70%,45%)]/5"
                      : "border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] hover:border-[hsl(50,15%,75%)]"
                  }`}
                >
                  <Shield className="w-5 h-5 text-[hsl(30,5%,40%)]" />
                  <span className="text-sm font-bold uppercase text-[hsl(30,5%,15%)]">{r === "admin" ? "Admin" : "Super Admin"}</span>
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full h-13 pl-11 pr-4 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Access Identity</label>
                <div className="relative">
                  <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@tradeved.financial"
                    className="w-full h-13 pl-11 pr-4 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full h-13 pl-11 pr-4 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Secure Passphrase</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 8 characters"
                    className="w-full h-13 pl-11 pr-12 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(30,5%,55%)] hover:text-[hsl(30,5%,25%)]">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-[hsl(30,5%,35%)] mb-2 uppercase tracking-wider">Confirm Passphrase</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Re-enter passphrase"
                    className="w-full h-13 pl-11 pr-12 rounded-xl bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,85%)] text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,60%)] focus:outline-none focus:ring-2 focus:ring-[hsl(72,70%,45%)] text-sm"
                  />
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(30,5%,55%)] hover:text-[hsl(30,5%,25%)]">
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)] transition-colors disabled:opacity-50 uppercase tracking-wider"
              >
                {loading ? "Processing..." : <>Create Account <ArrowRight className="w-4 h-4" /></>}
              </button>
            </form>

            <p className="text-center text-sm text-[hsl(30,5%,50%)]">
              Already have an account?{" "}
              <Link to="/admin/login" className="text-[hsl(72,70%,35%)] font-semibold hover:underline">
                Sign In
              </Link>
            </p>

            <div className="border-t border-[hsl(50,15%,85%)] pt-5 flex items-center justify-between text-xs text-[hsl(30,5%,55%)]">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[hsl(72,70%,45%)]" />
                <span className="uppercase tracking-wider font-medium">Pending Verification</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Secure Registration</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-12 border-t border-[hsl(50,15%,88%)] flex items-center justify-between px-8 bg-[hsl(50,20%,97%)]">
        <span className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider">© 2024 TradeVed Financial Group. High-Precision Ledger System.</span>
        <div className="flex gap-6 text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider">
          <span className="hover:text-[hsl(30,5%,25%)] cursor-pointer">Privacy Policy</span>
          <span className="hover:text-[hsl(30,5%,25%)] cursor-pointer">Terms of Service</span>
        </div>
      </footer>
    </div>
  );
};

export default AdminSignup;
