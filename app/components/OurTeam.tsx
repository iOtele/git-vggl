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
  { name: "Annie", role: "Lead Usher", color: "#1A3A6E", img: "annie.jpg" },
  { name: "Chi", role: "Guest Liaison", color: "#E87722", img: "chi.jpg" },
  {
    name: "Emmanuella",
    role: "Floor Manager",
    color: "#0D1F3C",
    img: "emmanuella.jpg",
  },
  { name: "Peace", role: "VIP Host", color: "#3A3A3A", img: "peace.jpg" },
  {
    name: "Motunrayo",
    role: "Crowd Control",
    color: "#5A4A8A",
    img: "motunrayo.jpg",
  },
  {
    name: "Oluwatosin",
    role: "Welcome Team",
    color: "#C45E0F",
    img: "oluwatosin.jpg",
  },
  {
    name: "Jessica",
    role: "Event Escort",
    color: "#0D4A6A",
    img: "jessica.jpg",
  },
  {
    name: "Glory",
    role: "Protocol Support",
    color: "#0D1F3C",
    img: "glory.jpg",
  },
  {
    name: "Happiness",
    role: "Event Organiser",
    color: "#1A3A6E",
    img: "happiness.jpg",
  },
  {
    name: "Oluwatosin",
    role: "Corporate Client",
    color: "#1A3A6E",
    img: "oluwatosin.jpg",
  },
  {
    name: "Model_2",
    role: "VIP Host",
    color: "#1A3A6E",
    img: "model_2.jpeg",
  },
  {
    name: "Model_4",
    role: "Event Escort",
    color: "#1A3A6E",
    img: "model_4.jpeg",
  },
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
    <section id="team" ref={ref} className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="reveal text-center mb-10">
          <p className="text-[#E87722] text-[11px] uppercase tracking-[5px] font-semibold mb-3">
            Meet The Team
          </p>

          <h2 className="font-display text-[clamp(20px,6vw,40px)] font-light text-[#0D1F3C] mb-2">
            Our Team
          </h2>

          <div className="ornament mx-auto max-w-[200px]">
            <span>✦</span>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <div
              key={m.name}
              className="reveal rounded-[12px] bg-[#FAF8F4] p-5 text-center"
            >
              <div className="mx-auto mb-3 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#0D1F3C] text-white font-display text-[20px]">
                {/* {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")} */}
                {/* <Image
                  src={`/${m.img}`}
                  alt={m.name}
                  width={60}
                  height={60}
                  style={{ borderRadius: "50%" , width: "auto", height: "auto" }}
                /> */}

                {m.img ? (
                  <Image
                    src={`/${m.img}`}
                    alt={m.name}
                    width={60}
                    height={60}
                    style={{
                      borderRadius: "50%",
                      width: "auto",
                      height: "auto",
                    }}
                  />
                ) : (
                  <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-slate-200 font-bold text-[#0D1F3C]">
                    {m.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>
                )}
              </div>
              <h3 className="m-0 text-[16px] font-semibold text-[#0D1F3C]">
                {m.name}
              </h3>
              <p className="mt-1 mb-3 text-[13px] text-[#0D1F3C]/70">
                {m.role}
              </p>
              <p className="m-0 text-[13px] leading-[1.5] text-[#0D1F3C]/60">
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16 mb-8">
          <h3 className="font-display text-[clamp(15px,4vw,35px)] font-light text-[#0D1F3C]">
            Usher Gallery
          </h3>

          <p className="mx-auto mt-3 max-w-[600px] text-[14px] leading-[1.7] text-[#0D1F3C]/70">
            View our team in action polished ushers who represent the quality
            and professionalism we deliver.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
          {gallery.map((item) => (
            <div
              key={item.name}
              className="reveal overflow-hidden rounded-[20px] bg-[#F7F8FA] shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="relative w-full aspect-square">
                <Image
                  // src={getPlaceholderImage(item.name, item.color)}
                  src={`/${item.img}`}
                  alt={item.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <div className="font-display text-[16px] font-semibold text-[#0D1F3C] mb-1">
                  {item.name}
                </div>
                <div className="text-[13px] leading-[1.5] text-[#0D1F3C]/70">
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
