import { useState } from "react";
import { Search, Plus, Filter, Pencil, ArrowRightLeft, UserPlus, Link2, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import LeadDetailDrawer from "@/components/leads/LeadDetailDrawer";

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

const initialLeads: Lead[] = [
  { id: "1", name: "John Doe", email: "john.doe@example.com", source: "Workshop", interestLevel: "High", status: "NEW", lastContact: "24 Oct, 2023", remark: "Wants to join ..." },
  { id: "2", name: "Sarah Miller", email: "sarah.m@example.com", source: "Social Media", interestLevel: "Medium", status: "CONTACTED", lastContact: "22 Oct, 2023", remark: "Emailed broc..." },
  { id: "3", name: "Rahul Kapoor", email: "rahul.k@university.in", source: "Referral", interestLevel: "High", status: "IN-PROGRESS", lastContact: "20 Oct, 2023", remark: "Discussing pa..." },
  { id: "4", name: "Anita Patel", email: "anita@gmail.com", source: "Workshop", interestLevel: "Low", status: "CONVERTED", lastContact: "18 Oct, 2023", remark: "Enrolled in M..." },
];

const statusColors: Record<string, string> = {
  NEW: "bg-primary/15 text-primary",
  CONTACTED: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  "IN-PROGRESS": "bg-[hsl(var(--info))]/15 text-[hsl(var(--info))]",
  CONVERTED: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",
  LOST: "bg-destructive/15 text-destructive",
};

const interestColors: Record<string, string> = {
  High: "text-[hsl(var(--success))]",
  Medium: "text-[hsl(var(--warning))]",
  Low: "text-muted-foreground",
};

const Leads = () => {
  const [leads] = useState<Lead[]>(initialLeads);
  const [search, setSearch] = useState("");
  const [showEmpty, setShowEmpty] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  const filtered = leads.filter((l) =>
    !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase())
  );

  const displayLeads = showEmpty ? [] : filtered;

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Leads Management</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage and track your campus prospects efficiently.</p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads by name or email..."
            className="w-full h-10 pl-9 pr-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="font-medium">Filters:</span>
        </div>
        {["All Sources", "All Status", "Interest Level", "Date Range"].map((f) => (
          <button key={f} className="h-9 px-3 rounded-lg border border-border bg-card text-xs text-foreground hover:bg-accent transition-colors">
            {f} ▾
          </button>
        ))}
        <button className="text-xs text-primary font-medium hover:underline ml-auto">Clear All</button>
      </div>

      {/* Table or Empty State */}
      {displayLeads.length > 0 ? (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                {["NAME", "SOURCE", "INTEREST LEVEL", "STATUS", "LAST CONTACT", "REMARK", "ACTIONS"].map((h) => (
                  <th key={h} className="text-left text-[11px] font-bold text-primary uppercase tracking-wider px-5 py-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {displayLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-accent/50 transition-colors cursor-pointer" onClick={() => setSelectedLead(lead)}>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium text-foreground">
                        {lead.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{lead.name}</p>
                        <p className="text-xs text-muted-foreground">{lead.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground">{lead.source}</td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium flex items-center gap-1 ${interestColors[lead.interestLevel]}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current" /> {lead.interestLevel}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${statusColors[lead.status]}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs text-muted-foreground">{lead.lastContact}</td>
                  <td className="px-5 py-3 text-xs text-muted-foreground max-w-[120px] truncate">{lead.remark}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="text-muted-foreground hover:text-primary transition-colors">
                        <ArrowRightLeft className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <div className="px-5 py-3 border-t border-border flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Showing 1 to {displayLeads.length} of 48 leads</span>
            <div className="flex items-center gap-1">
              <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronLeft className="w-3 h-3" /></button>
              {[1, 2, 3, "...", 12].map((p, i) => (
                <button
                  key={i}
                  className={`w-7 h-7 rounded-md text-xs font-medium flex items-center justify-center ${
                    p === 1 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-accent"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button className="w-7 h-7 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:bg-accent"><ChevronRight className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-card border border-border rounded-xl p-16 flex flex-col items-center text-center space-y-6">
          <div className="w-28 h-28 rounded-2xl bg-secondary border border-border flex items-center justify-center">
            <UserPlus className="w-12 h-12 text-primary/60" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground">No leads found yet.</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Start building your pipeline by adding your first lead or sharing your referral link with students. Your growth starts here.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => toast.info("Add Lead form coming soon")}
              className="h-10 px-5 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add New Lead
            </button>
            <button
              onClick={() => toast.info("Referral link copied!")}
              className="h-10 px-5 rounded-lg border border-border bg-card text-foreground text-sm font-medium flex items-center gap-2 hover:bg-accent transition-colors"
            >
              <Link2 className="w-4 h-4" /> Get Referral Link
            </button>
          </div>
          <p className="text-[10px] text-primary uppercase tracking-widest font-bold">
            Quick tip: Leads you add appear here in real-time
          </p>
        </div>
      )}

      {/* Lead Detail Drawer */}
      {selectedLead && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelectedLead(null)} />
          <LeadDetailDrawer lead={selectedLead} onClose={() => setSelectedLead(null)} />
        </>
      )}
    </div>
  );
};

export default Leads;
