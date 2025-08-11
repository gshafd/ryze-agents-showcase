import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-background">
      <div className="container py-10 md:py-14 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 48 48" aria-hidden="true">
              <defs>
                <linearGradient id="gf" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="48" height="48" rx="12" fill="url(#gf)" />
              <path d="M12 15h14a3 3 0 110 6H18v12h-6V15zm18 0h6l-6 9h6l-7 9h-5l6-9h-6l6-9z" fill="white" />
            </svg>
            <span className="font-semibold">FD Ryze</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Showcasing autonomous agents transforming industries with responsible AI.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold mb-2">Contact</h3>
          <a href="mailto:hello@fulcrumdigital.com" className="story-link inline-flex items-center gap-2 text-sm">
            <Mail className="size-4" /> hello@fulcrumdigital.com
          </a>
          <div className="mt-4 flex gap-3">
            <a aria-label="LinkedIn" href="#" className="hover-scale text-muted-foreground hover:text-foreground"><Linkedin className="size-5" /></a>
            <a aria-label="Twitter" href="#" className="hover-scale text-muted-foreground hover:text-foreground"><Twitter className="size-5" /></a>
          </div>
        </div>
        <div className="flex md:justify-end items-start">
          <a href="#contact">
            <Button variant="hero" className="shadow-md">Request a Demo</Button>
          </a>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs text-muted-foreground">© {new Date().getFullYear()} FD Ryze. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
