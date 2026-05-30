"use client";

export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "50px",
          padding: "15px 30px 15px 20px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          height: "60px",
          boxShadow:
            "rgba(0, 0, 0, 0.13) -0.12px 0.48px 0.70px -1.25px, rgba(0, 0, 0, 0.13) -1px 4px 5.77px -2.5px",
          pointerEvents: "auto",
        }}
      >
        {/* Logo */}
        <a href="/" aria-label="Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="#09040D" />
            <path d="M18 4L10 17H16L14 28L22 15H16L18 4Z" fill="white" />
          </svg>
        </a>

        {/* Nav links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              padding: "4px 8px",
            }}
          >
            Product
          </a>
          <a
            href="#"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "#09040d",
              textDecoration: "none",
              padding: "4px 8px",
            }}
          >
            About
          </a>
          <a
            href="#"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              padding: "4px 8px",
            }}
          >
            Blog
          </a>
          <a
            href="#"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(0, 0, 0, 0.5)",
              textDecoration: "none",
              padding: "4px 8px",
            }}
          >
            Pricing
          </a>
        </div>
      </nav>

      {/* Get Free Demo button */}
      <a
        href="#"
        style={{
          backgroundColor: "#09040d",
          color: "#ffffff",
          borderRadius: "50px",
          padding: "14px 28px",
          fontSize: "16px",
          fontWeight: 500,
          fontFamily: "var(--font-inter), Inter, sans-serif",
          border: "none",
          cursor: "pointer",
          textDecoration: "none",
          transition: "opacity 0.2s",
          pointerEvents: "auto",
          display: "inline-block",
        }}
      >
        Get Free Demo
      </a>
    </header>
  );
}
