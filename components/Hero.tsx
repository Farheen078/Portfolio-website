"use client";
import { useEffect, useState } from "react";

const roles = ["FullStack Developer", "Flutter Learner", "Tech Enthusiast"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const [dots, setDots] = useState<Array<{ x: number; y: number; size: number; delay: number; dur: number }>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDots(
      Array.from({ length: 12 }, () => ({
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        dur: 3 + Math.random() * 4,
      }))
    );
  }, []);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  // Typewriter effect
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDeleting(false);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRoleIdx((roleIdx + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="about" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "0 24px", position: "relative", overflow: "hidden",
    }}>
      {/* Background orbs, grid, dots – unchanged */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{
          position: "absolute", width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(124,109,250,0.12) 0%, transparent 70%)",
          top: "-20%", right: "-10%", borderRadius: "50%",
          animation: "float1 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(250,109,154,0.08) 0%, transparent 70%)",
          bottom: "10%", left: "-5%", borderRadius: "50%",
          animation: "float2 15s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {dots.map((d, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${d.x}%`, top: `${d.y}%`,
            width: d.size, height: d.size,
            background: i % 3 === 0 ? "#7c6dfa" : i % 3 === 1 ? "#fa6d9a" : "#6dfadb",
            borderRadius: "50%",
            animation: `floatDot ${d.dur}s ease-in-out ${d.delay}s infinite`,
          }} />
        ))}
      </div>

      {/* Responsive grid container */}
      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: 1200, width: "100%", margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        alignItems: "center",
        marginTop: "60px",      // reduced from 80px → less gap on all devices
        padding: "20px",
      }}>
        {/* LEFT COLUMN */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
        }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(124,109,250,0.1)", border: "1px solid rgba(124,109,250,0.25)",
            borderRadius: 100, padding: "8px 18px", marginBottom: 32,
          }}>
            <span style={{ width: 8, height: 8, background: "#6dfadb", borderRadius: "50%", boxShadow: "0 0 10px #6dfadb" }} />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#9b96c4" }}>Available for opportunities</span>
          </div>

          <h1 style={{ fontSize: "clamp(36px, 6vw, 80px)", lineHeight: 1.2, marginBottom: 24, letterSpacing: "-2px" }}>
            <span style={{ display: "block", color: "#f0eeff" }}>Hi, I&apos;m</span>
            <span style={{
              display: "block",
              background: "linear-gradient(135deg, #7c6dfa 0%, #fa6d9a 50%, #6dfadb 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", backgroundSize: "200%",
              animation: "gradShift 4s ease infinite",
            }}>Farheen Saba</span>
          </h1>

          <div style={{
            display: "flex", alignItems: "center", gap: 4, marginBottom: 32,
            fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(18px, 2.5vw, 28px)",
          }}>
            <span style={{ color: "#7c6dfa" }}>&gt;</span>
            <span style={{ color: "#9b96c4" }}> </span>
            <span style={{ color: "#f0eeff", fontWeight: 400 }}>{displayed}</span>
            <span className="blink" style={{ color: "#fa6d9a" }}>|</span>
          </div>

          {/* Paragraph – reduced left/right padding on mobile via media query */}
          <p style={{
            fontSize: "clamp(16px, 2vw, 18px)", lineHeight: 1.7, color: "#9b96c4",
            maxWidth: "90%", marginBottom: 48,
          }}>
            I build full‑stack web apps with React, Node.js, MongoDB, and cross‑platform mobile apps with Flutter & Dart.
            Based in <span style={{ color: "#f0eeff" }}>Kathmandu, Nepal</span> — turning complex problems into elegant, scalable solutions.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "linear-gradient(135deg, #7c6dfa, #fa6d9a)",
                border: "none", color: "white", padding: "12px 28px", borderRadius: 100,
                fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 600, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", boxShadow: "0 0 40px rgba(124,109,250,0.3)",
                transition: "all 0.3s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-2px)"; (e.target as HTMLElement).style.boxShadow = "0 8px 50px rgba(124,109,250,0.5)"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = "none"; (e.target as HTMLElement).style.boxShadow = "0 0 40px rgba(124,109,250,0.3)"; }}
            >View My Work ↓</button>
            <a href="https://github.com/Farheen078" target="_blank"
              style={{
                background: "transparent", border: "1px solid rgba(255,255,255,0.15)",
                color: "#f0eeff", padding: "12px 28px", borderRadius: 100,
                fontSize: "clamp(14px, 2vw, 16px)", fontWeight: 500, textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif", transition: "all 0.3s",
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#7c6dfa"; (e.target as HTMLElement).style.color = "#7c6dfa"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; (e.target as HTMLElement).style.color = "#f0eeff"; }}
            >GitHub Profile ↗</a>
          </div>

          <div style={{
            display: "flex", gap: "clamp(20px, 5vw, 40px)", marginTop: 60,
            paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.07)",
            flexWrap: "wrap", justifyContent: "center",
          }}>
            {[
              { num: "20+", label: "Projects Built" },
              { num: "10+", label: "Technologies" },
              { num: "100%", label: "Passion" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 800,
                  background: "linear-gradient(135deg, #7c6dfa, #fa6d9a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{s.num}</div>
                <div style={{ color: "#5a566e", fontSize: "clamp(12px, 2vw, 14px)", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN – Terminal card (hidden on mobile) */}
        <div className="terminal-col" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <div style={{
            background: "rgba(10,10,20,0.8)",
            backdropFilter: "blur(12px)",
            borderRadius: 24,
            border: "1px solid rgba(124,109,250,0.4)",
            padding: "30px 16px",
            width: "100%",
            maxWidth: 280,
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(10px, 2vw, 12px)",
            transition: "transform 0.3s ease",
            animation: "floatTerminal 3s ease-in-out infinite",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 16, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ marginLeft: 6, color: "#9b96c4", fontSize: 10 }}>~/farheen</span>
            </div>
            <div>
              <p><span style={{ color: "#7c6dfa" }}>$</span> <span style={{ color: "#6dfadb" }}>whoami</span></p>
              <p style={{ marginLeft: 12, color: "#9b96c4" }}>Farheen Saba – Full Stack & Flutter Dev</p>
              <p style={{ marginTop: 12 }}><span style={{ color: "#7c6dfa" }}>$</span> <span style={{ color: "#6dfadb" }}>skills</span></p>
              <p style={{ marginLeft: 12, color: "#fa6d9a" }}>React · Node.js · Flutter · Dart · MongoDB · Tailwind</p>
              <p style={{ marginTop: 12 }}><span style={{ color: "#7c6dfa" }}>$</span> <span style={{ color: "#6dfadb" }}>exp</span></p>
              <p style={{ marginLeft: 12, color: "#f7df1e" }}>▸ 3-month MERN internship</p>
              <p style={{ marginLeft: 12, color: "#f7df1e" }}>▸ Flutter cross‑platform projects</p>
              <p style={{ marginTop: 12 }}><span style={{ color: "#7c6dfa" }}>$</span> <span style={{ color: "#6dfadb" }}>status</span></p>
              <p style={{ marginLeft: 12, color: "#6dfadb" }}>✔ Open to work</p>
              <div className="blink" style={{ display: "inline-block", color: "#7c6dfa", marginTop: 10, fontSize: 12 }}>█</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatTerminal {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatDot {
          0%,100% { transform: translateY(0); opacity: 0.3; }
          50% { transform: translateY(-15px); opacity: 0.7; }
        }
        @keyframes float1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-20px,15px) scale(1.05); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(30px,-20px); }
        }
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .blink { animation: blink 1s step-end infinite; }
        @keyframes blink {
          0%,100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Mobile adjustments – reduce spacing, hide terminal card */
        @media (max-width: 768px) {
          #about {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          #about > div {
            padding-left: 0 !important;
            padding-right: 0 !important;
            margin-top: 10px !important;
            gap: 1.5rem !important;
          }
          #about > div > div:first-child {
            text-align: center;
          }
          #about > div > div:first-child > div:first-child {
            margin-bottom: 20px !important;
          }
          /* Reduce paragraph left/right padding on mobile */
          #about > div > div:first-child > p {
            max-width: 125% !important;
            padding-left: 8px !important;
            padding-right: 8px !important;
          }
          .terminal-col {
            display: none !important;
          }
        }

        /* Also reduce gap between sections globally (optional) */
        #skills {
          padding-top: 60px !important;
        }
        @media (max-width: 768px) {
          #skills {
            padding-top: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}