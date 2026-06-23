import 

  {HeartPulse,
  Phone,
  Globe,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  MapPin} from "lucide-react"


export default function Sample() {
  return (
    <div
      className="relative overflow-hidden rounded-[32px] bg-[#F6F4F0] p-8 lg:p-14 flex flex-col h-auto sm:h-[80vh] shadow-[0_25px_80px_rgba(26,46,43,0.12)]"
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full bg-emerald-500 ${HeartPulse ? "opacity-100":"opacity-40"} transition-all`} />
          <span className="uppercase tracking-[0.22em] text-xs text-neutral-500">
            Limited Time Consultation
          </span>
        </div>

        <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold shadow">
          ⭐ Trusted by 10,000+ Women
        </div>
      </div>

      <div className="relative z-10 mt-8">
        <h1 className="text-5xl lg:text-6xl font-semibold leading-none text-[#1A2E2B]">
          GET YOUR
        </h1>
        <h2 className="mt-2 text-5xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-[#1A2E2B] via-emerald-600 to-[#32b37b] bg-clip-text text-transparent">
          EXPRESS
        </h2>
        <h2 className="text-5xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-[#1A2E2B] via-emerald-600 to-[#32b37b] bg-clip-text text-transparent">
          CONSULTATION
        </h2>

        <p className="mt-3 text-xl text-neutral-600">
          with <span className="font-semibold text-[#1A2E2B]">Ms. Pritika</span>
        </p>
      </div>

      <div className="relative z-10 mt-8 rounded-3xl bg-white p-6 shadow-lg border border-neutral-100">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs uppercase tracking-wider text-neutral-400">
              Today's Special Price
            </p>
            <p className="line-through text-neutral-400 mt-2">₹2,099</p>
            <div className="flex items-end gap-2 mt-1">
              <span className="text-6xl font-bold text-[#1A2E2B]">₹997</span>
              <span className="text-neutral-500 mb-2">only</span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="rounded-full bg-red-500 text-white px-4 py-1 text-xs font-bold">
              52% OFF
            </span>
            <span className="rounded-full bg-green-100 text-green-700 px-4 py-1 text-xs font-bold">
              Save ₹1,102
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid grid-cols-2 gap-3">
        {[
          ["Health Assessment", ShieldCheck],
          ["Personal Guidance", HeartHandshake],
          ["Action Plan", Sparkles],
          ["Easy Booking", MapPin],
        ].map(([label, Icon], i)=>(
          <div key={i} className="rounded-2xl bg-white p-4 shadow-sm border">
            <div className="w-10 h-10 rounded-xl bg-[#eef7f2] flex items-center justify-center">
              <Icon size={18}/>
            </div>
            <p className="mt-3 text-sm font-medium">{label}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-6 rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
        <p className="font-semibold text-[#1A2E2B]">Why book this consultation?</p>
        <p className="text-sm text-neutral-600 mt-2">
          Book a one-on-one consultation with Ms. Pritika to discuss your goals,
          receive personalized guidance and discover the best program for your journey.
        </p>
      </div>

      <div className="relative z-10 mt-6 rounded-2xl bg-white border p-4">
        <p className="font-semibold flex items-center gap-2"><MapPin size={16}/>Choose Your Payment Region</p>
        <p className="text-sm text-neutral-500 mt-2">
          Select the payment option based on your location for faster processing.
        </p>
      </div>

      {/* Keep your existing two payment buttons here unchanged */}
    </div>
  );
}
