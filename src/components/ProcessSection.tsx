"use client";

import { useState } from "react";

const AuditIllustration = () => (
  <svg viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="800" height="340" fill="#f6f6f3"/>
    {/* Documento principal */}
    <rect x="240" y="50" width="200" height="240" rx="12" fill="white" stroke="#e0e0e0" strokeWidth="2"/>
    <rect x="264" y="84" width="120" height="10" rx="5" fill="#29572D"/>
    <rect x="264" y="106" width="152" height="6" rx="3" fill="#d0d0d0"/>
    <rect x="264" y="120" width="130" height="6" rx="3" fill="#d0d0d0"/>
    <rect x="264" y="134" width="144" height="6" rx="3" fill="#d0d0d0"/>
    {/* Separador */}
    <line x1="264" y1="154" x2="416" y2="154" stroke="#e8e8e8" strokeWidth="1.5"/>
    {/* Items check */}
    <rect x="264" y="168" width="12" height="12" rx="3" fill="#29572D"/>
    <path d="M266 174l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="284" y="170" width="90" height="6" rx="3" fill="#d0d0d0"/>
    <rect x="264" y="190" width="12" height="12" rx="3" fill="#29572D"/>
    <path d="M266 196l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="284" y="192" width="110" height="6" rx="3" fill="#d0d0d0"/>
    <rect x="264" y="212" width="12" height="12" rx="3" fill="#e0e0e0"/>
    <rect x="284" y="214" width="80" height="6" rx="3" fill="#e0e0e0"/>
    <rect x="264" y="234" width="12" height="12" rx="3" fill="#e0e0e0"/>
    <rect x="284" y="236" width="100" height="6" rx="3" fill="#e0e0e0"/>
    {/* Lupa */}
    <circle cx="510" cy="160" r="64" fill="white" stroke="#e0e0e0" strokeWidth="2"/>
    <circle cx="510" cy="155" r="36" stroke="#29572D" strokeWidth="3" fill="none"/>
    <line x1="536" y1="181" x2="556" y2="201" stroke="#29572D" strokeWidth="4" strokeLinecap="round"/>
    {/* Líneas dentro lupa */}
    <rect x="495" y="148" width="30" height="4" rx="2" fill="#29572D" opacity="0.4"/>
    <rect x="495" y="156" width="22" height="4" rx="2" fill="#29572D" opacity="0.4"/>
    <rect x="495" y="164" width="26" height="4" rx="2" fill="#29572D" opacity="0.4"/>
    {/* Etiqueta */}
    <rect x="440" y="244" width="140" height="36" rx="18" fill="#29572D"/>
    <text x="510" y="267" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600">Auditoría</text>
  </svg>
);

const BuildIllustration = () => (
  <svg viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="800" height="340" fill="#f6f6f3"/>
    {/* Nodo central */}
    <circle cx="400" cy="170" r="44" fill="#29572D"/>
    <text x="400" y="176" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter, sans-serif" fontWeight="700">Sistema</text>
    {/* Nodos satélite */}
    <circle cx="200" cy="90" r="32" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="200" y="86" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">ERP</text>
    <text x="200" y="99" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif">/ TMS</text>

    <circle cx="600" cy="90" r="32" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="600" y="86" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Email</text>
    <text x="600" y="99" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif">/ WhatsApp</text>

    <circle cx="180" cy="260" r="32" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="180" y="256" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Excel</text>
    <text x="180" y="269" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif">/ Datos</text>

    <circle cx="620" cy="260" r="32" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="620" y="256" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Equipo</text>
    <text x="620" y="269" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif">/ Alertas</text>

    <circle cx="400" cy="50" r="28" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="400" y="55" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">API</text>

    <circle cx="400" cy="290" r="28" fill="white" stroke="#29572D" strokeWidth="2"/>
    <text x="400" y="295" textAnchor="middle" fill="#29572D" fontSize="10" fontFamily="Inter, sans-serif" fontWeight="600">Clientes</text>

    {/* Líneas de conexión */}
    <line x1="356" y1="145" x2="228" y2="112" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <line x1="444" y1="145" x2="572" y2="112" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <line x1="362" y1="196" x2="210" y2="240" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <line x1="438" y1="196" x2="592" y2="240" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <line x1="400" y1="126" x2="400" y2="78" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
    <line x1="400" y1="214" x2="400" y2="262" stroke="#29572D" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.5"/>
  </svg>
);

