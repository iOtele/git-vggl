"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Info, RotateCcw } from "lucide-react";

const packages = [
  {
    id: "standard",
    name: "Standard",
    subtitle: "Half Day",
    price: "₦15,000",
    priceNote: "– ₦20,000",
    hours: "8am – 6pm",
    bg: "linear-gradient(135deg, #1A3A6E, #0D1F3C)",
    featured: false,
    front: [
      "Trained professional ushers",
      "Half-day coverage (up to 10hrs)",
      "Smart uniform & grooming",
      "Event briefing included",
    ],
    back: [
      "Best for intimate gatherings",
      "Corporate cocktail events",
      "Brand activations",
      "Morning/afternoon ceremonies",
      "Up to 60 ushers available",
    ],
  },
  {
    id: "classic",
    name: "Classic",
    subtitle: "Full Day",
    price: "₦30,000",
    priceNote: "per usher",
    hours: "8am – 9pm",
    bg: "linear-gradient(135deg, #E87722, #c45e0f)",
    featured: true,
    front: [
      "Elite full-day ushers",
      "13-hour event coverage",
      "Premium uniform & styling",
      "Dedicated team lead",
    ],
    back: [
      "Ideal for weddings & galas",
      "Corporate award nights",
      "Product launches",
      "Full-day productions",
      "Up to 60 ushers available",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    subtitle: "Bespoke",
    price: "Custom",
    priceNote: "Quote",
    hours: "Flexible",
    bg: "linear-gradient(135deg, #3a3a3a, #1a1a1a)",
    featured: false,
    front: [
      "Actors & models included",
      "Film & TV production talent",
      "Training programs",
      "Event coordination package",
    ],
    back: [
      "Multi-day productions",
      "Large-scale brand campaigns",
      "Film & commercial shoots",
      "Training & management",
      "Contact us to discuss",
    ],
  },
];

function Card({
  pkg,
  index,
  isOpen,
  onOpen,
  onClose,
}: {
  pkg: (typeof packages)[0];
  index: number;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div
      className="reveal flip-card"
      style={{ height: 460, transitionDelay: `${index * 0.1}s` }}
    >
      {/* Inner — rotation driven entirely by inline style, no CSS class */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(.4,0,.2,1)",
          transform: isOpen ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          className="flip-card-front"
          onClick={onOpen}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            background: pkg.bg,
            padding: 32,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {pkg.featured && (
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                background: "rgba(255,255,255,0.2)",
                color: "white",
                fontSize: 10,
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 999,
                fontWeight: 500,
              }}
            >
              Most Popular
            </div>
          )}

          <div style={{ marginBottom: "auto" }}>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 4 }}>
              {pkg.subtitle}
            </p>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 600, color: "white", marginBottom: 4 }}>
              {pkg.name}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{pkg.hours}</p>
          </div>

          <div style={{ margin: "24px 0" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 300, color: "white" }}>
              {pkg.price}
            </span>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginLeft: 8 }}>
              {pkg.priceNote}
            </span>
          </div>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {pkg.front.map((f) => (
              <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>
                <Check size={14} style={{ color: "white", marginTop: 2, flexShrink: 0 }} />
                {f}
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.35)", fontSize: 12 }}>
            <Info size={12} />
            <span>Click to see event types</span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-card-back"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            background: "#0D1F3C",
            border: "1px solid rgba(232,119,34,0.3)",
            padding: 32,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {/* Decorative corner */}
          <div style={{ position: "absolute", top: 0, right: 0, width: 96, height: 96, background: "rgba(232,119,34,0.05)", borderRadius: "0 20px 0 100%", pointerEvents: "none" }} />

          {/* Back-flip button — top right */}
          <button
            onClick={onClose}
            title="Flip back"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(232,119,34,0.4)",
              background: "rgba(232,119,34,0.1)",
              color: "#E87722",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
              zIndex: 2,
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(232,119,34,0.25)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(232,119,34,0.1)")}
          >
            <RotateCcw size={14} />
          </button>

          <p style={{ color: "#E87722", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
            {pkg.name} Package
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 600, color: "white", marginBottom: 24 }}>
            Perfect for...
          </h3>

          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
            {pkg.back.map((d) => (
              <li key={d} style={{ display: "flex", alignItems: "center", gap: 12, color: "rgba(192,200,216,0.7)", fontSize: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E87722", flexShrink: 0 }} />
                {d}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{
              marginTop: 24,
              display: "block",
              textAlign: "center",
              padding: "12px",
              background: "#E87722",
              color: "white",
              fontSize: 13,
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Book This Package
          </a>
        </div>
      </div>
    </div>
  );
}

export default function RateCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="rates" ref={ref} style={{ padding: "112px 0", background: "#FAF8F4" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 16 }}>
          <p style={{ color: "#E87722", fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontWeight: 500, marginBottom: 16 }}>
            Transparent Pricing
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,60px)", fontWeight: 300, color: "#0D1F3C", marginBottom: 8 }}>
            Rate Card
          </h2>
          <p style={{ color: "rgba(13,31,60,0.5)", fontSize: 13, letterSpacing: 2 }}>
            Click any card to explore event types it&apos;s suited for
          </p>
          <div className="ornament" style={{ maxWidth: 200, margin: "16px auto 0" }}>
            <span>✦</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, marginTop: 64 }}>
          {packages.map((pkg, i) => (
            <Card
              key={pkg.id}
              pkg={pkg}
              index={i}
              isOpen={openIndex === i}
              onOpen={() => setOpenIndex(i)}
              onClose={() => setOpenIndex(null)}
            />
          ))}
        </div>

        <p className="reveal" style={{ textAlign: "center", color: "rgba(13,31,60,0.4)", fontSize: 14, marginTop: 40 }}>
          We can supply up to <strong style={{ color: "#E87722" }}>60 ushers per day</strong>. All rates are quoted per usher. Contact us for group or multi-day discounts.
        </p>
      </div>
    </section>
  );
}
