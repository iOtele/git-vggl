"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const team = [
  {
    name: "Victoria Omojo Atodo",
    role: "Founder & CEO",
    bio: "Creative director and founder with over 9 years' experience.",
    img: "victoria.jpeg",
  },
  {
    name: "Grace Abah",
    role: "Operations Manager",
    bio: "Oversees logistics, rostering and on-site operations.",
    img: "grace.jpeg",
  },
  {
    name: "Chinazom Danjuma",
    role: "Head of Talent",
    bio: "Leads casting, training and talent development.",
    img: "danjuma.jpeg",
  },
  {
    name: "Kelvin Adebisi",
    role: "Client Relations Manager",
    bio: "Manages client relationships, project communications, and ensures exceptional service delivery.",
    img: "kelvin.jpg",
  },
];

const gallery = [
  { name: "Emeka", role: "Lead Usher", color: "#1A3A6E" },
  { name: "Tara", role: "Guest Liaison", color: "#E87722" },
  { name: "Bola", role: "Floor Manager", color: "#0D1F3C" },
  { name: "Nkechi", role: "VIP Host", color: "#3A3A3A" },
  { name: "Dan", role: "Crowd Control", color: "#5A4A8A" },
  { name: "Hazel", role: "Welcome Team", color: "#C45E0F" },
  { name: "Ola", role: "Event Escort", color: "#0D4A6A" },
  { name: "Femi", role: "Protocol Support", color: "#0D1F3C" },
];

function getPlaceholderImage(name: string, color: string) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="${color}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, sans-serif" font-size="200" fill="#ffffff">${initials}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function OurTeam() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={ref}
      style={{ padding: "96px 0", background: "#ffffff" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <p
            style={{
              color: "#E87722",
              fontSize: 11,
              letterSpacing: 5,
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: 12,
            }}
          >
            Meet The Team
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px,6vw,40px)",
              fontWeight: 300,
              color: "#0D1F3C",
              marginBottom: 10,
            }}
          >
            Our Team
          </h2>

          <div className="ornament" style={{ maxWidth: 200, margin: "0 auto" }}>
            <span>✦</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
          }}
        >
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal"
              style={{
                padding: 20,
                borderRadius: 12,
                background: "#FAF8F4",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: "50%",
                  background: "#0D1F3C",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  margin: "0 auto 12px",
                }}
              >
                {/* {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")} */}
                <Image
                  src={`/${m.img}`}
                  alt={m.name}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <h3
                style={{
                  margin: 0,
                  fontSize: 16,
                  color: "#0D1F3C",
                  fontWeight: 600,
                }}
              >
                {m.name}
              </h3>
              <p
                style={{
                  margin: "6px 0 12px",
                  color: "rgba(13,31,60,0.7)",
                  fontSize: 13,
                }}
              >
                {m.role}
              </p>
              <p
                style={{
                  margin: 0,
                  color: "rgba(13,31,60,0.6)",
                  fontSize: 13,
                  lineHeight: 1.5,
                }}
              >
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div
          className="reveal"
          style={{
            textAlign: "center",
            marginTop: 64,
            marginBottom: 32,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(15px,4vw,35px)",
              fontWeight: 300,
              color: "#0D1F3C",
            }}
          >
            Usher Gallery
          </h3>

          <p
            style={{
              color: "rgba(13,31,60,0.7)",
              maxWidth: 600,
              margin: "12px auto 0",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            View our team in action — polished ushers who represent the quality
            and professionalism we deliver.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {gallery.map((item) => (
            <div
              key={item.name}
              className="reveal"
              style={{
                borderRadius: 20,
                overflow: "hidden",
                background: "#F7F8FA",
                boxShadow: "0 20px 40px rgba(0,0,0,0.06)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 0,
                  paddingBottom: "100%",
                  position: "relative",
                }}
              >
                <Image
                  src={getPlaceholderImage(item.name, item.color)}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div style={{ padding: 16 }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#0D1F3C",
                    marginBottom: 4,
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    color: "rgba(13,31,60,0.7)",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
