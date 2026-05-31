"use client";

import Image from "next/image";


function FactsNumbersCard() {
  return (
    <div
      style={{
        width: 340,
        height: 380,
        borderRadius: 24,
        background: "linear-gradient(to bottom, #f4f3f1 40%, #29572D 100%)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 12,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          fontSize: 90,
          fontWeight: 500,
          color: "#09040d",
          lineHeight: 1,
          letterSpacing: "-3.6px",
          fontFamily: "'Inter Display', Inter, sans-serif",
        }}
      >
        60%
      </div>
      <p
        style={{
          fontSize: 18,
          color: "rgba(0,0,0,0.7)",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        Reducción del trabajo manual en seguimiento y coordinación interna
      </p>
    </div>
  );
}

function PhotoCardSmall() {
  return (
    <div
      style={{
        position: "relative",
        width: 340,
        height: 380,
        borderRadius: 24,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/images/toro_carga.jpg"
        alt="Toro de carga"
        fill
        sizes="340px"
        style={{ objectFit: "cover" }}
      />
      {/* Overlay degradado para legibilidad */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }}
      />
      {/* Texto encima */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: 28,
          right: 28,
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-3.6px",
            fontFamily: "'Inter Display', Inter, sans-serif",
          }}
        >
          20h
        </div>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.4,
            marginTop: 8,
            margin: "8px 0 0",
          }}
        >
          Horas semanales que deja de invertir el equipo en tareas repetitivas
        </p>
      </div>
    </div>
  );
}


function MottoCard() {
  return (
    <div
      style={{
        position: "relative",
        width: 340,
        height: 380,
        borderRadius: 24,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/images/camiones.avif"
        alt="Camiones"
        fill
        sizes="340px"
        style={{ objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          gap: 12,
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 500,
            color: "white",
            lineHeight: 1,
            letterSpacing: "-3.6px",
            fontFamily: "'Inter Display', Inter, sans-serif",
          }}
        >
          3x
        </div>
        <p
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.85)",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Más velocidad en la resolución de incidencias
        </p>
      </div>
    </div>
  );
}

function TestimonialCard() {
  return (
    <div
      style={{
        width: 380,
        height: 380,
        borderRadius: 24,
        backgroundColor: "#29572D",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "1.5px",
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
        }}
      >
        TESTIMONIO
      </span>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        &ldquo;Gestionábamos los pedidos de materiales y el seguimiento de entregas por WhatsApp y llamadas. Perdíamos horas cada semana persiguiendo información y coordinando con proveedores. Desde que implantamos el sistema tenemos todo centralizado y el equipo se enfoca en obra, no en gestión.&rdquo;
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
          Joel Marín
        </span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          Fundador de Renovamarin
        </span>
      </div>
    </div>
  );
}

function TestimonialCard2() {
  return (
    <div
      style={{
        width: 380,
        height: 380,
        borderRadius: 24,
        backgroundColor: "#3B3434",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "1.5px",
          color: "rgba(255,255,255,0.4)",
          textTransform: "uppercase",
        }}
      >
        TESTIMONIO
      </span>
      <p
        style={{
          fontSize: 16,
          color: "rgba(255,255,255,0.85)",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        &ldquo;En nuestro sector cada trabajo lleva informes, fotos, albaranes y comunicaciones con la comunidad de propietarios. Antes todo eso se perdía entre emails y carpetas. Ahora está centralizado, accesible y el cliente lo recibe de forma automática cuando toca.&rdquo;
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
          Josué
        </span>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
          Gerente de Proserveis1989
        </span>
      </div>
    </div>
  );
}

function CardSet() {
  return (
    <>
      <FactsNumbersCard />
      <TestimonialCard />
      <PhotoCardSmall />
      <TestimonialCard2 />
      <MottoCard />
    </>
  );
}

export function CarouselSection() {
  return (
    <section
      style={{
        backgroundColor: "#f6f6f3",
        overflow: "hidden",
        paddingBottom: 40,
        width: "100%",
      }}
    >
      <div
        className="animate-marquee"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
          width: "fit-content",
        }}
      >
        {/* Original set */}
        <CardSet />
        {/* Cloned set for seamless infinite loop */}
        <CardSet />
      </div>
    </section>
  );
}

export default CarouselSection;
