import React, { useEffect, useRef } from "react";

const stats = [
  { value: 10, suffix: "K+", label: "Women Transformed" },
  { value: 7000, suffix: "+", label: "Health Issues Reversed" },
  { value: 50000, suffix: "+", label: "Kilograms Reduced" },
];

function useCountUp(ref, target, suffix) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1600;
        const start = performance.now();
        const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const val = Math.round(target * ease(progress));
          el.textContent =
            target === 10 ? val + suffix : val.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else
            el.textContent =
              (target === 10 ? target : target.toLocaleString()) + suffix;
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, target, suffix]);
}

function StatItem({ value, suffix, label, borderRight }) {
  const numRef = useRef(null);
  useCountUp(numRef, value, suffix);

  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-12 ${
        borderRight ? "border-r border-stone-200" : ""
      }`}
    >
      <span
        ref={numRef}
        className="text-[52px] font-medium leading-none text-stone-900 font-[Poppins]"
      >
        0
      </span>
      <p className="mt-2 text-[13px] tracking-wide text-stone-500 font-[Poppins]">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full  py-20 px-6 text-center">
      <p className="text-xs tracking-[0.18em] uppercase text-stone-400 mb-1 font-[Poppins]">
        Our impact
      </p>
      <h2 className="text-2xl font-medium text-stone-900 mb-14 font-[Poppins]">
        Real women. Real results.
      </h2>

      <div className="mx-auto max-w-3xl grid grid-cols-1 sm:grid-cols-3 border border-stone-200 rounded-xl overflow-hidden">
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            {...stat}
            borderRight={i < stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}