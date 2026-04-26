"use client";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

export default function Home() {
  return (
    <>
      <Cursor />
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        {/* Mesh glows */}
        <div style={{
          position: "absolute", width: "60vw", height: "60vw",
          background: "radial-gradient(circle, rgba(124,109,250,0.1) 0%, transparent 70%)",
          top: "-20%", right: "-10%", borderRadius: "50%",
          animation: "float1 12s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", width: "40vw", height: "40vw",
          background: "radial-gradient(circle, rgba(250,109,154,0.07) 0%, transparent 70%)",
          bottom: "30%", left: "-5%", borderRadius: "50%",
          animation: "float2 15s ease-in-out infinite",
        }} />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Nav />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}
