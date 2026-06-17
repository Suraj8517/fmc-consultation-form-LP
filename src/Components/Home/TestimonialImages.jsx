const transformations = [
  { name: "Sneha R.", loss: "−12 kg", duration: "3 months", image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=400&fit=crop" },
  { name: "Anjali M.", loss: "−9 kg", duration: "2 months", image: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?w=600&h=400&fit=crop" },
  { name: "Divya N.", loss: "−15 kg", duration: "4 months", image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=600&h=400&fit=crop" },
  { name: "Priya I.", loss: "−18 kg", duration: "5 months", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop" },
  { name: "Kavitha S.", loss: "−11 kg", duration: "3 months", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" },
  { name: "Meera P.", loss: "−9 kg", duration: "2 months", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop" },
];

export default function TransformationSection() {
  return (
    <section
      className="px-5 py-10 sm:px-10 md:px-16 lg:px-20 xl:px-24 2xl:px-32"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-2">
          Real results, real moms
        </p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-neutral-900">
          Their transformation,{" "}
          <span className="text-[#00d1b8]">your inspiration</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {transformations.map((item, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden group aspect-[4/3]">
            <img
              src={item.image}
              alt={`${item.name} transformation`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Bottom meta */}
            <div
              className="absolute bottom-0 inset-x-0 pt-10 pb-3 px-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
            >
              <span className="text-white text-sm font-medium">{item.name}</span>
              <div className="text-right">
                <p className="text-white text-base font-semibold leading-none">{item.loss}</p>
                <p className="text-white/70 text-[10px]">{item.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}