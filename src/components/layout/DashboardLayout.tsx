import { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, GraduationCap, Compass, FolderOpen, Users2, UserCircle, Settings, Bell, User, ChevronLeft, ChevronRight, DollarSign, Trophy, Award, BarChart3, Wallet } from "lucide-react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/leads", icon: Users, label: "Leads" },
  { to: "/students", icon: GraduationCap, label: "Students" },
  { to: "/earnings", icon: DollarSign, label: "Earnings" },
  { to: "/withdraw", icon: Wallet, label: "Withdraw" },
  { to: "/leaderboard", icon: BarChart3, label: "Leaderboard" },
  { to: "/rewards", icon: Award, label: "Rewards" },
  { to: "/onboarding", icon: Compass, label: "Onboarding" },
  { to: "/resources", icon: FolderOpen, label: "Resources" },
  { to: "/training", icon: GraduationCap, label: "Training" },
  { to: "/community", icon: Users2, label: "Community" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-16" : "w-56"} flex-shrink-0 bg-sidebar-background border-r border-sidebar-border flex flex-col transition-all duration-200`}>
        <div className="h-14 flex items-center px-4 gap-2 border-b border-sidebar-border">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-primary font-bold text-sm">T</span>
          </div>
          {!collapsed && <span className="text-foreground font-bold text-sm uppercase tracking-tight">TradeVed</span>}
        </div>

        <nav className="flex-1 py-3 px-2 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 h-10 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary border-l-2 border-sidebar-primary"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`
              }
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center gap-3 px-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <User className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium text-foreground truncate">Alex Rivera</p>
                <p className="text-[10px] text-muted-foreground truncate">Campus Ambassador</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="mt-2 w-full h-8 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-sidebar-accent transition-colors"
          >
            {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-card/50">
          <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Ambassador Portal</span>
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
              <Bell className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate("/settings")}
              className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
