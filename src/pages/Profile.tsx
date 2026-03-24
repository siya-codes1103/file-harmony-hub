import { useState } from "react";
import { Users, TrendingUp, Monitor, DollarSign, UsersRound, UserCheck, CheckCircle, Copy, QrCode, LifeBuoy, Instagram, Linkedin, Send } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const Profile = () => {
  const referralLink = "tradeved.com/ref/alexriver_vit";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Referral link copied!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div />
        <button className="h-10 px-5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-accent transition-colors">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* Left Column - Profile Card */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="relative w-28 h-28 mx-auto mb-4">
              <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center text-3xl font-bold text-foreground">
                AR
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-foreground">Alex Rivers</h2>
            <p className="text-sm text-primary mt-1">VIT Vellore</p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))] text-xs font-bold uppercase">
              🏅 Gold Ambassador
            </div>
            <p className="text-xs text-muted-foreground mt-2">Joined Oct 2023</p>

            <nav className="mt-6 space-y-1 text-left">
              {[
                { label: "Dashboard", icon: Monitor, href: "/dashboard" },
                { label: "Profile", icon: UserCheck, href: "/profile", active: true },
                { label: "Leads", icon: UsersRound, href: "/leads" },
                { label: "Earnings", icon: DollarSign, href: "/earnings" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    item.active ? "bg-accent text-primary" : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                >
                  <item.icon className="w-4 h-4" /> {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Send, label: "Telegram" },
              ].map((s) => (
                <button key={s.label} className="flex flex-col items-center gap-1.5 group">
                  <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-muted-foreground">
                    <s.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, label: "STUDENTS REFERRED", value: "112" },
              { icon: TrendingUp, label: "CONV RATE", value: "15%" },
              { icon: Monitor, label: "REVENUE", value: "₹68,100" },
              { icon: DollarSign, label: "EARNINGS", value: "₹8,200" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4">
                <stat.icon className="w-5 h-5 text-primary mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Performance Activity */}
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-foreground">Performance Activity</h3>
              <span className="text-xs text-primary">Last 30 Days</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-5">
              {[
                { icon: UsersRound, value: "3", label: "Meetings attended", color: "text-[hsl(var(--info))]" },
                { icon: Users, value: "150", label: "Leads added", color: "text-primary" },
                { icon: CheckCircle, value: "112", label: "Students converted", color: "text-primary" },
              ].map((item) => (
                <div key={item.label} className="border border-border rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-muted-foreground">Monthly Target Progress</span>
                <span className="text-xs text-primary font-bold">75% Achieved</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </div>

          {/* Referral Link & Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-base font-bold text-foreground mb-3">Referral Link</h3>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-10 px-3 rounded-lg bg-input border border-border text-sm text-muted-foreground flex items-center truncate">
                  {referralLink}
                </div>
                <button onClick={copyLink} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <h3 className="text-base font-bold text-foreground mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  <QrCode className="w-4 h-4" /> Generate QR
                </button>
                <button className="h-10 rounded-lg border border-border text-foreground text-sm font-medium flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                  <LifeBuoy className="w-4 h-4" /> Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-muted-foreground pt-6">
        © 2023 TradeVed Ambassador Program. Built for VIT Vellore Chapter.
      </p>
    </div>
  );
};

export default Profile;
