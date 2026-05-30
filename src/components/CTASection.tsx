export function CTASection() {
  return (
    <div style={{ backgroundColor: "white", padding: "0 40px" }}>
      <div
        style={{
          backgroundColor: "#09040d",
          borderRadius: 32,
          padding: "100px 60px",
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
            fontSize: 52,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1.56px",
            maxWidth: 700,
            margin: 0,
          }}
        >
          Start generating revenue in days, not months
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.5,
            maxWidth: 560,
            margin: 0,
          }}
        >
          Launch your professional website today and start converting visitors
          into paying customers immediately.
        </p>

        <button
          style={{
            backgroundColor: "white",
            color: "#09040d",
            borderRadius: 50,
            padding: "16px 36px",
            fontSize: 16,
            fontWeight: 600,
            border: "none",
            cursor: "pointer",
          }}
        >
          Get Free Demo
        </button>
      </div>
    </div>
  );
}
