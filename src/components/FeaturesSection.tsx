const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
    title: "Seguimiento de expediciones en tiempo real",
    body: "Sabe en todo momento el estado de cada expedición sin depender de llamadas ni actualizaciones manuales. La información llega sola, siempre actualizada.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Gestión y resolución de incidencias",
    body: "Las incidencias se detectan, registran y escalan automáticamente. El equipo actúa cuando toca, sin que nada se pierda por el camino.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Coordinación interna de equipos",
    body: "Tareas, responsables y estados siempre visibles para todo el equipo. Menos reuniones, menos llamadas y menos dependencia de que alguien recuerde qué tocaba hacer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
        <polyline points="9 9 10 9 11 9" />
      </svg>
    ),
    title: "Documentación operativa organizada y accesible",
    body: "Albaranes, CMRs, partes de trabajo y cualquier documento operativo, siempre en el lugar correcto y accesible para quien lo necesite, cuando lo necesite.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
    title: "Alertas y notificaciones automáticas",
    body: "El sistema avisa al equipo y al cliente cuando algo requiere atención. Sin intervención manual, sin que nada se quede sin comunicar.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Visibilidad y control total de la operativa",
    body: "Un panel centralizado con el estado real de la operativa. Para tomar decisiones con información, no con suposiciones.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "100px clamp(20px, 5vw, 80px)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#09040d",
              lineHeight: 1.1,
              letterSpacing: "-1.2px",
              margin: "0 0 24px",
              maxWidth: 900,
            }}
          >
            Todas las piezas de tu operativa logística, conectadas e impulsadas por&nbsp;IA
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.5vw, 18px)",
              color: "rgba(9,4,13,0.55)",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: 700,
            }}
          >
            Integramos nuestras soluciones con las herramientas que ya usa tu empresa — ERP, TMS, email, Excel o WhatsApp — para que no tengas que cambiar cómo trabajas. El sistema se adapta a tu operativa, no al revés.
          </p>
        </div>

        {/* Grid de features */}
        <div className="features-grid">
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: "rgba(9,4,13,0.04)",
                backdropFilter: "blur(8px)",
                borderRadius: 20,
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              {/* Icono */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  backgroundColor: "rgba(9,4,13,0.06)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#29572D",
                  flexShrink: 0,
                }}
              >
                {f.icon}
              </div>
              {/* Texto */}
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#09040d",
                    lineHeight: 1.3,
                    margin: "0 0 8px",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(9,4,13,0.55)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {f.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
