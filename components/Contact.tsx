"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const links = [
    { label: "Email", value: "farheensaba2006@gmail.com", icon: "✉", href: "mailto:farheensaba2006@gmail.com", color: "#7c6dfa" },
    { label: "GitHub", value: "github.com/Farheen078", icon: "⌥", href: "https://github.com/Farheen078", color: "#fa6d9a" },
    { label: "LinkedIn", value: "linkedin.com/in/farheen-saba-...", icon: "in", href: "https://linkedin.com/in/farheen-saba-2955682b4", color: "#6dfadb" },
    { label: "Phone", value: "+977 9840232320", icon: "☎", href: "tel:+9779840232320", color: "#f7df1e" },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: "120px 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c6dfa" }}>05.</span>
          <span style={{ height: 1, width: 60, background: "rgba(124,109,250,0.4)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#5a566e" }}>get in touch</span>
        </div>

        {/* Big CTA */}
        <div style={{
          textAlign: "center", padding: "80px 48px",
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 32, marginBottom: 40, position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", width: "50%", height: "100%", top: 0, left: "25%",
            background: "radial-gradient(ellipse, rgba(124,109,250,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />
          <h2 style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-2px", marginBottom: 20 }}>
            Let&apos;s Build<br />
            <span style={{
              background: "linear-gradient(135deg, #7c6dfa, #fa6d9a, #6dfadb)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Something Amazing</span>
          </h2>
          <p style={{ color: "#9b96c4", fontSize: 18, maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>
            I&apos;m actively seeking my next opportunity. Whether you have a role in mind or just want to chat, my inbox is always open.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:farheensaba2006@gmail.com" style={{
              background: "linear-gradient(135deg, #7c6dfa, #fa6d9a)",
              color: "white", padding: "16px 40px", borderRadius: 100,
              fontSize: 16, fontWeight: 600, textDecoration: "none",
              boxShadow: "0 0 40px rgba(124,109,250,0.3)", transition: "all 0.3s",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.transform = "translateY(-2px)"}
              onMouseLeave={e => (e.target as HTMLElement).style.transform = "none"}
            >
              Say Hello ✨
            </a>
            <a href="/Farheen_Saba_CV_fullstack.pdf" download
              style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
                color: "#f0eeff", padding: "16px 32px", borderRadius: 100,
                fontSize: 16, fontWeight: 500, cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.3s", textDecoration: "none", display: "inline-block",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#6dfadb"; (e.target as HTMLElement).style.color = "#6dfadb"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.target as HTMLElement).style.color = "#f0eeff"; }}
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Contact links grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16, padding: "20px 24px", textDecoration: "none",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor = `${l.color}44`; el.style.background = `${l.color}08`; el.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "rgba(255,255,255,0.02)"; el.style.transform = "none"; }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `${l.color}15`, border: `1px solid ${l.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, color: l.color, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{l.icon}</div>
              <div>
                <div style={{ fontSize: 12, color: "#5a566e", marginBottom: 4 }}>{l.label}</div>
                <div style={{ fontSize: 13, color: "#f0eeff", fontFamily: "'JetBrains Mono', monospace" }}>{l.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", paddingTop: 64, borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 64 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, marginBottom: 12 }}>
            <span style={{ color: "#7c6dfa" }}>F</span>
            <span style={{ color: "#f0eeff" }}>arheen</span>
            <span style={{ color: "#fa6d9a" }}>.</span>
          </div>
          <p style={{ color: "#3a3650", fontSize: 14, fontFamily: "'JetBrains Mono', monospace" }}>
            Crafted with ❤️ in Kathmandu, Nepal · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}