import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, FileText, CheckSquare, Bell, Wallet, Settings, Shield,
  Search, HelpCircle, User, ChevronLeft, ChevronRight
} from "lucide-react";

const adminNavItems = [
  { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/admin/ca-management", icon: Users, label: "CA Management" },
  { to: "/admin/student-tracking", icon: Users, label: "Student Tracking" },
  { to: "/admin/lead-management", icon: FileText, label: "Lead Management" },
  { to: "/admin/task-control", icon: CheckSquare, label: "Task Control" },
  { to: "/admin/notifications", icon: Bell, label: "Notifications" },
  { to: "/admin/withdrawals", icon: Wallet, label: "Withdrawals" },
  { to: "/admin/settings", icon: Settings, label: "Settings" },
  { to: "/admin/roles", icon: Shield, label: "Admin Roles" },
];

const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[hsl(50,30%,95%)]">
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-16" : "w-56"} flex-shrink-0 bg-[hsl(50,20%,97%)] border-r border-[hsl(50,15%,88%)] flex flex-col transition-all duration-200`}>
        <div className="h-14 flex items-center px-4 gap-2 border-b border-[hsl(50,15%,88%)]">
          <div className="flex-shrink-0">
            <span className="text-[hsl(30,5%,15%)] font-extrabold text-base">TradeVed</span>
          </div>
          {!collapsed && (
            <div className="ml-1">
              <span className="text-[hsl(30,5%,45%)] text-[10px] uppercase tracking-wider font-semibold">Admin Console</span>
            </div>
          )}
        </div>

        <nav className="flex-1 py-3 px-2 space-y-1">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 h-10 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)]"
                    : "text-[hsl(30,5%,35%)] hover:bg-[hsl(50,15%,90%)] hover:text-[hsl(30,5%,15%)]"
                }`
              }
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-[hsl(50,15%,88%)]">
          {!collapsed && (
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center">
                <User className="w-4 h-4 text-[hsl(30,5%,45%)]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-[hsl(30,5%,15%)] truncate">Alex Rivera</p>
                <p className="text-[10px] text-[hsl(30,5%,50%)] truncate">Super Admin</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-2 w-full h-8 rounded-md flex items-center justify-center text-[hsl(30,5%,50%)] hover:text-[hsl(30,5%,15%)] hover:bg-[hsl(50,15%,90%)] transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 border-b border-[hsl(50,15%,88%)] flex items-center justify-between px-6 bg-[hsl(50,20%,97%)]">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
            <input
              type="text"
              placeholder="Search data points, CAs, or students..."
              className="w-full h-9 pl-9 pr-4 rounded-lg bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,88%)] text-sm text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,55%)] focus:outline-none focus:ring-1 focus:ring-[hsl(72,70%,45%)]"
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)] transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)] transition-colors">
              <HelpCircle className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <span className="text-sm font-medium text-[hsl(30,5%,15%)]">Admin Profile</span>
              <div className="w-9 h-9 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center">
                <User className="w-4 h-4 text-[hsl(30,5%,45%)]" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-[hsl(50,30%,95%)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
