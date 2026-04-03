import { Link } from "react-router-dom";
import { MailCheck, ArrowRight, Globe, Shield } from "lucide-react";

const AdminVerifyEmail = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[hsl(50,30%,95%)]">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-[hsl(72,70%,45%)]/15 border border-[hsl(72,70%,45%)]/30 flex items-center justify-center mx-auto">
            <MailCheck className="w-8 h-8 text-[hsl(72,70%,45%)]" />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Verify Your Email</h2>
            <p className="mt-3 text-[hsl(30,5%,50%)] text-sm leading-relaxed max-w-sm mx-auto">
              We've sent a verification link to your email address. Please check your inbox and click the link to activate your admin account.
            </p>
          </div>

          <div className="p-4 rounded-xl border-2 border-[hsl(72,70%,45%)]/20 bg-[hsl(72,70%,45%)]/5">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-5 h-5 text-[hsl(72,70%,45%)]" />
              <span className="text-sm font-semibold text-[hsl(30,5%,25%)]">Verification Required</span>
            </div>
            <p className="text-xs text-[hsl(30,5%,50%)] mt-2">
              Your account will be activated after email verification and admin approval.
            </p>
          </div>

          <div className="space-y-3">
            <Link
              to="/admin/login"
              className="w-full h-14 rounded-xl bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] font-bold text-sm flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)] transition-colors uppercase tracking-wider"
            >
              Go to Sign In <ArrowRight className="w-4 h-4" />
            </Link>

            <button className="w-full h-12 rounded-xl border-2 border-[hsl(50,15%,85%)] text-[hsl(30,5%,40%)] font-semibold text-sm hover:bg-[hsl(50,15%,90%)] transition-colors">
              Resend Verification Email
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-[hsl(30,5%,55%)]">
            <Globe className="w-4 h-4" />
            <span className="uppercase tracking-wider font-medium">Secure Admin Registration</span>
          </div>
        </div>
      </div>

      <footer className="h-12 border-t border-[hsl(50,15%,88%)] flex items-center justify-center px-8 bg-[hsl(50,20%,97%)]">
        <span className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider">© 2024 TradeVed Financial Group.</span>
      </footer>
    </div>
  );
};

export default AdminVerifyEmail;
