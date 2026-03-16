import { useState, useEffect } from "react";
import { X, Bold, Italic, List, Smile } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NudgeTemplate, Category, DeliveryChannel, Audience } from "@/types/template";

interface CreateTemplateDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (template: Omit<NudgeTemplate, "id" | "lastUpdated" | "isActive">) => void;
  editTemplate?: NudgeTemplate | null;
}

const categories: Category[] = ["Registration", "Payment", "Engagement"];
const channels: DeliveryChannel[] = ["WhatsApp", "Email", "In-app", "SMS"];
const audiences: Audience[] = ["Leads", "Students", "All", "Paid", "Trial"];
const templateVars = ["{{student_name}}", "{{course_name}}", "{{amount}}", "{{due_date}}", "{{deadline}}"];

const CreateTemplateDrawer = ({ isOpen, onClose, onSave, editTemplate }: CreateTemplateDrawerProps) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("Registration");
  const [channel, setChannel] = useState<DeliveryChannel>("WhatsApp");
  const [audience, setAudience] = useState<Audience>("Leads");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editTemplate) {
      setName(editTemplate.name);
      setCategory(editTemplate.category);
      setChannel(editTemplate.channel);
      setAudience(editTemplate.audience);
      setContent(editTemplate.content);
    } else {
      setName("");
      setCategory("Registration");
      setChannel("WhatsApp");
      setAudience("Leads");
      setContent("");
    }
  }, [editTemplate, isOpen]);

  const handleSave = () => {
    if (!name.trim() || !content.trim()) return;
    onSave({ name, category, channel, audience, content });
    onClose();
  };

  const insertVariable = (variable: string) => {
    setContent((prev) => prev + variable);
  };

  const applyFormatting = (type: "bold" | "italic" | "list") => {
    const formats = { bold: "**text**", italic: "_text_", list: "\n• " };
    setContent((prev) => prev + formats[type]);
  };

  const charCount = content.length;
  const segmentCount = Math.ceil(charCount / 160) || 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4">
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  {editTemplate ? "Edit Template" : "Create Template"}
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Design a new nudge message
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <div className="flex-1 overflow-y-auto px-6 space-y-5">
              {/* Template Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Template Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Welcome Nudge #1"
                  className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              {/* Category + Channel */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring appearance-none cursor-pointer"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Delivery Channel
                  </label>
                  <select
                    value={channel}
                    onChange={(e) => setChannel(e.target.value as DeliveryChannel)}
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring appearance-none cursor-pointer"
                  >
                    {channels.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Audience */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Audience
                </label>
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value as Audience)}
                  className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-ring appearance-none cursor-pointer"
                >
                  {audiences.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>

              {/* Message Content */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-foreground">
                    Message Content
                  </label>
                  <div className="flex items-center gap-1">
                    {templateVars.slice(0, 2).map((v) => (
                      <button
                        key={v}
                        onClick={() => insertVariable(v)}
                        className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary hover:bg-primary/30 transition-colors"
                      >
                        + {v.replace(/[{}]/g, "")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Toolbar */}
                <div className="flex items-center gap-1 mb-2 p-1 border border-border rounded-t-lg bg-muted">
                  <button onClick={() => applyFormatting("bold")} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                    <Bold className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => applyFormatting("italic")} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                    <Italic className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => applyFormatting("list")} className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                    <List className="w-3.5 h-3.5" />
                  </button>
                  <div className="ml-auto">
                    <button className="p-1.5 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                      <Smile className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Type your message here..."
                  rows={6}
                  className="w-full px-3 py-2.5 rounded-b-lg bg-muted border border-t-0 border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-y"
                />
                <p className="text-xs text-muted-foreground mt-1.5">
                  Estimated: {charCount} characters ({segmentCount} message segment{segmentCount > 1 ? "s" : ""})
                </p>
              </div>

              {/* Variable chips for remaining vars */}
              <div className="flex flex-wrap gap-1.5">
                {templateVars.slice(2).map((v) => (
                  <button
                    key={v}
                    onClick={() => insertVariable(v)}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
                  >
                    + {v.replace(/[{}]/g, "")}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-3 p-6 pt-4 border-t border-border">
              <button
                onClick={onClose}
                className="flex-1 h-10 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-accent transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={!name.trim() || !content.trim()}
                className="flex-1 h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {editTemplate ? "Update Template" : "Save Template"}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CreateTemplateDrawer;
