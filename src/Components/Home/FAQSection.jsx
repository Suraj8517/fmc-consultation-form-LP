import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who shouldn't consider joining the program?",
    a: null,
    bullets: [
      "People looking for magical pills and powders — All the health issues listed are lifestyle disorders. There are no shortcuts unless you work on your lifestyle.",
      "People looking to pay and buy health — Your health needs your equal contribution of following the expert's advice.",
      "People who want a crash diet — We only focus on healthy weight loss.",
      "People looking for quick results overnight — For example, losing 5 kgs in 1 week. Absolutely not! Our course is designed to take you from basics to advanced frameworks; no prior experience is required.",
    ],
  },
  {
    q: "How much can I reduce within a month?",
    a: "According to the World Health Organization (WHO), losing 2 to 4 Kg per month in a Healthy way is possible. That means, if you are 10 Kg overweight, It'll take about 3 - 4 months to lose the excess fat from your body and another 1 - 2 months to Tone up your body. ",
  },
  {
    q: "Can I get a trial diet for a week?",
    a: "People who want a trial diet for a week - Please check our expertise. Refer to the transformation stories of our clients on my FitMom Club Instagram page. We have highly experienced doctors, clinical dietitians, physiotherapists, and internationally certified fitness trainers who will be your health coaches in this program. So, no trial.",
  },
  {
    q: "How soon will I see results?",
    a: null,
    bullets: ["Results of the program given by our expert could vary from person to person depending upon his / her age, body- type, genetics, medical condition, etc. Based on our 1600+ client’s experience, results are a combination of two important factors:",
     "Expert guidance from the best and most experienced doctors and dieticians who need to understand your medical condition, and body response & use their best professional experience & knowledge to assist you accordingly. ",
"Dedicated and disciplined clients who follow our expert's advice."]},
  {
    q: "I'm non-veg / pure veg — will the diet plans accommodate that?",
    a: "There is no bias towards non-veg or veg diets. We believe in an eating plan that will stay true to your likes and dislikes and hence is doable.",
  },
  {
    q: "What kind of exercise will be given?",
    a: null,
bullets : ["Our Expert Fitness Trainers will suggest any one or a combination of the below based on your goals and Preferences",
"Yoga, BollyFit (Dance Fitness), HIIT, Low Impact Mobility, Fusion Fitness, Zumba, Functional Fitness, Slow Strengthening"]
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) {
      setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div
      className="border-b cursor-pointer select-none"
      style={{ borderColor: "rgba(0,0,0,0.1)" }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between py-5 gap-6">
        <span
          className="text-sm md:text-base font-normal"
          style={{ color: "#ffffff", fontFamily: "Poppins, sans-serif" }}
        >
          {item.q}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={1.5}
          color="#555"
          style={{
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </div>

      {/* Animated body */}
      <div
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div ref={bodyRef} className="pb-5">
          {item.bullets ? (
            <ul className="flex flex-col gap-2">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex gap-2.5 items-start text-sm leading-relaxed text-neutral-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#1a2e2b" }} />
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm leading-relaxed text-neutral-400">{item.a}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(null);
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  // Animated blob background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let t = 0;
    const draw = () => {
      t += 0.004;
      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = "#f0f4f8";
      ctx.fillRect(0, 0, w, h);

      const blobs = [
        { x: 0.08, y: 0.55, r: 0.38, color: "rgba(100,160,220,0.45)", dx: 0.6, dy: 0.4 },
        { x: 0.18, y: 0.25, r: 0.28, color: "rgba(130,185,230,0.30)", dx: 0.9, dy: 0.7 },
        { x: 0.0,  y: 0.8,  r: 0.22, color: "rgba(80,140,210,0.25)",  dx: 0.5, dy: 1.1 },
      ];

      blobs.forEach((b) => {
        const cx = (b.x + Math.sin(t * b.dx) * 0.06) * w;
        const cy = (b.y + Math.cos(t * b.dy) * 0.08) * h;
        const r  = b.r * Math.min(w, h) * (1 + Math.sin(t * 0.7) * 0.04);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, b.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const toggle = (i) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section
      className="relative min-h-[70svh] flex items-center px-5 pb-20 sm:px-10 md:px-16 lg:px-24 xl:px-32 overflow-hidden bg-[#0A0A0C]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-10 md:gap-20 items-start">

        {/* Left label */}
        <div className="md:pt-5">
          <h2
            className="font-medium text-neutral-100"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.15 }}
          >
            FAQ
          </h2>
        </div>

        {/* Right accordion */}
        <div>
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}