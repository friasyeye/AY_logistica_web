"use client";

import { useState } from "react";

const faqs = [
  {
    q: "¿Cuánto tiempo tarda la implementación?",
    a: "En la mayoría de casos el sistema está operativo en menos de 4 semanas. Depende de la complejidad de la operativa y las integraciones necesarias, pero trabajamos para que el impacto sea rápido y la transición no interrumpa el día a día.",
  },
  {
    q: "¿Tengo que cambiar las herramientas que ya uso?",
    a: "No. Integramos el sistema con las herramientas que ya tiene tu empresa — ERP, TMS, email, Excel o WhatsApp. El objetivo es mejorar cómo funcionan juntas, no obligarte a empezar desde cero.",
  },
  {
    q: "¿Esto es un software o un servicio?",
    a: "Es una solución personalizada, no un SaaS genérico que compras y configuras solo. Diseñamos, implementamos y acompañamos el proceso para que el sistema funcione de verdad en tu operativa concreta.",
  },
  {
    q: "¿Funciona para empresas de cualquier tamaño?",
    a: "Depende de la operativa, no del tamaño. Lo que importa es que haya procesos repetitivos que estén consumiendo tiempo de equipo de forma innecesaria. En la primera llamada lo vemos juntos.",
  },
  {
    q: "¿Qué resultados puedo esperar?",
    a: "Las empresas que implementan el sistema recuperan decenas de horas operativas al mes, reducen errores por gestión manual y ganan visibilidad y control sobre su operativa. Los tiempos y cifras concretas dependen de cada caso, por eso empezamos siempre con una auditoría.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de la complejidad de la operativa y el alcance de la solución. Por eso ofrecemos una primera llamada gratuita donde analizamos tu caso y te damos una propuesta concreta sin compromiso.",
  },
  {
    q: "¿Necesito conocimientos técnicos para usar el sistema?",
    a: "No. El sistema está diseñado para que lo use el equipo operativo sin formación técnica. Nos encargamos de toda la parte técnica y acompañamos al equipo durante la puesta en marcha.",
  },
  {
    q: "¿Qué pasa si ya tenemos procesos establecidos y no queremos cambiarlo todo?",
    a: "No hace falta cambiarlo todo. Empezamos por los procesos que más tiempo consumen o más problemas generan y construimos desde ahí. La implementación es gradual y se adapta a cómo trabaja tu empresa.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto" }}>

        <h2
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(28px, 4vw, 48px)",
            color: "#09040d",
            lineHeight: 1.1,
            letterSpacing: "-1.2px",
            margin: "0 0 56px",
          }}
        >
          Preguntas frecuentes
        </h2>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(9,4,13,0.1)",
                  ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(9,4,13,0.1)" } : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    gap: 16,
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(15px, 1.5vw, 17px)",
                      color: "#09040d",
                      lineHeight: 1.4,
                    }}
                  >
                    {faq.q}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="rgba(9,4,13,0.35)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    <polyline points="5 8 10 13 15 8" />
                  </svg>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 300 : 0,
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(14px, 1.4vw, 16px)",
                      color: "rgba(9,4,13,0.55)",
                      lineHeight: 1.7,
                      margin: "0 0 24px",
                      paddingRight: 36,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
