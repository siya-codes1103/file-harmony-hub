import { Activity, Server, Database, Shield, CheckCircle, AlertTriangle } from "lucide-react";

const metrics = [
  { label: "API Uptime", value: "99.98%", status: "healthy", icon: Server },
  { label: "Database Latency", value: "12ms", status: "healthy", icon: Database },
  { label: "Auth Service", value: "Active", status: "healthy", icon: Shield },
  { label: "CDN Status", value: "Degraded", status: "warning", icon: Activity },
];

const nodes = [
  { name: "US-EAST-ALPH-04", status: "Operational", cpu: 23, memory: 45 },
  { name: "EU-WEST-BETA-02", status: "Operational", cpu: 31, memory: 52 },
  { name: "AP-SOUTH-GAMMA-01", status: "Warning", cpu: 78, memory: 89 },
  { name: "US-WEST-DELTA-03", status: "Operational", cpu: 15, memory: 38 },
];

const SystemHealth = () => (
  <div className="p-6 space-y-6">
    <div>
      <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">System Health</h1>
      <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Real-time infrastructure monitoring and cluster status.</p>
    </div>

    <div className="grid grid-cols-4 gap-4">
      {metrics.map((m, i) => (
        <div key={i} className={`bg-white rounded-xl border p-5 ${m.status === "warning" ? "border-amber-300" : "border-[hsl(50,15%,88%)]"}`}>
          <div className="flex items-center justify-between mb-2">
            <m.icon className="w-5 h-5 text-[hsl(30,5%,45%)]" />
            {m.status === "healthy" ? (
              <CheckCircle className="w-4 h-4 text-[hsl(72,70%,35%)]" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            )}
          </div>
          <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">{m.label}</p>
          <p className="text-2xl font-extrabold text-[hsl(30,5%,15%)] mt-1">{m.value}</p>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-xl border border-[hsl(50,15%,88%)]">
      <div className="p-4 border-b border-[hsl(50,15%,88%)]">
        <h2 className="text-sm font-extrabold text-[hsl(30,5%,15%)] uppercase tracking-wider">Cluster Nodes</h2>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[hsl(50,15%,88%)]">
            {["NODE", "STATUS", "CPU", "MEMORY"].map(h => (
              <th key={h} className="text-left px-4 py-3 text-[10px] font-bold text-[hsl(30,5%,50%)] uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {nodes.map((n, i) => (
            <tr key={i} className="border-b border-[hsl(50,15%,93%)]">
              <td className="px-4 py-3 text-sm font-semibold text-[hsl(30,5%,15%)]">{n.name}</td>
              <td className="px-4 py-3">
                <span className={`text-xs font-bold flex items-center gap-1.5 ${n.status === "Operational" ? "text-[hsl(72,70%,35%)]" : "text-amber-600"}`}>
                  <span className={`w-2 h-2 rounded-full ${n.status === "Operational" ? "bg-[hsl(72,70%,45%)]" : "bg-amber-500"}`} />
                  {n.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-[hsl(50,15%,90%)] rounded-full">
                    <div className={`h-full rounded-full ${n.cpu > 70 ? "bg-amber-500" : "bg-[hsl(72,70%,45%)]"}`} style={{ width: `${n.cpu}%` }} />
                  </div>
                  <span className="text-xs text-[hsl(30,5%,50%)]">{n.cpu}%</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-[hsl(50,15%,90%)] rounded-full">
                    <div className={`h-full rounded-full ${n.memory > 70 ? "bg-amber-500" : "bg-[hsl(72,70%,45%)]"}`} style={{ width: `${n.memory}%` }} />
                  </div>
                  <span className="text-xs text-[hsl(30,5%,50%)]">{n.memory}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SystemHealth;
