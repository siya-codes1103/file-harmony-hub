import { useState } from "react";
import { Search, Download, ChevronLeft, ChevronRight, Users, BarChart3, DollarSign, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface Student {
  id: string;
  name: string;
  email: string;
  course: string;
  progress: number;
  lastActive: string;
  payment: "PAID" | "PENDING" | "FAILED";
  score: number;
  revenue: number;
}

const students: Student[] = [
  { id: "1", name: "Sarah Jenkins", email: "sarah.j@example.com", course: "Mastering Crypto", progress: 82, lastActive: "Oct 24, 2:15 PM", payment: "PAID", score: 94, revenue: 249 },
  { id: "2", name: "Marcus Chen", email: "m.chen88@outlook.com", course: "Forex Pro", progress: 45, lastActive: "Oct 23, 11:40 AM", payment: "PENDING", score: 76, revenue: 120 },
  { id: "3", name: "David Miller", email: "david_m@gmail.com", course: "Options Master", progress: 100, lastActive: "Oct 21, 09:05 AM", payment: "PAID", score: 98, revenue: 350 },
  { id: "4", name: "Aisha Roberts", email: "a.roberts@corporate.com", course: "Mastering Crypto", progress: 12, lastActive: "Oct 25, 4:50 PM", payment: "FAILED", score: 42, revenue: 0 },
];

const paymentColors: Record<string, string> = {
  PAID: "text-[hsl(var(--success))]",
  PENDING: "text-[hsl(var(--warning))]",
  FAILED: "text-destructive",
};

const courseColors: Record<string, string> = {
  "Mastering Crypto": "border-primary text-primary",
  "Forex Pro": "border-[hsl(var(--info))] text-[hsl(var(--info))]",
  "Options Master": "border-[hsl(var(--warning))] text-[hsl(var(--warning))]",
};

const Students = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = students.filter((s) =>
    !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Students</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and track the performance of your referred students enrolled in TradeVed courses.</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap bg-card border border-border rounded-xl p-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, email or ID..." className="w-full h-10 pl-9 pr-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
        </div>
        {["Course: All", "Payment: Status", "Engagement: Active"].map((f) => (
          <button key={f} className="h-10 px-4 rounded-lg border border-border bg-card text-xs text-foreground hover:bg-accent transition-colors flex items-center gap-1.5">
            {f} <span className="text-muted-foreground">▾</span>
          </button>
        ))}
        <button className="h-10 px-5 rounded-lg border border-primary text-primary text-sm font-medium flex items-center gap-2 hover:bg-primary/10 transition-colors ml-auto">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["STUDENT NAME", "COURSE", "PROGRESS", "LAST ACTIVE", "PAYMENT", "SCORE", "REVENUE"].map((h) => (
                <th key={h} className="text-left text-[11px] font-bold text-primary uppercase tracking-wider px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((s) => (
              <tr key={s.id} className="hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => navigate(`/students/${s.id}`)}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-md border ${courseColors[s.course] || "border-border text-foreground"}`}>{s.course}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 w-28">
                    <Progress value={s.progress} className="h-2" />
                    <span className="text-xs text-muted-foreground">{s.progress}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-xs text-muted-foreground">{s.lastActive}</td>
                <td className="px-5 py-4">
                  <span className={`text-xs font-medium flex items-center gap-1 ${paymentColors[s.payment]}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" /> {s.payment}
                  </span>
                </td>
                <td className="px-5 py-4 text-sm font-medium text-foreground">{s.score}</td>
                <td className="px-5 py-4 text-sm font-bold text-primary">${s.revenue.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Showing <strong className="text-foreground">1-4</strong> of <strong className="text-foreground">28</strong> students</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronLeft className="w-3 h-3" /></button>
            {[1, 2, 3].map((p) => (
              <button key={p} className={`w-7 h-7 rounded-md text-xs font-medium flex items-center justify-center ${p === 1 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-accent"}`}>{p}</button>
            ))}
            <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Referred</span>
            <Users className="w-4 h-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground">156</p>
          <p className="text-xs text-primary flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> +12 this month</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Avg. Student Score</span>
            <BarChart3 className="w-4 h-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-foreground">84.5</p>
          <p className="text-xs text-muted-foreground mt-1">Across 4 active courses</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Commission</span>
            <DollarSign className="w-4 h-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary">$3,842.50</p>
          <p className="text-xs text-muted-foreground mt-1">⏳ $420.00 pending</p>
        </div>
      </div>
    </div>
  );
};

export default Students;
