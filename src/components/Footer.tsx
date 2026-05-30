import { DiscordIcon, LinkedInIcon, InstagramIcon, FooterLogoIcon } from "./icons";

const productLinks = ["Features", "Pricing"];
const companyLinks = ["Our Mission", "Contact", "Blog"];

function SocialBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        backgroundColor: "#09040d",
        borderRadius: 6,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to bottom, #f6f6f3 0%, #f6f6f3 22%, #f5f4d0 58%, #fbf500 100%)",
        padding: "80px 60px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          maxWidth: 1200,
          margin: "0 auto",
          alignItems: "start",
        }}
      >
        {/* LEFT column */}
        <div>
          <div style={{ width: 40, height: 40 }}>
            <FooterLogoIcon className="w-full h-full" />
          </div>
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontWeight: 700,
              fontSize: 48,
              color: "#09040d",
              lineHeight: "48px",
              letterSpacing: "-1.92px",
              marginTop: 12,
              marginBottom: 0,
            }}
          >
            Consumo
          </p>
          <p
            style={{
              fontSize: 16,
              color: "rgba(9,4,13,0.5)",
              lineHeight: 1.5,
              maxWidth: 320,
              marginTop: 12,
            }}
          >
            Turn visitors into customers from day one. Built for founders who
            ship fast and grow faster.
          </p>
        </div>

        {/* RIGHT column */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 80,
          }}
        >
          {/* Product */}
          <div>
            <p
              style={{
                fontSize: 16,
                color: "rgba(9,4,13,0.5)",
                margin: "0 0 16px",
              }}
            >
              Product
            </p>
            {productLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#09040d",
                  display: "block",
                  marginBottom: 12,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <p
              style={{
                fontSize: 16,
                color: "rgba(9,4,13,0.5)",
                margin: "0 0 16px",
              }}
            >
              Company
            </p>
            {companyLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#09040d",
                  display: "block",
                  marginBottom: 12,
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontSize: 16,
                color: "rgba(9,4,13,0.5)",
                margin: "0 0 16px",
              }}
            >
              Connect
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              <SocialBox>
                <div style={{ width: 16, height: 16, color: "white" }}>
                  <DiscordIcon className="w-full h-full" />
                </div>
              </SocialBox>
              <SocialBox>
                <div style={{ width: 16, height: 16, color: "white" }}>
                  <LinkedInIcon className="w-full h-full" />
                </div>
              </SocialBox>
              <SocialBox>
                <div style={{ width: 16, height: 16, color: "white" }}>
                  <InstagramIcon className="w-full h-full" />
                </div>
              </SocialBox>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(9,4,13,0.1)",
          paddingTop: 24,
          marginTop: 60,
          maxWidth: 1200,
          margin: "60px auto 0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: "rgba(9,4,13,0.4)",
            margin: 0,
          }}
        >
          Copyright ©2025 All rights reserved • Terms &amp; Condition
        </p>
      </div>
    </footer>
  );
}
