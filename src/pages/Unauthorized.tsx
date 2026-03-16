import { Link } from "react-router-dom";
import { AlertCircle, Mail } from "lucide-react";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-10 bg-gradient-to-br from-background via-card to-background">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="text-primary font-bold text-lg">T</span>
          </div>
          <span className="text-foreground font-bold text-xl">TradeVed <span className="text-primary">CA portal</span></span>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-foreground leading-tight">
            Empowering the next
            <br />generation of <span className="text-primary">financial leaders.</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-base max-w-md">
            Our Campus Ambassador program connects top-tier students with real-world trading expertise and opportunities.
          </p>
        </div>

        <p className="text-xs text-muted-foreground">
          © 2024 TradeVed FinTech Solutions. All rights reserved.
        </p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-6 lg:p-12 bg-card/50">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl border border-border p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8 text-destructive" />
            </div>

            <h2 className="text-xl font-bold text-foreground">Email Not Authorized</h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              It looks like the email you used isn't on our approved Campus Ambassador list yet. Please ensure you are using the correct institution email or contact our support team.
            </p>

            <a
              href="mailto:support@tradeved.com"
              className="w-full h-11 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact TradeVed Team
            </a>

            <Link
              to="/login"
              className="w-full h-11 rounded-lg border border-border bg-input text-foreground font-medium text-sm flex items-center justify-center hover:bg-accent transition-colors"
            >
              Go Back
            </Link>

            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground italic">
                Waitlisted? Status updates are sent every Friday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
