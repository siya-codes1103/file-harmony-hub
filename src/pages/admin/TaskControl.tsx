import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, Users, Eye, Zap, Plus, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const overdueTasks = [
  {
    id: "TV-8829", title: "Annual Compliance Audit: Q3", delay: "48h 12m",
    ca: "Vikram Malhotra", due: "Oct 24, 2023", account: "Zenith Global",
    history: [
      { label: "Created Oct 10", done: true },
      { label: "Reminder Sent Oct 22", done: true },
      { label: "Missed Oct 24", done: false, error: true },
    ],
    actions: ["Reschedule Meeting", "Reassign CA"],
  },
  {
    id: "TV-9011", title: "Document Verification: Apex Corp", delay: "12h 45m",
    ca: "Sanya Singh", due: "Oct 25, 2023", account: "Apex Corp",
    history: [],
    actions: ["Immediate Reassign", "View Files"],
  },
];

const lagging = [
  { initials: "VM", name: "Vikram M.", overdue: "2 Overdue" },
  { initials: "SS", name: "Sanya S.", overdue: "1 Overdue" },
];

const TaskControl = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] text-[hsl(0,62%,50%)] font-bold uppercase tracking-wider mb-1">Urgency Alert</p>
          <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Overdue Task Center</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-2 max-w-xl">Action required for 3 critical items that have surpassed their service level agreements. High priority rescheduling or reassignment is advised.</p>
        </div>
        <div className="text-right">
          <p className="text-5xl font-extrabold text-[hsl(0,62%,50%)]">03</p>
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Pending Criticals</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Tasks */}
        <div className="col-span-2 space-y-6">
          {overdueTasks.map((task) => (
            <div key={task.id} className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-6 cursor-pointer hover:shadow-md transition-shadow" onClick={() => navigate(`/admin/task-detail/${task.id}`)}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="px-2.5 py-1 rounded-md bg-[hsl(0,62%,50%)] text-white text-[10px] font-bold uppercase">Overdue</span>
                    <span className="text-xs text-[hsl(30,5%,50%)]">TASK ID: {task.id}</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">{task.title}</h3>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-extrabold text-[hsl(0,62%,50%)]">{task.delay}</p>
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Delay Duration</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-[hsl(50,15%,93%)] rounded-lg">
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Assigned CA</p>
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">{task.ca}</p>
                </div>
                <div className="p-3 bg-[hsl(50,15%,93%)] rounded-lg">
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Due Date</p>
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">{task.due}</p>
                </div>
                <div className="p-3 bg-[hsl(50,15%,93%)] rounded-lg">
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Account</p>
                  <p className="text-sm font-bold text-[hsl(30,5%,15%)] mt-1">{task.account}</p>
                </div>
              </div>

              {task.history.length > 0 && (
                <div className="mb-4">
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-3">Task History</p>
                  <div className="flex items-center gap-4">
                    {task.history.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${h.error ? "bg-[hsl(0,62%,50%)]" : h.done ? "bg-[hsl(72,70%,45%)]" : "bg-[hsl(50,15%,85%)]"}`}>
                          {h.done && !h.error && <span className="text-white text-[8px]">✓</span>}
                          {h.error && <span className="text-white text-[8px]">!</span>}
                        </div>
                        <span className={`text-xs ${h.error ? "text-[hsl(0,62%,50%)] font-bold" : "text-[hsl(30,5%,45%)]"}`}>{h.label}</span>
                        {i < task.history.length - 1 && <div className="w-8 h-px bg-[hsl(50,15%,80%)]" />}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                {task.actions.map((action) => (
                  <button key={action} onClick={(e) => { e.stopPropagation(); toast.info(`${action} initiated`); }} className="h-10 px-5 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] flex items-center gap-2 hover:bg-[hsl(50,15%,93%)]">
                    {action.includes("Reschedule") && <Calendar className="w-4 h-4" />}
                    {action.includes("Reassign") && <Users className="w-4 h-4" />}
                    {action.includes("View") && <Eye className="w-4 h-4" />}
                    {action.includes("Immediate") && <Zap className="w-4 h-4" />}
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Risk Assessment */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Risk Assessment</p>
            <div className="bg-[hsl(50,15%,93%)] rounded-lg p-4 mb-2">
              <p className="text-4xl font-extrabold text-[hsl(0,62%,50%)]">92<span className="text-lg">%</span></p>
              <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Urgency Index</p>
            </div>
            <div className="flex gap-1 h-16 items-end">
              {[40, 60, 80, 55, 90, 70, 85].map((h, i) => (
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, backgroundColor: h > 75 ? "hsl(72,70%,45%)" : "hsl(50,15%,80%)" }} />
              ))}
            </div>
          </div>

          {/* Lagging Performance */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-4">Lagging Performance</p>
            <div className="space-y-3">
              {lagging.map((l) => (
                <div key={l.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center text-[10px] font-bold text-[hsl(30,5%,35%)]">{l.initials}</div>
                    <span className="text-sm font-bold text-[hsl(30,5%,15%)]">{l.name}</span>
                  </div>
                  <span className="text-xs font-bold text-[hsl(0,62%,50%)]">{l.overdue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* System Recommendation */}
          <div className="bg-[hsl(30,5%,15%)] rounded-xl p-5 text-white">
            <p className="text-[10px] text-[hsl(50,15%,70%)] uppercase tracking-wider font-bold mb-3">System Recommendation</p>
            <p className="text-sm">Available CA <strong>"Rohan Mehra"</strong> has 0 pending tasks. Reassigning TV-8829 would reduce delay by estimated 18 hours.</p>
            <button onClick={() => toast.success("AI Reassignment executed")} className="mt-4 w-full h-10 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-sm font-bold hover:bg-[hsl(72,70%,40%)]">
              Execute AI Reassignment
            </button>
          </div>
        </div>
      </div>

      {/* New Task Button */}
      <button onClick={() => toast.info("Creating new task...")} className="fixed bottom-8 left-8 h-12 px-6 rounded-xl bg-[hsl(30,5%,15%)] text-white text-sm font-bold flex items-center gap-2 hover:bg-[hsl(30,5%,25%)] z-40">
        <Plus className="w-4 h-4" /> New Task
      </button>
    </div>
  );
};

export default TaskControl;
