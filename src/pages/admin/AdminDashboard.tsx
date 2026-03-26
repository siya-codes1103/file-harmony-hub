import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Activity, UserPlus, AlertTriangle, FileText, UserCheck, Calendar, Network, CheckCircle, ClipboardList } from "lucide-react";
import { toast } from "sonner";

const stats = [
  { label: "Total CAs", value: "1,284", change: "+12%", icon: Users },
  { label: "Active Leads", value: "8,420", status: "Healthy", icon: Activity },
  { label: "Onboarded", value: "432", sub: "This Month", icon: UserPlus },
  { label: "Data Errors", value: "08", status: "Critical", icon: AlertTriangle, critical: true },
];

const activityFeed = [
  { icon: FileText, title: "Lead Batch #8291-TX Successfully Uploaded", desc: "2,400 new leads mapped to Austin region CAs. All records validated against global database.", time: "14:22 PM" },
  { icon: UserCheck, title: "CA Onboarding Completed: Meera K. Sharma", desc: "Identity and credentials verified. Access tokens dispatched to registered email.", time: "12:05 PM" },
  { icon: Users, title: "Student Portal API Synchronization", desc: "Successfully refreshed 1.2k enrollment records. Latency: 124ms.", time: "09:45 AM" },
];

const schedule = [
  { title: "Strategy Sync: Q3 Growth", time: "11:00 AM - 12:00 PM" },
  { title: "New Partner Interview", time: "02:30 PM - 03:00 PM" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [loadMore, setLoadMore] = useState(false);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Master Control Center</h1>
            <span className="px-2 py-0.5 rounded-md bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-[10px] font-bold uppercase">V3</span>
          </div>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Real-time oversight of trade operations, leads, and CA performance.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={() => toast.info("Approve CAs flow coming soon")} className="h-10 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
            <CheckCircle className="w-4 h-4 text-[hsl(72,70%,45%)]" /> Approve CAs
          </button>
          <button onClick={() => toast.info("Assign Tasks flow coming soon")} className="h-10 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
            <ClipboardList className="w-4 h-4" /> Assign Tasks
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`p-5 rounded-xl border ${s.critical ? "border-[hsl(0,50%,70%)] bg-[hsl(0,50%,97%)]" : "border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)]"}`}>
            <div className="flex items-center justify-between mb-3">
              <s.icon className={`w-5 h-5 ${s.critical ? "text-[hsl(0,62%,50%)]" : "text-[hsl(30,5%,45%)]"}`} />
              {s.change && <span className="text-xs font-bold text-[hsl(72,70%,35%)]">{s.change}</span>}
              {s.status && <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${s.critical ? "bg-[hsl(0,62%,50%)] text-white" : "bg-[hsl(72,70%,45%)]/20 text-[hsl(72,70%,35%)]"}`}>{s.status}</span>}
            </div>
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-medium">{s.label}</p>
            <p className={`text-3xl font-extrabold mt-1 ${s.critical ? "text-[hsl(0,62%,45%)]" : "text-[hsl(30,5%,15%)]"}`}>{s.value}</p>
            {s.sub && <p className="text-[10px] text-[hsl(30,5%,55%)] mt-1">{s.sub}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Activity Feed */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[hsl(30,5%,15%)]">System Activity Feed</h2>
            <button className="text-xs text-[hsl(72,70%,35%)] font-semibold hover:underline">Export Log</button>
          </div>
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl divide-y divide-[hsl(50,15%,90%)]">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 rounded-lg bg-[hsl(50,15%,90%)] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[hsl(30,5%,40%)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)]">{item.title}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)] mt-1">{item.desc}</p>
                </div>
                <span className="text-xs text-[hsl(30,5%,55%)] flex-shrink-0">{item.time}</span>
              </div>
            ))}
            <div className="p-4 text-center">
              <button onClick={() => setLoadMore(!loadMore)} className="text-sm text-[hsl(30,5%,45%)] font-medium hover:text-[hsl(30,5%,15%)]">Load More Activity</button>
            </div>
          </div>
        </div>

        {/* Priority Attention */}
        <div className="space-y-4">
          <h2 className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Priority Attention</h2>

          {/* Lead Sync Errors */}
          <div className="bg-[hsl(350,60%,30%)] rounded-xl p-5 text-white">
            <div className="flex items-center justify-between mb-3">
              <AlertTriangle className="w-5 h-5 text-[hsl(38,92%,50%)]" />
              <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-white/20">Critical</span>
            </div>
            <p className="text-xl font-extrabold">8 Lead Sync Errors</p>
            <p className="text-xs text-white/70 mt-2">Database mismatch detected in region North-East. Automatic retry logic failed 3 times.</p>
            <button onClick={() => navigate("/admin/lead-errors")} className="mt-4 w-full h-10 rounded-lg bg-white/10 border border-white/20 text-sm font-bold text-[hsl(72,70%,55%)] hover:bg-white/20 uppercase tracking-wider flex items-center justify-center gap-2">
              Fix Data Mismatch →
            </button>
          </div>

          {/* CA Approvals */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <div className="flex items-center justify-between mb-3">
              <CheckCircle className="w-5 h-5 text-[hsl(72,70%,45%)]" />
              <span className="text-[10px] font-bold uppercase text-[hsl(38,92%,50%)]">Pending</span>
            </div>
            <p className="text-xl font-extrabold text-[hsl(30,5%,15%)]">14 CA Approvals</p>
            <p className="text-xs text-[hsl(30,5%,50%)] mt-2">Qualified accountants awaiting profile verification to begin lead intake.</p>
            <div className="flex items-center gap-1 mt-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-[hsl(50,15%,85%)] border-2 border-[hsl(50,20%,97%)]" />
              ))}
              <span className="ml-1 text-xs text-[hsl(30,5%,50%)]">+11</span>
            </div>
            <button onClick={() => navigate("/admin/ca-management")} className="mt-4 w-full h-10 rounded-lg bg-[hsl(50,15%,90%)] text-sm font-bold text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,85%)] uppercase tracking-wider">
              Review All
            </button>
          </div>

          {/* Schedule */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-4 h-4 text-[hsl(30,5%,45%)]" />
              <h3 className="text-xs font-bold text-[hsl(30,5%,35%)] uppercase tracking-wider">Today's Schedule</h3>
            </div>
            {schedule.map((s, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <div className="w-1 h-10 bg-[hsl(72,70%,45%)] rounded-full flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{s.title}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)]">{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Routing Engine Banner */}
      <div className="bg-[hsl(90,15%,30%)] rounded-xl p-8 flex items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-extrabold text-white">Intelligent Routing Engine</h2>
          <p className="text-sm text-white/60 mt-2 max-w-lg">
            Our proprietary algorithm ensures leads are distributed based on CA specialization, current workload, and historical conversion rates.
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <p className="text-3xl font-extrabold text-[hsl(72,70%,45%)]">98.4%</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Route Accuracy</p>
            </div>
            <div className="w-px bg-white/20" />
            <div>
              <p className="text-3xl font-extrabold text-[hsl(72,70%,45%)]">1.2s</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider font-bold">Avg Latency</p>
            </div>
          </div>
        </div>
        <div className="w-64 h-40 bg-[hsl(72,70%,45%)] rounded-xl flex items-center justify-center">
          <div className="text-center">
            <Network className="w-12 h-12 text-[hsl(90,15%,30%)] mx-auto" />
            <p className="text-xs font-bold text-[hsl(90,15%,30%)] mt-2 uppercase tracking-wider">Live Network Graph Active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
