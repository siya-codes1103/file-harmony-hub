import { BookOpen, MessageCircle, Link2, CalendarCheck, ArrowUpRight, Sparkles, Download, Image } from "lucide-react";
import { toast } from "sonner";

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
      <div className="bg-card border border-border rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">Getting Started</h3>
            <p className="text-xs text-muted-foreground">Complete your setup to unlock full dashboard access.</p>
          </div>
          <div className="text-right">
            <span className="text-primary font-bold text-sm">Step {currentStep + 1} of {steps.length}</span>
            <p className="text-[10px] text-muted-foreground uppercase">40% Completed</p>
          </div>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "40%" }} />
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Onboarding Resources</h1>
        <p className="text-sm text-muted-foreground mt-1">Essential toolkits and guidelines for your ambassador journey.</p>
      </div>

      {/* Resource Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {resources.map((r) => (
          <div key={r.title} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground text-sm">{r.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{r.desc}</p>
            </div>
            <button
              onClick={() => handleDownload(r.title)}
              className="h-10 rounded-lg border border-primary/30 bg-primary/10 text-primary font-medium text-xs flex items-center justify-center gap-2 hover:bg-primary/20 transition-colors"
            >
              {r.type === "assets" ? <Image className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
              {r.action}
            </button>
          </div>
        ))}

        {/* Coming Soon Card */}
        <div className="border-2 border-dashed border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground text-sm">Ready for the next step?</h3>
          <p className="text-xs text-muted-foreground">
            All resources are updated monthly. Check back for new campaigns.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <span>Need help? <span className="text-primary cursor-pointer">Contact Support</span></span>
        <span>© 2024 TradeVed Inc.</span>
      </div>
    </div>
  );
};

export default Resources;
