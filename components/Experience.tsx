"use client";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} style={{ padding: "120px 48px", maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(30px)", transition: "all 0.7s ease" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c6dfa" }}>04.</span>
          <span style={{ height: 1, width: 60, background: "rgba(124,109,250,0.4)" }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#5a566e" }}>journey</span>
        </div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", marginBottom: 56, letterSpacing: "-1px" }}>
          Experience & <span style={{ background: "linear-gradient(135deg,#7c6dfa,#fa6d9a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Education</span>
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 40 }}>
          {/* LEFT: Work Experience */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(124,109,250,0.15)", border: "1px solid rgba(124,109,250,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💼</div>
              <h3 style={{ fontSize: 20, color: "#9b96c4", fontWeight: 600 }}>Work Experience</h3>
            </div>

            {/* Internship card - already decent visibility */}
            <div style={{
              background: "rgba(20,20,35,0.8)",  // darker, more opaque
              border: "1px solid rgba(124,109,250,0.3)",
              borderRadius: 20, padding: "32px", position: "relative", overflow: "hidden",
              transition: "transform 0.3s, border-color 0.3s",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#7c6dfa"; }} onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(124,109,250,0.3)"; }}>
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,#7c6dfa,#fa6d9a)", borderRadius: "3px 0 0 3px" }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, flexWrap: "wrap", gap: 12 }}>
                <div>
                  <h4 style={{ fontSize: 18, color: "#f0eeff", marginBottom: 6 }}>Full Stack Developer Intern</h4>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#7c6dfa" }}>Techy Lads Solution</div>
                </div>
                <span style={{
                  padding: "6px 16px", background: "rgba(124,109,250,0.2)", border: "1px solid rgba(124,109,250,0.4)",
                  borderRadius: 100, fontSize: 12, color: "#9b96c4", fontFamily: "'JetBrains Mono', monospace", whiteSpace: "nowrap",
                }}>2024 · 3 months</span>
              </div>
              <div style={{ fontSize: 13, color: "#9b96c4", marginBottom: 20, display: "flex", alignItems: "center", gap: 6 }}>
                <span>📍</span> Kathmandu, Nepal
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  "Built full‑stack features using MERN (MongoDB, Express, React, Node.js) – developed REST APIs and integrated with frontend.",
                  "Implemented JWT authentication and role‑based access control, enhancing security.",
                  "Contributed to a Flutter cross‑platform mobile prototype, gaining hands‑on experience with Dart and Flutter widgets.",
                  "Used Git/GitHub for version control, participated in agile sprints and code reviews.",
                  "Deployed applications to Vercel/Render and managed environment variables.",
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 12, fontSize: 14, color: "#9b96c4", lineHeight: 1.6 }}>
                    <span style={{ color: "#6dfadb", flexShrink: 0, marginTop: 2 }}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                {["React", "Node.js", "Express", "MongoDB", "Flutter", "Dart", "JWT", "REST APIs", "Git"].map(skill => (
                  <span key={skill} style={{ padding: "4px 12px", background: "rgba(124,109,250,0.2)", border: "1px solid rgba(124,109,250,0.3)", borderRadius: 100, fontSize: 11, color: "#7c6dfa", fontFamily: "'JetBrains Mono', monospace" }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Education & Training - IMPROVED VISIBILITY */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(250,109,154,0.15)", border: "1px solid rgba(250,109,154,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🎓</div>
              <h3 style={{ fontSize: 20, color: "#9b96c4", fontWeight: 600 }}>Education & Training</h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* BCA - now with better contrast */}
              <div style={{
                background: "rgba(20,20,35,0.8)",
                border: "1px solid rgba(250,109,154,0.3)",
                borderRadius: 20, padding: "28px 28px", position: "relative", overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#fa6d9a"; }} onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(250,109,154,0.3)"; }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,#fa6d9a,#7c6dfa)", borderRadius: "3px 0 0 3px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <h4 style={{ fontSize: 17, color: "#f0eeff", marginBottom: 6 }}>Bachelor of Computer Application</h4>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#fa6d9a" }}>Nepal Kasthamandap SS College</div>
                  </div>
                  <span style={{ padding: "5px 14px", background: "rgba(250,109,154,0.2)", border: "1px solid rgba(250,109,154,0.4)", borderRadius: 100, fontSize: 12, color: "#9b96c4", fontFamily: "'JetBrains Mono', monospace" }}>Dec 2023 – Present</span>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
                  {["Data Structures", "Web Technologies", "DBMS", "OOP", "Operating Systems"].map(c => (
                    <span key={c} style={{ padding: "4px 12px", background: "rgba(250,109,154,0.15)", border: "1px solid rgba(250,109,154,0.3)", borderRadius: 100, fontSize: 11, color: "#fa6d9a", fontFamily: "'JetBrains Mono', monospace" }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* MERN Stack Training - improved visibility */}
              <div style={{
                background: "rgba(20,20,35,0.8)",
                border: "1px solid rgba(109,250,219,0.3)",
                borderRadius: 20, padding: "28px 28px", position: "relative", overflow: "hidden",
                transition: "transform 0.3s, border-color 0.3s",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }} onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = "#6dfadb"; }} onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.borderColor = "rgba(109,250,219,0.3)"; }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "linear-gradient(180deg,#6dfadb,#7c6dfa)", borderRadius: "3px 0 0 3px" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 12 }}>
                  <div>
                    <h4 style={{ fontSize: 17, color: "#f0eeff", marginBottom: 6 }}>MERN Stack Development</h4>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#6dfadb" }}>Digital Pathshala</div>
                  </div>
                  <span style={{ padding: "5px 14px", background: "rgba(109,250,219,0.2)", border: "1px solid rgba(109,250,219,0.4)", borderRadius: 100, fontSize: 12, color: "#9b96c4", fontFamily: "'JetBrains Mono', monospace" }}>2025</span>
                </div>
                <p style={{ fontSize: 14, color: "#9b96c4", lineHeight: 1.6 }}>
                  Intensive training covering MongoDB, Express.js, React.js, Node.js. Built multiple end‑to‑end projects including REST APIs, dynamic frontends, and database‑connected applications.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {["MongoDB", "Express.js", "React", "Node.js", "JWT", "REST APIs"].map(skill => (
                    <span key={skill} style={{ padding: "4px 12px", background: "rgba(109,250,219,0.15)", border: "1px solid rgba(109,250,219,0.3)", borderRadius: 100, fontSize: 11, color: "#6dfadb", fontFamily: "'JetBrains Mono', monospace" }}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}