import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Plus, Instagram, Linkedin, Send, Bell } from "lucide-react";
import { toast } from "sonner";

const steps = ["Welcome", "Resources", "Training", "Community", "Profile"];
const currentStep = 4;

const gradYears = Array.from({ length: 8 }, (_, i) => 2024 + i);

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    college: "",
    course: "",
    gradYear: "2024",
    city: "",
    instagram: "",
    linkedin: "",
    telegram: "",
  });
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be under 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => setProfilePhoto(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleComplete = () => {
    if (!form.college || !form.course) {
      toast.error("Please fill in College and Course fields.");
      return;
    }
    toast.success("Profile setup complete! Welcome aboard, Ambassador!");
    navigate("/dashboard");
  };

  const handleSkip = () => {
    toast.info("You can complete your profile later from Settings.");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Nav */}
      <header className="h-14 border-b border-border flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-bold text-sm">T</span>
          </div>
          <span className="text-foreground font-bold text-sm">TradeVed <span className="text-muted-foreground font-normal">CRM</span></span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground">
            <Bell className="w-4 h-4" />
          </button>
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      <div className="flex-1 p-6 max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Complete Your Profile</h1>
            <p className="text-sm text-primary">Finalizing your setup for the community</p>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold text-foreground">Step {currentStep + 1} of {steps.length}</span>
            <p className="text-xs text-primary">100% Complete</p>
          </div>
        </div>

        {/* Progress */}
        <div className="w-full h-2 bg-secondary rounded-full mb-8 overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
        </div>

        {/* Form Card */}
        <div className="bg-card border border-border rounded-xl p-8 space-y-6">
          {/* Photo Upload */}
          <div className="flex flex-col items-center gap-3">
            <label className="relative cursor-pointer group">
              <div className="w-28 h-28 rounded-full bg-secondary flex items-center justify-center overflow-hidden border-2 border-border">
                {profilePhoto ? (
                  <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <Plus className="w-4 h-4 text-primary-foreground" />
              </div>
              <input type="file" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
            </label>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">Upload Profile Photo</p>
              <p className="text-xs text-muted-foreground">JPG, PNG or GIF. Max size of 5MB</p>
            </div>
          </div>

          {/* College */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">College / University</label>
            <input
              type="text"
              placeholder="Enter your institution name"
              value={form.college}
              onChange={(e) => handleChange("college", e.target.value)}
              className="w-full h-11 rounded-lg bg-secondary border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Course + Grad Year */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Course / Major</label>
              <input
                type="text"
                placeholder="e.g. Computer Science"
                value={form.course}
                onChange={(e) => handleChange("course", e.target.value)}
                className="w-full h-11 rounded-lg bg-secondary border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Graduation Year</label>
              <select
                value={form.gradYear}
                onChange={(e) => handleChange("gradYear", e.target.value)}
                className="w-full h-11 rounded-lg bg-secondary border border-border px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {gradYears.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>

          {/* City */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Current City</label>
            <input
              type="text"
              placeholder="Where are you based?"
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full h-11 rounded-lg bg-secondary border border-border px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>

          {/* Social Handles */}
          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-wider text-primary font-semibold">Social Handles</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-3 h-11">
                <Instagram className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Instagram"
                  value={form.instagram}
                  onChange={(e) => handleChange("instagram", e.target.value)}
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-3 h-11">
                <Linkedin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="LinkedIn"
                  value={form.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 bg-secondary border border-border rounded-lg px-3 h-11">
                <Send className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Telegram"
                  value={form.telegram}
                  onChange={(e) => handleChange("telegram", e.target.value)}
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground w-full focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleComplete}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
            >
              Complete Setup
            </button>
            <button
              onClick={handleSkip}
              className="w-full h-12 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm hover:bg-secondary/80 transition-colors"
            >
              Skip for Now
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          Need help? <span className="text-primary cursor-pointer">Contact Support</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
