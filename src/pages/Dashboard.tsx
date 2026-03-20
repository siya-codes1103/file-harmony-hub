import { Users, UserCheck, IndianRupee, DollarSign, TrendingUp, Star, ArrowUpRight, ArrowDownRight, Share2, UserPlus, Download, MessageSquare, BarChart3, Calendar, Clock, Video, Bell, Gift, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const stats = [
  { icon: Users, label: "LEADS GENERATED", value: "124", change: "+12%", up: true },
  { icon: UserCheck, label: "REGISTERED", value: "86", change: "+5%", up: true },
  { icon: DollarSign, label: "PAID STUDENTS", value: "24", change: "-2%", up: false },
  { icon: IndianRupee, label: "REVENUE", value: "45.0k", change: "+15%", up: true },
  { icon: DollarSign, label: "YOUR EARNINGS", value: "6,750", change: "", up: true },
  { icon: Star, label: "CONV. RATE", value: "19.3%", change: "+1.2%", up: true },
];

const funnel = [
  { stage: "STAGE 1: INITIAL INTEREST", count: 124, label: "LEADS", pct: "", width: "100%" },
  { stage: "STAGE 2: OUTREACH", count: 102, label: "CONTACTED", pct: "82%", width: "82%" },
  { stage: "STAGE 3: ACCOUNT CREATED", count: 86, label: "REGISTERED", pct: "69%", width: "69%" },
  { stage: "STAGE 4: PAYMENT", count: 24, label: "PAID", pct: "19%", width: "30%" },
];

const topPerformers = [
  { rank: "01", name: "Vikram S.", earnings: "₹12,400" },
  { rank: "02", name: "Ananya M.", earnings: "₹9,800" },
  { rank: "03", name: "Alex R. (You)", earnings: "₹6,750" },
];

const recentActivity = [
  { text: "Rahul Sharma completed payment", sub: "Course: Full Stack Development Program", time: "12m ago", dot: "bg-[hsl(var(--success))]" },
  { text: "New lead registered: Priya K.", sub: "Source: Referral Link", time: "2h ago", dot: "bg-primary" },
  { text: "Follow-up email sent to 5 leads", sub: "Automated drip campaign stage 2", time: "4h ago", dot: "bg-muted-foreground" },
];

const meetings = [
  { title: "Student Q&A Session", time: "02:00 PM - 02:45 PM", link: "Google Meet Link" },
  { title: "Lead Follow-up: Siddharth", time: "04:30 PM - 05:00 PM", link: "" },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Ambassador Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Welcome back, Alex. Your performance is up <span className="text-primary font-medium">18%</span> this week.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-4 rounded-lg border border-border bg-card text-sm text-foreground flex items-center gap-2 hover:bg-accent transition-colors">
            <Calendar className="w-4 h-4" /> Last 30 Days
          </button>
          <button
            onClick={() => navigate("/leads")}
            className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
          >
            + Add New Lead
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              {s.change && (
                <span className={`text-[10px] font-medium flex items-center gap-0.5 ${s.up ? "text-[hsl(var(--success))]" : "text-destructive"}`}>
                  {s.change} {s.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                </span>
              )}
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.label}</p>
            <p className="text-xl font-bold text-foreground">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Funnel + Top Performers */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Conversion Funnel</h2>
            <span className="text-xs text-muted-foreground border border-border rounded-md px-2 py-1">Real-time Visualization</span>
          </div>
          <div className="space-y-3">
            {funnel.map((f) => (
              <div key={f.stage} className="flex items-center gap-4">
                <div className="w-20 text-right">
                  <p className="text-sm font-bold text-foreground">{f.count}</p>
                  <p className="text-[10px] text-muted-foreground uppercase">{f.label}</p>
                </div>
                <div className="flex-1 relative">
                  <div className="h-9 rounded-md bg-primary/20 overflow-hidden" style={{ width: f.width }}>
                    <div className="h-full bg-primary/60 rounded-md flex items-center px-3">
                      <span className="text-[10px] font-bold text-primary-foreground uppercase tracking-wider truncate">{f.stage}</span>
                    </div>
                  </div>
                </div>
                {f.pct && <span className="text-xs text-primary font-medium w-10">{f.pct}</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Top Performers</h2>
            <button className="text-xs text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {topPerformers.map((p) => (
              <div key={p.rank} className="flex items-center gap-3">
                <span className="text-lg font-bold text-primary w-6">{p.rank}</span>
                <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                  {p.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{p.name}</p>
                  <p className="text-xs text-muted-foreground">{p.earnings} earned</p>
                </div>
                {p.rank === "01" && <Star className="w-4 h-4 text-primary" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity + Meetings + Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-5 space-y-4">
          <h2 className="font-semibold text-foreground">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className={`w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 ${a.dot}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{a.text}</p>
                  <p className="text-xs text-muted-foreground">{a.sub}</p>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <h2 className="font-semibold text-foreground">Meetings Today</h2>
            {meetings.map((m, i) => (
              <div key={i} className="space-y-1">
                <p className="text-sm font-medium text-foreground">{m.title}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" /> {m.time}</p>
                {m.link && <p className="text-xs text-primary flex items-center gap-1"><Video className="w-3 h-3" /> {m.link}</p>}
              </div>
            ))}
            <button className="text-xs text-muted-foreground hover:text-foreground">View Full Schedule</button>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <h2 className="font-semibold text-foreground">Notifications</h2>
            <div className="flex items-start gap-3">
              <Bell className="w-4 h-4 text-primary mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">New Incentive Plan</p>
                <p className="text-xs text-muted-foreground">Earn double on all registrations before Friday!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bell className="w-4 h-4 text-destructive mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Verify Payment</p>
                <p className="text-xs text-muted-foreground">Please upload receipt for Rahul Sharma's enrolment.</p>
              </div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Gift className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Rewards Progress</h2>
            </div>
            <p className="text-xs text-primary uppercase tracking-wider font-bold">Elite Level: Gold</p>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Points: 2,450 / 3,000</span>
              <span className="text-primary font-medium">81%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "81%" }} />
            </div>
            <p className="text-xs text-muted-foreground">Next Reward: Apple AirPods Pro</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
