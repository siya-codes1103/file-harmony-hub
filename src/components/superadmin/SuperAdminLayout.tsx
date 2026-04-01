import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, Grid3X3, ScrollText, Activity, MessageSquare,
  Bell, Settings, User, ChevronLeft, ChevronRight, Search, HelpCircle, LogOut, Shield
} from "lucide-react";

const superAdminNavItems = [
  { to: "/superadmin/admin-overview", icon: LayoutDashboard, label: "Admin Overview" },
  { to: "/superadmin/user-management", icon: Users, label: "User Management" },
  { to: "/superadmin/permission-matrix", icon: Grid3X3, label: "Permission Matrix" },
  { to: "/superadmin/audit-logs", icon: ScrollText, label: "Audit Logs" },
  { to: "/superadmin/feedback-states", icon: MessageSquare, label: "Feedback States" },
  { to: "/superadmin/system-health", icon: Activity, label: "System Health" },
];

const SuperAdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[hsl(50,30%,95%)]">
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-16" : "w-56"} flex-shrink-0 bg-[hsl(50,20%,97%)] border-r border-[hsl(50,15%,88%)] flex flex-col transition-all duration-200`}>
        <div className="h-14 flex items-center px-4 gap-2 border-b border-[hsl(50,15%,88%)]">
          {!collapsed ? (
            <div>
              <p className="text-[hsl(30,5%,15%)] font-extrabold text-sm leading-tight">Control Center</p>
              <p className="text-[hsl(30,5%,50%)] text-[9px] uppercase tracking-wider font-semibold">Super Admin Access</p>
            </div>
          ) : (
            <Shield className="w-5 h-5 text-[hsl(72,70%,35%)]" />
          )}
        </div>

        {!collapsed && (
          <div className="px-4 py-3 border-b border-[hsl(50,15%,88%)]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[hsl(72,70%,45%)] flex items-center justify-center">
                <Shield className="w-4 h-4 text-[hsl(30,5%,10%)]" />
              </div>
              <div>
                <p className="text-xs font-bold text-[hsl(72,70%,35%)]">Super Admin</p>
                <p className="text-[9px] text-[hsl(30,5%,50%)] uppercase tracking-wider">TradeVed Control</p>
              </div>
            </div>
          </div>
        )}

        <nav className="flex-1 py-3 px-2 space-y-1">
          {superAdminNavItems.map((item) => (
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

        <div className="p-3 border-t border-[hsl(50,15%,88%)] space-y-1">
          {!collapsed && (
            <>
              <button
                onClick={() => navigate("/superadmin/user-management")}
                className="w-full h-10 rounded-lg bg-[hsl(72,70%,45%)] text-[hsl(30,5%,10%)] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[hsl(72,70%,40%)] transition-colors"
              >
                + New Admin
              </button>
              <button className="flex items-center gap-3 w-full h-9 px-3 text-sm text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)] transition-colors">
                <HelpCircle className="w-4 h-4" /> Help Center
              </button>
              <button
                onClick={() => navigate("/admin/login")}
                className="flex items-center gap-3 w-full h-9 px-3 text-sm text-red-500 hover:text-red-700 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full h-8 rounded-md flex items-center justify-center text-[hsl(30,5%,50%)] hover:text-[hsl(30,5%,15%)] hover:bg-[hsl(50,15%,90%)] transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-14 border-b border-[hsl(50,15%,88%)] flex items-center justify-between px-6 bg-[hsl(50,20%,97%)]">
          <p className="text-lg font-extrabold text-[hsl(30,5%,15%)]">TradeVed SuperAdmin</p>
          <div className="flex items-center gap-4">
            <div className="relative max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[hsl(30,5%,55%)]" />
              <input
                type="text"
                placeholder="Search parameters..."
                className="w-full h-9 pl-9 pr-4 rounded-lg bg-[hsl(50,15%,93%)] border border-[hsl(50,15%,88%)] text-sm text-[hsl(30,5%,15%)] placeholder:text-[hsl(30,5%,55%)] focus:outline-none focus:ring-1 focus:ring-[hsl(72,70%,45%)]"
              />
            </div>
            <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]">
              <Bell className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full border border-[hsl(50,15%,85%)] flex items-center justify-center text-[hsl(30,5%,45%)] hover:text-[hsl(30,5%,15%)]">
              <Settings className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 ml-2">
              <div className="text-right">
                <p className="text-sm font-semibold text-[hsl(30,5%,15%)]">Alexander Pierce</p>
                <p className="text-[10px] text-[hsl(30,5%,50%)]">Master Admin</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[hsl(50,15%,85%)] flex items-center justify-center">
                <User className="w-4 h-4 text-[hsl(30,5%,45%)]" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto bg-[hsl(50,30%,95%)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SuperAdminLayout;
