export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #f6f6f3 0%, #ebe9e6 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 40px 80px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "900px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "48px",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.28)",
            lineHeight: 1.2,
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          What drives us
        </p>

        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "68px",
            color: "#09040d",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            maxWidth: "820px",
            margin: 0,
          }}
        >
          Helping you moving from idea to launch – fast
        </h1>

        <button
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            color: "#ffffff",
            borderRadius: "50px",
            padding: "14px 32px",
            fontSize: "16px",
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          Get to know us
        </button>
      </div>
    </section>
  );
}
