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
            fontSize: "52px",
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.5)",
            lineHeight: "57.2px",
            letterSpacing: "-2.08px",
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          What drives us
        </p>

        <h1
          style={{
            fontFamily: "'Uncut Sans Variable', sans-serif",
            fontWeight: 1000,
            fontSize: "52px",
            color: "#09040d",
            lineHeight: "52px",
            letterSpacing: "-1.56px",
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
