import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Agent } from "@/data/agents";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";

type Props = { agent: Agent };

export const AgentCard = ({ agent }: Props) => {
  const Icon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;

  return (
    <Link to={`/agents/${agent.slug}`} aria-label={`${agent.name} details`} className="block">
      <Card className="card-interactive group">
        <CardHeader className="flex flex-row items-center gap-3">
          {Icon ? (
            <Icon className="size-6 text-primary" aria-hidden="true" />
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
