"use client";

import { useState } from "react";

const cases = [
  {
    label: "Empresas de transporte y mensajería",
    body: "Gestionas rutas, conductores, entregas y clientes a la vez. Automatizamos el seguimiento, las incidencias y la comunicación para que el equipo se enfoque en mover, no en gestionar.",
  },
  {
    label: "Operadores logísticos (3PLs)",
    body: "Coordinas múltiples clientes, almacenes y transportistas simultáneamente. Centralizamos la operativa para que tengas visibilidad y control real sin depender de llamadas constantes.",
  },
  {
    label: "Departamentos logísticos",
    body: "Dentro de una empresa de manufactura o distribución, la logística suele ser el cuello de botella. Digitalizamos y automatizamos los procesos internos para que el departamento opere con menos fricción.",
  },
  {
    label: "E-commerce con logística propia",
    body: "El volumen de pedidos crece pero la operativa no escala. Automatizamos la gestión de envíos, incidencias y comunicación con el cliente final para que el crecimiento no dependa de más equipo.",
  },
];

export default function AudienceSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>

        {/* Header */}
        <div style={{ maxWidth: 780 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#09040d",
              lineHeight: 1.1,
              letterSpacing: "-1.2px",
              margin: "0 0 20px",
            }}
          >
            Diseñado para empresas que mueven mercancía y necesitan mover también su operativa
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "rgba(9,4,13,0.5)",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Si gestionas expediciones, equipos o procesos logísticos y sientes que el día a día consume más tiempo del que debería, esto es para ti.
          </p>
        </div>

        {/* Acordeón */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {cases.map((c, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(9,4,13,0.1)",
                  ...(i === cases.length - 1 ? { borderBottom: "1px solid rgba(9,4,13,0.1)" } : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "28px 0",
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
                      fontWeight: 700,
                      fontSize: "clamp(16px, 2vw, 22px)",
                      color: "#09040d",
                      letterSpacing: "-0.3px",
                    }}
                  >
                    {c.label}
                  </span>
                  {/* Chevron */}
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

                {/* Contenido */}
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? 200 : 0,
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(15px, 1.4vw, 17px)",
                      color: "rgba(9,4,13,0.55)",
                      lineHeight: 1.7,
                      margin: "0 0 28px",
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Frase de cierre */}
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.5vw, 28px)",
            color: "rgba(9,4,13,0.45)",
            lineHeight: 1.5,
            margin: 0,
            maxWidth: 680,
          }}
        >
          * Si tu empresa mueve mercancía y la operativa consume más recursos de los que debería, podemos ayudarte.
        </p>

      </div>
    </section>
  );
}
