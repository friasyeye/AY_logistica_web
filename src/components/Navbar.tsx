import Image from "next/image";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    >
      {/* Logo + nombre */}
      <a
        href="/"
        aria-label="Automatiza Ya"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          pointerEvents: "auto",
          textDecoration: "none",
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/logo-white.png"
          alt="Automatiza Ya"
          width={60}
          height={60}
          priority
          style={{ objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 3.5vw, 17px)",
            color: "#ffffff",
            letterSpacing: "-0.3px",
            marginLeft: "-8px",
            whiteSpace: "nowrap",
          }}
        >
          Automatiza Ya
        </span>
      </a>

      {/* CTA */}
      <a
        href="https://calendly.com/alexfrias-ia/30min?month=2026-06"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#29572D",
          color: "#ffffff",
          borderRadius: "50px",
          padding: "10px clamp(12px, 3vw, 24px)",
          fontSize: "clamp(12px, 3vw, 15px)",
          fontWeight: 600,
          fontFamily: "var(--font-inter), Inter, sans-serif",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          transition: "opacity 0.2s",
          pointerEvents: "auto",
          display: "inline-block",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
        Diagnóstico gratuito
      </a>
    </header>
  );
}
