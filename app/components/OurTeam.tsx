"use client";
import { useEffect, useRef } from "react";

const team = [
  {
    name: "Victoria Atodo",
    role: "Founder & CEO",
    bio: "Creative director and founder with 9 years' experience.",
  },
  {
    name: "Samuel Okonkwo",
    role: "Operations Manager",
    bio: "Oversees logistics, rostering and on-site operations.",
  },
  {
    name: "Aisha Bello",
    role: "Head of Talent",
    bio: "Leads casting, training and talent development.",
  },
];

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
              fontSize: "clamp(30px,5vw,40px)",
              fontWeight: 300,
              color: "#0D1F3C",
            }}
          >
            Our Team
          </h2>
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
                  width: 72,
                  height: 72,
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
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
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
      </div>
    </section>
  );
}
