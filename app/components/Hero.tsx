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
      className="relative min-h-screen flex flex-col items-start justify-center overflow-hidden bg-[#000f13] text-white py-[5px]"
    >
      <div className="max-w-full px-6">
        <div className="hidden md:grid absolute top-1/2 -translate-y-1/2 right-6 w-[320px] max-w-[calc(100vw-48px)] h-[350px] rounded-[20px] p-4 bg-white/5 border border-orange-500/20 shadow-[0_40px_120px_rgba(0,0,0,0.18)] backdrop-blur-xl place-items-center z-50">
          <div className="relative w-full h-full overflow-hidden rounded-[22px] bg-gradient-to-b from-[#1A2F5A] to-[#0D1F3C] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(232,119,34,0.18), transparent 20%), radial-gradient(circle at 80% 80%, rgba(192,200,216,0.12), transparent 18%)",
              }}
            />
            <div className="hidden md:flex absolute inset-0 items-end justify-start p-6 text-[rgba(255,255,255,0.88)] text-sm leading-[1.5] font-display">
              <div>
                <div className="text-[11px] uppercase tracking-[2px] text-white/50 mb-2">
                  Featured Event
                </div>
                <div className="text-[18px] font-semibold">Scene in Focus</div>
              </div>
            </div>
          </div>
          <div className="absolute top-4 left-4 w-17.5 h-17.5 rounded-[18px] border border-white/12 shadow-[0_15px_35px_rgba(0,0,0,0.18)] bg-white/5" />
          <div className="absolute bottom-4 right-4 w-[80px] h-[80px] rounded-[18px] border border-white/12 bg-orange-500/10" />
        </div>

        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-70"
          style={{ pointerEvents: "stroke" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, #060F1E, rgba(13,31,60,0.8), #060F1E)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "min(600px,80vw)",
            height: "min(600px,80vw)",
            background:
              "radial-gradient(circle, rgba(232,119,34,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "min(500px,70vw)",
            height: "min(500px,70vw)",
            border: "1px solid rgba(192,200,216,0.1)",
            animation: "spin 20s linear infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            width: "min(380px,55vw)",
            height: "min(380px,55vw)",
            border: "4px solid rgba(232,119,34,0.1)",
            animation: "spin 30s linear infinite reverse",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:text-left md:items-left justify-center h-full md:px-28">
          <div
            className="inline-flex items-center gap-2.5 mb-7 opacity-100"
            style={{ animation: "fadeUp 0.6s ease forwards" }}
          >
            <span className="block h-px w-10 bg-[#E87722]" />
            <span className="text-[11px] uppercase tracking-[5px] font-semibold text-[#E87722]">
              Lagos · Abuja · Kaduna
            </span>
            <span className="block h-px w-10 bg-[#E87722]" />
          </div>

          <h1
            className="font-display mb-6 opacity-100 max-w-1500 text-left"
            style={{ animation: "fadeUp 0.8s 0.15s ease forwards" }}
          >
            <span
              className="block font-light text-white leading-[1.05] mb-2 z-30"
              style={{ fontSize: "clamp(38px,8vw,48px)" }}
            >
              Victoria&apos;s
            </span>
            <span
              className="shimmer-text block font-semibold text-white leading-[1.02] mb-2"
              style={{ fontSize: "clamp(30px,7vw,68px)" }}
            >
              Global Garden
            </span>
            <span
              className="block font-light text-white leading-[1.05] mb-2 "
              style={{ fontSize: "clamp(38px,8vw,56px)" }}
            >
              Limited
            </span>
          </h1>

          <p
            className="font-display italic text-[#C0C8D8]  mb-4 font-light opacity-60"
            style={{
              fontSize: "clamp(14px,3vw,20px)",
              animation: "fadeUp 0.8s 0.3s ease forwards",
            }}
          >
            &ldquo;Creating Beautiful Experiences&rdquo;
          </p>

          <p
            className="text-white/80 mb-8 max-w-[600px] leading-[1.75] whitespace-pre-line opacity-100"
            style={{
              fontSize: "clamp(12px,2vw,16px)",
              animation: "fadeUp 0.8s 0.45s ease forwards",
            }}
          >
            We match premium ushers, talent and event support to every
            production from intimate brand experiences to full-scale ceremonies
            across Lagos, Abuja and Kaduna.
          </p>

          <div
            className="flex flex-wrap justify-start gap-3 mb-10 opacity-100"
            style={{ animation: "fadeUp 0.8s 0.45s ease forwards" }}
          >
            {["Models", "Ushers", "Actors"].map((s) => (
              <span
                key={s}
                className="px-5 py-1.5 rounded-full text-[10px] uppercase tracking-[1px] font-light border border-white/30 text-white/70"
              >
                {s}
              </span>
            ))}
          </div>

          <div
            className="flex flex-wrap gap-3 justify-start opacity-100"
            style={{ animation: "fadeUp 0.8s 0.6s ease forwards" }}
          >
            <a
              href="#contact"
              className="btn-pulse inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#E87722] text-white font-normal text-[12px] uppercase tracking-[1px] no-underline"
            >
              Book Your Event
            </a>
            <a
              href="#rates"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/40 text-[#C0C8D8] font-normal text-[12px] uppercase tracking-[1px] no-underline"
            >
              View Rate Card
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/50 opacity-0 no-underline"
          style={{
            animation: "fadeIn 1s 1s ease forwards, bounce 2s infinite",
          }}
        >
          <ChevronDown size={28} />
        </a>

        <div
          className="absolute bottom-0 left-0 right-0 bg-[#0d1f3c]/80 border-t border-white/5 opacity-0"
          style={{ animation: "fadeIn 1s 0.9s ease forwards" }}
        >
          <div className="max-w-3xl mx-auto grid gap-3 grid-cols-1 sm:grid-cols-3 py-3 px-4">
            {[
              { n: "9+", label: "Years of Excellence" },
              { n: "60+", label: "Ushers Per Event" },
              { n: "3", label: "Cities Nationwide" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`py-2 text-center ${i < 2 ? "border-r border-white/10 sm:border-r" : ""}`}
              >
                <div className="font-display text-[26px] font-semibold text-[#E87722]">
                  {stat.n}
                </div>
                <div className="text-[10px] uppercase tracking-[1px] text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
