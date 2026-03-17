import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Send, Headphones, Instagram, Linkedin, Sparkles, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const steps = ["Welcome", "Resources", "Training", "Community", "Profile"];
const currentStep = 3;

const communities = [
  { icon: MessageCircle, title: "WhatsApp", desc: "Join our WhatsApp group for daily trade signals and ambassador updates.", action: "Join WhatsApp", color: "bg-green-500/20 text-green-400", url: "#" },
  { icon: Send, title: "Telegram", desc: "Get real-time market analysis and community discussions on Telegram.", action: "Join Telegram", color: "bg-blue-400/20 text-blue-400", url: "#" },
  { icon: Headphones, title: "Discord", desc: "Voice channels, strategy rooms, and exclusive ambassador perks on Discord.", action: "Join Discord", color: "bg-indigo-400/20 text-indigo-400", url: "#" },
  { icon: Instagram, title: "Instagram", desc: "Follow us for visual market recaps, memes, and community highlights.", action: "Follow Us", color: "bg-pink-400/20 text-pink-400", url: "#" },
  { icon: Linkedin, title: "LinkedIn", desc: "Connect professionally and access career opportunities in fintech.", action: "Connect", color: "bg-blue-500/20 text-blue-500", url: "#" },
];

const Community = () => {
  const navigate = useNavigate();
  const [joinedChannels, setJoinedChannels] = useState<string[]>([]);

  const handleJoin = (title: string, url: string) => {
    setJoinedChannels((prev) => [...prev, title]);
    toast.success(`Opening ${title}...`);
    if (url !== "#") window.open(url, "_blank");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Description */}
      <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto mb-6">
        Connect with professional traders, get real-time signals, and stay updated with the latest market trends across all platforms.
      </p>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">Onboarding Progress</span>
          <span className="text-sm text-primary font-semibold">Step 4: Community Access</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      {/* Community Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {communities.map((c) => (
          <div key={c.title} className="bg-card border border-border rounded-xl p-5 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${c.color} flex items-center justify-center`}>
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-foreground">{c.title}</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{c.desc}</p>
            <button
              onClick={() => handleJoin(c.title, c.url)}
              disabled={joinedChannels.includes(c.title)}
              className="h-10 rounded-lg bg-primary text-primary-foreground font-medium text-xs flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {joinedChannels.includes(c.title) ? "Joined ✓" : <>{c.action} <ExternalLink className="w-3.5 h-3.5" /></>}
            </button>
          </div>
        ))}

        {/* Locked Card */}
        <div className="border-2 border-dashed border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>
          <p className="text-xs text-muted-foreground">Complete steps to unlock the private alpha group.</p>
        </div>
      </div>

      {/* Bottom Progress + Navigation */}
      <div className="mt-8 flex items-center justify-between">
        <div className="bg-card border border-border rounded-lg px-4 py-3 space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary font-medium">Step 4 of 5</span>
            <span className="text-xs text-muted-foreground">80%</span>
          </div>
          <div className="w-32 h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "80%" }} />
          </div>
          <p className="text-[10px] text-muted-foreground">You're almost at the finish line!</p>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/training")}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous Step
          </button>
          <button
            onClick={() => navigate("/profile-setup")}
            className="h-12 px-8 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors uppercase tracking-wider"
          >
            Continue to Profile <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
