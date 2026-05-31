import Image from "next/image";

const navLinks = ["Inicio", "Cómo funciona", "Para quién es", "FAQ", "Agenda una llamada"];


export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #f6f6f3 0%, #d4e0d5 35%, #29572D 70%, #1a3a1d 100%)",
        padding: "0 clamp(20px, 5vw, 60px)",
      }}
    >
      {/* CTA superior */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 0 100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4.5vw, 56px)",
            color: "#09040d",
            lineHeight: 1.08,
            letterSpacing: "-1.5px",
            margin: 0,
            maxWidth: 700,
          }}
        >
          Si tu operativa consume más de lo que debería, hay una forma mejor.
        </h2>
        <p
          style={{
            fontSize: "clamp(15px, 1.5vw, 18px)",
            color: "rgba(9,4,13,0.55)",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: 560,
          }}
        >
          Cuéntanos cómo trabaja tu empresa y te mostramos exactamente qué se puede automatizar y qué impacto tendría.
        </p>
        <a
          href="https://calendly.com/alexfrias-ia/30min?month=2026-06"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgba(9,4,13,0.12)",
            backdropFilter: "blur(10px)",
            color: "#09040d",
            borderRadius: 50,
            padding: "15px 36px",
            fontSize: 16,
            fontWeight: 600,
            fontFamily: "var(--font-inter), Inter, sans-serif",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            display: "inline-block",
            marginTop: 8,
          }}
        >
          Agenda tu diagnóstico gratuito
        </a>
      </div>

      {/* Separador */}
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)" }} />
      </div>

      {/* Links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "start",
          padding: "80px 0 60px",
        }}
      >
        {/* LEFT */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <Image
              src="/images/logo-white.png"
              alt="Automatiza Ya"
              width={52}
              height={52}
              style={{ objectFit: "contain" }}
            />
            <p
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 4vw, 44px)",
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-1.5px",
                margin: 0,
              }}
            >
              Automatiza Ya
            </p>
          </div>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.6,
              maxWidth: 320,
              marginTop: 16,
            }}
          >
            Soluciones digitales personalizadas con IA para empresas de logística, transporte y operativa industrial.
          </p>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 80,
            flexWrap: "wrap",
          }}
        >
            <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
              Navegación
            </p>
            {navLinks.map((link) => (
              <a key={link} href="#" style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "block", marginBottom: 12, textDecoration: "none" }}>
                {link}
              </a>
            ))}
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", margin: "0 0 16px" }}>
              Contacto
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", margin: "0 0 12px", fontStyle: "italic" }}>
              ¿Tienes dudas? Escríbenos sin compromiso
            </p>
            <a href="mailto:contacto@automatizaya-ia.com" style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 8, marginBottom: 12, textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
              contacto@automatizaya-ia.com
            </a>
            <a href="https://wa.me/34684175224" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 8, marginBottom: 12, textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.565 4.14 1.543 5.874L0 24l6.335-1.521A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.722.894.933-3.618-.235-.373A9.818 9.818 0 1112 21.818z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.linkedin.com/in/alex-fr%C3%ADas-ia/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 24,
          paddingBottom: 40,
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", margin: 0 }}>
          © 2025 Automatiza Ya · Todos los derechos reservados
        </p>
        <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
          Política de privacidad
        </a>
      </div>
    </footer>
  );
}
