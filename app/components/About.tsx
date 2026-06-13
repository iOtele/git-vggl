"use client";
import { useEffect, useRef } from "react";
import { Star, Award, Users } from "lucide-react";
import Image from "next/image";

const S = {
  // style shortcuts
  section: { padding: "112px 0", background: "#FAF8F4" } as React.CSSProperties,
  wrap: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    border: "2px solid rgba(13,31,60,0.05)",
  } as React.CSSProperties,
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.15 },
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={S.section}>
      <div style={S.wrap}>
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
            Who We Are
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px,6vw,30px)",
              fontWeight: 300,
              color: "#0D1F3C",
              marginBottom: 10,
            }}
          >
            About VGGL
          </h2>
          <div className="ornament" style={{ maxWidth: 200, margin: "0 auto" }}>
            <span>✦</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
            marginBottom: 80,
          }}
        >
          <div className="reveal">
            <p
              style={{
                color: "rgba(13,31,60,0.7)",
                fontSize: 18,
                lineHeight: 1.8,
                marginBottom: 24,
                fontWeight: 300,
              }}
            >
              Victoria&apos;s Global Garden Limited (VGGL) is a Lagos-based
              company with branches in Abuja and Kaduna. For over{" "}
              <strong style={{ color: "#E87722", fontWeight: 500 }}>
                nine years
              </strong>
              , we&apos;ve provided professional ushers, models, actors, and
              event support staff for top brands, event planners, and production
              companies across Nigeria.
            </p>
            <p
              style={{
                color: "rgba(13,31,60,0.7)",
                fontSize: 18,
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              We are passionate about excellence, creativity, and grace turning
              every event into a seamless, beautiful experience.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: 24,
                marginTop: 48,
              }}
            >
              {[
                { icon: <Star size={22} />, label: "Excellence" },
                { icon: <Award size={22} />, label: "Grace" },
                { icon: <Users size={22} />, label: "Teamwork" },
              ].map((v) => (
                <div key={v.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      border: "1px solid rgba(232,119,34,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E87722",
                      margin: "0 auto 8px",
                    }}
                  >
                    {v.icon}
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      color: "rgba(13,31,60,0.6)",
                      fontWeight: 500,
                    }}
                  >
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal"
            style={{
              transitionDelay: "0.15s",
              position: "relative",
              background: "#0D1F3C",
              borderRadius: 20,
              padding: 40,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 120,
                height: 120,
                background: "rgba(232,119,34,0.1)",
                borderRadius: "0 0 0 100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 80,
                height: 80,
                background: "rgba(232,119,34,0.05)",
                borderRadius: "0 100% 0 0",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "60%",
                  background: "rgba(232,119,34,0.2)",
                  border: "2px solid rgba(232,119,34,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    color: "#E87722",
                    fontWeight: 600,
                  }}
                >
                  <Image
                    src="/victoria.jpeg"
                    alt="Victoria Omojo Atodo"
                    width={65}
                    height={65}
                    style={{ borderRadius: "60%" }}
                  />
                </span>
              </div>
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 20,
                  color: "rgba(255,255,255,0.9)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontWeight: 300,
                }}
              >
                &ldquo;Over the years, VGGL has grown into a trusted name,
                helping hundreds of young people find their path. Our promise:
                to serve you with professionalism, beauty, and
                excellence.&rdquo;
              </blockquote>
              <p
                style={{ color: "#E87722", fontWeight: 600, letterSpacing: 1 }}
              >
                Victoria Omojo Atodo
              </p>
              <p
                style={{
                  color: "rgba(192,200,216,0.6)",
                  fontSize: 12,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                Founder & CEO
              </p>
              {/* <p
                style={{
                  color: "rgba(192,200,216,0.4)",
                  fontSize: 12,
                  marginTop: 8,
                }}
              >
                B.A. Theatre Arts, Kogi State University
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
