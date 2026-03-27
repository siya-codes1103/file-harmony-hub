import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Edit, AlertTriangle, Copy, FileText, Code, CheckCircle, Download, Mail, UserPlus, XCircle, Lock, Clock } from "lucide-react";
import { toast } from "sonner";

const errorLogs = [
  { icon: AlertTriangle, iconColor: "hsl(38,92%,45%)", title: "Missing data fields", id: "ID: ERR-001", desc: "The 'Phone Number' field is null. Required for regional compliance and CA allocation logic.", action: "FIX NOW", actionColor: "hsl(72,70%,35%)" },
  { icon: Copy, iconColor: "hsl(220,60%,50%)", title: "Duplicate entries", id: "ID: ERR-042", desc: "Tax ID 'ABCDE1234F' already exists for Lead TV-441-MX. Potential duplicate lead or fraudulent entry.", action: "MERGE LEADS", actionColor: "hsl(72,70%,35%)" },
  { icon: Code, iconColor: "hsl(0,62%,50%)", title: "Invalid format errors", id: "ID: ERR-019", desc: "The string 'invalid_ext' does not match the required RFC 5322 email validation pattern.", action: "EDIT FORMAT", actionColor: "hsl(72,70%,35%)" },
];

const metadata = [
  { label: "Source IP", value: "192.168.1.104" },
  { label: "Fingerprint", value: "SHA-256:7a8b..." },
  { label: "API Version", value: "v4.2.0-stable" },
  { label: "Referral ID", value: "#REF-NONE" },
];

