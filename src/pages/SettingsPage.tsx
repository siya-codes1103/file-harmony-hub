import { useState } from "react";
import { toast } from "sonner";
import { User, Bell, Shield, Palette } from "lucide-react";

const SettingsPage = () => {
  const [profile, setProfile] = useState({
    name: "Alex Rivera",
    email: "alex.rivera@university.edu",
    phone: "+1 (555) 123-4567",
    university: "Stanford University",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    weekly: true,
  });

  const handleSave = () => toast.success("Settings saved successfully");

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>

      {/* Profile */}
      <section className="bg-card border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <User className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground text-sm">Profile Information</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <label className="block text-xs font-medium text-muted-foreground mb-1 capitalize">{key}</label>
              <input
                value={value}
                onChange={(e) => setProfile({ ...profile, [key]: e.target.value })}
                className="w-full h-10 px-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-card border border-border rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <Bell className="w-4 h-4 text-primary" />
          <h2 className="font-semibold text-foreground text-sm">Notifications</h2>
        </div>
        {Object.entries(notifications).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-foreground capitalize">{key} notifications</span>
            <button
              onClick={() => setNotifications({ ...notifications, [key]: !value })}
              className={`w-10 h-5 rounded-full transition-colors ${value ? "bg-primary" : "bg-secondary"}`}
            >
              <div className={`w-4 h-4 rounded-full bg-foreground transition-transform ${value ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
          </div>
        ))}
      </section>

      <button onClick={handleSave} className="h-10 px-6 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
        Save Changes
      </button>
    </div>
  );
};

export default SettingsPage;
