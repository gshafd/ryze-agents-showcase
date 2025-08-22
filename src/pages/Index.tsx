import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { agents, industries } from "@/data/agents";
import { AgentCard } from "@/components/AgentCard";
import QuickAccessGrid from "@/components/QuickAccessGrid";
import * as Icons from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <Hero />
      <main>
        <QuickAccessGrid />
        {industries.map((ind) => {
          const list = agents.filter((a) => a.industry === ind.key);
          
          // Pipeline counts for each industry
          const pipelineCounts = {
            "Insurance": 10,
            "Finance": 7,
            "E-Commerce": 6,
            "Higher Education": 5,
            "Manufacturing-Retail-Logistics": 2
          };
          
          const totalPipeline = pipelineCounts[ind.key] || 0;
          const inProgressCount = Math.max(0, totalPipeline - list.length);
          
          return (
            <section id={ind.anchor} key={ind.key} className="scroll-mt-24 border-t section-surface">
              <div className="container py-12 md:py-16">
                {/* Industry Header Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <h2 className="heading-display text-2xl md:text-3xl font-bold">{ind.title}</h2>
                    <div className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30">
                      <span className="text-sm font-medium text-accent-foreground">{totalPipeline} in pipeline</span>
                    </div>
                  </div>
                  
                  {/* Floating Agent Icons Tab */}
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50">
                    {list.map((agent) => {
                      const Icon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;
                      return (
                        <div key={agent.slug} className="group relative">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                            {Icon && <Icon className="size-4 text-primary" />}
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {agent.name} • Active
                          </div>
                        </div>
                      );
                    })}
                    {Array.from({ length: inProgressCount }, (_, i) => (
                      <div key={`progress-${i}`} className="group relative">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted border-2 border-dashed border-muted-foreground/30">
                          <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                        </div>
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                          Agent {i + 1} • In Progress
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Active Agents Section */}
                {list.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4 text-foreground">Active Agents</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                      {list.map((agent) => (
                        <AgentCard key={agent.slug} agent={agent} />
                      ))}
                    </div>
                  </div>
                )}

                {/* In Progress Section */}
                {inProgressCount > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-foreground">In Progress</h3>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                      {Array.from({ length: inProgressCount }, (_, i) => (
                        <div key={`progress-card-${i}`} className="p-4 rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                              <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
                            </div>
                            <div className="text-sm font-medium text-muted-foreground">Agent {i + 1}</div>
                          </div>
                          <div className="text-xs text-muted-foreground/70">In development pipeline</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
