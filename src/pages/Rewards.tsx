import { Shield, Gift, Lock, Laptop, Plane, Award, Trophy } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Rewards = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Tier Status Hero */}
      <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-primary/15 text-primary uppercase tracking-wider">Current Milestone</span>
          <h1 className="text-2xl font-bold text-foreground mt-3">Gold Tier Status</h1>
          <p className="text-sm text-muted-foreground mt-2">You're doing amazing! Just 150 more successful referrals to reach the <span className="text-primary">Platinum Tier</span> and unlock the Tech Bundle.</p>
          <div className="mt-4">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">Progress to Platinum</span>
              <span className="text-primary font-bold">350 / 500 Referrals</span>
            </div>
            <Progress value={70} className="h-2.5" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-2">Level up for priority support and a dedicated success manager.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 shrink-0">
          <div className="w-20 h-20 rounded-full bg-[hsl(var(--warning))]/20 flex items-center justify-center">
            <Award className="w-10 h-10 text-[hsl(var(--warning))]" />
          </div>
          <span className="text-xs font-bold text-foreground">Platinum Awaits</span>
          <button className="h-9 px-5 rounded-lg border border-border text-sm text-foreground hover:bg-accent transition-colors">View Benefits</button>
        </div>
      </div>

      {/* Unlocked Rewards */}
      <div>
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4"><Shield className="w-5 h-5 text-primary" /> Unlocked Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center"><Gift className="w-5 h-5 text-primary" /></div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/15 text-primary uppercase">Earned</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">Ambassador Starter Kit</h3>
            <p className="text-xs text-muted-foreground">Digital assets, templates, and basic training modules to kickstart your journey.</p>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t border-border">
              <span>Unlocked 12 Oct 2023</span>
              <button className="text-primary font-medium hover:underline">Download Kit</button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center"><Award className="w-5 h-5 text-primary" /></div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-primary/15 text-primary uppercase">Shipped</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">TradeVed T-shirt</h3>
            <p className="text-xs text-muted-foreground">Official high-quality cotton TradeVed Ambassador merchandise for campus events.</p>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-2 border-t border-border">
              <span>Unlocked 05 Nov 2023</span>
              <button className="text-primary font-medium hover:underline">Track Delivery</button>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div>
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4"><Lock className="w-5 h-5 text-muted-foreground" /> Upcoming Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-xl p-5 space-y-3 opacity-70">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"><Laptop className="w-5 h-5 text-muted-foreground" /></div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-border text-muted-foreground uppercase">Locked</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">MacBook Air M2</h3>
            <p className="text-xs text-muted-foreground">The ultimate workstation for our top-tier Diamond ambassadors.</p>
            <p className="text-[10px] text-primary mt-2"><strong>Requirement:</strong> Reach 1000 referrals (Diamond Tier)</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5 space-y-3 opacity-70">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"><Plane className="w-5 h-5 text-muted-foreground" /></div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded border border-border text-muted-foreground uppercase">Locked</span>
            </div>
            <h3 className="text-sm font-bold text-foreground">All-expenses Retreat</h3>
            <p className="text-xs text-muted-foreground">A 3-day networking retreat at a 5-star resort with the founders.</p>
            <p className="text-[10px] text-primary mt-2"><strong>Requirement:</strong> Top 5 Yearly Performers</p>
          </div>
        </div>
      </div>

      {/* Partner Perks */}
      <div>
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4"><Gift className="w-5 h-5 text-primary" /> Partner Perks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "AWS Activate Credits", desc: "Get $1,000 in AWS credits for your next personal project or startup.", action: "Claim Perk", color: "bg-primary" },
            { title: "Adobe Creative Cloud", desc: "60% student discount extended specifically for TradeVed Ambassadors.", action: "Get Code", color: "bg-[hsl(var(--info))]" },
            { title: "Financial Literacy Cert.", desc: "Professional certification from Wall Street Partners (Free for Gold Tiers).", action: "Enroll Free", color: "bg-[hsl(var(--warning))]" },
          ].map((perk) => (
            <div key={perk.title} className="bg-card border border-border rounded-xl overflow-hidden">
              <div className={`h-2 ${perk.color}`} />
              <div className="p-4 space-y-2">
                <h3 className="text-sm font-bold text-foreground">{perk.title}</h3>
                <p className="text-xs text-muted-foreground">{perk.desc}</p>
                <button className="w-full h-9 mt-2 rounded-lg bg-secondary text-foreground text-xs font-medium hover:bg-accent transition-colors">{perk.action}</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cash Bonus Leaderboard */}
      <div className="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground">Cash Bonus Leaderboard</h2>
        <p className="text-sm text-muted-foreground max-w-lg">In addition to material rewards, our top performers earn real cash bonuses every month. Competition resets on the 1st of every month.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
          <div className="bg-secondary/50 border border-border rounded-lg p-4 flex items-center gap-3">
            <span className="text-lg font-bold text-[hsl(var(--warning))]">01.</span>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Monthly Top Performer</p>
              <p className="text-sm font-bold text-primary">$500 Bonus</p>
            </div>
          </div>
          <div className="bg-secondary/50 border border-border rounded-lg p-4 flex items-center gap-3">
            <span className="text-lg font-bold text-muted-foreground">02.</span>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground">Weekly High Flyer</p>
              <p className="text-sm font-bold text-primary">$100 Bonus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
