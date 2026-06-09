"use client";
import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Tunde", role: "Event Organiser", text: "VGGL ushers are disciplined, elegant, and professional. Our event ran smoothly from start to finish. I wouldn't use anyone else.", initial: "T" },
  { name: "Zainab Uyomi Abubakar", role: "Corporate Client", text: "I've worked with Victoria and her team on several occasions — their service and dedication are truly unmatched. World class.", initial: "Z" },
  { name: "Chioma", role: "Wedding Planner", text: "I love how attentive and well-coordinated the VGGL team is. They add class and elegance to every event they're part of.", initial: "C" },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }), { threshold: 0.15 });
    ref.current?.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} style={{ padding: "112px 0", background: "#0D1F3C", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(232,119,34,0.04) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
          <p style={{ color: "#E87722", fontSize: 11, letterSpacing: 5, textTransform: "uppercase", fontWeight: 500, marginBottom: 16 }}>What Clients Say</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,6vw,60px)", fontWeight: 300, color: "white", marginBottom: 24 }}>Testimonials</h2>
          <div className="ornament" style={{ maxWidth: 200, margin: "0 auto" }}><span>✦</span></div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="reveal testimonial-card" style={{ transitionDelay: `${i * 0.1}s`, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: 32, position: "relative", overflow: "hidden" }}>
              <Quote size={40} style={{ color: "rgba(232,119,34,0.2)", position: "absolute", top: 24, right: 24 }} fill="currentColor" />
              <p style={{ color: "rgba(192,200,216,0.7)", fontSize: 15, lineHeight: 1.75, fontWeight: 300, marginBottom: 32 }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(232,119,34,0.2)", border: "1px solid rgba(232,119,34,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-display)", color: "#E87722", fontWeight: 600 }}>{t.initial}</span>
                </div>
                <div>
                  <p style={{ color: "white", fontWeight: 500, fontSize: 14 }}>{t.name}</p>
                  <p style={{ color: "rgba(192,200,216,0.4)", fontSize: 12, letterSpacing: 1 }}>{t.role}</p>
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, transparent, rgba(232,119,34,0.4), transparent)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
