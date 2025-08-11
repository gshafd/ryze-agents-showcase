import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const sections = [
  { id: "insurance", label: "Insurance" },
  { id: "finance", label: "Finance" },
  { id: "higher-education", label: "Higher Education" },
  { id: "e-commerce", label: "E-Commerce" },
  { id: "cybersecurity", label: "Cybersecurity" },
  { id: "manufacturing-retail-logistics", label: "Mfg/Retail/Logistics" },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <svg width="28" height="28" viewBox="0 0 48 48" aria-label="FD Ryze logo" className="shrink-0">
        <defs>
          <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#g)" />
        <path d="M12 15h14a3 3 0 110 6H18v12h-6V15zm18 0h6l-6 9h6l-7 9h-5l6-9h-6l6-9z" fill="white" />
      </svg>
      <span className="font-semibold tracking-tight">FD Ryze</span>
    </div>
  );
}

const NavBar = () => {
  useEffect(() => {
    // Add small shadow when scrolled
    const onScroll = () => {
      const el = document.getElementById("site-nav");
      if (!el) return;
      if (window.scrollY > 2) el.classList.add("shadow-sm");
      else el.classList.remove("shadow-sm");
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="site-nav" className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" aria-label="FD Ryze home" className="hover:opacity-90 transition-opacity">
          <LogoMark />
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a className="text-muted-foreground hover:text-foreground story-link" href={`#${s.id}`}>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:block">
            <Button variant="hero" size="sm">Request a Demo</Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
