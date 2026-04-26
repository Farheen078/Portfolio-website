"use client";
import { useEffect, useRef, useState } from "react";

const GithubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const projects = [
  {
    num: "01",
    title: "HR Management System",
    desc: "Full‑featured HRMS built with PHP and MySQL to manage employees, attendance, and leave records. Centralized CRUD operations and secure data handling.",
    stack: ["PHP", "MySQL", "HTML/CSS", "Bootstrap"],
    github: "https://github.com/Farheen078/HRMS",
    accent: "#7c6dfa",
    icon: "👥",
  },
  {
    num: "02",
    title: "SDC Consultancy Website",
    desc: "Modern consultancy website built with React.js and Firebase – real‑time database, authentication, dynamic content, contact forms, and enquiry management.",
    stack: ["React.js", "Firebase", "Tailwind CSS", "Responsive"],
    github: "https://github.com/Farheen078/SDC-Consultancy",
    accent: "#fa6d9a",
    icon: "🏢",
  },
  {
    num: "03",
    title: "E‑Commerce Platform (MERN)",
    desc: "Scalable full‑stack e‑commerce with JWT authentication, product catalog, shopping cart, order management, and PayPal integration. Deployed on Vercel + Render.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Redux"],
    github: "https://github.com/Farheen078/ecommerce-mern",
    accent: "#6dfadb",
    icon: "🛒",
  },
  {
    num: "04",
    title: "Social Media Backend API",
    desc: "RESTful API for social platform with user authentication, posts, comments, likes, and rate limiting. Documented with Swagger.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Express‑rate‑limit"],
    github: "https://github.com/Farheen078/social-api",
    accent: "#f7df1e",
    icon: "🔗",
  },
];

function ProjectCard({ p, visible, idx }: { p: typeof projects[0]; visible: boolean; idx: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? p.accent + "44" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 20, padding: "36px 36px",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 20px 60px ${p.accent}15` : "none",
        opacity: visible ? 1 : 0,
        transitionDelay: `${idx * 0.08}s`,
        position: "relative", overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Number watermark */}
      <div style={{
        position: "absolute", top: -10, right: 20,
        fontFamily: "'Syne', sans-serif", fontSize: 100, fontWeight: 800,
        color: p.accent, opacity: 0.04, lineHeight: 1, pointerEvents: "none",
        transition: "opacity 0.3s",
        ...(hovered ? { opacity: 0.08 } : {}),
      }}>{p.num}</div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14,
            background: `${p.accent}15`, border: `1px solid ${p.accent}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22,
          }}>{p.icon}</div>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: p.accent, marginBottom: 4 }}>{p.num}</div>
            <h3 style={{ fontSize: 20, color: "#f0eeff", letterSpacing: "-0.3px" }}>{p.title}</h3>
          </div>
        </div>
        <a href={p.github} target="_blank" style={{
          width: 36, height: 36, borderRadius: "50%",
          background: hovered ? `${p.accent}20` : "rgba(255,255,255,0.04)",
          border: `1px solid ${hovered ? p.accent + "50" : "rgba(255,255,255,0.08)"}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 16, textDecoration: "none", transition: "all 0.3s",
          color: hovered ? p.accent : "#5a566e",
        }}>↗</a>
      </div>

      <p style={{ color: "#9b96c4", fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {p.stack.map(s => (
          <span key={s} style={{
            padding: "5px 14px", borderRadius: 100, fontSize: 12,
            background: `${p.accent}10`, border: `1px solid ${p.accent}25`,
            color: p.accent, fontFamily: "'JetBrains Mono', monospace",
          }}>{s}</span>
        ))}
      </div>

      {/* No extra links – only top‑right ↗ icon for GitHub */}
    </div>
  );
}

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} style={{ padding: "120px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c6dfa" }}>03.</span>
          <span style={{ height: 1, width: 60, background: "rgba(124,109,250,0.4)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#5a566e" }}>featured work</span>
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 16, letterSpacing: "-1px" }}>
          Things I&apos;ve <span style={{ background: "linear-gradient(135deg,#7c6dfa,#fa6d9a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Built</span>
        </h2>
        <p style={{ color: "#9b96c4", fontSize: 17, marginBottom: 56, maxWidth: 480 }}>
          Full‑stack web apps, PHP/MySQL systems, React+Firebase sites, and backend APIs.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} visible={visible} idx={i} />)}
        </div>
      </div>
    </section>
  );
}