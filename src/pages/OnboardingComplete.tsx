import { useNavigate } from "react-router-dom";
import { UserPlus, Download, LayoutDashboard, ArrowRight, CheckCircle2, Rocket } from "lucide-react";

const nextSteps = [
  { icon: UserPlus, title: "Start adding leads", desc: "Submit your first lead to earn points", to: "/leads" },
  { icon: Download, title: "Download your assets", desc: "Access marketing materials and toolkits", to: "/resources" },
  { icon: LayoutDashboard, title: "Check your dashboard", desc: "Monitor your earnings and rank", to: "/dashboard" },
];

const OnboardingComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-2xl mx-auto flex flex-col items-center text-center space-y-8 py-12">
      {/* Hero icon */}
      <div className="relative">
        <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center">
          <Rocket className="w-12 h-12 text-primary" />
        </div>
        <CheckCircle2 className="absolute -top-1 -right-1 w-8 h-8 text-[hsl(var(--success))]" />
      </div>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">
          You're all set!<br />Welcome to the tribe.
        </h1>
        <p className="text-muted-foreground text-sm max-w-md">
          Your onboarding is complete. Let's start making an impact together.
        </p>
      </div>

      {/* Next Steps */}
      <div className="w-full space-y-3 text-left">
        <h3 className="text-sm font-semibold text-foreground">Next Steps</h3>
        {nextSteps.map((step) => (
          <button
            key={step.title}
            onClick={() => navigate(step.to)}
            className="w-full flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:bg-accent transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
              <step.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">{step.title}</p>
              <p className="text-xs text-muted-foreground">{step.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate("/dashboard")}
        className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
      >
        Go to Dashboard <Rocket className="w-4 h-4" />
      </button>
    </div>
  );
};

export default OnboardingComplete;
