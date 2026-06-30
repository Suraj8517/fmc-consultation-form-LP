import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ConsultationButton = ({
  to = "/express-consultation",
  text = "Book My Consultation",
  className = "",
  style = {},
}) => {
  return (
    <Link
      to={to}
      className={`consult-btn ${className}`}
      style={{
        width: "100%",
        padding: "16px 16px",
        borderRadius: "9999px",
        fontSize: 14,
        fontWeight: 700,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "linear-gradient(90deg,#ff3fa0,#ff6b3d)",
        color: "#fff",
        letterSpacing: "0.02em",
        textDecoration: "none",
        ...style,
      }}
    >
      {text}
      <ArrowRight size={14} strokeWidth={2.5} />
    </Link>
  );
};

export default ConsultationButton;