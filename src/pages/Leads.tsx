import { useState } from "react";
import { Search, Plus, Filter, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

interface Lead {
  id: string;
  name: string;
  email: string;
  university: string;
  status: "New" | "Contacted" | "In Progress" | "Converted" | "Lost";
  date: string;
}

const initialLeads: Lead[] = [
  { id: "1", name: "Priya Sharma", email: "priya@iitd.ac.in", university: "IIT Delhi", status: "Converted", date: "Mar 14, 2024" },
  { id: "2", name: "Rahul Verma", email: "rahul@bits.ac.in", university: "BITS Pilani", status: "In Progress", date: "Mar 13, 2024" },
  { id: "3", name: "Sneha Gupta", email: "sneha@nitt.edu", university: "NIT Trichy", status: "New", date: "Mar 12, 2024" },
  { id: "4", name: "Arjun Patel", email: "arjun@iima.ac.in", university: "IIM Ahmedabad", status: "Converted", date: "Mar 11, 2024" },
  { id: "5", name: "Meera Nair", email: "meera@vit.ac.in", university: "VIT Vellore", status: "Contacted", date: "Mar 10, 2024" },
  { id: "6", name: "Vikram Singh", email: "vikram@du.ac.in", university: "Delhi University", status: "Lost", date: "Mar 09, 2024" },
];

const statusColors: Record<string, string> = {
  New: "bg-primary/15 text-primary",
  Contacted: "bg-[hsl(var(--info))]/15 text-[hsl(var(--info))]",
  "In Progress": "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
  Converted: "bg-[hsl(var(--success))]/15 text-[hsl(var(--success))]",
  Lost: "bg-destructive/15 text-destructive",
};

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("All");

  const filtered = leads.filter((l) => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.university.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filterStatus === "All" || l.status === filterStatus;
    return matchSearch && matchFilter;
  });

  const handleDelete = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
    toast.success("Lead removed");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Leads</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage and track your campus referrals.</p>
        </div>
        <button
          onClick={() => toast.info("Add Lead form coming soon")}
          className="h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Lead
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search leads..."
            className="w-full h-9 pl-9 pr-4 rounded-lg bg-input border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div className="flex items-center gap-1">
          <Filter className="w-4 h-4 text-muted-foreground" />
          {["All", "New", "Contacted", "In Progress", "Converted", "Lost"].map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`h-7 px-3 rounded-md text-xs font-medium transition-colors ${
                filterStatus === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Name</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">University</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Status</th>
              <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">Date</th>
              <th className="w-10 px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filtered.map((lead) => (
              <tr key={lead.id} className="hover:bg-accent/50 transition-colors">
                <td className="px-5 py-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">{lead.name}</p>
                    <p className="text-xs text-muted-foreground">{lead.email}</p>
                  </div>
                </td>
                <td className="px-5 py-3 text-sm text-muted-foreground">{lead.university}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusColors[lead.status]}`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-xs text-muted-foreground">{lead.date}</td>
                <td className="px-5 py-3">
                  <button onClick={() => handleDelete(lead.id)} className="text-muted-foreground hover:text-destructive">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-sm text-muted-foreground">No leads found.</div>
        )}
      </div>

      <p className="text-xs text-muted-foreground">{filtered.length} lead{filtered.length !== 1 ? "s" : ""}</p>
    </div>
  );
};

export default Leads;
