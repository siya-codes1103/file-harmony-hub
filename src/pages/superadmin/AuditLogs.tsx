import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Filter, Download, Clock, User, Shield, FileText, Settings } from "lucide-react";

const logs = [
  { action: "Permission Updated", module: "CA Management", actor: "SA_01 (Alex Rivera)", time: "14:32:01 UTC", type: "MODIFY", severity: "info" },
  { action: "Admin Account Created", module: "User Management", actor: "SA_01 (Alex Rivera)", time: "14:15:22 UTC", type: "CREATE", severity: "info" },
  { action: "MFA Disabled Alert", module: "Security", actor: "System Auto-detect", time: "13:50:00 UTC", type: "ALERT", severity: "warning" },
  { action: "Role Assignment Changed", module: "Permission Matrix", actor: "SA_02 (Marcus Thorne)", time: "12:44:11 UTC", type: "MODIFY", severity: "info" },
  { action: "Failed Login Attempt", module: "Authentication", actor: "Unknown (IP: 91.204.1.33)", time: "11:30:55 UTC", type: "SECURITY", severity: "critical" },
  { action: "Bulk Export Generated", module: "Reports", actor: "SA_01 (Alex Rivera)", time: "10:22:00 UTC", type: "EXPORT", severity: "info" },
  { action: "Session Timeout Override", module: "System Settings", actor: "SA_01 (Alex Rivera)", time: "09:15:33 UTC", type: "MODIFY", severity: "warning" },
];

const AuditLogs = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Audit Logs</h1>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Complete activity trail for all administrative operations. Immutable and tamper-proof.</p>
        </div>
        <div className="flex gap-2">
          <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-white text-sm font-medium flex items-center gap-2 text-[hsl(30,5%,25%)]">
            <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="h-9 px-4 rounded-lg border border-[hsl(50,15%,85%)] bg-white text-sm font-medium flex items-center gap-2 text-[hsl(30,5%,25%)]">
            <Download className="w-4 h-4" /> Export
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[hsl(50,15%,88%)]">
              {["ACTION", "MODULE", "PERFORMED BY", "TIMESTAMP", "TYPE"].map(h => (
                <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr key={i} className="border-b border-[hsl(50,15%,93%)] hover:bg-[hsl(50,15%,97%)]">
                <td className="px-4 py-3">
                  <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">{log.action}</p>
                </td>
                <td className="px-4 py-3 text-sm text-[hsl(30,5%,35%)]">{log.module}</td>
                <td className="px-4 py-3 text-sm text-[hsl(30,5%,35%)]">{log.actor}</td>
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-xs text-[hsl(30,5%,50%)]">
                    <Clock className="w-3 h-3" /> {log.time}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded ${
                    log.severity === "critical" ? "bg-red-100 text-red-700" :
                    log.severity === "warning" ? "bg-amber-100 text-amber-700" :
                    "bg-[hsl(50,15%,90%)] text-[hsl(30,5%,35%)]"
                  }`}>{log.type}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AuditLogs;
