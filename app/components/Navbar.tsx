"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Rates", href: "#rates" },
  { label: "Testimonials", href: "#testimonials" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="nav-blur"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s",
        background: scrolled ? "rgba(13,31,60,0.92)" : "transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.2)" : "none",
        padding: scrolled ? "12px 0" : "20px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#hero" style={{ textDecoration: "none", lineHeight: 1 }}>
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
         
        </a>

        {/* Desktop */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 32 }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 12,
                color: "rgba(192,200,216,0.8)",
                textDecoration: "none",
                letterSpacing: 2,
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E87722")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(192,200,216,0.8)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              padding: "8px 20px",
              background: "#E87722",
              color: "white",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: 2,
              textTransform: "uppercase",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F5A252")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#E87722")}
          >
            Book Now
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden nav-blur"
          style={{
            background: "rgba(13,31,60,0.96)",
            padding: "8px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                color: "rgba(192,200,216,0.8)",
                textDecoration: "none",
                fontSize: 12,
                letterSpacing: 3,
                textTransform: "uppercase",
                padding: "4px 0",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              textAlign: "center",
              padding: "10px 20px",
              background: "#E87722",
              color: "white",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  );
}
