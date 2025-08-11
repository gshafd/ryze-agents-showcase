import { agents, industries } from "@/data/agents";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const QuickAccessGrid = () => {
  const industryMap = Object.fromEntries(industries.map((i) => [i.key, i.title]));
  return (
    <section id="quick-access" className="scroll-mt-24 border-t section-surface">
      <div className="container py-10 md:py-14">
        <header className="mb-6 md:mb-8 text-center">
          <h2 className="heading-display text-2xl md:text-3xl font-bold">Quick Access</h2>
          <p className="text-sm text-muted-foreground">Jump directly to an agent</p>
        </header>
        <nav aria-label="Quick access agents">
          <div className="mx-auto max-w-5xl">
            <ul className="grid grid-cols-5 gap-6 justify-items-center">
              {agents.map((agent) => {
                const Icon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
                return (
                  <li key={agent.slug} className="animate-fade-in">
                    <Link
                      to={`/agents/${agent.slug}`}
                      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                      aria-label={`${agent.name} details`}
                    >
                        <div className="flex flex-col items-center rounded-lg border border-border bg-card/50 p-4 md:p-5 transition-transform duration-200 hover:scale-105 hover:ring-2 hover:ring-primary/40 hover:border-primary/40 shadow-sm hover:shadow-lg cursor-pointer">
                          <Badge variant="outline" className="mb-3 text-[10px] leading-none px-2 py-0.5 rounded-full">
                            {industryMap[agent.industry] || agent.industry}
                          </Badge>
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/30 transition-colors group-hover:bg-accent/30">
                            {Icon ? <Icon className="size-6 text-primary" aria-hidden /> : null}
                          </div>
                          <span className="mt-3 text-center text-sm font-semibold text-foreground">{agent.name}</span>
                        </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default QuickAccessGrid;
