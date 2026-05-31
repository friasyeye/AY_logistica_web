export function CTASection() {
  return (
    <div style={{ backgroundColor: "white", padding: "0 clamp(16px, 4vw, 40px)" }}>
      <div
        style={{
          backgroundColor: "#29572D",
          borderRadius: 32,
          padding: "80px clamp(24px, 5vw, 60px)",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          position: "relative",
          overflow: "hidden",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Uncut Sans Variable', sans-serif",
            fontWeight: 1000,
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1.56px",
            maxWidth: 700,
            margin: 0,
          }}
        >
          Tu operativa puede funcionar sola. Nosotros te lo demostramos.
        </h2>

        <a
          href="https://calendly.com/alexfrias-ia/30min?month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "white",
            color: "#09040d",
            borderRadius: 50,
            padding: "16px 36px",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
            marginTop: 8,
          }}
        >
          Quiero ver el sistema
        </a>
      </div>
    </div>
  );
}
