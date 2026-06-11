"use client";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    const N = 90;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? "#E87722" : "#C0C8D8",
    }));
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(192,200,216,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#000f13",
      

         zIndex: 30,
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "stroke",
          opacity: 0.7,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, #060F1E, rgba(13,31,60,0.8), #060F1E)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500,
          height: 500,
          borderRadius: "50%",
          border: "1px solid rgba(192,200,216,0.1)",
          animation: "spin 20s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: "1px solid rgba(232,119,34,0.1)",
          animation: "spin 30s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "left",
          padding: "0 24px",
          maxWidth: 700,
          margin: "0 auto 0 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 24,
            transform: "translateY(-50%)",
            width: 320,
            height: 440,
            borderRadius: 28,
            padding: 16,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(232,119,34,0.12)",
            boxShadow: "0 40px 120px rgba(0,0,0,0.18)",
            backdropFilter: "blur(16px)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 22,
              overflow: "hidden",
              background: "linear-gradient(180deg, #1A2F5A 0%, #0D1F3C 100%)",
              position: "relative",
              boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 30% 20%, rgba(232,119,34,0.18), transparent 20%), radial-gradient(circle at 80% 80%, rgba(192,200,216,0.12), transparent 18%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                padding: 24,
                color: "rgba(255,255,255,0.88)",
                fontSize: 14,
                lineHeight: 1.5,
                fontFamily: "var(--font-display)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: 8,
                  }}
                >
                  Featured Event
                </div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>
                  Scene in Focus
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              width: 70,
              height: 70,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
              background: "rgba(255,255,255,0.04)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 16,
              width: 80,
              height: 80,
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(232,119,34,0.06)",
            }}
          />
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
            animation: "fadeUp 0.6s ease forwards",
            opacity: 0,
          }}
        >
          <span
            style={{
              height: 1,
              width: 40,
              background: "#E87722",
              display: "block",
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "#E87722",
              letterSpacing: 5,
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Lagos · Abuja · Kaduna
          </span>
          <span
            style={{
              height: 1,
              width: 40,
              background: "#E87722",
              display: "block",
            }}
          />
        </div>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            marginBottom: 24,
            animation: "fadeUp 0.8s 0.15s ease forwards",
            opacity: 0,
            maxWidth: 680,
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(48px,10vw,96px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.05,
              marginBottom: 8,
              zIndex: 30,
            }}
          >
            Victoria&apos;s
          </span>
          <span
            className="shimmer-text"
            style={{
              display: "block",
              fontSize: "clamp(36px,7vw,72px)",
              fontWeight: 600,
              lineHeight: 1.02,
              marginBottom: 8,
             
            }}
          >
            Global Garden
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(48px,10vw,96px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.05,
            }}
          >
            Limited
          </span>
        </h1>

        <p
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "#C0C8D8",
            fontSize: "clamp(18px,3vw,24px)",
            marginBottom: 16,
            fontWeight: 300,
            animation: "fadeUp 0.8s 0.3s ease forwards",
            opacity: 0,
          }}
        >
          &ldquo;Creating Beautiful Experiences&rdquo;
        </p>

        <p
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: "clamp(16px,2vw,20px)",
            maxWidth: 680,
            margin: "0 0 32px 0",
            lineHeight: 1.75,
            animation: "fadeUp 0.8s 0.45s ease forwards",
            opacity: 0,
            whiteSpace: "pre-line",
          }}
        >
          We match premium ushers, talent and event support to every production
          — from intimate brand experiences to full-scale ceremonies across
          Lagos, Abuja and Kaduna.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 12,
            marginBottom: 48,
            animation: "fadeUp 0.8s 0.45s ease forwards",
            opacity: 0,
          }}
        >
          {["Models", "Ushers", "Actors"].map((s) => (
            <span
              key={s}
              style={{
                padding: "6px 20px",
                borderRadius: 999,
                fontSize: 11,
                letterSpacing: 3,
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid rgba(192,200,216,0.3)",
                color: "rgba(192,200,216,0.8)",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            justifyContent: "flex-start",
            animation: "fadeUp 0.8s 0.6s ease forwards",
            opacity: 0,
          }}
        >
          <a
            href="#contact"
            className="btn-pulse"
            style={{
              padding: "14px 32px",
              background: "#E87722",
              color: "white",
              fontWeight: 600,
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Book Your Event
          </a>
          <a
            href="#rates"
            style={{
              padding: "14px 32px",
              border: "1px solid rgba(192,200,216,0.4)",
              color: "#C0C8D8",
              borderRadius: 999,
              textDecoration: "none",
              fontSize: 12,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            View Rate Card
          </a>
        </div>
      </div>

      <a
        href="#about"
        style={{
          position: "absolute",
          bottom: 80,
          left: "50%",
          transform: "translateX(-50%)",
          color: "rgba(192,200,216,0.5)",
          animation: "fadeIn 1s 1s ease forwards, bounce 2s infinite",
          opacity: 0,
          textDecoration: "none",
        }}
      >
        <ChevronDown size={28} />
      </a>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          background: "rgba(13,31,60,0.8)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          animation: "fadeIn 1s 0.9s ease forwards",
          opacity: 0,
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
          }}
        >
          {[
            { n: "9+", label: "Years of Excellence" },
            { n: "60+", label: "Ushers Per Event" },
            { n: "3", label: "Cities Nationwide" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              style={{
                padding: "20px 0",
                textAlign: "center",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 600,
                  color: "#E87722",
                }}
              >
                {stat.n}
              </div>
              <div
                style={{
                  fontSize: 10,
                  color: "rgba(192,200,216,0.6)",
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
