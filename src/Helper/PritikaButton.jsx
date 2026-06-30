import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ArrowRight } from "lucide-react";

const PritikaConsultationButton = ({
  to = "/pritika-consultation#payments",
  text = "Book Consultation with Pritika",
  className = "",
  style = {},
  icon = true,
}) => {
  return (
    <HashLink
      to={to}
      className={`consult-btn flex items-center justify-center gap-1.5 whitespace-nowrap ${className}`}
      style={{
        padding: "16px 16px",
        borderRadius: "9999px",
        fontSize: 13,
        fontWeight: 700,
        border: "none",
        cursor: "pointer",
        background: "linear-gradient(90deg,#3ce696,#00d9ff)",
        color: "#05221a",
        letterSpacing: "0.02em",
        textDecoration: "none",
        boxShadow: "0 4px 14px rgba(0, 217, 255, 0.25)",
        ...style,
      }}
    >
      {text}
      {icon && <ArrowRight size={14} strokeWidth={2.5} />}
    </HashLink>
  );
};

export default PritikaConsultationButton;