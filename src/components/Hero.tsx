import heroBg from "@/assets/hero-tech-bg.png";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden">
      <Helmet>
        <title>FD Ryze Autonomous Agents | TechXchange 2025</title>
        <meta name="description" content="Explore FD Ryze Autonomous Agents — a clean, minimal tech showcase at TechXchange 2025. Insurance, Finance, Higher Education, E‑Commerce, Cybersecurity, and more." />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      <img src={heroBg} alt="Abstract AI network background in purple and teal" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="eager" />
      <div className="relative container pt-20 md:pt-28 pb-6 md:pb-8">
        <div className="mx-auto max-w-4xl text-center animate-fade-in">
          <h1 className="heading-display text-4xl md:text-6xl font-extrabold text-gradient-primary">
            FD Ryze Autonomous Agents
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            TechXchange 2025: Emerging Tech in the Intelligence Economy
          </p>
          <p className="mt-1 text-sm md:text-base text-muted-foreground">September 4th, 2025, NYC</p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#insurance"><Button variant="hero">Explore Agents</Button></a>
            <a href="#contact"><Button variant="outline">Request a Demo</Button></a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
