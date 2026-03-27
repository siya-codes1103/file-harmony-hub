import { useNavigate } from "react-router-dom";
import { FileText, CheckCircle, Circle, Mail, MoreHorizontal } from "lucide-react";
import { toast } from "sonner";

const deliverables = [
  { text: "Compile list of top 50 underperforming accounts", status: "DONE", done: true },
  { text: "Standardize reporting templates for CA outreach", status: "ACTIVE", done: false },
  { text: "Final executive summary for the Board", status: "PENDING", done: false },
];

const timeline = [
  { label: "Task Created", sub: "Monday, 09:12 AM", active: true },
  { label: "Assignment Accepted", sub: "Monday, 11:45 AM", active: true },
  { label: "Pending Review", sub: "Estimated Thursday", active: false },
];

const history = [
  { time: "2023-10-24 14:22:01", actor: "Admin_S_Chen", action: "Updated Status:", highlight: "In Progress", entity: "Task_7782_Status" },
  { time: "2023-10-24 11:45:30", actor: "Julian_Sterling", action: "Modified Attachment", highlight: "", entity: "Q3_Report_Draft.pdf" },
  { time: "2023-10-23 09:12:15", actor: "System_Automator", action: "Initialized Task", highlight: "", entity: "Task_7782_Root" },
];

const TaskDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[hsl(30,5%,50%)]">
        <button onClick={() => navigate("/admin/task-control")} className="hover:text-[hsl(30,5%,15%)]">Task Control</button>
        <span>›</span>
        <span className="text-[hsl(72,70%,35%)] font-medium">Task Detail</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Weekly Lead Generation Review</h1>
        <div className="flex items-center gap-3">
          <span className="px-4 py-2 rounded-full bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-xs font-bold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[hsl(30,5%,15%)]" /> In Progress
          </span>
          <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main */}
        <div className="col-span-2 space-y-6">
          {/* Task Objective */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6">
            <h3 className="text-sm font-bold text-[hsl(30,5%,15%)] flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4" /> Task Objective
            </h3>
            <p className="text-sm text-[hsl(30,5%,35%)] leading-relaxed">
              Detailed verification of current Q3 lead distribution and conversion metrics across the Midwest regional nodes. Ensure all assigned Campus Ambassadors have updated their weekly throughput logs by EOD Friday.
            </p>
            <p className="text-sm text-[hsl(30,5%,35%)] leading-relaxed mt-3">
              Key focus areas include identifying bottlenecks in the 'Discovery' stage and validating data integrity for the new TradeVed premium tier interest group.
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6">
            <h3 className="text-sm font-bold text-[hsl(30,5%,15%)] flex items-center gap-2 mb-4">
              <span className="text-[hsl(72,70%,35%)]">⚡</span> Key Deliverables
            </h3>
            <div className="divide-y divide-[hsl(50,15%,90%)]">
              {deliverables.map((d, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    {d.done ? (
                      <CheckCircle className="w-5 h-5 text-[hsl(72,70%,45%)]" />
                    ) : (
                      <Circle className="w-5 h-5 text-[hsl(30,5%,60%)]" />
                    )}
                    <span className={`text-sm ${d.done ? "text-[hsl(30,5%,45%)]" : "text-[hsl(30,5%,15%)]"}`}>{d.text}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${d.status === "DONE" ? "text-[hsl(72,70%,35%)]" : d.status === "ACTIVE" ? "text-[hsl(72,70%,45%)]" : "text-[hsl(30,5%,55%)]"}`}>{d.status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modification History */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[hsl(30,5%,15%)]">Modification History</h3>
              <button className="text-xs font-bold text-[hsl(72,70%,35%)] hover:underline">View Full Audit Log</button>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-[hsl(50,15%,88%)]">
                  {["Timestamp", "Actor", "Action", "Entity"].map((h) => (
                    <th key={h} className="py-2 text-left text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {history.map((h, i) => (
                  <tr key={i} className="border-b border-[hsl(50,15%,92%)]">
                    <td className="py-3 text-xs text-[hsl(30,5%,45%)] font-mono">{h.time}</td>
                    <td className="py-3 text-xs font-bold text-[hsl(30,5%,15%)]">{h.actor}</td>
                    <td className="py-3 text-xs text-[hsl(30,5%,35%)]">
                      {h.action} {h.highlight && <span className="text-[hsl(72,70%,35%)]">{h.highlight}</span>}
                    </td>
                    <td className="py-3 text-xs text-[hsl(30,5%,45%)]">{h.entity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Assigned CA */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,55%)] uppercase tracking-wider font-bold mb-4">Assigned Campus Ambassador</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-[hsl(72,70%,45%)]/20 flex items-center justify-center text-lg font-bold text-[hsl(72,70%,30%)]">JS</div>
              <div>
                <p className="text-sm font-bold text-[hsl(30,5%,15%)]">Julian Sterling</p>
                <p className="text-xs text-[hsl(30,5%,50%)]">Lead Senior CA</p>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-xs">
                <span className="text-[hsl(30,5%,50%)]">College</span>
                <span className="font-bold text-[hsl(30,5%,15%)]">Stanford University</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[hsl(30,5%,50%)]">Region</span>
                <span className="font-bold text-[hsl(30,5%,15%)]">Northern California</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-[hsl(30,5%,50%)]">Completion Rate</span>
                <span className="font-bold text-[hsl(72,70%,35%)]">94.2%</span>
              </div>
            </div>
            <button onClick={() => toast.info("Opening message to Julian...")} className="w-full h-10 rounded-lg bg-[hsl(30,5%,15%)] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[hsl(30,5%,25%)]">
              <Mail className="w-4 h-4" /> Contact Julian
            </button>
          </div>

          {/* Task Timeline */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,55%)] uppercase tracking-wider font-bold mb-4">Task Timeline</p>
            <div className="space-y-4">
              {timeline.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${t.active ? "bg-[hsl(72,70%,45%)]" : "bg-[hsl(50,15%,80%)]"}`} />
                  <div>
                    <p className={`text-sm font-bold ${t.active ? "text-[hsl(30,5%,15%)]" : "text-[hsl(30,5%,55%)]"}`}>{t.label}</p>
                    <p className="text-xs text-[hsl(30,5%,50%)]">{t.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetail;
