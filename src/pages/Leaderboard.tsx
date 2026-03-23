import { useState } from "react";
import { Award } from "lucide-react";

interface Leader {
  rank: number;
  name: string;
  initials: string;
  college: string;
  referred: number;
  revenue: string;
  level: string;
  isYou?: boolean;
}

const leaders: Leader[] = [
  { rank: 1, name: "David Chen", initials: "DC", college: "IIT Delhi", referred: 142, revenue: "84,200", level: "Platinum" },
  { rank: 2, name: "Priya Sharma", initials: "PS", college: "SRCC, Mumbai", referred: 128, revenue: "72,450", level: "Gold" },
  { rank: 3, name: "Alex Rivers", initials: "AR", college: "VIT Vellore", referred: 112, revenue: "₹68,100", level: "Gold", isYou: true },
  { rank: 4, name: "Rahul Varma", initials: "RV", college: "BITS Pilani", referred: 95, revenue: "54,200", level: "Silver" },
  { rank: 5, name: "Sara Miller", initials: "SM", college: "DU South Campus", referred: 88, revenue: "49,000", level: "Bronze" },
];

const levelColors: Record<string, string> = {
  Platinum: "border-primary text-primary",
  Gold: "border-[hsl(var(--warning))] text-[hsl(var(--warning))]",
  Silver: "border-muted-foreground text-muted-foreground",
  Bronze: "border-[hsl(var(--warning))]/60 text-[hsl(var(--warning))]/80",
};

const tiers = [
  { name: "BRONZE", range: "0 - 50", color: "border-[hsl(var(--warning))]/40" },
  { name: "SILVER", range: "51 - 100", color: "border-muted-foreground/40" },
  { name: "GOLD", range: "101 - 200", color: "border-[hsl(var(--warning))]" },
  { name: "PLATINUM", range: "200+", color: "border-primary" },
];

const Leaderboard = () => {
  const [tab, setTab] = useState<"Weekly" | "Monthly" | "All Time">("Weekly");

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="text-xs text-muted-foreground">Home › <span className="text-primary">Leaderboard</span></div>

      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your performance and climb the ranks this week.</p>
        </div>
        <div className="flex items-center rounded-lg border border-border overflow-hidden">
          {(["Weekly", "Monthly", "All Time"] as const).map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-5 py-2 text-sm font-medium transition-colors ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>{t}</button>
          ))}
        </div>
      </div>

      {/* Rankings Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["RANK", "NAME", "COLLEGE", "REFERRED", "REVENUE", "LEVEL"].map((h) => (
                <th key={h} className="text-left text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {leaders.map((l) => (
              <tr key={l.rank} className={`hover:bg-accent/50 transition-colors ${l.isYou ? "bg-primary/5" : ""}`}>
                <td className="px-5 py-4">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${l.rank <= 3 ? "bg-primary/15 text-primary" : "bg-secondary text-muted-foreground"}`}>{l.rank}</div>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">{l.initials}</div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{l.name}</p>
                      {l.isYou && <span className="text-[10px] text-primary font-bold">YOU</span>}
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 text-sm text-muted-foreground">{l.college}</td>
                <td className="px-5 py-4 text-sm font-bold text-foreground">{l.referred}</td>
                <td className="px-5 py-4 text-sm font-medium text-foreground">{l.revenue}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border flex items-center gap-1 w-fit ${levelColors[l.level]}`}>
                    <Award className="w-3 h-3" /> {l.level}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tier Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tiers.map((t) => (
          <div key={t.name} className={`bg-card border-2 ${t.color} rounded-xl p-4`}>
            <p className="text-[10px] font-bold text-primary flex items-center gap-1"><Award className="w-3 h-3" /> {t.name}</p>
            <p className="text-xl font-bold text-foreground mt-1">{t.range}</p>
            <p className="text-[10px] text-muted-foreground">Total Referrals required</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
