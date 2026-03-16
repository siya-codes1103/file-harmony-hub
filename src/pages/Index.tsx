import { useState, useMemo, useCallback } from "react";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import TopNav from "@/components/layout/TopNav";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FilterTabs from "@/components/templates/FilterTabs";
import TemplateTable from "@/components/templates/TemplateTable";
import CreateTemplateDrawer from "@/components/templates/CreateTemplateDrawer";
import { initialTemplates } from "@/data/templates";
import { NudgeTemplate, Category } from "@/types/template";

type FilterValue = "All" | Category;

const Index = () => {
  const [templates, setTemplates] = useState<NudgeTemplate[]>(initialTemplates);
  const [activeFilter, setActiveFilter] = useState<FilterValue>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<NudgeTemplate | null>(null);

  const filteredTemplates = useMemo(() => {
    let result = templates;
    if (activeFilter !== "All") {
      result = result.filter((t) => t.category === activeFilter);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.audience.toLowerCase().includes(q) ||
          t.channel.toLowerCase().includes(q)
      );
    }
    return result;
  }, [templates, activeFilter, searchQuery]);

  const handleSave = useCallback(
    (data: Omit<NudgeTemplate, "id" | "lastUpdated" | "isActive">) => {
      const now = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
      if (editingTemplate) {
        setTemplates((prev) =>
          prev.map((t) =>
            t.id === editingTemplate.id ? { ...t, ...data, lastUpdated: now } : t
          )
        );
        toast.success(`"${data.name}" updated`);
      } else {
        const newTemplate: NudgeTemplate = {
          ...data,
          id: crypto.randomUUID(),
          lastUpdated: now,
          isActive: true,
        };
        setTemplates((prev) => [newTemplate, ...prev]);
        toast.success(`"${data.name}" created`);
      }
      setEditingTemplate(null);
    },
    [editingTemplate]
  );

  const handleEdit = useCallback((template: NudgeTemplate) => {
    setEditingTemplate(template);
    setDrawerOpen(true);
  }, []);

  const handleDuplicate = useCallback((template: NudgeTemplate) => {
    const now = new Date().toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
    const duplicate: NudgeTemplate = {
      ...template,
      id: crypto.randomUUID(),
      name: `${template.name} (Copy)`,
      lastUpdated: now,
    };
    setTemplates((prev) => [duplicate, ...prev]);
    toast.success(`Duplicated "${template.name}"`);
  }, []);

  const handleDelete = useCallback((id: string) => {
    setTemplates((prev) => {
      const t = prev.find((t) => t.id === id);
      if (t) toast.success(`"${t.name}" deleted`);
      return prev.filter((t) => t.id !== id);
    });
  }, []);

  const handleToggleActive = useCallback((id: string) => {
    setTemplates((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          const next = { ...t, isActive: !t.isActive };
          toast.success(`"${t.name}" ${next.isActive ? "activated" : "deactivated"}`);
          return next;
        }
        return t;
      })
    );
  }, []);

  const openCreate = () => {
    setEditingTemplate(null);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNav searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="flex-1 px-6 py-6 max-w-7xl mx-auto w-full">
        <Breadcrumbs
          items={[
            { label: "Home", onClick: () => {} },
            { label: "Notification Templates" },
          ]}
        />

        <div className="mt-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Nudge Template Manager</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Automate your student communication workflows with nudges.
              </p>
            </div>
            <button
              onClick={openCreate}
              className="inline-flex items-center gap-2 h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Template
            </button>
          </div>
        </div>

        <div className="mb-6">
          <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <TemplateTable
          templates={filteredTemplates}
          onEdit={handleEdit}
          onDuplicate={handleDuplicate}
          onDelete={handleDelete}
          onToggleActive={handleToggleActive}
        />

        <div className="mt-4 text-xs text-muted-foreground tabular-nums">
          {filteredTemplates.length} template{filteredTemplates.length !== 1 ? "s" : ""} •{" "}
          {filteredTemplates.filter((t) => t.isActive).length} active
        </div>
      </main>

      <CreateTemplateDrawer
        isOpen={drawerOpen}
        onClose={() => { setDrawerOpen(false); setEditingTemplate(null); }}
        onSave={handleSave}
        editTemplate={editingTemplate}
      />
    </div>
  );
};

export default Index;
