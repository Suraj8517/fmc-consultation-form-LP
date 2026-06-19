import { useState, useEffect, useRef } from "react";
import hero from '../../assets/home/pritika-mobile.png';
import { Bike, Dumbbell } from 'lucide-react';
import appSS from "../../assets/home/appSS.png";
function ease(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function clamp(v, lo, hi) {
  return Math.min(Math.max(v, lo), hi);
}
function lerp(a, b, t) {
  return a + (b - a) * t;
}

const S1 = 200;
const S2 = 800;
const S3 = 1100;
const S4 = 2000;
const TOTAL = 2600;
const MAX_VH = 1200;

const activities = [
  { type: "bike", name: "Biking", time: "1:32 PM · 19 min · 5 km", cardio: 12 },
  { type: "run", name: "Full Body Reinforcement", time: "10:22 · 22 min", cardio: 7 },
  { type: "run", name: "Post-work outdoor run", time: "5:48 PM · 31 min · 5.2 km", cardio: 14 },
];

function ClockIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="16" height="10" rx="2" />
      <path d="M22 11v2" strokeWidth="2.5" />
      <rect x="4" y="9" width="9" height="6" rx="1" fill="#374151" stroke="none" />
    </svg>
  );
}

// ─── Mobile fade-in hook ───────────────────────────────────────────────────
function useFadeInRef(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

// ─── Mobile activity row with staggered fade ──────────────────────────────
function MobileActivityRow({ act, delay }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add("mob-act-visible"); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mob-act-row flex items-center justify-between bg-gray-50 rounded-2xl px-3.5 py-2.5"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="w-[38px] h-[38px] rounded-full bg-[#ccf2ec] flex items-center justify-center shrink-0">
          {act.type === "bike" ? <Bike size={18} color="#0f6e56" /> : <Dumbbell size={18} color="#0f6e56" />}
        </div>
        <div className="min-w-0">
          <p className="m-0 text-[13px] font-semibold text-gray-900 truncate max-w-[170px]">{act.name}</p>
          <p className="flex items-center gap-1 mt-0.5 text-[11px] text-gray-400 m-0">
            <ClockIcon />
            {act.time}
          </p>
        </div>
      </div>
      <div className="text-right shrink-0 ml-2">
        <p className="m-0 text-2xl font-bold text-gray-900 leading-none">{act.cardio}</p>
        <p className="m-0 mt-0.5 text-[10px] text-gray-400">Cardio load</p>
      </div>
    </div>
  );
}

// ─── Mobile section (shown only on small screens) ─────────────────────────
function MobileSection() {
  const contentRef = useFadeInRef(0.1);
  const activitiesRef = useFadeInRef(0.1);
  const descRef = useFadeInRef(0.1);

  return (
    <section className="block md:hidden bg-[#F6F4F0] font-sans antialiased">

      <style>{`
        .mob-hero-wrap {
          position: relative;
          width: 100%;
          height: 70svh;
          overflow: hidden;
        }
        .mob-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transform: scaleX(-1);
          display: block;
        }
        .mob-hero-dim {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.42);
        }
        .mob-hero-title {
          position: absolute;
          bottom: 48px;
          left: 0;
          right: 0;
          padding: 0 24px;
        }
        .mob-content-section {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .mob-content-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .mob-act-row {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
        .mob-act-row.mob-act-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Full-screen hero image with title overlay */}
      <div className="mob-hero-wrap">
        <img
          src={hero}
          alt="Person stretching with fitness tracker"
          className="mob-hero-img"
          onError={(e) => {
            e.currentTarget.style.background = "linear-gradient(160deg,#8B7355,#4A3F35)";
            e.currentTarget.removeAttribute("src");
          }}
        />
        <div className="mob-hero-dim" />
        <div className="mob-hero-title">
          <h1
            className="text-white font-semibold leading-[1.1] m-0"
            style={{ fontSize: "clamp(28px, 8vw, 48px)", letterSpacing: "-0.03em", textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
          >
            Exclusive Offer for<br />Dedicated Moms Like You!
          </h1>
        </div>
      </div>

      {/* Content below hero */}
      <div className="px-5 pt-10 pb-2">

        {/* Heading + description */}
        <div ref={contentRef} className="mob-content-section mb-8">
          <h2
            className="text-[#1a1a1a] font-semibold leading-[1.1] m-0"
            style={{ fontSize: "clamp(26px, 7vw, 36px)", letterSpacing: "-0.03em" }}
          >
            Turning commitment into transformation
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#5a5855] m-0">
            Ready to jump ahead in line and receive personalized
guidance with priority support throughout your wellness
journey?
          </p>
        </div>

        {/* Activities card */}
        <div ref={activitiesRef} className="mob-content-section mb-8" style={{ transitionDelay: "0.1s" }}>
  <div className="flex rounded-3xl overflow-hidden justify-center">
    <img src={appSS} alt="" className="w-[80%] h-[80%] object-cover justify-center" />
  </div>
</div>

      </div>
    </section>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function HomeHero() {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [vw, setVw] = useState(700);
  const [vh, setVh] = useState(900);
  const [imgLoaded, setImgLoaded] = useState(false);

  const targetScrollY = useRef(0);
  const smoothRef = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const offsetTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
      targetScrollY.current = Math.max(0, window.scrollY - offsetTop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const tick = () => {
      const current = smoothRef.current;
      const target = targetScrollY.current;
      const next = lerp(current, target, 0.15);
      const settled = Math.abs(target - next) < 0.05 ? target : next;
      smoothRef.current = settled;
      setScrollY(settled);
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    const update = () => {
      setVw(window.innerWidth);
      setVh(Math.min(window.innerHeight, MAX_VH));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // ── Scroll progress values ──────────────────────────────────────────────
  const p1 = ease(clamp(scrollY / S1, 0, 1));
  const p2 = ease(clamp((scrollY - S1) / (S2 - S1), 0, 1));
  const p3 = ease(clamp((scrollY - S2) / (S3 - S2), 0, 1));
  const p4 = ease(clamp((scrollY - S3) / (S4 - S3), 0, 1));

  // Side content fades in as card compresses (S2 → S3)
  const sideP = ease(clamp((scrollY - S2 * 0.8) / (S3 - S2 * 0.8), 0, 1));

  // Swipe/scroll hint fades out almost immediately on interaction
  const hintOpacity = clamp(1 - scrollY / 120, 0, 1);

  // ── Card geometry ───────────────────────────────────────────────────────
  const portraitW = Math.min(vw * 0.25, vw - 24);
  const wideW = vw * 0.78;
  const cardW = vw - p1 * (vw - wideW) - p2 * (wideW - portraitW);
  const cardLeft = (vw - cardW) / 2;
  const cardTop = p2 * 82;
  const cardRadius = p1 * 16 + p2 * 12;

  const shadowT = Math.min(p1 + p2, 1);
  const shadow = shadowT > 0.01
    ? `0 ${(shadowT * 22).toFixed(2)}px ${(shadowT * 44).toFixed(2)}px rgba(0,0,0,${(shadowT * 0.14).toFixed(3)})`
    : "none";

  // ── Image geometry ──────────────────────────────────────────────────────
  const uiBarH = p3 * 48;
  const pPad = ease(clamp((scrollY - S2) / (S3 - S2), 0, 1));
  const imgPad = pPad * 18;
  const imgRadius = pPad * 18;


  const ACTIVITIES_H = 388;
  const compactBudget = (vh - cardTop) - 48 - 18 - ACTIVITIES_H;
  const imgHCompact = Math.min(Math.max(compactBudget, 140), vh * 0.35, 360);

  const heightCompressP = ease(clamp((scrollY - S2) / (S3 - S2), 0, 1));
  const imgH = lerp(vh, imgHCompact, heightCompressP);

  // ── Heading overlay ─────────────────────────────────────────────────────
  const headingOpacity = clamp(1 - scrollY / (S1 * 0.7), 0, 1);
  const headingTransY = (1 - headingOpacity) * -24;

  // ── Activities panel ────────────────────────────────────────────────────
  const [panelMounted, setPanelMounted] = useState(false);
  useEffect(() => {
    if (scrollY > S3 * 0.6 && !panelMounted) setPanelMounted(true);
  }, [scrollY, panelMounted]);

  // ── Side panel positions: flank the card ────────────────────────────────
  // Left panel occupies space to the LEFT of the card
  const sideLeftWidth = cardLeft;                  // px from viewport left to card
  const sideRightWidth = cardLeft;                 // same on the right (card is centred)
  const sideRightStart = cardLeft + cardW;         // px from viewport left where right panel begins

  return (
    <>
      {/* ── Desktop scroll section (hidden on mobile) ── */}
      <div
        ref={containerRef}
        className="relative hidden md:block bg-[#F6F4F0] font-sans antialiased"
        style={{ height: `${TOTAL}px` }}
      >
        <style>{`
          @keyframes scrollHintBounce {
            0%, 100% { transform: translateY(0); opacity: 0.6; }
            50% { transform: translateY(7px); opacity: 1; }
          }
        `}</style>

        {/* Sticky viewport */}
        <div
          className="sticky top-0 bg-[#F6F4F0] overflow-hidden"
           style={{
    height: vh + 80,
  }}
        >
          {/* ── Left side content ───────────────────────────────────────── */}
          <div
            className="absolute top-0 flex items-center pointer-events-none will-change-transform"
            style={{
              left: 0,
              width: sideLeftWidth,
              height: vh,
              opacity: sideP,
              transform: `translateX(${(1 - sideP) * -40}px)`,
            }}
          >
            <div className="px-10 2xl:px-20 w-full">
              <h2
                className="text-[#1a1a1a] font-semibold leading-[1.1]"
                style={{
                  fontSize: "clamp(28px, 2.9vw, 72px)",
                  letterSpacing: "-0.02em",
                }}
              >
                Turning commitment into transformation
              </h2>
            </div>
          </div>

          {/* ── Right side content ──────────────────────────────────────── */}
          <div
            className="absolute top-0 flex items-center pointer-events-none will-change-transform"
            style={{
              left: sideRightStart,
              width: sideRightWidth,
              height: vh,
              opacity: sideP,
              transform: `translateX(${(1 - sideP) * 40}px)`,
            }}
          >
            <div className="px-10 2xl:px-20 w-full">
              <p
                className="text-[#5a5855] leading-[1.75]"
                style={{ fontSize: "clamp(13px, 1.1vw, 21px)" }}
              >
Ready to jump ahead in line and receive personalized guidance with priority support throughout your wellness journey?
              </p>
            </div>
          </div>

          {/* ── Morphing card ────────────────────────────────────────────── */}
          <div
            className="absolute pb-10 overflow-hidden bg-white will-change-transform"
            style={{
              top: 0,
              left: 0,
              width: cardW,
              height: "fit-content",
              borderRadius: cardRadius,
              boxShadow: shadow,
              transform: `translate3d(${cardLeft}px, ${cardTop}px, 0)`,
            }}
          >
            {/* Status / UI bar */}
            <div
              className="flex items-center justify-between bg-white shrink-0"
              style={{
                height: uiBarH,
                opacity: p3,
                padding: uiBarH > 10 ? "0 18px" : "0",
                transition: "padding 0.05s linear",
              }}
            >
              <span className="text-[15px] font-semibold text-gray-900">FitMom Club</span>
              <div className="flex items-center gap-1.5">
                <BatteryIcon />
                <span className="text-[13px] font-medium text-gray-700">85%</span>
              </div>
            </div>

            {/* Hero image + heading overlay */}
            <div
              className="relative"
              style={{ backgroundColor: imgLoaded ? "white" : "transparent" }}
            >
              <div style={{ padding: `0 ${imgPad}px ${imgPad}px` }}>
                <img
                  src={hero}
                  alt="Person stretching with fitness tracker"
                  className="w-full scale-x-[-1] block object-cover object-top will-change-transform"
                  style={{ height: imgH, borderRadius: imgRadius }}
                  onLoad={() => setImgLoaded(true)}
                  onError={(e) => {
                    e.currentTarget.style.background = "linear-gradient(160deg,#8B7355,#4A3F35)";
                    e.currentTarget.removeAttribute("src");
                  }}
                />
                {/* Dim overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: 1 - p1,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: imgRadius,
                  }}
                />
              </div>
              
              {/* Heading overlay */}
              <div
                className="absolute top-1/2 left-0 2xl:w-1/3 w-1/2 flex items-center justify-center px-6 pointer-events-none will-change-transform 2xl:ml-16 xl:mt-16"
                style={{
                  transform: `translateY(calc(-50% + ${headingTransY}px))`,
                  opacity: headingOpacity,
                }}
              >
                <h1
                  className="text-white/70 text-left leading-tight m-0"
                  style={{
                    fontSize: "clamp(22px, 5vw, 70px)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    textShadow: "0 2px 20px rgba(0,0,0,0.35)",
                  }}
                >
                  Exclusive Offer for <br />Dedicated Moms Like You!
                </h1>
                
              </div>
             
          {/* ── Swipe / scroll hint ─────────────────────────────────────── */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
            style={{ opacity: hintOpacity }}
          >
            <span className="text-[11px] uppercase tracking-[0.18em] text-white font-medium" style={{ textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
              Scroll
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: "scrollHintBounce 1.6s ease-in-out infinite", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.3))" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
            </div>

            {/* Activities panel */}
            {panelMounted && (
              <div
                className="bg-white will-change-transform"
                style={{
                  opacity: p4,
                  transform: `translate3d(0, ${(1 - p4) * 32}px, 0)`,
                  pointerEvents: p4 > 0.5 ? "auto" : "none",
                }}
              >
                <div className="flex items-center justify-between px-4 pt-3.5 pb-2">
                  <span className="text-[15px] font-bold text-gray-900">Recent activities</span>
                  <button className="flex items-center gap-0.5 text-[13px] font-medium text-[#4285F4] bg-transparent border-none cursor-pointer p-0">
                    All activities
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-1.5 px-2.5 pb-3.5">
                  {activities.map((act, i) => {
                    const rp = ease(clamp(p4 - i * 0.12, 0, 1));
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-between bg-gray-50 rounded-2xl px-3.5 py-2.5 will-change-transform"
                        style={{ opacity: rp, transform: `translate3d(0, ${(1 - rp) * 10}px, 0)` }}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="w-[38px] h-[38px] rounded-full bg-[#ccf2ec] flex items-center justify-center shrink-0">
                            {act.type === "bike" ? <Bike /> : <Dumbbell />}
                          </div>
                          <div className="min-w-0">
                            <p className="m-0 text-[13px] font-semibold text-gray-900 truncate max-w-[170px]">
                              {act.name}
                            </p>
                            <p className="flex items-center gap-1 mt-0.5 text-[11px] text-gray-400 m-0">
                              <ClockIcon />
                              {act.time}
                            </p>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-2">
                          <p className="m-0 text-2xl font-bold text-gray-900 leading-none">{act.cardio}</p>
                          <p className="m-0 mt-0.5 text-[10px] text-gray-400">Cardio load</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ── Mobile section ── */}
      <MobileSection />
    </>
  );
}