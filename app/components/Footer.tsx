"use client";
import { ExternalLink, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#060F1E",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "48px 0",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              fontWeight: 600,
              color: "white",
              letterSpacing: 2,
            }}
          >
            <Image src="/logo.png" alt="logo" width={60} height={600} />
          </div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              color: "rgba(192,200,216,0.5)",
              fontSize: 18,
              fontWeight: 300,
            }}
          >
            &ldquo;Creating Beautiful Experiences&rdquo;
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {[
              { icon: <Phone size={15} />, href: "tel:07034688064" },
              {
                icon: <Mail size={15} />,
                href: "mailto:atodovictoria@gmail.com",
              },
              {
                icon: <ExternalLink size={15} />,
                href: "https://instagram.com/vgglimited",
              },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(192,200,216,0.5)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(232,119,34,0.5)";
                  e.currentTarget.style.color = "#E87722";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                  e.currentTarget.style.color = "rgba(192,200,216,0.5)";
                }}
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: 40,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.05)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(192,200,216,0.3)", fontSize: 12 }}>
            © {new Date().getFullYear()} Victoria&#39;s Global Garden Limited.
            All rights reserved.
          </p>
          <p style={{ color: "rgba(192,200,216,0.3)", fontSize: 12 }}>
            Lagos · Abuja · Kaduna, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
