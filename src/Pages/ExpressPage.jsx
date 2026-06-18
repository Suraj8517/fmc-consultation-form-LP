import { useState, useEffect } from "react";
import { ArrowRight, Phone, Globe, Gift } from "lucide-react";
import img1 from "../assets/express/img1.jpg";
import hima from "../assets/express/hima.webp"
import rohini from "../assets/express/rohini.webp"
import jyoti from "../assets/express/jyoti.webp"

const CONSULTANTS = [
  {
    name: "Ms Hima Bindu",
    role: "Senior Health Consultant",
    image: hima,
  },
  {
    name: "Ms Rohini",
    role: "Senior Health Consultant",
    image: rohini,
  },
  {
    name: "Ms Jyoti",
    role: "",
    image: jyoti,
  },
];

export default function FitMomConsultation() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'poppins', Inter, sans-serif" }}>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #3a93d6 0%, #3a93d6 20%, #6db8f0 40%, #a8d4f5 60%, #dbeeff 80%, #ffffff 96%)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "-400px",
            right: "-200px",
            width: "840px",
            height: "740px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0) 75%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "10%",
            left: "-60px",
            width: "720px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 75%)",
            filter: "blur(35px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-24 py-10 sm:py-16 flex flex-col min-h-[280px] sm:min-h-[420px]">
          <div className="self-end max-w-xl text-left mb-auto pt-16 sm:pt-28 lg:pt-44">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 leading-tight mb-3 sm:mb-4" style={{ letterSpacing: "-0.5px" }}>
              Congratulations!<br />You're on the right way.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-xl ml-auto">
              Your path to Healthy Weight Transformation starts here.
            </p>
          </div>
          <div className="mt-auto pt-10 sm:pt-14 lg:pt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-10 md:gap-20">
            <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-neutral-900 leading-snug" style={{ letterSpacing: "-0.3px" }}>
              Transform your health,<br />backed by experts
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-xs text-left">
              Book your paid consultation call now and get an express session from the FitMom Club team — real guidance for real results.
            </p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-[1600px] mx-auto px-4 py-10 sm:px-8 sm:py-12 lg:px-12 flex flex-col items-center gap-8">

        {/* ── Payment / Express Consultation ── */}
        <div className="w-full overflow-hidden grid sm:grid-cols-2 gap-4">

          {/* Left: content panel — cream + dark green theme */}
          <div
            className="p-6 sm:p-9 lg:p-14 flex flex-col order-2 sm:order-1 rounded-3xl h-auto "
            style={{ backgroundColor: "#F6F4F0" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full transition-opacity duration-700"
                style={{ backgroundColor: "#1a2e2b", opacity: pulse ? 1 : 0.25 }}
              />
              <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                Express Consultation
              </span>
            </div>

            {/* Headline */}
            <p className="mt-4 sm:mt-5 text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 leading-snug" style={{ letterSpacing: "-0.3px" }}>
              Get an express consultation from the FitMom Club Team
            </p>

            {/* Price highlight */}
            <div className="mt-5 sm:mt-7 flex items-center justify-between rounded-2xl px-1 sm:px-5 py-4">
              <div>
                <p className="text-xs line-through text-neutral-400">₹1,099</p>
                <p className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-none" style={{ color: "#1a2e2b" }}>
                  ₹297<span className="text-sm font-normal ml-1 text-neutral-500">only</span>
                </p>
              </div>
            </div>

            {/* Bonus chip */}
            <div
              className="mt-4 flex items-center gap-2.5 rounded-2xl px-4 py-3 text-sm font-medium"
              style={{ backgroundColor: "#EDEBE8", color: "#1a2e2b" }}
            >
              <Gift size={18} className="shrink-0" />
              <span>Register today to unlock bonuses worth ₹1099!</span>
            </div>

            {/* Helper text */}
            <p className="text-sm text-neutral-500 leading-relaxed mt-5">
              Please book a consultation based on your location, so that it will be easy for us to contact you.
            </p>

            {/* Buttons — each with its own payment-method caption */}
            <div className="mt-7 flex flex-col sm:flex-row gap-5 w-full">
              <div className="flex-1 flex flex-col items-center gap-2">
                <a
                  href="https://rzp.io/rzp/109EVkmm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 text-white font-semibold px-5 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:opacity-90"
                  style={{ backgroundColor: "#1a2e2b" }}
                >
                  <Phone size={16} />
                  <span>WITHIN INDIA</span>
                  <ArrowRight size={14} />
                </a>
                <span className="text-[11px] text-neutral-400 text-center">via RazorPay · GPay · UPI · Cards</span>
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                <a
                  href="https://buy.stripe.com/7sY8wRdxkdBh2hYagF6EU2O"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 font-semibold px-5 py-3.5 rounded-full border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-white"
                  style={{ color: "#1a2e2b", borderColor: "rgba(26,46,43,0.18)", backgroundColor: "#EDEBE8" }}
                >
                  <Globe size={16} />
                  <span>OUTSIDE INDIA</span>
                  <ArrowRight size={14} />
                </a>
                <span className="text-[11px] text-neutral-400 text-center">via Stripe</span>
              </div>
            </div>
          </div>

          {/* Right: image panel */}
          <div className="relative h-64 sm:h-auto order-1 sm:order-2 rounded-3xl overflow-hidden">
            <img
              src={img1}
              alt="Woman stretching outdoors"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Consultation Team — 
        <div className=" py-20">
          <h2 className="text-2xl font-light text-neutral-900 mb-8">Our Consultation Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CONSULTANTS.map((c) => (
              <div key={c.name} className="flex flex-col">
                <div className="rounded-2xl overflow-hidden mb-4" style={{ aspectRatio: "3/4" }}>
                  <img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <p className="text-base font-medium text-neutral-900">{c.name}</p>
                {c.role && <p className="text-sm text-neutral-500 mt-1 leading-relaxed">{c.role}</p>}
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </div>
  );
}