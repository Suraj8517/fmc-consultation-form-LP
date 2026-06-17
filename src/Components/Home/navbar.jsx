import { useEffect, useRef, useState } from "react";
import logo from "../../assets/home/logo.png"; 
export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const goingUp = currentY < lastY.current;

      // Show with white bg when scrolling up (and not at very top)
      // Hide when scrolling down
      if (currentY <= 10) {
        // At top — show, transparent
        setVisible(true);
        setScrolled(false);
      } else if (goingUp) {
        setVisible(true);
        setScrolled(true);
      } else {
        setVisible(false);
        setScrolled(true);
      }

      lastY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "white" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav
        className="flex items-center justify-between px-5 sm:px-8 md:px-12"
        style={{ height: "86px", fontFamily: "Poppins, sans-serif" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="FitMom Club" className="h-14 w-auto" />
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          

          {/* CTA */}
          <a
            href="#cta"
            className="h-14 px-5 rounded-full text-white text-sm font-medium flex items-center bg-teal-500"
            
          >
            Join Now
          </a>
        </div>
      </nav>
    </header>
  );
}