const LiveIllustration = () => (
  <svg viewBox="0 0 800 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <rect width="800" height="340" fill="#f6f6f3"/>
    {/* Panel / dashboard */}
    <rect x="120" y="60" width="460" height="220" rx="16" fill="white" stroke="#e0e0e0" strokeWidth="2"/>
    {/* Header panel */}
    <rect x="120" y="60" width="460" height="44" rx="16" fill="#09040d"/>
    <rect x="120" y="84" width="460" height="20" fill="#09040d"/>
    <circle cx="148" cy="82" r="6" fill="#ff5f57"/>
    <circle cx="168" cy="82" r="6" fill="#febc2e"/>
    <circle cx="188" cy="82" r="6" fill="#28c840"/>
    <text x="340" y="87" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter, sans-serif" opacity="0.7">Panel operativo</text>
    {/* Métricas */}
    <rect x="140" y="120" width="120" height="60" rx="10" fill="#f6f6f3"/>
    <text x="200" y="145" textAnchor="middle" fill="#29572D" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="800">98%</text>
    <text x="200" y="163" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">Entregas OK</text>

    <rect x="280" y="120" width="120" height="60" rx="10" fill="#f6f6f3"/>
    <text x="340" y="145" textAnchor="middle" fill="#29572D" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="800">3x</text>
    <text x="340" y="163" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">Más velocidad</text>

    <rect x="420" y="120" width="120" height="60" rx="10" fill="#f6f6f3"/>
    <text x="480" y="145" textAnchor="middle" fill="#29572D" fontSize="22" fontFamily="Inter, sans-serif" fontWeight="800">0h</text>
    <text x="480" y="163" textAnchor="middle" fill="#888" fontSize="10" fontFamily="Inter, sans-serif">Tareas manuales</text>

    {/* Gráfico de línea */}
    <polyline points="140,240 200,220 260,230 320,200 380,185 440,170 500,155 540,145" stroke="#29572D" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="140,240 200,220 260,230 320,200 380,185 440,170 500,155 540,145 540,260 140,260" fill="#29572D" opacity="0.08"/>

    {/* Icono check grande */}
    <circle cx="660" cy="170" r="52" fill="#29572D"/>
    <path d="M636 170l16 16 28-28" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <text x="660" y="238" textAnchor="middle" fill="#29572D" fontSize="12" fontFamily="Inter, sans-serif" fontWeight="600">Go live</text>
  </svg>
);

const steps = [
  {
    label: "Paso 1",
    title: "Auditoría operativa",
    body: "Analizamos cómo opera tu empresa hoy: qué procesos consumen más tiempo, dónde se pierde información y qué tareas está haciendo el equipo que podría automatizar un sistema. Sin compromiso y sin tecnicismos.",
    illustration: <AuditIllustration />,
  },
  {
    label: "Paso 2",
    title: "Diseño e implementación",
    body: "Diseñamos la solución a medida para tu operativa y la integramos con las herramientas que ya usas. No es un software genérico que hay que adaptar, es un sistema construido para cómo trabaja tu empresa.",
    illustration: <BuildIllustration />,
  },
  {
    label: "Paso 3",
    title: "Go live y acompañamiento",
    body: "El sistema entra en producción y acompañamos al equipo hasta que todo funciona con naturalidad. No te dejamos solo con una herramienta nueva, nos aseguramos de que el cambio se consolide.",
    illustration: <LiveIllustration />,
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <section
      style={{
        backgroundColor: "#f6f6f3",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Titular */}
        <h2
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#09040d",
            lineHeight: 1.1,
            letterSpacing: "-1.2px",
            margin: "0 0 56px",
            maxWidth: 700,
          }}
        >
          De la primera llamada a la operativa automatizada
        </h2>

        {/* Tarjeta única */}
        <div
          style={{
            backgroundColor: "#09040d",
            borderRadius: 24,
            overflow: "hidden",
          }}
        >
          {/* Botones dentro de la tarjeta */}
          <div
            style={{
              display: "flex",
              gap: 8,
              padding: "28px 28px 0",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                  transition: "all 0.2s ease",
                  backgroundColor: active === i ? "#29572D" : "rgba(255,255,255,0.1)",
                  color: active === i ? "#ffffff" : "rgba(255,255,255,0.45)",
                }}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Ilustración */}
          <div
            style={{
              width: "100%",
              marginTop: 16,
              lineHeight: 0,
            }}
          >
            {current.illustration}
          </div>

          {/* Texto */}
          <div style={{ padding: "clamp(24px, 4vw, 40px) clamp(24px, 4vw, 48px) clamp(32px, 4vw, 48px)" }}>
            <h3
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(20px, 3vw, 28px)",
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-0.8px",
                margin: "0 0 12px",
              }}
            >
              {current.title}
            </h3>
            <p
              style={{
                fontSize: "clamp(15px, 1.4vw, 17px)",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {current.body}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
