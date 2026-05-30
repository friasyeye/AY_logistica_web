const teamMembers = [
  {
    name: "Sarah Kim",
    title: "Co-founder & CEO",
    initials: "SK",
    gradient: "linear-gradient(135deg, #c8e6a0, #8bc34a)",
  },
  {
    name: "Maria Rodriguez",
    title: "CTO & Co-founder",
    initials: "MR",
    gradient: "linear-gradient(135deg, #6a5acd, #4a3a9d)",
  },
  {
    name: "Eskil Fogelström",
    title: "VP of Engineering",
    initials: "EF",
    gradient: "linear-gradient(135deg, #d4a574, #c49060)",
  },
  {
    name: "David Thompson",
    title: "Head of Product",
    initials: "DT",
    gradient: "linear-gradient(135deg, #3a3040, #5a4060)",
  },
  {
    name: "Jennifer Park",
    title: "Lead Data Scientist",
    initials: "JP",
    gradient: "linear-gradient(135deg, #f5d060, #f0b040)",
  },
  {
    name: "Alex Chen",
    title: "Customer Success Manager",
    initials: "AC",
    gradient: "linear-gradient(135deg, #90d060, #60b020)",
  },
];

function LinkedInBox() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        backgroundColor: "#09040d",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.94 5a2 2 0 11-4-.002A2 2 0 016.94 5zm.06 3.02H3v12h4V8.02zm6.32 0H9.34v12h3.94v-6.3c0-3.64 4.68-3.94 4.68 0v6.3H22v-7.6c0-5.92-6.68-5.7-8.68-2.79V8.02z" />
      </svg>
    </div>
  );
}

export function TeamSection() {
  return (
    <section style={{ backgroundColor: "white", padding: "0 40px 80px" }}>
      <div
        style={{
          backgroundColor: "#f6f6f3",
          borderRadius: 32,
          padding: 60,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontSize: 48,
              fontWeight: 400,
              color: "rgba(0,0,0,0.4)",
              letterSpacing: "-1.44px",
              margin: "0 0 4px",
            }}
          >
            Our heroes
          </p>
          <h2
            style={{
              fontFamily: "'Uncut Sans Variable', sans-serif",
              fontWeight: 1000,
              fontSize: 48,
              color: "#09040d",
              letterSpacing: "-0.96px",
              margin: 0,
            }}
          >
            Meet the team
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              style={{
                backgroundColor: "white",
                borderRadius: 24,
                padding: "40px 32px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                textAlign: "center",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: member.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  fontWeight: 700,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {member.initials}
              </div>

              {/* Name */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontSize: 22,
                  letterSpacing: "-0.44px",
                  color: "#09040d",
                  margin: 0,
                }}
              >
                {member.name}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(0,0,0,0.5)",
                  margin: 0,
                }}
              >
                {member.title}
              </p>

              {/* LinkedIn */}
              <LinkedInBox />
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            paddingTop: 16,
          }}
        >
          <span
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 600,
              fontSize: 22,
              letterSpacing: "-0.22px",
              color: "#09040d",
            }}
          >
            Want to join our team?
          </span>
          <button
            style={{
              backgroundColor: "#09040d",
              color: "white",
              borderRadius: 50,
              padding: "12px 24px",
              fontSize: 15,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
            }}
          >
            See open roles
          </button>
        </div>
      </div>
    </section>
  );
}
