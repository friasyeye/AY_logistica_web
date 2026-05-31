export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          backgroundColor: "#0a0a0a",
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para legibilidad */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Contenido encima del vídeo */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          padding: "120px 24px 80px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(24px, 4vw, 44px)",
            color: "#ffffff",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            maxWidth: "820px",
            margin: 0,
          }}
        >
          Más orden, más control y menos gestión manual en la operativa logística
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontStyle: "normal",
            fontSize: "clamp(15px, 1.3vw, 18px)",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: 1.5,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          Ayudamos a empresas de logística, transporte y departamentos logísticos a reducir su carga operativa mediante soluciones digitales personalizadas con IA
        </p>

        <a
          href="https://calendly.com/alexfrias-ia/30min?month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            backdropFilter: "blur(10px)",
            color: "#ffffff",
            borderRadius: "50px",
            padding: "15px 36px",
            fontSize: "16px",
            fontWeight: 500,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            marginTop: "8px",
            display: "inline-block",
          }}
        >
          Quiero ver cómo funciona
        </a>
      </div>
    </section>
  );
}
