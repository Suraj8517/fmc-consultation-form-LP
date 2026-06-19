import { useEffect, useState } from "react";
import { Zap, Target, ArrowRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const CYCLING_WORDS = ["wellness", "fitness", "strength", "vitality"];
const CYCLE_MS = 2200;

export default function ConsultationSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((p) => (p + 1) % CYCLING_WORDS.length);
        setFade(true);
      }, 300);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const bullets = [
    {
      icon: Zap,
      title: "Fast-track your journey",
      body: "Get in touch within the next 48 hours and start moving forward.",
    },
    {
      icon: Target,
      title: "Personalized recommendations",
      body: "We guide you to the program that best aligns with your health goals.",
    },
  ];

  const plans = [
    {
      label: "FitMom Club Team",
      sublabel: "Express Consultation",
      original: "₹1,099",
      price: "₹297",
      unit: "only",
      href: "/express-consultation",
      dark: false,
    },
    {
      label: "Pritika",
      sublabel: "1-on-1 with Pritika",
      original: "₹2,099",
      price: "₹997",
      unit: "only",
      href: "/pritika-consultation",
      dark: true,
    },
  ];

  return (
    <section id="cta"
      className="bg-white min-h-screen flex items-center px-5 py-20 sm:px-10 md:px-16 lg:px-24 xl:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT ── */}
        <div>
          <p className="text-[10px] tracking-[0.22em] uppercase text-neutral-400 mb-5">
            A special gift awaits
          </p>

          {/* Headline with cycling word */}
          <h2
            className="font-medium leading-tight mb-6 text-neutral-900"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Discover your<br />
            personalized path<br />
            to{" "}
            <span
              className="inline-block transition-all duration-300"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(6px)",
                color: "#1a2e2b",
              }}
            >
              {CYCLING_WORDS[wordIdx]}
            </span>
          </h2>

          <p className="text-neutral-500 text-sm leading-relaxed mb-8 max-w-md">
            We understand every journey is unique. Our packages are meticulously
            designed to offer maximum value and ensure proven results — starting
            with a personal consultation call.
          </p>

          {/* Bullets */}
          <div className="flex flex-col gap-5 mb-8">
            {bullets.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#EDEBE8" }}
                  >
                    <Icon size={16} color="#1a2e2b" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral-800 mb-0.5">{b.title}</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div
            className="rounded-2xl px-5 py-3.5 text-xs leading-relaxed flex items-start gap-3"
            style={{ backgroundColor: "#F6F4F0", color: "#5a5855" }}
          >
            <Heart size={14} color="#5a5855" strokeWidth={2} className="flex-shrink-0 mt-0.5" />
            <span>
              Within the next 24 hours, we will suggest a suitable program
              based on your current needs.{" "}
              <span className="font-medium text-neutral-700">
                Consultation fee is discounted from your program fee once you join!
              </span>
            </span>
          </div>
        </div>

        {/* ── RIGHT — cards ── */}
        <div className="flex flex-col gap-4">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="rounded-3xl p-7 2xl:p-9 flex flex-col sm:flex-row sm:items-center gap-6"
              style={{ backgroundColor: plan.dark ? "#1a2e2b" : "#F6F4F0" }}
            >
              {/* Left text */}
              <div className="flex-1">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1"
                  style={{ color: plan.dark ? "rgba(255,255,255,0.45)" : "#aaa" }}
                >
                  {plan.sublabel}
                </p>
                <h3
                  className="text-lg font-medium leading-snug"
                  style={{ color: plan.dark ? "#fff" : "#1a2e2b" }}
                >
                  Consult with<br />{plan.label}
                </h3>
              </div>

              {/* Divider */}
              <div
                className="hidden sm:block w-px self-stretch"
                style={{
                  backgroundColor: plan.dark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.08)",
                }}
              />

              {/* Pricing + CTA */}
              <div className="flex flex-col items-start sm:items-end gap-3 sm:min-w-[148px]">
                <div>
                  <p
                    className="text-xs line-through"
                    style={{ color: plan.dark ? "rgba(255,255,255,0.3)" : "#bbb" }}
                  >
                    {plan.original}
                  </p>
                  <p
                    className="text-3xl font-semibold leading-none"
                    style={{ color: plan.dark ? "#fff" : "#1a2e2b" }}
                  >
                    {plan.price}
                    <span className="text-sm font-normal ml-1">{plan.unit}</span>
                  </p>
                </div>
                <Link
                  to={plan.href}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold px-5 py-2.5 rounded-full transition-opacity hover:opacity-85"
                  style={{
                    backgroundColor: plan.dark ? "#fff" : "#1a2e2b",
                    color: plan.dark ? "#1a2e2b" : "#fff",
                  }}
                >
                  Start your journey
                  <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}