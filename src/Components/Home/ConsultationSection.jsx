import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  User, Activity, Salad, CheckSquare,
  Star, Users, Lock, Zap, Heart, ArrowRight, Sparkles,
} from "lucide-react";

const CYCLING_WORDS = ["wellness", "fitness", "strength", "vitality"];
const CYCLE_MS = 2600;

const FEATURES = [
  { icon: User,         label: "Personalized Consultation" },
  { icon: Activity,     label: "Health Assessment" },
  { icon: Salad,        label: "Nutrition Guidance" },
  { icon: CheckSquare,  label: "Program Recommendation" },
];

/* ── Shared token values ── */
const T = {
  radius: 20,
  radiusPill: 999,
  gap: 10,
  featureIconBg1: "rgba(255,90,140,0.1)",
  featureIconBg2: "rgba(60,230,150,0.1)",
};

function TrustRow({ items }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginTop: 18 }}>
      {items.map(({ icon: Icon, label, color }) => (
        <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10.5, color, fontWeight: 500, letterSpacing: "0.04em" }}>
          <Icon size={11} strokeWidth={2} />
          {label}
        </span>
      ))}
    </div>
  );
}

function FeatureList({ features, iconBg, iconColor, textColor }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: T.gap, marginBottom: 22 }}>
      {features.map(({ icon: Icon, label }) => (
        <div key={label} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 12.5, color: textColor }}>
          <div style={{
            width: 30, height: 30, borderRadius: 9,
            background: iconBg,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon size={13} color={iconColor} strokeWidth={2.2} />
          </div>
          {label}
        </div>
      ))}
    </div>
  );
}

function PriceBlock({ original, current, suffix }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <p style={{ fontSize: 12, textDecoration: "line-through", color: suffix === "light" ? "#bbb" : "rgba(255,255,255,0.28)", marginBottom: 2 }}>{original}</p>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
        <span style={{
          fontSize: 56, fontWeight: 800, lineHeight: 1,
          letterSpacing: "-0.045em",
          color: suffix === "light" ? "#111" : "#fff",
        }}>{current}</span>
        <span style={{ fontSize: 13, color: suffix === "light" ? "#aaa" : "rgba(255,255,255,0.35)", paddingBottom: 9 }}>only</span>
      </div>
    </div>
  );
}

function AdjustmentNote({ iconColor, bg, border, textColor, strongColor }) {
  return (
    <div style={{
      display: "flex", gap: 9, alignItems: "flex-start",
      fontSize: 11, color: textColor,
      background: bg, border, borderRadius: 12,
      padding: "12px 14px", marginBottom: 22, lineHeight: 1.65,
    }}>
      <Heart size={13} color={iconColor} strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
      <span>Consultation fee is <strong style={{ color: strongColor }}>adjusted against your program fee</strong> once you join.</span>
    </div>
  );
}

