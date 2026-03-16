import { Users, TrendingUp, DollarSign, Target, ArrowUpRight } from "lucide-react";

const stats = [
  { icon: Users, label: "Total Leads", value: "142", change: "+12%", color: "text-primary" },
  { icon: Target, label: "Conversions", value: "38", change: "+8%", color: "text-[hsl(var(--success))]" },
  { icon: DollarSign, label: "Earnings", value: "₹24,500", change: "+18%", color: "text-[hsl(var(--warning))]" },
  { icon: TrendingUp, label: "Rank", value: "#12", change: "↑3", color: "text-primary" },
];

const recentLeads = [
  { name: "Priya Sharma", university: "IIT Delhi", status: "Converted", date: "Mar 14" },
  { name: "Rahul Verma", university: "BITS Pilani", status: "In Progress", date: "Mar 13" },
  { name: "Sneha Gupta", university: "NIT Trichy", status: "New", date: "Mar 12" },
  { name: "Arjun Patel", university: "IIM Ahmedabad", status: "Converted", date: "Mar 11" },
];

const Dashboard = () => (
  <div className="p-6 max-w-5xl mx-auto space-y-6">
    <div>
      <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
      <p className="text-sm text-muted-foreground mt-1">Welcome back, Alex. Here's your performance overview.</p>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-xl p-5 space-y-2">
          <div className="flex items-center justify-between">
            <s.icon className={`w-5 h-5 ${s.color}`} />
            <span className="text-xs text-[hsl(var(--success))] font-medium flex items-center gap-0.5">
              {s.change} <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">{s.value}</p>
          <p className="text-xs text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>

    {/* Recent Leads */}
    <div className="bg-card border border-border rounded-xl">
      <div className="px-5 py-4 border-b border-border">
        <h2 className="font-semibold text-foreground text-sm">Recent Leads</h2>
      </div>
      <div className="divide-y divide-border">
        {recentLeads.map((lead) => (
          <div key={lead.name} className="px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                {lead.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.university}</p>
              </div>
            </div>
            <div className="text-right">
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                lead.status === "Converted" ? "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]" :
                lead.status === "In Progress" ? "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]" :
                "bg-primary/15 text-primary"
              }`}>{lead.status}</span>
              <p className="text-[10px] text-muted-foreground mt-1">{lead.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Dashboard;
