"use client";

import Image from "next/image";

function PhotoCardLarge() {
  return (
    <div
      style={{
        position: "relative",
        width: 480,
        height: 380,
        borderRadius: 24,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Image
        src="/images/carousel-team-1.jpeg"
        alt="Team meeting"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function FactsNumbersCard() {
  return (
    <div
      style={{
        width: 340,
        height: 380,
        borderRadius: 24,
        background: "linear-gradient(to bottom, #f4f3f1 40%, #f9f700 100%)",
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
          color: "rgba(0,0,0,0.4)",
          textTransform: "uppercase",
        }}
      >
        FACTS &amp; NUMBERS
      </span>
      <div>
        <div
          style={{
            fontSize: 110,
            fontWeight: 500,
            color: "#09040d",
            lineHeight: 1,
            letterSpacing: "-4.4px",
            fontFamily: "'Inter Display', Inter, sans-serif",
          }}
        >
          73%
        </div>
        <p
          style={{
            fontSize: 18,
            color: "rgba(0,0,0,0.7)",
            lineHeight: 1.4,
            marginTop: 12,
          }}
        >
          of founders report increased customer inquiries within the first month
        </p>
      </div>
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
        src="/images/carousel-team-2.jpeg"
        alt="Office collaboration"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function SupportersCard() {
  const logos: { src: string; width: number; height: number }[] = [
    { src: "/images/supporters-logo-1.png", width: 100, height: 54 },
    { src: "/images/supporters-logo-2.png", width: 60, height: 60 },
    { src: "/images/supporters-logo-3.png", width: 60, height: 60 },
    { src: "/images/supporters-logo-4.png", width: 60, height: 60 },
    { src: "/images/supporters-logo-5.png", width: 60, height: 60 },
    { src: "/images/supporters-logo-6.png", width: 60, height: 60 },
  ];

  return (
    <div
      style={{
        width: 340,
        height: 380,
        borderRadius: 24,
        background: "linear-gradient(to bottom, #f4f3f1 35%, #7824ed 100%)",
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: "1.5px",
          color: "rgba(0,0,0,0.4)",
          textTransform: "uppercase",
        }}
      >
        SUPPORTERS
      </span>
      <p
        style={{
          fontSize: 18,
          color: "rgba(0,0,0,0.7)",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        Companies that believes in our mission.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
          alignItems: "center",
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src={logo.src}
              alt={`Supporter logo ${i + 1}`}
              width={logo.width}
              height={logo.height}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function MottoCard() {
  return (
    <div
      style={{
        width: 340,
        height: 380,
        borderRadius: 24,
        backgroundColor: "#09040d",
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
        MOTTO
      </span>
      <p
        style={{
          fontSize: 20,
          fontStyle: "italic",
          color: "white",
          lineHeight: 1.4,
          fontFamily: "'Instrument Serif', serif",
          margin: 0,
        }}
      >
        &ldquo;With us, our hiring teams can fully engage with candidates and
        gather meaningful insights.&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Image
          src="/images/avatar-james-holloway.jpeg"
          alt="James Holloway"
          width={48}
          height={48}
          style={{ borderRadius: "50%", objectFit: "cover" }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "white" }}>
            James Holloway
          </span>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>
            Founder
          </span>
        </div>
      </div>
    </div>
  );
}

function CardSet() {
  return (
    <>
      <PhotoCardLarge />
      <FactsNumbersCard />
      <PhotoCardSmall />
      <SupportersCard />
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
