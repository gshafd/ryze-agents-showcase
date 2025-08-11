import { useParams, Link } from "react-router-dom";
import { agents } from "@/data/agents";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const AgentDetail = () => {
  const { slug } = useParams();
  const agent = agents.find((a) => a.slug === slug);

  if (!agent) {
    return (
      <div className="container py-24">
        <h1 className="text-2xl font-semibold">Agent not found</h1>
        <p className="mt-2 text-muted-foreground">Please return to the showcase.</p>
        <Link to="/" className="mt-6 inline-block"><Button>Back to Home</Button></Link>
      </div>
    );
  }

  return (
    <main className="min-h-[60vh] bg-background">
      <Helmet>
        <title>{agent.name} | FD Ryze Autonomous Agents</title>
        <meta name="description" content={agent.description} />
        <link rel="canonical" href={`/agents/${agent.slug}`} />
      </Helmet>
      <section className="container py-16 md:py-24">
        <p className="text-sm text-primary font-medium">{agent.industry}</p>
        <h1 className="heading-display text-3xl md:text-5xl font-bold mt-2">{agent.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{agent.description}</p>
        <div className="mt-8 flex gap-3">
          <Button variant="hero">Request a Demo</Button>
          <Link to="/" className="inline-flex"><Button variant="outline">Back to Showcase</Button></Link>
        </div>
      </section>
    </main>
  );
};

export default AgentDetail;
