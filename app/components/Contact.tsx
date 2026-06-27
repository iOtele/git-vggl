"use client";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Send,
  Phone,
  Mail,
  ExternalLink,
  MapPin,
  CheckCircle,
} from "lucide-react";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [form, setForm] = useState({
    name: "name",
    email: "email",
    phone: "phone",
    eventType: "eventType",
    date: "date",
    ushers: "ushers",
    message: "message",
  });

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("sent");
      setForm({
        name: "name",
        email: "email",
        phone: "phone",
        eventType: "eventType",
        date: "date",
        ushers: "ushers",
        message: "message",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.15)",
    color: "white",
    borderRadius: 12,
    padding: "12px 16px",
    fontSize: 14,
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "112px 0",
        background: "#060F1E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle at bottom right, rgba(232,119,34,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
        }}
      >
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
            Get In Touch
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(20px,6vw,40px)",
              fontWeight: 300,
              color: "white",
              marginBottom: 24,
            }}
          >
            Book Your Event
          </h2>
          <div className="ornament" style={{ maxWidth: 200, margin: "0 auto" }}>
            <span>✦</span>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 64,
          }}
        >
          {/* Info */}
          <div className="reveal">
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: 22,
                color: "rgba(255,255,255,0.8)",
                fontWeight: 300,
                lineHeight: 1.6,
                marginBottom: 40,
              }}
            >
              &ldquo;Bringing Grace, Professionalism &amp; Excellence to Every
              Event.&rdquo;
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {[
                {
                  icon: <Phone size={18} />,
                  label: "Phone",
                  value: "0703 468 8064",
                  href: "tel:07034688064",
                },
                {
                  icon: <Mail size={18} />,
                  label: "Email",
                  value: "atodovictoria@gmail.com",
                  href: "mailto:atodovictoria@gmail.com",
                },
                {
                  icon: <ExternalLink size={18} />,
                  label: "Instagram",
                  value: "@vgglimited",
                  href: "https://instagram.com/vgglimited",
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget.querySelector(".ci") as HTMLElement
                    ).style.borderColor = "rgba(232,119,34,0.6)";
                    (
                      e.currentTarget.querySelector(".cv") as HTMLElement
                    ).style.color = "#E87722";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget.querySelector(".ci") as HTMLElement
                    ).style.borderColor = "rgba(232,119,34,0.3)";
                    (
                      e.currentTarget.querySelector(".cv") as HTMLElement
                    ).style.color = "rgba(192,200,216,0.8)";
                  }}
                >
                  <div
                    className="ci"
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      border: "1px solid rgba(232,119,34,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#E87722",
                      flexShrink: 0,
                      transition: "border-color 0.2s",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      style={{
                        color: "rgba(192,200,216,0.4)",
                        fontSize: 11,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="cv"
                      style={{
                        color: "rgba(192,200,216,0.8)",
                        fontSize: 14,
                        transition: "color 0.2s",
                      }}
                    >
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(232,119,34,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#E87722",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <p
                    style={{
                      color: "rgba(192,200,216,0.4)",
                      fontSize: 11,
                      letterSpacing: 3,
                      textTransform: "uppercase",
                      marginBottom: 2,
                    }}
                  >
                    Locations
                  </p>
                  <p style={{ color: "rgba(192,200,216,0.8)", fontSize: 14 }}>
                    Lagos · Abuja · Kaduna
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            {status === "sent" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "64px 0",
                }}
              >
                <CheckCircle
                  size={56}
                  style={{ color: "#E87722", marginBottom: 24 }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    color: "white",
                    marginBottom: 12,
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "rgba(192,200,216,0.6)", maxWidth: 320 }}>
                  Thank you for reaching out. Victoria and her team will get
                  back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    marginTop: 32,
                    padding: "10px 24px",
                    border: "1px solid rgba(232,119,34,0.4)",
                    color: "#E87722",
                    borderRadius: 999,
                    fontSize: 13,
                    background: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                    }
                  />
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                    }
                  />
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                    }
                  />
                  <select
                    name="eventType"
                    value={form.eventType}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      color: form.eventType ? "white" : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                    }}
                  >
                    <option value="" disabled>
                      Event Type
                    </option>
                    {[
                      "Corporate Event",
                      "Wedding",
                      "Brand Promotion",
                      "Film/TV Production",
                      "Training Program",
                      "Other",
                    ].map((o) => (
                      <option
                        key={o}
                        value={o}
                        style={{ background: "#0D1F3C" }}
                      >
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    style={{ ...inputStyle, colorScheme: "dark" }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                    }
                  />
                  <input
                    name="ushers"
                    value={form.ushers}
                    onChange={handleChange}
                    placeholder="Number of Ushers"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                    }
                  />
                </div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event..."
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(232,119,34,0.6)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(255,255,255,0.15)")
                  }
                />
                {status === "error" && (
                  <p style={{ color: "#f87171", fontSize: 14 }}>
                    Something went wrong. Please make sure the EmailJS
                    environment variables are configured correctly.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background: "#E87722",
                    color: "white",
                    fontWeight: 600,
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    opacity: status === "sending" ? 0.6 : 1,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderTopColor: "white",
                          borderRadius: "50%",
                          animation: "spin 0.8s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
