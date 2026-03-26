import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, MapPin, Clock, Users, UserCheck, BarChart3, PlusCircle, CheckSquare, LogIn, FileText, Download, Edit, Send, ClipboardList, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const activityLog = [
  { icon: PlusCircle, title: "Submitted New Lead: Manoj Verma", desc: "Applied for Advanced Trading Course • Mumbai", time: "2H AGO", highlight: "Manoj Verma" },
  { icon: CheckSquare, title: "Completed Task: Document Verification", desc: "Cleared KYC for 5 new students", time: "4H AGO" },
  { icon: LogIn, title: "Admin Portal Login", desc: "IP: 192.168.1.45 (Chrome / macOS)", time: "09:12 AM" },
];

const documents = [
  { name: "CA_License_Final.pdf", date: "Verified 12 Oct 2021", status: "verified" },
  { name: "PAN_Card_Copy.pdf", date: "Verified 12 Oct 2021", status: "verified" },
  { name: "GST_Certificate.pdf", date: "Pending Renewal", status: "pending" },
];

const CAProfileDetail = () => {
  const navigate = useNavigate();
  const [showDisableDialog, setShowDisableDialog] = useState(false);

  return (
    <div className="p-6 space-y-6 relative">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[hsl(30,5%,50%)]">
        <button onClick={() => navigate("/admin/ca-management")} className="hover:text-[hsl(30,5%,15%)]">CA Management</button>
        <span>›</span>
        <span className="text-[hsl(30,5%,25%)]">Arjun Sharma's Profile</span>
      </div>

      {/* Profile Header */}
      <div className="flex gap-8">
        <div className="flex-1 flex gap-6 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl bg-[hsl(50,15%,85%)] flex items-center justify-center text-4xl font-extrabold text-[hsl(30,5%,35%)]">AS</div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[hsl(220,60%,30%)] text-white text-[10px] font-bold uppercase">Elite CA</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Arjun Sharma</h1>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-[hsl(38,92%,50%)] fill-current" />
                <span className="text-sm font-bold text-[hsl(38,92%,45%)]">4.92</span>
                <span className="text-xs text-[hsl(30,5%,50%)]">/ 5.0 (214 Reviews)</span>
              </div>
            </div>
            <p className="text-sm text-[hsl(30,5%,45%)] mt-2 max-w-md">
              Senior Chartered Accountant specializing in Corporate Tax Law. Active since Oct 2021. Top 5% in regional lead generation.
            </p>
            <div className="flex gap-3 mt-4">
              <span className="px-3 py-1.5 rounded-lg bg-[hsl(50,15%,90%)] text-xs font-medium text-[hsl(30,5%,35%)] flex items-center gap-1.5"><MapPin className="w-3 h-3" /> ID: TV-880291</span>
              <span className="px-3 py-1.5 rounded-lg bg-[hsl(50,15%,90%)] text-xs font-medium text-[hsl(30,5%,35%)] flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Mumbai, MH</span>
              <span className="px-3 py-1.5 rounded-lg bg-[hsl(72,70%,45%)]/15 text-xs font-medium text-[hsl(72,70%,35%)] flex items-center gap-1.5"><Clock className="w-3 h-3" /> Active 2M Ago</span>
            </div>
          </div>
        </div>

        {/* Admin Controls */}
        <div className="w-64 space-y-3">
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Administrative Control</p>
          <button onClick={() => toast.info("Edit CA Profile")} className="w-full h-12 rounded-xl border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-bold text-[hsl(72,70%,35%)] flex items-center justify-between px-4 hover:bg-[hsl(50,15%,93%)]">
            Edit CA Profile <Edit className="w-4 h-4" />
          </button>
          <button onClick={() => toast.info("Send Notification")} className="w-full h-12 rounded-xl border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-bold text-[hsl(72,70%,35%)] flex items-center justify-between px-4 hover:bg-[hsl(50,15%,93%)]">
            Send Notification <Send className="w-4 h-4" />
          </button>
          <button onClick={() => toast.info("Assign New Task")} className="w-full h-12 rounded-xl border border-[hsl(72,70%,45%)]/30 bg-[hsl(72,70%,45%)]/10 text-sm font-bold text-[hsl(72,70%,35%)] flex items-center justify-between px-4 hover:bg-[hsl(72,70%,45%)]/20">
            Assign New Task <ClipboardList className="w-4 h-4" />
          </button>
          <button onClick={() => setShowDisableDialog(true)} className="w-full h-12 rounded-xl border border-[hsl(0,40%,70%)] bg-[hsl(0,40%,97%)] text-sm font-medium text-[hsl(0,50%,45%)] flex items-center justify-center hover:bg-[hsl(0,40%,93%)]">
            Disable Account
          </button>
        </div>
      </div>

      {/* Performance Benchmarks */}
      <div>
        <h2 className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Performance Benchmarks</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: Users, value: "1,284", label: "Leads Generated", color: "hsl(72,70%,45%)" },
            { icon: UserCheck, value: "412", label: "Students Onboarded", color: "hsl(0,62%,50%)" },
            { icon: BarChart3, value: "32.1%", label: "Conversion Rate", color: "hsl(0,62%,50%)" },
          ].map((m) => (
            <div key={m.label} className="p-5 bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl" style={{ borderLeftWidth: 4, borderLeftColor: m.color }}>
              <m.icon className="w-5 h-5 text-[hsl(30,5%,45%)] mb-3" />
              <p className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">{m.value}</p>
              <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Log + Verification Files */}
      <div className="grid grid-cols-5 gap-6">
        <div className="col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Activity Log</h2>
            <button className="text-xs text-[hsl(72,70%,35%)] font-semibold hover:underline">View Full Audit</button>
          </div>
          <div className="space-y-4">
            {activityLog.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[hsl(50,15%,90%)] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[hsl(30,5%,40%)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)]">{item.title}</p>
                  <p className="text-xs text-[hsl(30,5%,50%)] mt-0.5">{item.desc}</p>
                </div>
                <span className="text-xs text-[hsl(30,5%,55%)] flex-shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <h2 className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Verification Files</h2>
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl divide-y divide-[hsl(50,15%,90%)]">
            {documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[hsl(0,62%,50%)]" />
                  <div>
                    <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{doc.name}</p>
                    <p className={`text-[10px] uppercase tracking-wider font-bold ${doc.status === "verified" ? "text-[hsl(72,70%,35%)]" : "text-[hsl(38,92%,45%)]"}`}>{doc.date}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-[hsl(30,5%,45%)] cursor-pointer hover:text-[hsl(30,5%,15%)]" />
              </div>
            ))}
            <div className="p-4">
              <button className="w-full text-center text-xs font-bold text-[hsl(30,5%,35%)] uppercase tracking-wider hover:text-[hsl(30,5%,15%)]">Request New Documents</button>
            </div>
          </div>
        </div>
      </div>

      {/* Disable Dialog */}
      {showDisableDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden">
            <div className="bg-[hsl(350,60%,92%)] p-5 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-[hsl(38,92%,45%)]" />
              <div>
                <h3 className="text-lg font-bold text-[hsl(30,5%,15%)]">Disable CA Access?</h3>
                <p className="text-xs font-bold text-[hsl(0,62%,50%)] uppercase tracking-wider">Security Warning</p>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-sm text-[hsl(30,5%,35%)]">
                You are about to revoke system access for <strong>Arjun Sharma</strong>. This will immediately freeze all pending client registrations and tax filings associated with this account.
              </p>
              <div className="p-3 bg-[hsl(50,15%,95%)] rounded-lg">
                <p className="text-xs text-[hsl(30,5%,50%)] italic">"This action will be logged in the super-admin audit trail."</p>
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={() => setShowDisableDialog(false)} className="flex-1 h-11 rounded-lg border border-[hsl(50,15%,85%)] text-sm font-medium text-[hsl(30,5%,35%)] hover:bg-[hsl(50,15%,93%)]">Cancel</button>
                <button onClick={() => { setShowDisableDialog(false); toast.error("CA access revoked"); }} className="flex-1 h-11 rounded-lg bg-[hsl(330,70%,40%)] text-white text-sm font-bold uppercase tracking-wider hover:bg-[hsl(330,70%,35%)]">
                  Confirm Revocation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CAProfileDetail;
