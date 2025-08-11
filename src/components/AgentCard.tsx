import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Agent, industries } from "@/data/agents";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

type Props = { agent: Agent };

export const AgentCard = ({ agent }: Props) => {
  const Icon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;
  const industryMap = Object.fromEntries(industries.map((i) => [i.key, i.title]));

  return (
    <Link to={`/agents/${agent.slug}`} aria-label={`${agent.name} details`} className="block">
      <Card className="card-interactive group relative">
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="text-[10px] leading-none px-2 py-0.5 rounded-full">
            {industryMap[agent.industry] || agent.industry}
          </Badge>
        </div>
        <CardHeader className="flex flex-row items-center gap-3">
          {Icon ? (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 ring-1 ring-accent/30">
              <Icon className="size-5 text-primary" aria-hidden="true" />
            </div>
          ) : null}
          <CardTitle className="text-base md:text-lg font-semibold">
            {agent.name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {agent.description}
          </p>
          <div className="mt-4 h-1 w-full rounded bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20" />
        </CardContent>
      </Card>
    </Link>
  );
};
