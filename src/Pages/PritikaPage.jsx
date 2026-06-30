import { useState, useEffect } from "react";
import { ArrowRight, Phone, Globe, Gift } from "lucide-react";
import img1 from "../assets/home/pritika-mobile.png"
import { buildRazorpayUrl } from '../Helper/buildRazorpayurls'
import { RAZORPAY_PAYMENT_PAGES } from '../constants/constants'

export default function PritikaConsultation({info}) {
     const handlePayClick = (planKey) => {
        const razorpayUrl = buildRazorpayUrl(RAZORPAY_PAYMENT_PAGES[planKey], info);
        window.location.href = razorpayUrl;
      };
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
Book your paid consultation call with Ms. Pritika and receive personalized guidance to help you achieve real, lasting results.            </p>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-[1600px] mx-auto px-4 py-10 sm:px-8 sm:py-12 lg:px-12 flex flex-col items-center gap-8">

        {/* ── Payment / Express Consultation ── */}
        <div className="w-full overflow-hidden grid sm:grid-cols-2 gap-4">

          {/* Left: content panel — cream + dark green theme */}
          <div
            className="p-6 sm:p-9 lg:p-14 flex flex-col order-2 sm:order-1 rounded-3xl h-auto"
            style={{ backgroundColor: "#F6F4F0" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full transition-opacity duration-700"
                style={{ backgroundColor: "#1a2e2b", opacity: pulse ? 1 : 0.25 }}
              />
              <span className="text-[10px] tracking-[0.22em] uppercase text-neutral-400">
                Consultation with Pritika
              </span>
            </div>

           <div className="relative z-10 mt-8">
        <h1 className="text-3xl lg:text-5xl font-semibold leading-none text-[#1A2E2B]">
          GET YOUR
        </h1>
        <h2 className="mt-2 text-3xl lg:text-5xl font-bold leading-none bg-gradient-to-r from-[#1A2E2B] via-emerald-600 to-[#32b37b] bg-clip-text text-transparent">
          EXPRESS
        </h2>
        <h2 className="text-3xl lg:text-5xl font-bold leading-none bg-gradient-to-r from-[#1A2E2B] via-emerald-600 to-[#32b37b] bg-clip-text text-transparent">
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
              Special Price
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

            {/* Bonus chip */}
            <div
              className="mt-4 flex items-center gap-2.5 rounded-2xl px-4 py-3 text-md font-medium"
              style={{ color: "#1a2e2b" }}
            >
              
              <span>Book a quick one-on-one consultation with Ms. Pritika to discuss your goals and receive personalized guidance for your health and fitness journey.</span>
            </div>
 
            {/* Helper text */}
            <p className="text-sm text-neutral-500 leading-relaxed mt-5">
              Please book a consultation based on your location, so that it will be easy for us to contact you.
            </p>

            {/* Buttons — each with its own payment-method caption */}
            <div className="mt-7 flex flex-col sm:flex-row gap-5 w-full">
              <div className="flex-1 flex flex-col items-center gap-2">
                <button
                  onClick={() => handlePayClick("planA")}
                  className="w-full flex items-center justify-center gap-2 text-white font-semibold px-5 py-3.5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:opacity-90"
                  style={{
                    width: "100%",
                    padding: "17px 0",
                    borderRadius: 999,
                    fontSize: 14,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    background: "linear-gradient(90deg,#ff3fa0,#ff6b3d)",
                    color: "#fff",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    transition: "filter 0.2s, transform 0.2s",
                  }}
                >
                  <Phone size={16} />
                  <span>WITHIN INDIA</span>
                  <ArrowRight size={14} />
                </button>
                <span className="text-[11px] text-neutral-400 text-center">via RazorPay · GPay · UPI · Cards</span>
              </div>

              <div className="flex-1 flex flex-col items-center gap-2">
                <a
                  href="https://buy.stripe.com/4gMfZj8d0gNt5uafAZ6EU2P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 font-semibold px-5 py-3.5 rounded-full border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:bg-white"
                  style={{
                width: "100%",
                padding: "17px 0",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: "linear-gradient(90deg,#50ffaa,#00d4ff)",
                color: "#062019",
                letterSpacing: "0.02em",
                textDecoration: "none",
                transition: "filter 0.2s, transform 0.2s",
              }}
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