import { useNavigate } from "react-router-dom";
import { CheckCircle, Users, Sparkles, Clock, ArrowRight, BarChart3 } from "lucide-react";
import { toast } from "sonner";

const AdminNotifications = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-6">
        {/* Main */}
        <div className="col-span-2">
          {/* Success Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[hsl(72,70%,45%)]/20 flex items-center justify-center mb-6">
            <CheckCircle className="w-8 h-8 text-[hsl(72,70%,35%)]" />
          </div>

          <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Notification Sent</h1>
          <h1 className="text-4xl font-extrabold text-[hsl(30,5%,15%)]">Successfully</h1>

          <p className="text-sm text-[hsl(30,5%,50%)] mt-4 max-w-lg">
            Your campaign has been queued and dispatched across selected networks. Delivery monitoring is now active.
          </p>

          <div className="flex gap-3 mt-8">
            <button onClick={() => navigate("/admin/dashboard")} className="h-12 px-6 rounded-lg bg-[hsl(30,5%,15%)] text-white text-sm font-bold flex items-center gap-2 hover:bg-[hsl(30,5%,25%)]">
              Back to Notification Center <ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => toast.info("Opening analytics...")} className="h-12 px-6 rounded-lg border border-[hsl(50,15%,85%)] bg-[hsl(50,20%,97%)] text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)]">
              View Analytics
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Message Summary */}
          <div className="bg-[hsl(50,20%,97%)] border border-[hsl(50,15%,85%)] rounded-xl p-5">
            <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold mb-5">Message Summary</p>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(50,15%,90%)] flex items-center justify-center">
                  <Users className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Recipients</p>
                  <p className="text-lg font-extrabold text-[hsl(30,5%,15%)]">1,402 CAs</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(50,15%,90%)] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Channels</p>
                  <p className="text-lg font-extrabold text-[hsl(30,5%,15%)]">Email + Push</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[hsl(50,15%,90%)] flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[hsl(30,5%,45%)]" />
                </div>
                <div>
                  <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Timestamp</p>
                  <p className="text-lg font-extrabold text-[hsl(30,5%,15%)]">Oct 27, 10:42 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="border-l-4 border-[hsl(72,70%,45%)] pl-4">
            <p className="text-xs text-[hsl(30,5%,45%)] italic">
              "System detected 100% address validity for the primary CA segment. Delivery estimated completion: <span className="text-[hsl(72,70%,35%)] font-bold not-italic">2 mins</span>."
            </p>
          </div>
        </div>
      </div>

      {/* Real-time Performance */}
      <div className="bg-[hsl(50,15%,90%)] rounded-xl p-8">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">Real-time Performance</h2>
            <p className="text-sm text-[hsl(30,5%,50%)] mt-2 max-w-lg">
              Live tracking is enabled for this broadcast. You can observe open rates and click-through metrics as they propagate.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg border-2 border-[hsl(72,70%,45%)] flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-[hsl(72,70%,35%)]" />
            </div>
            <div>
              <p className="text-[10px] text-[hsl(30,5%,50%)] uppercase tracking-wider font-bold">Status</p>
              <p className="text-sm font-extrabold text-[hsl(72,70%,35%)] uppercase">Monitoring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;
