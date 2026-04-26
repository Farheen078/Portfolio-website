"use client";
import { useEffect, useRef, useState } from "react";

const skills = {
  Frontend: [
    { name: "React.js", level: 90, color: "#61dafb" },
    { name: "JavaScript (ES6+)", level: 88, color: "#f7df1e" },
    { name: "HTML5 / CSS3", level: 95, color: "#e34f26" },
    { name: "TypeScript", level: 65, color: "#3178c6" },
    { name: "Responsive Design", level: 92, color: "#7c6dfa" },
    { name: "Flutter / Dart", level: 72, color: "#00B4AB" },
  ],
  "Backend & DB": [
    { name: "Node.js", level: 72, color: "#68a063" },
    { name: "Express.js", level: 70, color: "#9b96c4" },
    { name: "MongoDB", level: 68, color: "#47a248" },
    { name: "Firebase", level: 75, color: "#ffa611" },
    { name: "PHP / MySQL", level: 65, color: "#8892be" },
  ],
  Tools: [
    { name: "Git / GitHub", level: 85, color: "#f14e32" },
    { name: "REST APIs", level: 87, color: "#fa6d9a" },
    { name: "Agile / Scrum", level: 80, color: "#6dfadb" },
    { name: "VS Code", level: 95, color: "#007acc" },
  ],
};

const techBadges = [
  "React.js","Next.js","Node.js","MongoDB","Express.js","Firebase",
  "PHP","MySQL","Git","REST APIs","TypeScript","Tailwind","HTML5","CSS3",
  "JavaScript","Flutter","Dart"
];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ color: "#f0eeff", fontSize: 14, fontWeight: 500 }}>{name}</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: color }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: 100,
          background: `linear-gradient(90deg, ${color}66, ${color})`,
          width: visible ? `${level}%` : "0%",
          transition: "width 1.2s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: `0 0 12px ${color}44`,
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("Frontend");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} style={{ padding: "120px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c6dfa" }}>02.</span>
          <span style={{ height: 1, width: 60, background: "rgba(124,109,250,0.4)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#5a566e" }}>skills & expertise</span>
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 16, letterSpacing: "-1px" }}>
          What I <span style={{ background: "linear-gradient(135deg,#7c6dfa,#fa6d9a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Work With</span>
        </h2>
        <p style={{ color: "#9b96c4", fontSize: 17, marginBottom: 56, maxWidth: 480 }}>
          A curated set of tools and technologies I use to craft exceptional web experiences.
        </p>

        {/* Tech badges scroll */}
        <div style={{ overflow: "hidden", marginBottom: 56, position: "relative" }}>
          <div style={{
            display: "flex", gap: 12,
            animation: "marquee 20s linear infinite",
          }}>
            {[...techBadges, ...techBadges].map((t, i) => (
              <span key={i} style={{
                whiteSpace: "nowrap", padding: "8px 20px",
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 100, fontSize: 13, color: "#9b96c4",
                fontFamily: "'JetBrains Mono', monospace", flexShrink: 0,
              }}>{t}</span>
            ))}
          </div>
          <style>{`
            @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          `}</style>
        </div>

        {/* Tabs + bars */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
          {Object.keys(skills).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              padding: "10px 24px", borderRadius: 100, border: "1px solid",
              borderColor: activeTab === tab ? "#7c6dfa" : "rgba(255,255,255,0.08)",
              background: activeTab === tab ? "rgba(124,109,250,0.15)" : "transparent",
              color: activeTab === tab ? "#7c6dfa" : "#9b96c4",
              cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
              fontSize: 14, fontWeight: 500, transition: "all 0.3s",
            }}>
              {tab}
            </button>
          ))}
        </div>
        <div style={{
          background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: 20, padding: "36px 40px",
        }}>
          {(skills[activeTab as keyof typeof skills] || []).map((s, i) => (
            <SkillBar key={s.name} {...s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}