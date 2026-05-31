export default function MissionSection() {
  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: 80, paddingBottom: 80, paddingLeft: 'clamp(20px, 5vw, 40px)', paddingRight: 'clamp(20px, 5vw, 40px)', display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 860, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        {/* Large paragraph - two paragraphs */}
        <p style={{ fontFamily: "'Uncut Sans Variable', sans-serif", fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.3, textAlign: 'center', fontWeight: 1000, letterSpacing: '-0.5px', margin: 0, color: '#09040d' }}>
          Muchas empresas logísticas gestionan el día a día con llamadas, emails, Excel y herramientas desconectadas. El resultado es información dispersa, errores evitables y un equipo que invierte horas en tareas que no aportan valor.
        </p>
        <p style={{ fontFamily: "'Uncut Sans Variable', sans-serif", fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.3, textAlign: 'center', fontWeight: 1000, letterSpacing: '-0.5px', margin: 0, color: '#09040d' }}>
          Diseñamos e implantamos soluciones digitales personalizadas que centralizan y automatizan los procesos clave de tu operativa para que el equipo se enfoque en lo que realmente importa. Esto es lo que se puede llegar a conseguir cuando el sistema funciona:
        </p>
      </div>
    </section>
  );
}
