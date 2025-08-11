import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { agents, industries } from "@/data/agents";
import { AgentCard } from "@/components/AgentCard";
import QuickAccessGrid from "@/components/QuickAccessGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <main>
        <QuickAccessGrid />
        {industries.map((ind) => {
          const list = agents.filter((a) => a.industry === ind.key);
          return (
            <section id={ind.anchor} key={ind.key} className="scroll-mt-24 border-t section-surface">
              <div className="container py-12 md:py-16">
                <h2 className="heading-display text-2xl md:text-3xl font-bold mb-6">{ind.title}</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {list.map((agent) => (
                    <AgentCard key={agent.slug} agent={agent} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