const ErrorResolution = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs">
        <button onClick={() => navigate("/admin/lead-management")} className="text-[hsl(30,5%,50%)] hover:text-[hsl(30,5%,15%)] font-bold uppercase tracking-wider">Lead Management</button>
        <span className="text-[hsl(30,5%,50%)]">/</span>
        <span className="text-[hsl(0,62%,50%)] font-bold uppercase tracking-wider">Error Resolution</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Lead Error Resolution Panel</h1>
        <div className="flex gap-3">
          <button onClick={() => toast.info("Reassigning CA...")} className="h-11 px-5 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
            <UserPlus className="w-4 h-4" /> Reassign CA
          </button>
          <button onClick={() => toast.error("Lead rejected")} className="h-11 px-5 rounded-lg bg-[hsl(0,62%,50%)] text-white text-sm font-bold flex items-center gap-2 hover:bg-[hsl(0,62%,45%)]">
            <XCircle className="w-4 h-4" /> Reject Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Lead Info Card */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(50,15%,90%)] flex items-center justify-center">
                  <User className="w-6 h-6 text-[hsl(30,5%,45%)]" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[hsl(30,5%,15%)]">Lead ID: TV-892-LQ</h2>
                  <p className="text-xs text-[hsl(30,5%,50%)]">Acquisition Date: Oct 24, 2023 | Source: Premium Partner API</p>
                </div>
              </div>
              <button onClick={() => toast.info("Editing lead data...")} className="h-10 px-5 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold flex items-center gap-2 hover:bg-[hsl(72,70%,40%)]">
                <Edit className="w-4 h-4" /> Edit Lead Data
              </button>
            </div>

            <div className="flex gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-md bg-[hsl(0,62%,50%)]/10 text-[hsl(0,62%,50%)] text-[10px] font-bold uppercase">Critical Errors (3)</span>
              <span className="px-2.5 py-1 rounded-md bg-[hsl(38,92%,50%)]/10 text-[hsl(38,92%,45%)] text-[10px] font-bold uppercase">High Value</span>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Full Name</p>
                <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">Robert J. Oppenheimer</p>
              </div>
              <div>
                <p className="text-[10px] text-[hsl(0,62%,50%)] uppercase tracking-wider font-bold">Email Address</p>
                <p className="text-sm font-bold text-[hsl(0,62%,50%)] mt-1 flex items-center gap-1">robert.opp@invalid_ext <AlertTriangle className="w-3 h-3" /></p>
              </div>
              <div>
                <p className="text-[10px] text-[hsl(0,62%,50%)] uppercase tracking-wider font-bold">Phone Number</p>
                <p className="text-sm font-bold text-[hsl(0,62%,50%)] mt-1 flex items-center gap-1">MISSING FIELD <AlertTriangle className="w-3 h-3" /></p>
              </div>
              <div>
                <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Investment Goal</p>
                <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">Wealth Preservation</p>
              </div>
              <div>
                <p className="text-[10px] text-[hsl(0,62%,50%)] uppercase tracking-wider font-bold">Tax ID / PAN</p>
                <p className="text-sm font-bold text-[hsl(0,62%,50%)] mt-1 flex items-center gap-1">ABCDE1234F (DUPLICATE) <Copy className="w-3 h-3 cursor-pointer" /></p>
              </div>
              <div>
                <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Lead Status</p>
                <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">Flagged for Review</p>
              </div>
            </div>
          </div>

          {/* Error Log */}
          <div>
            <h3 className="text-lg font-extrabold text-[hsl(30,5%,15%)] mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[hsl(30,5%,15%)] rounded-full" />
              Detailed Error Log
            </h3>
            <div className="space-y-4">
              {errorLogs.map((err, i) => (
                <div key={i} className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <err.icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: err.iconColor }} />
                      <div>
                        <div className="flex items-center gap-3">
                          <h4 className="text-sm font-bold" style={{ color: err.iconColor }}>{err.title}</h4>
                          <span className="text-[10px] text-[hsl(30,5%,55%)]">{err.id}</span>
                        </div>
                        <p className="text-xs text-[hsl(30,5%,45%)] mt-1 max-w-lg">{err.desc}</p>
                      </div>
                    </div>
                    <button onClick={() => toast.info(`${err.action} triggered`)} className="text-xs font-bold uppercase tracking-wider" style={{ color: err.actionColor }}>{err.action}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assigned CA */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Assigned Client Advisor</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[hsl(72,70%,45%)]/20 flex items-center justify-center text-sm font-bold text-[hsl(72,70%,30%)]">CA</div>
              <div>
                <p className="text-sm font-bold text-[hsl(30,5%,15%)]">Marcus Thorne</p>
                <p className="text-xs text-[hsl(30,5%,50%)]">Tier 1 Senior Advisor</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-[hsl(30,5%,50%)]">Success Rate</span>
              <span className="text-sm font-bold text-[hsl(30,5%,15%)]">94.2%</span>
            </div>
            <div className="h-2 rounded-full bg-[hsl(50,15%,85%)] mb-4">
              <div className="h-full rounded-full bg-[hsl(72,70%,45%)]" style={{ width: "94.2%" }} />
            </div>
            <button onClick={() => toast.info("Opening message composer...")} className="w-full h-10 rounded-lg border border-[hsl(50,15%,85%)] text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">
              Message Advisor
            </button>
          </div>

          {/* Final Decisions */}
          <div className="bg-[hsl(50,15%,90%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Final Decisions</p>
            <button onClick={() => { toast.success("Lead approved manually"); navigate("/admin/lead-management"); }} className="w-full h-12 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)]">
              <CheckCircle className="w-4 h-4" /> Approve Manually
            </button>
            <p className="text-[10px] text-[hsl(30,5%,50%)] mt-3 text-center">Manual approval will bypass all current error flags and mark lead as active.</p>
          </div>

          {/* Lead Metadata */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Lead Metadata</p>
            <div className="space-y-3">
              {metadata.map((m) => (
                <div key={m.label} className="flex justify-between">
                  <span className="text-xs text-[hsl(30,5%,50%)]">{m.label}</span>
                  <span className="text-xs font-bold text-[hsl(30,5%,15%)] font-mono">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-[hsl(50,15%,88%)]">
        <div className="flex items-center gap-4 text-xs text-[hsl(30,5%,55%)]">
          <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> Data Encrypted</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Last changed: 12 minutes ago by System</span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => toast.info("Downloading log...")} className="text-xs font-bold text-[hsl(30,5%,35%)] uppercase tracking-wider hover:text-[hsl(30,5%,15%)]">Download Log</button>
          <button onClick={() => toast.info("Sending email report...")} className="text-xs font-bold text-[hsl(30,5%,35%)] uppercase tracking-wider hover:text-[hsl(30,5%,15%)]">Email Report</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorResolution;
