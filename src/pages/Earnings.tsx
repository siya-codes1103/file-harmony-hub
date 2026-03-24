import { useState } from "react";
import { TrendingUp, Percent, Clock, RefreshCw, Award, Filter, Download, ChevronLeft, ChevronRight, CreditCard, Megaphone, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

interface Transaction {
  date: string;
  name: string;
  initials: string;
  course: string;
  revenue: string;
  commission: string;
  status: "Paid" | "Pending";
}

const transactions: Transaction[] = [
  { date: "Oct 24, 2023", name: "Aditi Kulkarni", initials: "AK", course: "Full Stack Trading Masterclass", revenue: "₹14,999", commission: "₹1,800", status: "Paid" },
  { date: "Oct 22, 2023", name: "Rahul Sharma", initials: "RS", course: "Options Trading Basics", revenue: "₹8,500", commission: "₹1,020", status: "Pending" },
  { date: "Oct 20, 2023", name: "Priya Menon", initials: "PM", course: "Technical Analysis Pro", revenue: "₹12,000", commission: "₹1,440", status: "Paid" },
  { date: "Oct 18, 2023", name: "Vikram Singh", initials: "VS", course: "Trading Psychology", revenue: "₹5,000", commission: "₹600", status: "Pending" },
];

const Earnings = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Earnings Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Track your commissions and financial growth</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-primary rounded-xl p-5 text-primary-foreground md:row-span-2">
          <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">Available Balance</p>
          <p className="text-4xl font-bold mt-2">₹12,450</p>
          <div className="flex items-center gap-2 mt-3 text-sm">
            <span className="px-2 py-0.5 rounded bg-primary-foreground/20 text-xs font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +15.2%</span>
            <span className="text-xs opacity-80">since last payout</span>
          </div>
          <button onClick={() => navigate("/withdraw")} className="w-full h-10 mt-4 rounded-lg bg-primary-foreground text-primary text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Withdraw Funds
          </button>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <TrendingUp className="w-5 h-5 text-primary mb-2" />
          <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Total Revenue</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹85,000</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <Percent className="w-5 h-5 text-primary mb-2" />
          <p className="text-[11px] font-bold text-primary uppercase tracking-wider">Total Commission</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹8,500</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <Clock className="w-5 h-5 text-[hsl(var(--warning))] mb-2" />
          <p className="text-[11px] font-bold text-[hsl(var(--warning))] uppercase tracking-wider">Pending Payout</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹2,100</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <RefreshCw className="w-5 h-5 text-muted-foreground mb-2" />
          <p className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Withdrawn Amount</p>
          <p className="text-2xl font-bold text-foreground mt-1">₹6,400</p>
        </div>
      </div>

      {/* Tier Banner */}
      <div className="bg-card border border-border rounded-xl p-5 flex items-center gap-5">
        <div className="w-14 h-14 rounded-full bg-[hsl(var(--warning))]/20 flex items-center justify-center shrink-0">
          <Award className="w-7 h-7 text-[hsl(var(--warning))]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-foreground">Current Tier: Gold Ambassador</h3>
          <p className="text-sm text-muted-foreground">You are earning <span className="text-primary font-medium">12% commission</span> per sale.</p>
        </div>
        <div className="w-72 shrink-0">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-muted-foreground">Progress to Platinum</span>
            <span className="text-primary font-bold">75%</span>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-[10px] text-muted-foreground mt-1">Generate ₹15,000 more revenue to unlock 15% commission.</p>
        </div>
      </div>

      {/* Earnings Breakdown */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="px-5 py-4 flex items-center justify-between border-b border-border">
          <h3 className="text-base font-bold text-foreground">Earnings Breakdown</h3>
          <div className="flex items-center gap-2">
            <button className="h-8 px-3 rounded-lg border border-border text-xs text-foreground flex items-center gap-1.5 hover:bg-accent"><Filter className="w-3 h-3" /> Filter</button>
            <button className="h-8 px-3 rounded-lg border border-border text-xs text-foreground flex items-center gap-1.5 hover:bg-accent"><Download className="w-3 h-3" /> Export</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              {["DATE", "STUDENT NAME", "COURSE", "REVENUE", "COMMISSION", "STATUS"].map((h) => (
                <th key={h} className="text-left text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {transactions.map((t, i) => (
              <tr key={i} className="hover:bg-accent/50 transition-colors">
                <td className="px-5 py-3 text-xs text-muted-foreground">{t.date}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center text-[10px] font-medium text-foreground">{t.initials}</div>
                    <span className="text-sm text-foreground">{t.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-xs text-primary">{t.course}</td>
                <td className="px-5 py-3 text-sm text-foreground">{t.revenue}</td>
                <td className="px-5 py-3 text-sm font-bold text-primary">{t.commission}</td>
                <td className="px-5 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase ${t.status === "Paid" ? "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]" : "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]"}`}>{t.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-5 py-3 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Showing 1-4 of 28 transactions</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronLeft className="w-3 h-3" /></button>
            <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronRight className="w-3 h-3" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
