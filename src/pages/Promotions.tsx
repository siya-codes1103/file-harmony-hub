import { useState } from "react";
import { Link2, Copy, Download, MessageSquare, Linkedin, Send, Instagram, QrCode } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

const Promotions = () => {
  const referralLink = "https://campus.ambassador.io/ref/alex_gold_2024";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied to clipboard!");
  };

  const promoAssets = [
    { label: "Instagram Story", name: "Skill Up 2024" },
    { label: "LinkedIn Banner", name: "Skill Up 2024" },
    { label: "Square Feed", name: "Skill Up 2024" },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Refer & Promote</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Boost your impact! Share your unique link and use our high-energy assets to climb the leaderboard.
        </p>
      </div>

      {/* Referral Link */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <Link2 className="w-5 h-5 text-primary" />
          <h3 className="text-base font-bold text-foreground">Your Unique Referral Link</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-12 px-4 rounded-lg bg-input border border-border text-sm text-primary flex items-center">
            {referralLink}
          </div>
          <button
            onClick={copyLink}
            className="h-12 px-6 rounded-lg bg-primary text-primary-foreground text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Copy className="w-4 h-4" /> Copy Link
          </button>
        </div>
      </div>

      {/* QR Code + Quick Share */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* QR Code */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-base font-bold text-foreground mb-4">Poster QR Code</h3>
          <div className="bg-white rounded-lg p-6 flex items-center justify-center mb-4">
            <div className="w-40 h-40 flex items-center justify-center">
              <QrCode className="w-32 h-32 text-gray-800" />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            Print this for physical posters or display it on your phone during events.
          </p>
          <button className="w-full h-10 rounded-lg border border-border text-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors">
            <Download className="w-4 h-4" /> Download PNG
          </button>
        </div>

        {/* Quick Share */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="text-base font-bold text-foreground mb-4">Quick Share</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: MessageSquare, label: "WhatsApp", color: "text-primary" },
              { icon: Linkedin, label: "LinkedIn", color: "text-primary" },
              { icon: Send, label: "Telegram", color: "text-primary" },
              { icon: Instagram, label: "Instagram", color: "text-primary" },
            ].map((s) => (
              <button
                key={s.label}
                onClick={() => toast.info(`Opening ${s.label}...`)}
                className="h-12 rounded-lg border border-border text-foreground text-sm font-medium flex items-center gap-3 px-4 hover:bg-accent hover:border-primary transition-colors"
              >
                <s.icon className={`w-5 h-5 ${s.color}`} /> {s.label}
              </button>
            ))}
          </div>
          <div className="border-l-2 border-primary bg-primary/5 rounded-r-lg p-4">
            <p className="text-sm text-muted-foreground italic">
              "Pro Tip: Personalized messages have 3x higher conversion rates!"
            </p>
          </div>
        </div>
      </div>

      {/* Promo Assets Bundle */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold text-foreground">Promo Assets Bundle</h3>
          <button className="text-sm text-primary font-medium hover:underline">View All →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoAssets.map((asset, i) => (
            <div key={i} className="bg-secondary rounded-xl overflow-hidden border border-border group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                <span className="text-4xl">🌿</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-primary text-primary-foreground">
                  {asset.label}
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-sm text-foreground">{asset.name}</span>
                <button className="text-muted-foreground hover:text-primary transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-card border border-border rounded-xl p-5 grid grid-cols-3 gap-4">
        {[
          { label: "TOTAL CLICKS", value: "1,284" },
          { label: "CONVERSIONS", value: "42" },
          { label: "EST. EARNINGS", value: "$420.00" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[10px] font-bold text-primary uppercase tracking-wider">{stat.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;
