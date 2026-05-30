export default function MissionSection() {
  return (
    <section style={{ backgroundColor: '#ffffff', paddingTop: 120, paddingBottom: 80, paddingLeft: 40, paddingRight: 40, display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: 860, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
        {/* Label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#09040d', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 18, fontWeight: 400, color: 'rgba(0,0,0,0.5)' }}>Mission</span>
        </div>
        {/* Large paragraph - two-toned */}
        <p style={{ fontFamily: "'Uncut Sans Variable', sans-serif", fontSize: 38, lineHeight: '38px', textAlign: 'center', fontWeight: 1000, letterSpacing: '-0.76px', margin: 0 }}>
          <span style={{ color: 'rgba(0,0,0,0.28)', fontWeight: 1000 }}>Ask people about managing energy costs and you&apos;ll see them stress. </span>
          <span style={{ color: '#09040d' }}>Ask people about optimizing energy performance and you&apos;ll hear how it&apos;s overwhelming. Our mission is to change that.</span>
        </p>
      </div>
    </section>
  );
}
