import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farheen Saba · Frontend Developer",
  description: "Frontend Developer & MERN Stack Trainee based in Kathmandu, Nepal.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <style>{`
          @media (max-width: 1100px) {
            #about > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
            #about > div > div:last-child { margin-top: 0 !important; justify-content: center !important; }
            #about > div > div:first-child { padding: 0 20px 60px 20px !important; }
            .hero-stats { gap: 1.5rem !important; flex-wrap: wrap !important; justify-content: center !important; }
          }
          @media (max-width: 900px) {
            #skills .skills-tabs { flex-wrap: wrap !important; justify-content: center !important; }
            #skills .skills-tabs button { padding: 6px 16px !important; font-size: 13px !important; }
            #skills .skills-bars { padding: 24px 20px !important; }
            #projects > div > div:last-child { grid-template-columns: 1fr !important; }
            #projects .project-card { padding: 24px !important; }
            #experience > div > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
            #contact .contact-cta { padding: 40px 20px !important; }
            #contact .contact-cta h2 { font-size: 32px !important; }
            #contact .contact-buttons { flex-direction: column !important; align-items: center !important; }
            #contact .contact-links-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 768px) {
            nav { padding: 12px 20px !important; }
            nav > div:first-child { font-size: 18px !important; }
            nav > div:last-child button { padding: 6px 16px !important; font-size: 12px !important; }
            section { padding: 80px 24px !important; }
            .hero-left h1 { font-size: 42px !important; line-height: 1.2 !important; }
            .hero-left p { font-size: 16px !important; }
            .hero-buttons button, .hero-buttons a { padding: 10px 24px !important; font-size: 14px !important; width: auto !important; }
            .hero-stats .stat-num { font-size: 28px !important; }
            .hero-stats .stat-label { font-size: 12px !important; }
          }
          @media (max-width: 480px) {
            section { padding: 60px 16px !important; }
            .hero-left { padding: 0 10px 40px 10px !important; }
            .hero-left h1 { font-size: 32px !important; }
            .hero-buttons { flex-direction: column !important; width: 100% !important; }
            .hero-buttons button, .hero-buttons a { width: 100% !important; text-align: center !important; }
            .hero-stats { gap: 1rem !important; }
          }
        `}</style>
        {children}
      </body>
    </html>
  );
}