"use client";
import { useEffect, useRef, useState } from "react";
import {
  Briefcase,
  Heart,
  Megaphone,
  Film,
  GraduationCap,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: <Briefcase size={26} />,
    title: "Corporate Events",
    desc: "Polished professionals for conferences, galas, award nights, and corporate functions that demand the highest standard.",
  },
  {
    icon: <Heart size={26} />,
    title: "Weddings & Private Functions",
    desc: "Elegant ushers who make your guests feel special and ensure your big day runs flawlessly from start to finish.",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Brand Promotions & Launches",
    desc: "Charismatic brand ambassadors and models who bring your product to life and connect with your audience.",
  },
  {
    icon: <Film size={26} />,
    title: "Film, TV & Commercial",
    desc: "Trained actors and background talent for film sets, TV productions, music videos, and commercial shoots.",
  },
  {
    icon: <GraduationCap size={26} />,
    title: "Model & Usher Training",
    desc: "Structured programs that groom aspiring models and ushers to international professional standards.",
  },
  {
    icon: <Calendar size={26} />,
    title: "Event Coordination",
    desc: "Full protocol support and event coordination to ensure your occasion is seamlessly managed end-to-end.",
  },
  {
    icon: <Briefcase size={26} />,
    title: "Venue Staffing",
    desc: "Professional front-of-house teams to welcome guests, manage cloakrooms, and keep venues operating smoothly.",
  },
  {
    icon: <Megaphone size={26} />,
    title: "Guest Experience",
    desc: "Guest concierge services designed to elevate arrival, seating, direction, and guest comfort throughout your event.",
  },
];

function ServiceCard({ s, i }: { s: (typeof services)[0]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="reveal"
      style={{
        transitionDelay: `${i * 0.08}s`,
        position: "relative",
        background: hovered
          ? "rgba(255,255,255,0.1)"
          : "rgba(255,255,255,0.05)",
        border: `1px solid ${hovered ? "rgba(232,119,34,0.4)" : "rgba(255,255,255,0.1)"}`,
        borderRadius: 20,
        padding: 32,
        transition: "all 0.3s",
        cursor: "default",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: hovered
            ? "rgba(232,119,34,0.25)"
            : "rgba(232,119,34,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#E87722",
          marginBottom: 24,
          transition: "background 0.3s",
        }}
      >
        {s.icon}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 22,
          fontWeight: 600,
          color: hovered ? "#E87722" : "white",
          marginBottom: 12,
          transition: "color 0.3s",
        }}
      >
        {s.title}
      </h3>
      <p
        style={{
          color: "rgba(192,200,216,0.6)",
          fontSize: 14,
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {s.desc}
      </p>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 32,
          right: 32,
          height: 1,
          background: hovered ? "rgba(232,119,34,0.4)" : "transparent",
          transition: "background 0.5s",
        }}
      />
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      style={{ padding: "112px 0", background: "#0D1F3C" }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          className="reveal"
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p
            style={{
              color: "#E87722",
              fontSize: 11,
              letterSpacing: 5,
              textTransform: "uppercase",
              fontWeight: 500,
              marginBottom: 16,
            }}
          >
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(40px,6vw,60px)",
              fontWeight: 300,
              color: "white",
              marginBottom: 24,
            }}
          >
            Our Services
          </h2>
          <div className="ornament" style={{ maxWidth: 200, margin: "0 auto" }}>
            <span>✦</span>
          </div>
          <p
            style={{
              color: "rgba(192,200,216,0.6)",
              maxWidth: 500,
              margin: "24px auto 0",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            From intimate gatherings to large-scale productions — we bring
            grace, elegance, and professionalism to every occasion.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
