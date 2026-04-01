import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, AlertTriangle, ArrowRight, RefreshCw, Headphones, AlertCircle } from "lucide-react";

const FeedbackStates = () => {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteType, setDeleteType] = useState<"soft" | "permanent">("soft");

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-[hsl(30,5%,15%)]">System Feedback</h1>
        <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Status reports for record management actions.</p>
      </div>

      {/* Success State */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border-l-4 border-[hsl(72,70%,45%)] pl-5">
          <h2 className="text-lg font-extrabold text-[hsl(30,5%,15%)] uppercase tracking-wider">Transaction Successful</h2>
          <p className="text-sm text-[hsl(30,5%,45%)] mt-2 leading-relaxed">
            The integrity of the ledger has been maintained. The specified record was purged from the primary and replica databases following standard compliance protocols.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[hsl(50,15%,88%)] p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[hsl(72,70%,45%)]/20 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8 text-[hsl(72,70%,35%)]" />
          </div>
          <h3 className="text-xl font-extrabold text-[hsl(30,5%,15%)] mt-4">Record deleted successfully</h3>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-2">The entry has been permanently removed from the User Management module. All associated relational metadata has been archived.</p>
          <button
            onClick={() => navigate("/superadmin/admin-overview")}
            className="h-11 px-6 rounded-lg bg-[hsl(72,70%,45%)] text-sm font-bold text-[hsl(30,5%,10%)] hover:bg-[hsl(72,70%,40%)] mt-6 inline-flex items-center gap-2"
          >
            Return to Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <hr className="border-[hsl(50,15%,88%)]" />

      {/* Error State */}
      <div className="grid grid-cols-2 gap-6">
        <div className="border-l-4 border-red-400 pl-5">
          <h2 className="text-lg font-extrabold text-red-600 uppercase tracking-wider">Critical Interruption</h2>
          <p className="text-sm text-[hsl(30,5%,45%)] mt-2 leading-relaxed">
            An unauthorized state transition or database deadlock occurred during the deletion request. Action logs have been recorded for audit review.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-[hsl(50,15%,88%)] p-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-extrabold text-red-600 mt-4">Failed to delete record</h3>
          <span className="inline-block mt-2 text-xs font-bold px-3 py-1 rounded bg-red-100 text-red-700">System error code: ERR-504</span>
          <p className="text-sm text-[hsl(30,5%,50%)] mt-3">The server timed out while attempting to synchronize the deletion across distributed clusters. Please check your network stability and attempt the operation again.</p>
          <div className="flex gap-3 mt-6 justify-center">
            <button className="h-11 px-6 rounded-lg bg-red-500 text-white text-sm font-bold hover:bg-red-600 flex items-center gap-2">
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
            <button className="h-11 px-6 rounded-lg border border-[hsl(50,15%,85%)] text-sm font-medium text-[hsl(30,5%,25%)] hover:bg-[hsl(50,15%,93%)] flex items-center gap-2">
              <Headphones className="w-4 h-4" /> Contact Admin
            </button>
          </div>
        </div>
      </div>

      <hr className="border-[hsl(50,15%,88%)]" />

      {/* Delete Confirmation Demo */}
      <div>
        <h2 className="text-lg font-extrabold text-[hsl(30,5%,15%)]">Delete Confirmation Dialog</h2>
        <p className="text-sm text-[hsl(30,5%,50%)] mt-1">Preview the delete confirmation modal used across the system.</p>
        <button
          onClick={() => setShowDeleteModal(true)}
          className="mt-3 h-10 px-5 rounded-lg bg-red-500 text-white text-sm font-bold hover:bg-red-600"
        >
          Trigger Delete Modal
        </button>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border-t-4 border-red-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[hsl(30,5%,15%)]">Are you sure?</h3>
                <p className="text-sm text-[hsl(30,5%,50%)]">This action cannot be undone. Please choose the deletion type.</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <button
                onClick={() => setDeleteType("soft")}
                className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${deleteType === "soft" ? "border-red-400 bg-red-50" : "border-[hsl(50,15%,85%)] bg-white"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deleteType === "soft" ? "border-red-500" : "border-[hsl(30,5%,70%)]"}`}>
                    {deleteType === "soft" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[hsl(30,5%,15%)]">Soft Delete</p>
                    <p className="text-xs text-[hsl(30,5%,50%)]">Archive records for future restoration</p>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setDeleteType("permanent")}
                className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${deleteType === "permanent" ? "border-red-400 bg-red-50" : "border-[hsl(50,15%,85%)] bg-white"}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deleteType === "permanent" ? "border-red-500" : "border-[hsl(30,5%,70%)]"}`}>
                    {deleteType === "permanent" && <div className="w-2.5 h-2.5 rounded-full bg-red-500" />}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[hsl(30,5%,15%)]">Permanent Delete</p>
                    <p className="text-xs text-[hsl(30,5%,50%)]">Wipe from database immediately</p>
                  </div>
                </div>
              </button>
            </div>

            <button
              onClick={() => { setShowDeleteModal(false); }}
              className="w-full h-12 rounded-lg bg-red-500 text-white text-sm font-bold uppercase tracking-wider hover:bg-red-600"
            >
              Confirm Deletion
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="w-full mt-2 text-sm font-medium text-[hsl(72,70%,35%)] hover:underline"
            >
              Cancel
            </button>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-[hsl(50,15%,88%)]">
              <p className="text-[10px] text-[hsl(30,5%,55%)] uppercase tracking-wider">Transaction ID: TV-8829-DEL</p>
              <span className="text-[hsl(30,5%,55%)]">🔒</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-[10px] text-[hsl(30,5%,55%)] uppercase tracking-wider pt-4 border-t border-[hsl(50,15%,88%)]">
        <p>TIMESTAMP: 2023-10-27 14:22:01 UTC</p>
        <p>NODE: US-EAST-ALPH-04</p>
        <p className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[hsl(72,70%,45%)]" /> SYSTEM OPERATIONAL</p>
      </div>
    </div>
  );
};

export default FeedbackStates;
