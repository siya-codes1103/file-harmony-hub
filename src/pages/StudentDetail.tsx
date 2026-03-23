import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, TrendingUp, Users, MoreVertical, RefreshCw, BarChart3, MessageSquare } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const StudentDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <button onClick={() => navigate("/students")} className="text-sm text-primary flex items-center gap-1 hover:underline">
        <ArrowLeft className="w-4 h-4" /> Back to All Students
      </button>

      {/* Profile Header */}
      <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-6">
        <div className="w-24 h-24 rounded-xl bg-secondary flex items-center justify-center text-2xl font-bold text-foreground shrink-0">JW</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Jonathan Wick</h1>
              <p className="text-sm text-primary mt-0.5">Advanced Algorithmic Trading Strategy</p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-medium px-3 py-1 rounded-md bg-primary/15 text-primary">SEED SCORE 850 / 1000</span>
                <span className="text-xs font-medium px-3 py-1 rounded-md border border-border text-foreground flex items-center gap-1">STATUS <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--success))]" /> ACTIVE</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="h-9 px-4 rounded-lg border border-border text-sm text-foreground hover:bg-accent transition-colors">Edit Profile</button>
              <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><MoreVertical className="w-4 h-4" /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Course Progress & Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">Course Progress</h3>
                <RefreshCw className="w-4 h-4 text-primary" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-36 h-36">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-secondary" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-primary" strokeWidth="3" strokeDasharray="97.4" strokeDashoffset="24.35" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-foreground">75%</span>
                    <span className="text-[10px] text-muted-foreground">Complete</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">12 of 16 modules finished. 4 remaining.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-foreground">Activity Insights</h3>
                <BarChart3 className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-muted-foreground uppercase tracking-wider">Days Active</p>
                <div className="flex items-end gap-3 mt-1">
                  <span className="text-3xl font-bold text-primary">02</span>
                  <span className="text-sm text-muted-foreground mb-1">days</span>
                </div>
              </div>
              <div className="flex gap-1 h-8 items-end">
                {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
                  <div key={i} className="flex-1 bg-primary/60 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Login frequency is up <span className="text-primary font-medium">12%</span> this week</p>
            </div>
          </div>

          {/* Academic Performance */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-foreground">Academic Performance</h3>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <p className="text-[11px] text-primary uppercase">Avg. Quiz Score</p>
                <p className="text-xl font-bold text-foreground mt-1">92%</p>
                <div className="flex gap-1 mt-2">
                  <div className="h-1 flex-1 bg-primary rounded" /><div className="h-1 flex-1 bg-primary rounded" /><div className="h-1 flex-1 bg-secondary rounded" />
                </div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <p className="text-[11px] text-primary uppercase">Assignments</p>
                <p className="text-xl font-bold text-foreground mt-1">8 / 10</p>
                <p className="text-[10px] text-[hsl(var(--warning))] mt-2">⏳ 2 Pending Review</p>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-3">
                <p className="text-[11px] text-primary uppercase">Course Rank</p>
                <p className="text-xl font-bold text-foreground mt-1">#14</p>
                <p className="text-[10px] text-primary mt-2">Top 5% of all students</p>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <table className="w-full">
                <thead>
                  <tr className="text-[11px] font-bold text-muted-foreground uppercase">
                    <th className="text-left pb-2">Latest Assessments</th>
                    <th className="text-left pb-2">Date</th>
                    <th className="text-right pb-2">Result</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-border">
                    <td className="py-2.5 text-foreground">Market Volatility Quiz</td>
                    <td className="py-2.5 text-muted-foreground">Oct 12, 2023</td>
                    <td className="py-2.5 text-right text-primary font-medium">98/100</td>
                  </tr>
                  <tr className="border-t border-border">
                    <td className="py-2.5 text-foreground">Backtesting Assignment</td>
                    <td className="py-2.5 text-muted-foreground">Oct 05, 2023</td>
                    <td className="py-2.5 text-right text-[hsl(var(--success))] font-medium">Passed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Financial Summary */}
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="text-sm font-bold text-foreground">Financial Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-[11px] text-primary uppercase">Total Tuition Paid</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-2xl font-bold text-foreground">$2,400.00</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[hsl(var(--success))]/15 text-[hsl(var(--success))] font-bold">Settled</span>
                  </div>
                </div>
                <div>
                  <p className="text-[11px] text-primary uppercase">Referral Revenue</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xl font-bold text-primary">$450.00</span>
                    <span className="text-xs text-muted-foreground">3 Referrals</span>
                  </div>
                </div>
              </div>
              <div className="bg-secondary/50 border border-border rounded-lg p-4 space-y-3">
                <h4 className="text-xs font-bold text-foreground">Payment History</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <p className="text-foreground">Monthly Installment - Sept</p>
                      <p className="text-muted-foreground">Paid on 09/01/23</p>
                    </div>
                    <span className="font-bold text-foreground">$400</span>
                  </div>
                  <div className="flex items-center justify-between text-xs border-t border-border pt-2">
                    <div>
                      <p className="text-foreground">Advanced Module Fee</p>
                      <p className="text-muted-foreground">Paid on 08/15/23</p>
                    </div>
                    <span className="font-bold text-foreground">$800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Action Panel */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-primary">⚡</span>
              <h3 className="text-sm font-bold text-foreground">Action Panel</h3>
            </div>
            <p className="text-xs text-muted-foreground">Take quick actions to improve Jonathan's learning experience.</p>
            <div className="space-y-2">
              <button className="w-full h-10 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
                <Mail className="w-4 h-4" /> Send Reminder
              </button>
              <button className="w-full h-10 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
                <TrendingUp className="w-4 h-4" /> Encourage Course Retention
              </button>
              <button className="w-full h-10 rounded-lg border border-primary text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/10 transition-colors">
                <Users className="w-4 h-4" /> Invite to Meeting
              </button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-foreground">Quick Notes</h3>
            <textarea placeholder="Add a note about this student..." className="w-full h-20 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground p-3 resize-none focus:outline-none focus:ring-2 focus:ring-ring" />
            <button className="text-xs text-primary font-medium hover:underline">+ Add a Note</button>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-foreground">Linked Mentors</h3>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">EC</div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">Sarah Chen</p>
                <p className="text-[10px] text-muted-foreground">Head of Algorithmic Trading</p>
              </div>
              <MessageSquare className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground text-center py-4">© 2023 TradeVed CRM. Professional Grade Trading Education Management.</p>
    </div>
  );
};

export default StudentDetail;
