import { useState } from "react";
import { ArrowRight, Landmark, DollarSign, TrendingUp } from "lucide-react";
import { toast } from "sonner";

const payouts = [
  { date: "Oct 24, 2023", method: "UPI Transfer", amount: "$250.00", status: "COMPLETED" },
  { date: "Nov 12, 2023", method: "UPI Transfer", amount: "$100.00", status: "PROCESSING" },
  { date: "Aug 05, 2023", method: "UPI Transfer", amount: "$100.00", status: "FAILED" },
];

const statusColors: Record<string, string> = {
  COMPLETED: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",
  PROCESSING: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  FAILED: "bg-destructive/15 text-destructive",
};

const Withdraw = () => {
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("120.50");

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Withdraw Earnings</h1>
        <p className="text-sm text-muted-foreground mt-1">Transfer your campus ambassador rewards to your bank account via UPI.</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Available Balance</p>
            <DollarSign className="w-4 h-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary mt-2">$120.50</p>
          <p className="text-xs text-primary flex items-center gap-1 mt-1"><TrendingUp className="w-3 h-3" /> Ready for payout</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Min. Payout</p>
          <p className="text-3xl font-bold text-foreground mt-2">$50.00</p>
          <div className="mt-2"><div className="h-1.5 bg-primary rounded-full w-3/4" /></div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Total Withdrawn</p>
          <p className="text-3xl font-bold text-foreground mt-2">$450.00</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">Lifetime Earnings</p>
        </div>
      </div>

      {/* Request Payout */}
      <div className="bg-card border border-border rounded-xl p-6 space-y-5">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">💳 Request Payout</h2>
        <div className="border-t border-border pt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">UPI ID</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">@</span>
              <input value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="username@upi" className="w-full h-11 pl-9 pr-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <p className="text-[10px] text-muted-foreground">Ensure your UPI ID is correct to avoid payment failure.</p>
          </div>
          <div className="space-y-2">
            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Amount (USD)</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full h-11 pl-8 pr-4 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <p className="text-[10px] text-primary">Max available: $120.50</p>
          </div>
        </div>
        <div className="flex justify-end">
          <button onClick={() => toast.success("Withdrawal request submitted!")} className="h-11 px-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors uppercase tracking-wider">
            Request Withdrawal <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Recent Payouts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground">Recent Payouts</h2>
          <button className="text-xs text-primary font-medium hover:underline">View All</button>
        </div>
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["DATE", "METHOD", "AMOUNT", "STATUS"].map((h) => (
                  <th key={h} className="text-left text-[11px] font-bold text-muted-foreground uppercase tracking-wider px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {payouts.map((p, i) => (
                <tr key={i} className="hover:bg-accent/50 transition-colors">
                  <td className="px-5 py-3 text-sm text-muted-foreground">{p.date}</td>
                  <td className="px-5 py-3 text-sm text-foreground flex items-center gap-2"><Landmark className="w-4 h-4 text-muted-foreground" /> {p.method}</td>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{p.amount}</td>
                  <td className="px-5 py-3"><span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase ${statusColors[p.status]}`}>{p.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
