import { Search, Zap } from "lucide-react";
import { useState } from "react";

interface TopNavProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const TopNav = ({ searchQuery, onSearchChange }: TopNavProps) => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const navItems = ["Dashboard", "Leads", "Students", "Courses", "Communication"];

  return (
    <header className="h-14 border-b border-border bg-card flex items-center px-6 gap-6 shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Zap className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-base font-semibold text-foreground">TradeVed</span>
      </div>

      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search templates, students..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-9 pl-9 pr-4 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
        />
      </div>

      {/* Nav Items */}
      <nav className="hidden md:flex items-center gap-1 ml-auto">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
              activeNav === item
                ? "text-foreground bg-accent"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default TopNav;
