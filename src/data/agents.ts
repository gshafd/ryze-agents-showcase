export type Agent = {
  slug: string;
  name: string;
  description: string;
  industry: string;
  icon: string; // lucide icon name
};

export const agents: Agent[] = [
  // Insurance
  {
    slug: "insurance-claims-autopilot",
    name: "Insurance Claims Autopilot",
    industry: "Insurance",
    icon: "ShieldCheck",
    description:
      "Autonomous claims adjudicator that processes unstructured damage data via computer vision, cross‑references policy matrices in milliseconds, and negotiates settlement terms with fraud‑detection algorithms—eliminating 85% of human touchpoints while maintaining empathetic escalation protocols for edge cases.",
  },
  {
    slug: "insurance-risk-underwriter",
    name: "Insurance Risk Underwriter",
    industry: "Insurance",
    icon: "ClipboardCheck",
    description:
      "Real‑time underwriting intelligence that ingests multi‑modal data streams to calculate dynamic risk scores, generate binding quotes in under 3 seconds, and self‑adjusts pricing models based on claim patterns, reducing loss ratios by 23% through predictive intervention.",
  },

  // Finance
  {
    slug: "customer-service-orchestrator",
    name: "Customer Service Orchestrator",
    industry: "Finance",
    icon: "Workflow",
    description:
      "Self‑healing banking operations platform that intercepts transaction anomalies before customer impact, orchestrates multi‑channel authentication flows, performs root‑cause analysis on systemic failures, and deploys corrective protocols autonomously.",
  },
  {
    slug: "investment-portfolio-optimizer",
    name: "Investment Portfolio Optimizer",
    industry: "Finance",
    icon: "LineChart",
    description:
      "Algorithmic investment strategist that constructs anti‑fragile portfolios by analyzing 10,000+ market variables per second, executing hedging maneuvers during volatility spikes, and rebalancing positions through proprietary quantum‑inspired optimization—delivering risk‑adjusted returns 40% above traditional robo‑advisors.",
  },

  // Higher Education
  {
    slug: "academic-document-navigator",
    name: "Academic Document Navigator",
    industry: "Higher Education",
    icon: "BookText",
    description:
      "Context‑aware document intelligence system that transforms educational repositories into conversational knowledge bases, extracting insights from nested folders, version histories, and metadata relationships—reducing information retrieval time from hours to seconds while maintaining compliance audit trails and access governance.",
  },

  // E‑Commerce
  {
    slug: "omnichannel-commerce-engine",
    name: "Omnichannel Commerce Engine",
    industry: "E-Commerce",
    icon: "ShoppingCart",
    description:
      "End‑to‑end order orchestration system that synchronizes inventory across multiple channels, predicts stockouts using demand signals, automates cross‑platform pricing strategies, and manages returns logistics—processing 1M+ SKUs while maintaining 99.9% accuracy in real‑time fulfillment promises.",
  },
  {
    slug: "search-by-intent",
    name: "Search by Intent",
    industry: "E-Commerce",
    icon: "Search",
    description:
      "An AI shopping assistant that understands natural language, engages users through follow‑up questions, and recommends tailored products—turning search into a personalized, cart‑ready experience.",
  },
  {
    slug: "seo-orchestrator",
    name: "SEO Orchestrator",
    industry: "E-Commerce",
    icon: "Globe",
    description:
      "An AI‑powered SEO agent for Shopify that monitors 200+ ranking factors, rewrites product descriptions using competitive gap analysis, adjusts meta structures based on algorithm updates, and deploys schema markup dynamically—achieving first‑page rankings for 78% of target keywords within 90 days.",
  },

  // Cybersecurity
  {
    slug: "cyber-threat-interceptor",
    name: "Cyber Threat Interceptor",
    industry: "Cybersecurity",
    icon: "Shield",
    description:
      "Zero‑trust security orchestrator that correlates anomalies across network, endpoint, and user behavior streams, deploys deception technology to trap advanced persistent threats, executes automated incident response playbooks in under 10 seconds, and patches vulnerabilities through self‑healing protocols—neutralizing 94% of threats before impact.",
  },

  // Manufacturing / Retail / Logistics
  {
    slug: "supply-chain-command-center",
    name: "Supply Chain Command Center",
    industry: "Manufacturing-Retail-Logistics",
    icon: "Truck",
    description:
      "AI logistics agent that monitors 1,000+ global nodes, predicts disruptions 48 hours early using geopolitical and weather signals, automates shipment rerouting—cutting logistics costs by 18% while ensuring 99% on‑time delivery.",
  },
];

export const industries: { key: string; title: string; anchor: string }[] = [
  { key: "Insurance", title: "Insurance", anchor: "insurance" },
  { key: "Finance", title: "Finance", anchor: "finance" },
  { key: "Higher Education", title: "Higher Education", anchor: "higher-education" },
  { key: "E-Commerce", title: "E-Commerce", anchor: "e-commerce" },
  { key: "Cybersecurity", title: "Cybersecurity", anchor: "cybersecurity" },
  { key: "Manufacturing-Retail-Logistics", title: "Manufacturing / Retail / Logistics", anchor: "manufacturing-retail-logistics" },
];