export default function ConsultationSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((p) => (p + 1) % CYCLING_WORDS.length);
        setFade(true);
      }, 280);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="cta"
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "#0a0a0c",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Ambient aurora — signature element ── */}
      <div aria-hidden style={{
        position: "absolute",
        top: "15%",
        left: "50%",
        transform: "translateX(-50%)",
        width: 640,
        height: 360,
        borderRadius: "50%",
        background: "radial-gradient(ellipse at center, rgba(201,107,255,0.07) 0%, rgba(255,63,160,0.05) 38%, transparent 70%)",
        pointerEvents: "none",
        animation: "aurora 8s ease-in-out infinite alternate",
      }} />
      <style>{`
        @keyframes aurora {
          from { transform: translateX(-50%) scale(1);   opacity: 0.6; }
          to   { transform: translateX(-50%) scale(1.18); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora { animation: none !important; }
        }
      `}</style>

      <div style={{ maxWidth: 880, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 64, position: "relative" }}>

        {/* ── HERO ── */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: T.radiusPill,
            background: "rgba(255,210,80,0.1)",
            color: "#ffd250",
            border: "1px solid rgba(255,210,80,0.22)",
            marginBottom: 28,
          }}>
            <Sparkles size={11} strokeWidth={2} />
            A special gift awaits
          </div>

          {/* Headline */}
          <h2 style={{
            fontSize: "clamp(2.1rem,4vw,3.1rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 0,
            letterSpacing: "-0.02em",
          }}>
            Your personalized path to
          </h2>
          {/* Animated word on its own line for breathing room */}
          <div style={{ height: "clamp(2.8rem,5vw,3.8rem)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: 4 }}>
            <span style={{
              fontSize: "clamp(2.1rem,4vw,3.1rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              background: "linear-gradient(100deg,#ff6b3d,#ff3fa0,#c96bff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              transition: "opacity 0.28s ease, transform 0.28s ease",
              opacity: fade ? 1 : 0,
              transform: fade ? "translateY(0)" : "translateY(10px)",
              display: "inline-block",
            }}>
              {CYCLING_WORDS[wordIdx]}.
            </span>
          </div>

          <p style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.48)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 520,
            marginTop: 12,
          }}>
            Every woman's journey is different. Our expert-designed programs begin
            with a real consultation — not a quiz — so you get guidance that actually fits your life.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { num: "10K+", label: "Women guided" },
              { num: "4.9★", label: "Average rating" },
              { num: "48 hrs", label: "Response time" },
            ].map((s, i, arr) => (
              <div key={s.label} style={{
                padding: "18px 28px",
                borderLeft: i !== 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <div style={{
                  fontSize: 22, fontWeight: 800,
                  background: "linear-gradient(90deg,#ff6b3d,#ff3fa0)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{s.num}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.36)", marginTop: 3, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "start" }}>

          {/* ══ CARD 1 — Express / Warm Cream ══ */}
          <div
            style={{
              borderRadius: T.radius + 8,
              padding: "28px 28px 24px",
              position: "relative",
              overflow: "hidden",
              background: "#faf8f5",
              color: "#111",
              border: "1px solid rgba(0,0,0,0.06)",
              transition: "transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Subtle corner glow */}
            <div aria-hidden style={{
              position: "absolute", top: -80, right: -80, width: 240, height: 240, borderRadius: "50%",
              background: "radial-gradient(circle,rgba(255,63,160,0.09) 0%,transparent 70%)",
              pointerEvents: "none",
            }} />

            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 13px", borderRadius: T.radiusPill,
                background: "#e4f9ec", color: "#0a6b2b",
              }}>
                <Zap size={9} strokeWidth={2.5} /> Express Plan
              </span>
              <span style={{
                marginLeft: "auto",
                fontSize: 10, fontWeight: 700, padding: "5px 13px", borderRadius: T.radiusPill,
                background: "#fff0d8", color: "#9a4f00",
              }}>
                Save ₹802
              </span>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#bbb", marginBottom: 3 }}>
              Express Consultation
            </p>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#111", lineHeight: 1.22, marginBottom: 22, letterSpacing: "-0.01em" }}>
              Quick consult with<br />the FitMom Club Team
            </h3>

            <FeatureList
              features={FEATURES}
              iconBg={T.featureIconBg1}
              iconColor="#ff3fa0"
              textColor="#555"
            />

            <hr style={{ border: "none", borderTop: "1px solid #ece9e4", margin: "20px 0" }} />

            <PriceBlock original="₹1,099" current="₹297" suffix="light" />

            <AdjustmentNote
              iconColor="#c96bff"
              bg="#fdf5ff"
              border="1px solid #f0d6ff"
              textColor="#666"
              strongColor="#111"
            />

            <Link
              to="/express-consultation"
              style={{
                width: "100%", padding: "16px 0", borderRadius: T.radiusPill,
                fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "linear-gradient(90deg,#ff3fa0,#ff6b3d)",
                color: "#fff", letterSpacing: "0.02em", textDecoration: "none",
                transition: "filter 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.07)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
            >
              Book My Consultation <ArrowRight size={14} strokeWidth={2.5} />
            </Link>

            <TrustRow items={[
              { icon: Star,  label: "4.9 / 5 Rating",    color: "#bbb" },
              { icon: Users, label: "10,000+ Women",      color: "#bbb" },
              { icon: Lock,  label: "Secure Booking",     color: "#bbb" },
            ]} />
          </div>

          {/* ══ CARD 2 — 1-on-1 / Deep Emerald ══ */}
          <div
            style={{
              borderRadius: T.radius + 8,
              padding: "28px 28px 24px",
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(150deg,#0c2420 0%,#0f2f2a 55%,#0a1d1a 100%)",
              border: "1px solid rgba(60,230,150,0.1)",
              transition: "transform 0.3s cubic-bezier(.22,1,.36,1), box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(60,230,150,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div aria-hidden style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(60,230,150,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div aria-hidden style={{ position: "absolute", bottom: -70, left: -50, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(190,90,255,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />

            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 22 }}>
              <span style={{
                background: "linear-gradient(135deg,#c9a84c,#ffe070)",
                color: "#3a2500", fontSize: 10, fontWeight: 800,
                padding: "5px 14px", borderRadius: T.radiusPill,
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                ⭐ Most Popular
              </span>
              <span style={{
                fontSize: 9.5, fontWeight: 600, padding: "5px 12px", borderRadius: T.radiusPill,
                border: "1px solid rgba(255,255,255,0.14)", color: "rgba(255,255,255,0.6)",
                background: "rgba(255,255,255,0.05)",
              }}>
                Limited time offer
              </span>
              <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, padding: "5px 12px", borderRadius: T.radiusPill, background: "rgba(60,230,150,0.12)", color: "#3ce696" }}>
                Save ₹1,102
              </span>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 3 }}>
              1-on-1 Consultation
            </p>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff", lineHeight: 1.22, marginBottom: 22, letterSpacing: "-0.01em" }}>
              Direct call with<br />Pritika herself
            </h3>

            <FeatureList
              features={FEATURES}
              iconBg={T.featureIconBg2}
              iconColor="#3ce696"
              textColor="rgba(255,255,255,0.68)"
            />

            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.07)", margin: "20px 0" }} />

            <PriceBlock original="₹2,099" current="₹997" suffix="dark" />

            <AdjustmentNote
              iconColor="#3ce696"
              bg="rgba(255,255,255,0.04)"
              border="1px solid rgba(255,255,255,0.07)"
              textColor="rgba(255,255,255,0.5)"
              strongColor="rgba(255,255,255,0.9)"
            />

            <Link
              to="/pritika-consultation"
              style={{
                width: "100%", padding: "16px 0", borderRadius: T.radiusPill,
                fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                background: "linear-gradient(90deg,#3ce696,#00d9ff)",
                color: "#05221a", letterSpacing: "0.02em", textDecoration: "none",
                transition: "filter 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.07)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
            >
              Reserve My Spot <ArrowRight size={14} strokeWidth={2.5} />
            </Link>

            <TrustRow items={[
              { icon: Star,  label: "4.9 / 5 Rating",         color: "rgba(255,255,255,0.28)" },
              { icon: Users, label: "10,000+ Women",           color: "rgba(255,255,255,0.28)" },
              { icon: Zap,   label: "Instant Confirmation",    color: "rgba(255,255,255,0.28)" },
            ]} />
          </div>

        </div>
      </div>
    </section>
  );
}