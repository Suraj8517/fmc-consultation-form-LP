import React, { useEffect, useRef, useState } from "react";
import heroPhoto from "../../assets/home/pritika.png";
import mobileimg from "../../assets/home/pritika-mobile.png"
// ─────────────────────────────────────────────
// MOBILE VERSION – no scroll animation, mobile-first
// ─────────────────────────────────────────────
function AboutPritikaMobile({ imageUrl, content }) {
  return (
    <section className="relative w-full bg-[#F6F4F0] overflow-hidden">
      {/* Hero image – full width, portrait crop */}
      <div className="relative w-full" style={{ height: "30svh" }}>
        <img
          src={imageUrl}
          alt="Pritika, founder of FitMom Club"
          className="w-full h-full object-cover object-top-right"
        />
 {/* Watermark name behind image bottom edge */}
        <span
          className="absolute bottom-1 right-3 leading-none text-white/20 select-none pointer-events-none"
          style={{
            fontFamily: "'Righteous', serif",
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: "clamp(36px, 5vw, 36px)",
            lineHeight: 0.85,
            letterSpacing: "-0.02em",
          }}
        >
          PRITIKA
        </span>
       

        {/* Gradient fade into content below */}

        {/* Eyebrow pill – top-left of image */}
        <div className="absolute top-5 left-5 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-4 py-1.5">
          <span className="block w-6 h-px bg-white/60" />
          <p
            className="text-white/80 text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Meet Your Mentor
          </p>
        </div>
      </div>

      {/* Text card */}
      <div className="px-6 pt-2 pb-14">
        {/* Accent label */}
        <p
          className="text-[10px] tracking-[0.22em] uppercase mt-4 mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            color: "#00d1b8",
          }}
        >
          Welcome to Your New Beginning
        </p>

        {/* Divider */}
        <div className="w-8 h-px bg-neutral-300 mb-4" />

        {/* Name headline */}
        <h2
          className="text-[#1a1a1a] text-3xl font-medium mb-4 leading-snug"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Hi there, I'm{" "}
          <span style={{ color: "#00d1b8" }}>Pritika</span>
        </h2>

        {/* Body */}
        <p
          className="text-neutral-600 text-sm leading-relaxed text-justify"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {content}
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// DESKTOP VERSION – original scroll animation, untouched
// ─────────────────────────────────────────────
function AboutPritikaDesktop({ imageUrl, content }) {
  const sectionRef = useRef(null);
  const imgFrameRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  const MX = 120;
  const MY = 60;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrolled = -rect.top;

      const frame = imgFrameRef.current;
      const overlay = overlayRef.current;
      const textEl = textRef.current;
      const titleEl = titleRef.current;
      if (!frame) return;

      const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
      const lerp = (a, b, t) => a + (b - a) * clamp(t, 0, 1);

      const vh = window.innerHeight;
      const P1 = vh * 0.5;
      const P2 = vh * 1.0;
      const P3 = vh * 1.7;

      if (scrolled < 0) {
        Object.assign(frame.style, {
          top: `${MY}px`, left: `${MX}px`,
          width: `calc(100% - ${MX * 2}px)`,
          height: `calc(100vh - ${MY * 2}px)`,
          borderRadius: "14px",
        });
        if (overlay) overlay.style.opacity = "0";
        if (textEl) { textEl.style.opacity = "0"; textEl.style.transform = "translateY(28px)"; }
        if (titleEl) { titleEl.style.opacity = "1"; titleEl.style.transform = "translateY(0px)"; }

      } else if (scrolled < P1) {
        const t = scrolled / P1;
        const mx = lerp(MX, 0, t);
        const my = lerp(MY, 0, t);
        Object.assign(frame.style, {
          top: `${my}px`, left: `${mx}px`,
          width: `calc(100% - ${mx * 2}px)`,
          height: `calc(100vh - ${my * 2}px)`,
          borderRadius: `${lerp(14, 0, t)}px`,
        });
        if (overlay) overlay.style.opacity = String(lerp(0, 0.15, t));
        if (textEl) { textEl.style.opacity = "0"; textEl.style.transform = "translateY(28px)"; }
        if (titleEl) {
          titleEl.style.opacity = String(lerp(1, 0, t));
          titleEl.style.transform = `translateY(${lerp(0, -16, t)}px)`;
        }

      } else if (scrolled < P2) {
        Object.assign(frame.style, {
          top: "0", left: "0",
          width: "100%", height: "100vh",
          borderRadius: "0",
        });
        if (overlay) overlay.style.opacity = "0.15";
        if (textEl) { textEl.style.opacity = "0"; }
        if (titleEl) { titleEl.style.opacity = "0"; }

      } else if (scrolled < P3) {
        const t = (scrolled - P2) / (P3 - P2);
        Object.assign(frame.style, {
          top: "0", left: "0",
          width: "100%", height: "100vh",
          borderRadius: "0",
        });
        if (overlay) overlay.style.opacity = String(lerp(0.15, 0.6, t));
        if (textEl) {
          textEl.style.opacity = String(lerp(0, 1, t));
          textEl.style.transform = `translateY(${lerp(28, 0, t)}px)`;
        }

      } else {
        Object.assign(frame.style, {
          top: "0", left: "0",
          width: "100%", height: "100vh",
          borderRadius: "0",
        });
        if (overlay) overlay.style.opacity = "0.6";
        if (textEl) { textEl.style.opacity = "1"; textEl.style.transform = "translateY(0)"; }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [MX, MY]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#f6f4f0]"
      style={{ minHeight: "280vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Image frame */}
        <div
          ref={imgFrameRef}
          className="absolute overflow-hidden"
          style={{
            top: MY,
            left: MX,
            width: `calc(100% - ${MX * 2}px)`,
            height: `calc(100vh - ${MY * 2}px)`,
            borderRadius: 14,
          }}
        >
          <img
            src={imageUrl}
            alt="Pritika, founder of FitMom Club"
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* "Meet Your Mentor" title — sits above image, fades out on scroll */}
        <div
          ref={titleRef}
          className="absolute pointer-events-none z-10"
          style={{
            top: MY,
            left: MX,
            width: `calc(100% - ${MX * 2}px)`,
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="flex items-center gap-4 px-8 pt-8">
            {/* Decorative line */}
            <span className="block h-px w-10 bg-white/60" />
            <p className="text-white/70 text-xs 2xl:text-lg tracking-[0.2em] uppercase font-[Poppins] font-medium">
              Meet Your Mentor
            </p>
            <h1
              className="
                absolute
                top-2
                2xl:-top-8
                left-4
                text-[120px]
                md:text-[180px]
                2xl:text-[300px]
                uppercase
                2xl:text-black/30
                text-white/10
                whitespace-nowrap
                z-0
              "
              style={{
                fontFamily: "'Righteous', serif",
                fontWeight: "bold",
              }}
            >
              PRITIKA
            </h1>
          </div>
        </div>

        {/* Dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black pointer-events-none"
          style={{ opacity: 0, transition: "opacity 0.08s linear" }}
        />

        {/* Text content — right-aligned */}
        <div className="absolute inset-0 flex items-end justify-start pb-16 2xl:pb-20 pl-16 2xl:pl-20 pointer-events-none">
          <div
            ref={textRef}
            className="w-full max-w-lg 2xl:max-w-2xl"
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <p className="text-white/60 text-xs 2xl:text-xl tracking-[0.2em] uppercase font-[Poppins] mb-2"
            style={
                {fontFamily: "'Story Script', sans-serif"}
            }>
              Welcome to Your New Beginning with{" "}
              <span className="font-bold text-[#00d1b8]">Pritika</span>!
            </p>
            <div className="w-8 h-px bg-white/50 mb-4 mt-2" />
            <h2 className="text-white text-3xl 2xl:text-4xl font-medium mb-4 font-[Poppins] leading-snug">
              Hi there, I'm Pritika
            </h2>
            <p className="text-white/80 2xl:text-lg text-sm leading-relaxed font-[Poppins]">
              {content}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ROOT EXPORT – renders mobile or desktop based on screen width
// ─────────────────────────────────────────────
export default function AboutPritikaSection({
  imageUrl = heroPhoto,
   imageUrlMobile = mobileimg,
  content = `the heart and soul behind FitMom Club. As a Chartered Accountant, my life was once all about numbers and deadlines. But then, something changed.
My journey to health and vitality began with the birth of my little one. Suddenly, I was not just a professional but a mother grappling with postpartum weight and a body that felt unfamiliar. It wasn't just about shedding pounds; it was about rediscovering my energy, my joy, my strength.
I made a commitment, not just to return to my pre-pregnancy self, but to become a version of me that was even more vibrant and alive. This journey wasn't easy, but it was transformative. And now, I'm here to guide you on your own path to a fitter, more energetic you. It's more than a transformation; it's about reclaiming your wellbeing and joy.`,
}) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return isMobile
    ? <AboutPritikaMobile imageUrl={imageUrlMobile} content={content} />
    : <AboutPritikaDesktop imageUrl={imageUrl} content={content} />;
}