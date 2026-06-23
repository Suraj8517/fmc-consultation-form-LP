import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  User, Activity, Salad, CheckSquare,
  Star, Users, Lock, Zap, Heart, ArrowRight, Sparkles,
} from "lucide-react";

const CYCLING_WORDS = ["wellness", "fitness", "strength", "vitality"];
const CYCLE_MS = 2400;

const FEATURES = [
  { icon: User,        label: "Personalized Consultation" },
  { icon: Activity,   label: "Health Assessment" },
  { icon: Salad,      label: "Nutrition Guidance" },
  { icon: CheckSquare,label: "Program Recommendation" },
];

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

  return (
    <section
      id="cta" className="py-60"
      style={{
        fontFamily: "Poppins, sans-serif",
        background: "#0d0d0d",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        
        color: "#fff",
      }}
    >
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {/* ── TOP — Hero copy ── */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 14px",
              borderRadius: 999,
              background: "rgba(255,210,80,0.15)",
              color: "#ffd250",
              border: "1px solid rgba(255,210,80,0.3)",
              marginBottom: 20,
            }}
          >
            <Sparkles size={12} strokeWidth={2} />
            A special gift awaits
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(2rem,3.8vw,3rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              marginBottom: 18,
            }}
          >
            Your personalized
            <br />
            path to{" "}
            <span
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg,#ff6b3d,#ff3fa0,#c96bff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                transition: "opacity 0.3s, transform 0.3s",
                opacity: fade ? 1 : 0,
                transform: fade ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {CYCLING_WORDS[wordIdx]}
            </span>
            <br />
            starts here.
          </h2>

          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.75,
              marginBottom: 32,
              maxWidth: 560,
            }}
          >
            Every woman's journey is different. Our expert-designed programs
            begin with a real consultation — not a quiz — so you get guidance
            that actually fits your life.
          </p>

          {/* Stats row */}
          <div style={{ display: "flex", marginBottom: 32, width: "fit-content" }}>
            {[
              { num: "10K+", label: "Women guided" },
              { num: "4.9★", label: "Average rating" },
              { num: "48hrs", label: "Response time" },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  padding: "16px 20px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: i !== 0 ? "none" : undefined,
                  borderRadius:
                    i === 0 ? "16px 0 0 16px"
                    : i === arr.length - 1 ? "0 16px 16px 0"
                    : 0,
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    background: "linear-gradient(90deg,#ff6b3d,#ff3fa0)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
         
        </div>

        {/* ── BOTTOM — CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>

          {/* ══ CARD 1 — Express / White ══ */}
          <div
            style={{
              borderRadius: 28,
              padding: 28,
              position: "relative",
              overflow: "hidden",
              background: "#fff",
              color: "#111",
              transition: "transform 0.28s cubic-bezier(.22,1,.36,1)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px) scale(1.012)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 220,
                height: 220,
                borderRadius: "50%",
                background: "radial-gradient(circle,rgba(255,63,160,0.14) 0%,transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "5px 14px",
                  borderRadius: 999,
                  background: "#dcffe7",
                  color: "#076b2b",
                }}
              >
                <Zap size={9} strokeWidth={2.5} />
                Best for beginners
              </span>
              <span
                style={{
                  marginLeft: "auto",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "5px 14px",
                  borderRadius: 999,
                  background: "#fff0dc",
                  color: "#a05400",
                }}
              >
                Save ₹802
              </span>
            </div>

            <p
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#999",
                marginBottom: 2,
              }}
            >
              Express Consultation
            </p>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#111", lineHeight: 1.2, marginBottom: 20 }}>
              Quick consult with
              <br />
              the FitMom Club Team
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12.5, color: "#444" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "#f4f4f4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={13} color="#ff3fa0" strokeWidth={2.2} />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <hr style={{ border: "none", borderTop: "1.5px solid #f0f0f0", margin: "18px 0" }} />

            <p style={{ fontSize: 12, textDecoration: "line-through", color: "#bbb", marginBottom: 2 }}>₹1,099</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 16 }}>
              <span style={{ fontSize: 54, fontWeight: 800, color: "#111", lineHeight: 1, letterSpacing: "-0.04em" }}>
                ₹297
              </span>
              <span style={{ fontSize: 13, color: "#aaa", paddingBottom: 8 }}>only</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                fontSize: 11,
                color: "#666",
                background: "#fdf5ff",
                borderRadius: 12,
                padding: "12px 14px",
                marginBottom: 20,
                lineHeight: 1.6,
                border: "1px solid #f0d6ff",
              }}
            >
              <Heart size={13} color="#c96bff" strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
              <span>
                Consultation fee is{" "}
                <strong style={{ color: "#111" }}>adjusted against your program fee</strong> once you join.
              </span>
            </div>

            <Link
              to="/express-consultation"
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
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
            >
              Book My Consultation
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 }}>
              {[
                { icon: Star,  label: "4.9/5 Rating" },
                { icon: Users, label: "10,000+ Women" },
                { icon: Lock,  label: "Secure Booking" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "#999", fontWeight: 500 }}>
                  <Icon size={10} strokeWidth={2.2} />
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ══ CARD 2 — 1-on-1 / Dark Emerald ══ */}
          <div
            style={{
              borderRadius: 28,
              padding: 28,
              position: "relative",
              overflow: "hidden",
              background: "linear-gradient(145deg,#0b1f1c 0%,#0f2a26 50%,#091b18 100%)",
              border: "1px solid rgba(80,255,180,0.12)",
              transition: "transform 0.28s cubic-bezier(.22,1,.36,1)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px) scale(1.012)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
          >
            {/* Decorative glows */}
            <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(80,255,170,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -60, left: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,100,255,0.06) 0%,transparent 70%)", pointerEvents: "none" }} />

            {/* Badges */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              <span style={{ background: "linear-gradient(135deg,#c9a84c,#ffe080)", color: "#3a2500", fontSize: 10, fontWeight: 800, padding: "5px 14px", borderRadius: 999, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                ⭐ Most Popular
              </span>
              <span style={{ fontSize: 9.5, fontWeight: 600, padding: "5px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)" }}>
                Limited time offer
              </span>
              <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, padding: "5px 12px", borderRadius: 999, background: "rgba(80,255,170,0.14)", color: "#50ffaa" }}>
                Save ₹1,102
              </span>
            </div>

            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>
              1-on-1 Consultation
            </p>
            <h3 style={{ fontSize: 19, fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
              Direct call with
              <br />
              Pritika herself
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
              {FEATURES.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12.5, color: "rgba(255,255,255,0.7)" }}>
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={13} color="#50ffaa" strokeWidth={2.2} />
                  </div>
                  {label}
                </div>
              ))}
            </div>

            <hr style={{ border: "none", borderTop: "1px solid rgba(255,255,255,0.07)", margin: "18px 0" }} />

            <p style={{ fontSize: 12, textDecoration: "line-through", color: "rgba(255,255,255,0.28)", marginBottom: 2 }}>₹2,099</p>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, marginBottom: 16 }}>
              <span style={{ fontSize: 54, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em" }}>
                ₹997
              </span>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", paddingBottom: 8 }}>only</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 12,
                padding: "12px 14px",
                marginBottom: 20,
                lineHeight: 1.6,
              }}
            >
              <Heart size={13} color="#50ffaa" strokeWidth={2} style={{ marginTop: 1, flexShrink: 0 }} />
              <span>
                Consultation fee is{" "}
                <strong style={{ color: "rgba(255,255,255,0.9)" }}>adjusted against your program fee</strong> once you join.
              </span>
            </div>

            <Link
              to="/pritika-consultation"
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
              onMouseEnter={(e) => { e.currentTarget.style.filter = "brightness(1.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.filter = "none"; e.currentTarget.style.transform = "none"; }}
            >
              Reserve My Spot
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
              {[
                { icon: Star,  label: "4.9/5 Rating" },
                { icon: Users, label: "10,000+ Women" },
                { icon: Zap,   label: "Instant Confirmation" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 10, color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>
                  <Icon size={10} strokeWidth={2.2} />
                  {label}
                </span>
              ))}
            </div>
          </div>

        </div>
        {/* ── end BOTTOM ── */}

      </div>
    </section>
  );
}