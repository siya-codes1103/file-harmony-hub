import { useState } from "react";
import { Play, Pause, RotateCcw, RotateCw, Volume2, Maximize, Settings, CheckCircle, ArrowRight, FileText, Tag } from "lucide-react";
import { toast } from "sonner";

const steps = ["Welcome", "Resources", "Training", "Community", "Profile"];
const currentStep = 2;

const learningOutcomes = [
  "Define and implement custom lead scoring criteria tailored to your industry.",
  "Set up automated follow-up sequences using the Smart Trigger Engine.",
  "Generate advanced performance reports for team-wide pipeline visibility.",
  "Best practices for maintaining data integrity during high-volume imports.",
];

const Training = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(45);
  const [watched, setWatched] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const markWatched = () => {
    setWatched(true);
    setProgress(100);
    toast.success("Module marked as watched! Moving to Step 4.");
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider">Onboarding Phase</p>
          <h1 className="text-2xl font-bold text-foreground">Step 3: Advanced CRM Mastery</h1>
        </div>
        <span className="text-sm text-muted-foreground">Step {currentStep + 1} of {steps.length}</span>
      </div>

      {/* Progress */}
      <div className="w-full h-2 bg-secondary rounded-full mb-8 overflow-hidden">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }} />
      </div>

      {/* Video Player */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mb-6">
        <div className="relative aspect-video bg-background flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <button
            onClick={togglePlay}
            className="relative z-10 w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>

          {/* Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center gap-4">
            <span className="text-xs text-foreground tabular-nums">03:42</span>
            <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden cursor-pointer">
              <div className="h-full bg-primary rounded-full" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-xs text-foreground tabular-nums">08:15</span>
          </div>

          <div className="absolute bottom-0 left-0 p-4 flex items-center gap-2 translate-y-0">
            {/* spacing for time bar above */}
          </div>
        </div>

        {/* Video Controls Bottom */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-border">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} className="text-foreground hover:text-primary transition-colors">
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button className="text-muted-foreground hover:text-foreground"><RotateCcw className="w-4 h-4" /></button>
            <button className="text-muted-foreground hover:text-foreground"><RotateCw className="w-4 h-4" /></button>
            <button className="text-muted-foreground hover:text-foreground"><Volume2 className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-muted-foreground hover:text-foreground"><Settings className="w-4 h-4" /></button>
            <button className="text-muted-foreground hover:text-foreground"><Maximize className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-5 gap-6">
        {/* Description */}
        <div className="md:col-span-3 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-5 bg-primary rounded-full" />
              <h3 className="font-semibold text-foreground">Video Description</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In this module, we dive deep into the automated lead scoring and pipeline management features of TradeVed CRM. You will learn how to configure custom triggers that automatically move leads through your sales funnel based on behavioral data and engagement metrics.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-5 bg-primary rounded-full" />
              <h3 className="font-semibold text-foreground">Key Learning Outcomes</h3>
            </div>
            <div className="space-y-2.5">
              {learningOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[hsl(var(--success))] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-2">
          <div className="bg-card border border-border rounded-xl p-5 space-y-4">
            <h3 className="font-semibold text-foreground">Ready to proceed?</h3>
            <p className="text-xs text-muted-foreground">
              Marking this as watched will unlock the "Advanced Automation" quiz and move you to Step 4.
            </p>

            <button
              onClick={markWatched}
              disabled={watched}
              className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {watched ? "Completed ✓" : <>Mark as Watched & Continue <ArrowRight className="w-4 h-4" /></>}
            </button>

            <div className="border-t border-border pt-4">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">Additional Resources</p>
              <div className="space-y-2">
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <FileText className="w-3.5 h-3.5" /> CRM Configuration Guide (PDF)
                </button>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  <Tag className="w-3.5 h-3.5" /> Lead Scoring Worksheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
        <span>© 2024 TradeVed CRM. All rights reserved.</span>
        <div className="flex gap-4">
          <span className="hover:text-foreground cursor-pointer">Privacy Policy</span>
          <span className="hover:text-foreground cursor-pointer">Support Center</span>
          <span className="hover:text-foreground cursor-pointer">API Documentation</span>
        </div>
      </div>
    </div>
  );
};

export default Training;
