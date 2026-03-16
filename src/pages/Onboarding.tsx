import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Coins, TrendingUp, ArrowRight, Zap } from "lucide-react";

const steps = ["Welcome", "Resources", "Training", "Community", "Profile"];

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep] = useState(0);

  const cards = [
    { icon: CheckCircle, title: "What you will do", desc: "Share TradeVed insights, educate your network about our ecosystem, and help new users navigate the platform." },
    { icon: Coins, title: "How you will earn", desc: "Unlock tiered commissions, performance bonuses, and exclusive TradeVed token airdrops based on your impact." },
    { icon: TrendingUp, title: "How you can grow", desc: "Advance through the ranks from Junior to Lead Ambassador, gaining access to private events and governance voting." },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Getting Started</p>
          <h1 className="text-2xl font-bold text-foreground">Ambassador Journey</h1>
        </div>
        <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-secondary rounded-full mb-2 overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step Labels */}
      <div className="flex justify-between mb-8">
        {steps.map((step, i) => (
          <span
            key={step}
            className={`text-[10px] uppercase tracking-wider font-semibold ${
              i <= currentStep ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {step}
          </span>
        ))}
      </div>

      {/* Welcome Card */}
      <div className="bg-card border border-border rounded-xl p-10 text-center space-y-6">
        <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto">
          <Zap className="w-7 h-7 text-primary" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Welcome to the <span className="text-primary underline decoration-primary/40 underline-offset-4">Tribe</span>,
          <br />Ambassador!
        </h2>

        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          We're building the future of decentralized trading, and we're thrilled to have you lead the charge. Let's get your setup complete.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-4 text-left mt-8">
          {cards.map((card) => (
            <div key={card.title} className="bg-secondary/50 border border-border rounded-lg p-5 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/resources")}
          className="mt-6 h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Start Onboarding <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-xs text-muted-foreground italic">Estimated time: 15 minutes</p>
      </div>

      {/* Account Status */}
      <div className="mt-4 bg-card border border-border rounded-lg px-4 py-3 inline-flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Account Status</span>
        <span className="w-2 h-2 rounded-full bg-[hsl(var(--warning))]" />
        <span className="text-xs text-foreground font-medium">Pending Activation</span>
      </div>
    </div>
  );
};

export default Onboarding;
