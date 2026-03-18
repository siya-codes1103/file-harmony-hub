import { BookOpen, MessageCircle, Link2, CalendarCheck, ArrowUpRight, Sparkles, Download, Image, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const steps = ["Welcome", "Resources", "Training", "Community", "Profile"];
const currentStep = 1;

const resources = [
  { icon: BookOpen, title: "CA Handbook", desc: "The definitive guide covering your role, responsibilities, and key milestones.", action: "Download PDF", type: "pdf" },
  { icon: MessageCircle, title: "Marketing Posters", desc: "Branded visuals and templates for social media and campus distribution.", action: "Download Assets", type: "assets" },
  { icon: Link2, title: "Referral Guide", desc: "Learn how to maximize your referral impact and track your earnings.", action: "Download PDF", type: "pdf" },
  { icon: CalendarCheck, title: "Event Hosting Guide", desc: "Step-by-step instructions for organizing successful workshops and seminars.", action: "Download PDF", type: "pdf" },
  { icon: ArrowUpRight, title: "TradeVed Pitch Deck", desc: "Professional presentation for pitching TradeVed to student groups and clubs.", action: "Download PPTX", type: "pptx" },
];

const Resources = () => {
  const navigate = useNavigate();

  const handleDownload = (title: string) => {
    toast.success(`"${title}" download started`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
        <span className="hover:text-foreground cursor-pointer">Campus Program</span>
        <span>›</span>
        <span className="text-foreground font-medium">Onboarding Resources</span>
      </div>

      {/* Progress Banner */}
      <div className="bg-card border border-border rounded-xl p-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Getting Started</h3>
            <p className="text-xs text-muted-foreground">Complete your setup to unlock full dashboard access.</p>
          </div>
          <div className="text-right">
            <span className="text-primary font-bold text-sm">Step {currentStep + 1} of {steps.length}</span>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">40% Completed</p>
          </div>
        </div>
        <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "40%" }} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Onboarding Resources</h1>
        <p className="text-sm text-muted-foreground mt-1.5">Essential toolkits and guidelines for your ambassador journey.</p>
      </div>

      {/* Resource Grid */}
      <div className="grid md:grid-cols-3 gap-5">
        {resources.map((r) => (
          <div key={r.title} className="bg-card border border-border rounded-xl p-6 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-base">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{r.desc}</p>
            </div>
            <button
              onClick={() => handleDownload(r.title)}
              className="h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
            >
              {r.type === "assets" ? <Image className="w-4 h-4" /> : <Download className="w-4 h-4" />}
              {r.action}
            </button>
          </div>
        ))}

        {/* Coming Soon Card */}
        <div className="border-2 border-dashed border-primary/30 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 bg-primary/5">
          <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-base">Ready for the next step?</h3>
          <p className="text-sm text-muted-foreground">
            All resources are updated monthly. Check back for new campaigns.
          </p>
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate("/training")}
          className="w-full h-14 rounded-xl bg-primary text-primary-foreground font-semibold text-base flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
        >
          Continue to Training
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <span>Need help? <span className="text-primary cursor-pointer">Contact Support</span></span>
        <span>© 2024 TradeVed Inc.</span>
      </div>
    </div>
  );
};

export default Resources;
