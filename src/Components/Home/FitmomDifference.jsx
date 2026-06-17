export default function FitMomDifference() {
  const without = [
    "Struggling with weight loss without essential knowledge.",
    "Overwhelmed and unsure about where to begin.",
    "Relying on unexciting, self-devised diet plans.",
    "Facing a fitness journey alone, without camaraderie or guidance.",
    "No system to track progress or celebrate milestones.",
    "Lacking motivation and support when it's needed most.",
  ];

  const with_ = [
    "Understand nutrition and fitness with us, graduating towards better health.",
    "A clear and personalized roadmap to reach your fitness goals.",
    "Customized diet plans crafted by nutrition experts, tailored just for you.",
    "Be part of engaging live group workouts — feel the community spirit.",
    "Regular progress updates, with rewards to celebrate your achievements.",
    "Continuous motivation and support from our dedicated experts.",
  ];

  return (
    <section
      className=" px-5 py-8 sm:px-10 md:px-16 lg:px-24"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <p className="text-[10px] tracking-[0.18em] uppercase text-neutral-400 mb-2">
          The FitMom Club Difference
        </p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-neutral-900">
          Your Journey, <span className="text-[#00d1b8]">Redefined</span>
        </h2>
      </div>

      {/* Comparison grid — items-stretch ensures equal height */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_40px_1fr] items-stretch">

        {/* Without — flex col so inner card fills height */}
        <div className="flex flex-col">
          <div className="bg-[#EDEBE8] rounded-t-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-black/8 flex items-center justify-center text-neutral-400 text-sm">✕</div>
            <span className="text-sm font-medium text-neutral-500">Without expert guidance</span>
          </div>
          {/* flex-1 makes this grow to fill remaining height */}
          <div className="bg-[#EDEBE8] rounded-b-2xl md:rounded-br-2xl pb-4 flex-1">
            {without.map((item, i) => (
              <div
                key={i}
                className={`flex gap-3 px-6 py-3 text-sm text-[#7a756f] leading-relaxed ${
                  i > 0 ? "border-t border-black/5" : ""
                }`}
              >
                <span className="text-neutral-300 mt-0.5 flex-shrink-0">✕</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* VS divider — hidden on mobile */}
        <div className="hidden md:flex flex-col items-center">
          <div className="h-14" />
          <div className="flex-none h-8 w-px bg-[#d0cec9]" />
          <div className="border border-[#d0cec9] rounded-full py-1.5 w-9 text-center text-[10px] font-semibold text-neutral-400 my-2 flex-shrink-0">
            VS
          </div>
          <div className="flex-1 w-px bg-[#2a3d38]" />
        </div>

        {/* With — flex col so inner card fills height */}
        <div className="flex flex-col mt-2 md:mt-0">
          <div className="bg-[#1a2e2b] rounded-t-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#00d1b8]/20 flex items-center justify-center text-[#00d1b8] text-sm">✓</div>
            <span className="text-sm font-medium text-white">With FitMom Club</span>
          </div>
          {/* flex-1 makes this grow to fill remaining height */}
          <div className="bg-[#1a2e2b] rounded-b-2xl md:rounded-bl-2xl pb-4 flex-1">
            {with_.map((item, i) => (
              <div
                key={i}
                className={`flex gap-3 px-6 py-3 text-sm text-[#c8ded9] leading-relaxed ${
                  i > 0 ? "border-t border-white/6" : ""
                }`}
              >
                <span className="text-[#00d1b8] mt-0.5 flex-shrink-0">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}