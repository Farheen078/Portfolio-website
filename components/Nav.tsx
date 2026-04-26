"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

const scrollToSection = (id: string) => {
  if (id === "Tracker") {
    window.location.href = "/tracker";
  } else {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "16px 24px",
        background: scrolled ? "rgba(5,5,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.4s ease",
        flexWrap: "wrap",
      }}>
        {/* Logo */}
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20 }}>
          <span style={{ color: "#7c6dfa" }}>F</span>
          <span style={{ color: "#f0eeff" }}>arheen</span>
          <span style={{ color: "#fa6d9a" }}>.</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-desktop" style={{ display: "flex", gap: 8 }}>
          {links.map(l => (
            <button key={l} onClick={() => handleNavClick(l)}
              style={{
                background: active === l ? "rgba(124,109,250,0.15)" : "transparent",
                border: "1px solid",
                borderColor: active === l ? "rgba(124,109,250,0.4)" : "transparent",
                color: active === l ? "#7c6dfa" : "#9b96c4",
                padding: "8px 20px", borderRadius: 100, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                transition: "all 0.3s ease",
              }}
            >
              {l}
            </button>
          ))}
        </div>

        {/* Right side buttons */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => scrollToSection("contact")} style={{
            background: "linear-gradient(135deg, #7c6dfa, #fa6d9a)",
            color: "white", padding: "8px 20px", borderRadius: 100,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
            border: "none", cursor: "pointer", transition: "opacity 0.3s",
          }}>
            Hire Me ↗
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-toggle"
            style={{
              background: "rgba(255,255,255,0.1)", border: "none", borderRadius: 8,
              padding: "8px", cursor: "pointer", color: "#f0eeff", fontSize: 20,
            }}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "70px", left: 0, right: 0, zIndex: 99,
          background: "rgba(5,5,10,0.95)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          padding: "20px",
          display: "flex", flexDirection: "column", gap: 16,
          alignItems: "center",
        }}>
          {links.map(l => (
            <button key={l} onClick={() => handleNavClick(l)}
              style={{
                background: "transparent", border: "none",
                color: "#9b96c4", padding: "10px", fontSize: 18,
                cursor: "pointer", width: "100%", textAlign: "center",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-toggle {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}