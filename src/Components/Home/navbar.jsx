import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logo from "../../assets/home/logo.png";

const T = {
  radiusPill: 999,
};

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const goingUp = currentY < lastY.current;

      if (currentY <= 10) {
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
      <style>{`
        .consult-btn {
          transition: filter 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .consult-btn:hover {
          filter: brightness(1.07);
          transform: translateY(-2px);
        }
        .consult-btn:active {
          transform: translateY(0);
        }
      `}</style>

      <nav
        className="flex items-center justify-between gap-3 px-5 sm:px-8 md:px-12 py-3 md:py-0"
        style={{ minHeight: "86px", fontFamily: "Poppins, sans-serif" }}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="FitMom Club" className="h-10 md:h-14 w-auto" />
        </a>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          <Link
            to="/pritika-consultation"
            className="consult-btn flex items-center justify-center gap-1.5 whitespace-nowrap"
            style={{
              padding: "10px 16px",
              borderRadius: T.radiusPill,
              fontSize: 13,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#3ce696,#00d9ff)",
              color: "#05221a",
              letterSpacing: "0.02em",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(0, 217, 255, 0.25)",
            }}
          >
            <span className="hidden sm:inline">Book Consultation with Pritika</span>
            <span className="sm:hidden">Book with Pritika</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>

          <Link
            to="/express-consultation"
            className="consult-btn flex items-center justify-center gap-1.5 whitespace-nowrap"
            style={{
              padding: "10px 16px",
              borderRadius: T.radiusPill,
              fontSize: 13,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#ff3fa0,#ff6b3d)",
              color: "#fff",
              letterSpacing: "0.02em",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(255, 63, 160, 0.25)",
            }}
          >
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book Now</span>
            <ArrowRight size={14} strokeWidth={2.5} />
          </Link>
        </div>
      </nav>
    </header>
  );
}