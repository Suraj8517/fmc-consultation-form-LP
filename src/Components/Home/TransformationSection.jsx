import { useState, useEffect, useRef, useCallback } from "react";
import ca from "../../assets/home/ca.png"
import nivetha from "../../assets/home/nivetha.png"
import reshma from "../../assets/home/reshma.png"
import sanjusri from "../../assets/home/sanjusri.png"
import sathya from "../../assets/home/sathya.png"
import sample from "../../assets/home/sample.jpg"


const DURATION = 6000;
const TICK_MS = 60;

const testimonials = [
  {
    quote:
      "Dietician Nehan and coach Dinesh were incredibly supportive throughout my journey. Despite my initial knee pain, the workouts were adjusted to suit me, and the personalized diet plan made consistency easy. Sharing my meals and weight updates daily kept me accountable and helped me stay on track.",
    author: "Mrs Sathya Muthukumar",
    image:sathya
  },
  {
    quote:
      "Coach Dinesh and nutritionist Resham patiently guided me through every challenge. With their support, I stayed consistent, lost nearly 16 kg, and regained my confidence. This journey taught me that consistency truly is the key to lasting transformation.",
    author: "Mrs Reshma Giridharan",
    image:reshma
  },
  {
    quote:
      "After gaining weight during pregnancy, I joined FitMomClub inspired by the amazing success stories. With guidance from my coach and dietitian, I lost 12.5 kg through mindful eating and regular exercise. The biggest lesson I learned is that real motivation comes from within.",
    author: "Dr Nivetha",
    image:nivetha
  },
  {
    quote:
      "Coach Dinesh and nutritionist Vaishnavi helped me transform my eating habits and improve my health. Through healthier choices and regular workouts, I gained confidence and achieved a positive change in my lifestyle. I'm grateful for the support I received throughout the journey.",
    author: "Mrs Sanjusri Balasubramaniam",
    image:sanjusri
  },
  {
    quote:
      "After pregnancy, I struggled with confidence and weight gain. Joining FitMomClub helped me transform my lifestyle and lose 15.5 kg in just 5.5 months. More importantly, I regained my confidence and belief in myself.",
    author: "Kavitha",
    image:sample
  },
  {
    quote:
      "The daily guidance from my coaches and nutritionist made all the difference. The supportive community, personalized diet plan, and constant motivation helped me stay consistent. Today, I've transformed from wearing XL-sized clothes to Size S and feel more confident than ever.",
    author: "CA Sushmitha Elangovan",
    image:ca
  },
  {
    quote:
      "I never felt like I was on a restrictive diet. By focusing on healthy eating and consistent workouts, I lost 10 kg while maintaining my energy and well-being. The support from the entire team made this transformation both enjoyable and sustainable.",
    author: "Mrs.Kavina Jaspher",
    image:sample
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      const total = DURATION * testimonials.length;
      const elapsed = Date.now() - startRef.current;
      const cyclePos = ((elapsed % total) + total) % total;
      const index = Math.floor(cyclePos / DURATION);
      setActive((prev) => (prev === index ? prev : index));
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  const goTo = useCallback((i) => {
    startRef.current = Date.now() - i * DURATION;
    setActive(i);
  }, []);

  return (
    <section
      className=" px-6 sm:px-12 md:px-20 lg:px-28 xl:px-36 min-h-screen flex items-center"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20  md:py-16">
        {/* Left */}
        <div className="max-w-xl mt-16">
          <h2 className=" text-3xl md:text-4xl font-medium text-[#2d2d2d] leading-snug mb-4">
            Trusted by moms who chose to reclaim their strength
          </h2>
          <a
            href="#"
            className="group text-lg text-[#2d2d2d] flex items-center gap-1"
          >
            Start Your Journey
            <span className="text-md transition-transform duration-300 group-hover:translate-x-1">
              ›
            </span>
          </a>
        </div>

        {/* Right — green card */}
        <div className="rounded-3xl p-8 2xl:p-12 flex flex-col bg-[#deecd8] 2xl:min-h-[560px] min-h-[460px]">
          {/* Quote + author */}
          <div
            className="flex-1"
            style={{ minHeight: "220px", position: "relative" }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity: i === active ? 1 : 0,
                  transition: "opacity 0.5s ease",
                  pointerEvents: i === active ? "auto" : "none",
                }}
              >
                <p className="text-[#2d2d2d] text-md 2xl:text-2xl leading-relaxed font-normal mb-6">
                  "{item.quote}"
                </p>
                <div className="mt-auto flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="w-10 h-10 rounded-full object-cover bg-amber-500"
                  />

                  <p className="text-[#2d2d2d] text-md 2xl:text-md">
                    {item.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Dash indicators */}
          <div className="flex gap-2 mt-8 pt-2 ">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex-1 h-[3px] rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i === active ? "#2d2d2d" : "rgba(0,0,0,0.18)",
                }}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
