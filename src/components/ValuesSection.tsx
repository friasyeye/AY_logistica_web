import { FlameIcon, CompassIcon, ClockIcon, PrismIcon } from './icons';

const values = [
  {
    Icon: FlameIcon,
    title: 'Transparency First',
    description: 'Energy data should be clear and accessible',
  },
  {
    Icon: CompassIcon,
    title: 'Customer Success',
    description: 'Every decision prioritizes long-term client results',
  },
  {
    Icon: ClockIcon,
    title: 'Continuous Innovation',
    description: 'We constantly improve our platform',
  },
  {
    Icon: PrismIcon,
    title: 'Data Security',
    description: 'Your operational data is 100% safe',
  },
];

export default function ValuesSection() {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '80px 40px 100px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 60, maxWidth: 1200 }}>
        {values.map((value) => (
          <div key={value.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 12, maxWidth: 220 }}>
            <div style={{ width: 64, height: 64, borderRadius: 16, backgroundColor: '#f6f6f3', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <value.Icon width={28} height={28} color="#09040d" />
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#09040d', marginTop: 8 }}>
              {value.title}
            </span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: 'rgba(0,0,0,0.5)', lineHeight: 1.5 }}>
              {value.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
