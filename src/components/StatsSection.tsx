const stats = [
  { number: '12', label: 'Energy management experts' },
  { number: '5', label: 'Countries served' },
  { number: '$2.5M', label: 'Client savings generated' },
  { number: '850', label: 'Facilities optimized' },
];

export default function StatsSection() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 40px 100px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', maxWidth: 1200, width: '100%', gap: 40 }}>
        {stats.map((stat) => (
          <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 80, fontWeight: 800, color: '#09040d', lineHeight: 1, letterSpacing: -2 }}>
              {stat.number}
            </span>
            <span style={{ fontSize: 16, fontWeight: 400, color: 'rgba(0,0,0,0.5)', textAlign: 'center', maxWidth: 140, lineHeight: 1.4 }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
