import { X, CheckCircle, Circle, Phone, Mail, ArrowRightLeft, MessageSquare, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  interestLevel: "High" | "Medium" | "Low";
  status: "NEW" | "CONTACTED" | "IN-PROGRESS" | "CONVERTED" | "LOST";
  lastContact: string;
  remark: string;
}

interface LeadDetailDrawerProps {
  lead: Lead;
  onClose: () => void;
}

const timeline = [
  { label: "New Lead Received", date: "Oct 12, 2023 • 10:30 AM", done: true },
  { label: "Contacted", date: "Oct 14, 2023 • 02:15 PM", done: true },
  { label: "In Progress", date: "Current Stage", done: false, current: true },
];

const LeadDetailDrawer = ({ lead, onClose }: LeadDetailDrawerProps) => {
  return (
    <div className="fixed inset-y-0 right-0 w-full max-w-md bg-card border-l border-border shadow-2xl z-50 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-5 flex items-start gap-4 border-b border-border">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-lg font-bold text-foreground shrink-0">
          {lead.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-primary uppercase tracking-wider font-bold">Lead Profile</p>
          <h2 className="text-xl font-bold text-foreground">{lead.name}</h2>
          <p className="text-sm text-primary">{lead.email}</p>
          <p className="text-xs text-muted-foreground">+91 98765 43210</p>
        </div>
        <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 p-5 space-y-6">
        {/* Source & Interest */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary/50 border border-border rounded-lg p-3">
            <p className="text-[10px] text-primary uppercase tracking-wider font-bold">Source</p>
            <p className="text-sm font-bold text-foreground mt-1 flex items-center gap-1.5">✅ {lead.source}</p>
          </div>
          <div className="bg-secondary/50 border border-border rounded-lg p-3">
            <p className="text-[10px] text-primary uppercase tracking-wider font-bold">Interest Level</p>
            <p className="text-sm font-bold text-foreground mt-1 flex items-center gap-1.5">⚡ {lead.interestLevel.toUpperCase()}</p>
          </div>
        </div>

        {/* Status Timeline */}
        <div>
          <h3 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 mb-3">→→ Status Timeline</h3>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {t.done ? (
                    <CheckCircle className="w-5 h-5 text-[hsl(var(--success))] shrink-0" />
                  ) : (
                    <Circle className="w-5 h-5 text-primary shrink-0" />
                  )}
                  {i < timeline.length - 1 && <div className="w-0.5 h-8 bg-border" />}
                </div>
                <div className="pb-4">
                  <p className={`text-sm font-medium ${t.current ? "text-primary" : "text-foreground"}`}>{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact History */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5">🕐 Contact History</h3>
            <button className="text-[10px] text-primary font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-2">
            <div className="bg-secondary/50 border border-border rounded-lg p-3 flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Outbound Call - 05m 12s</p>
                <p className="text-xs text-muted-foreground">Yesterday at 11:00 AM by CA Ananya</p>
              </div>
            </div>
            <div className="bg-secondary/50 border border-border rounded-lg p-3 flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">Follow-up Email Sent</p>
                <p className="text-xs text-muted-foreground">Oct 15, 2023 at 04:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Remarks Log */}
        <div>
          <h3 className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1.5 mb-3">📝 Remarks Log</h3>
          <div className="bg-secondary/50 border-l-2 border-primary rounded-lg p-4">
            <p className="text-sm text-foreground leading-relaxed">"Client is interested in GST filing and personal income tax advisory for the current fiscal year. Highly responsive during the call."</p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Note by Admin</p>
              <p className="text-[10px] text-muted-foreground">2 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-5 border-t border-border space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => toast.info("Update status coming soon")} className="h-10 rounded-lg bg-primary/15 text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/25 transition-colors">
            <ArrowRightLeft className="w-4 h-4" /> Update Status
          </button>
          <button onClick={() => toast.info("Add remark coming soon")} className="h-10 rounded-lg bg-primary/15 text-primary text-sm font-medium flex items-center justify-center gap-2 hover:bg-primary/25 transition-colors">
            <MessageSquare className="w-4 h-4" /> Add Remark
          </button>
        </div>
        <button onClick={() => toast.error("Delete lead coming soon")} className="w-full h-10 rounded-lg border border-destructive text-destructive text-sm font-medium flex items-center justify-center gap-2 hover:bg-destructive/10 transition-colors">
          <Trash2 className="w-4 h-4" /> Delete Lead
        </button>
      </div>
    </div>
  );
};

export default LeadDetailDrawer;
