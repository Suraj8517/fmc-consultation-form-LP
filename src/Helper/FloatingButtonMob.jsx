import { useState } from "react";
import { Plus, X } from "lucide-react";
// Adjust these import paths to match your project
import PritikaConsultationButton from "./PritikaButton";
import ConsultationButton from "./ExpressButton";

export default function FloatingConsultationButtons() {
  const [open, setOpen] = useState(true);

  return (
    <div className="md:hidden fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Buttons — visible by default, hidden when closed */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none h-0 overflow-hidden"
        }`}
      >
        <PritikaConsultationButton />
        <ConsultationButton />
      </div>

      {/* Close / reopen trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close consultation options" : "Show consultation options"}
        aria-expanded={open}
        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95"
        style={{
          background: open ? "#ffffff" : "linear-gradient(90deg,#3ce696,#00d9ff)",
          border: open ? "1px solid rgba(0,0,0,0.1)" : "none",
          boxShadow: open
            ? "0 4px 14px rgba(0,0,0,0.12)"
            : "0 6px 20px rgba(0, 217, 255, 0.35)",
        }}
      >
        {open ? (
          <X size={20} strokeWidth={2.5} color="#05221a" />
        ) : (
          <Plus size={20} strokeWidth={2.5} color="#05221a" />
        )}
      </button>
    </div>
  );
}