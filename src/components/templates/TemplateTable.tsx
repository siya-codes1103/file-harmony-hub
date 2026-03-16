import { NudgeTemplate } from "@/types/template";
import CategoryBadge from "./CategoryBadge";
import ChannelIcon from "./ChannelIcon";
import { MoreHorizontal, Pencil, Copy, Trash2, ToggleLeft } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TemplateTableProps {
  templates: NudgeTemplate[];
  onEdit: (template: NudgeTemplate) => void;
  onDuplicate: (template: NudgeTemplate) => void;
  onDelete: (id: string) => void;
  onToggleActive: (id: string) => void;
}

const TemplateTable = ({ templates, onEdit, onDuplicate, onDelete, onToggleActive }: TemplateTableProps) => {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    if (deleteConfirm === id) {
      onDelete(id);
      setDeleteConfirm(null);
      setMenuOpen(null);
    } else {
      setDeleteConfirm(id);
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Template Name
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Category
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Audience
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Last Updated
            </th>
            <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Status
            </th>
            <th className="w-12"></th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <motion.tr
              key={template.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="border-b border-border last:border-b-0 hover:bg-accent/50 transition-colors group"
            >
              <td className="px-6 py-4">
                <div>
                  <div className="text-sm font-medium text-foreground">{template.name}</div>
                  <ChannelIcon channel={template.channel} />
                </div>
              </td>
              <td className="px-6 py-4">
                <CategoryBadge category={template.category} />
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">{template.audience}</td>
              <td className="px-6 py-4 text-sm text-muted-foreground tabular-nums">{template.lastUpdated}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 text-xs font-medium ${
                    template.isActive ? "text-green-400" : "text-muted-foreground"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${template.isActive ? "bg-green-400" : "bg-muted-foreground"}`} />
                  {template.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="px-4 py-4 relative">
                <button
                  onClick={() => setMenuOpen(menuOpen === template.id ? null : template.id)}
                  className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {menuOpen === template.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                      className="absolute right-4 top-full z-50 w-44 bg-card border border-border rounded-lg shadow-lg py-1"
                    >
                      <button
                        onClick={() => { onEdit(template); setMenuOpen(null); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        <Pencil className="w-3.5 h-3.5" /> Edit Template
                      </button>
                      <button
                        onClick={() => { onDuplicate(template); setMenuOpen(null); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" /> Duplicate
                      </button>
                      <button
                        onClick={() => { onToggleActive(template.id); setMenuOpen(null); }}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                      >
                        <ToggleLeft className="w-3.5 h-3.5" />
                        {template.isActive ? "Deactivate" : "Activate"}
                      </button>
                      <div className="border-t border-border my-1" />
                      <button
                        onClick={() => handleDelete(template.id)}
                        className="flex items-center gap-2 w-full px-3 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        {deleteConfirm === template.id ? "Confirm Delete" : "Delete"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
      {templates.length === 0 && (
        <div className="py-16 text-center text-muted-foreground text-sm">
          No templates found. Create your first template to get started.
        </div>
      )}
    </div>
  );
};

export default TemplateTable;
