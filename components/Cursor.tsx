"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.left = mouseX - 6 + "px";
        dot.current.style.top = mouseY - 6 + "px";
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.left = ringX - 18 + "px";
        ring.current.style.top = ringY - 18 + "px";
      }
      animId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animate);

    const links = document.querySelectorAll("a, button, [data-hover]");
    const expand = () => {
      dot.current?.style.setProperty("transform", "scale(3)");
      ring.current?.style.setProperty("transform", "scale(0.5)");
      ring.current?.style.setProperty("opacity", "0.3");
    };
    const shrink = () => {
      dot.current?.style.setProperty("transform", "scale(1)");
      ring.current?.style.setProperty("transform", "scale(1)");
      ring.current?.style.setProperty("opacity", "1");
    };

    links.forEach(l => { l.addEventListener("mouseenter", expand); l.addEventListener("mouseleave", shrink); });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      links.forEach(l => { l.removeEventListener("mouseenter", expand); l.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: "fixed", width: 12, height: 12, background: "#7c6dfa",
        borderRadius: "50%", pointerEvents: "none", zIndex: 9999,
        transition: "transform 0.2s ease", mixBlendMode: "screen",
      }} />
      <div ref={ring} style={{
        position: "fixed", width: 36, height: 36,
        border: "1px solid rgba(124,109,250,0.5)", borderRadius: "50%",
        pointerEvents: "none", zIndex: 9998, transition: "transform 0.3s ease, opacity 0.3s ease",
      }} />
    </>
  );
}
