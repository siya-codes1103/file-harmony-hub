import { Category } from "@/types/template";
import { ChevronDown } from "lucide-react";

type FilterValue = "All" | Category;

interface FilterTabsProps {
  activeFilter: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const filters: { label: string; value: FilterValue; hasDropdown: boolean }[] = [
  { label: "All Templates", value: "All", hasDropdown: false },
  { label: "Registration", value: "Registration", hasDropdown: true },
  { label: "Payment", value: "Payment", hasDropdown: true },
  { label: "Engagement", value: "Engagement", hasDropdown: true },
];

const FilterTabs = ({ activeFilter, onFilterChange }: FilterTabsProps) => {
  return (
    <div className="flex items-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeFilter === filter.value
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-accent"
          }`}
        >
          {filter.label}
          {filter.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;
