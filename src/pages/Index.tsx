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
            "E-Commerce": 7,
            "Higher Education": 5,
            "Cybersecurity": 2,
            "Manufacturing-Retail-Logistics": 5
          };
          
          // Pipeline agent names with icons and descriptions
          const pipelineAgents = {
            "Insurance": [
              { name: "Fraud Analytics AI", icon: "AlertTriangle", description: "Detects anomalies across claims data in real time using multi-layer fraud models, reducing fraudulent payouts and safeguarding reserves." },
              { name: "Policy Advisor AI", icon: "FileText", description: "Provides policyholders with AI-driven guidance on coverage options, endorsements, and compliance in easy-to-understand language." },
              { name: "Customer Retention AI", icon: "Users", description: "Predicts churn by analyzing engagement and claim activity, triggering personalized retention campaigns to boost loyalty." },
              { name: "Risk Mitigation Forecaster", icon: "TrendingUp", description: "Uses predictive analytics to forecast future risk exposures and recommend mitigation strategies before losses occur." },
              { name: "Compliance Copilot", icon: "CheckCircle", description: "Continuously scans processes against regulatory standards (NAIC, state rules) and flags deviations for early correction." },
              { name: "Premium Optimizer AI", icon: "DollarSign", description: "Dynamically adjusts premium pricing models based on risk segmentation, customer profile, and real-time market trends." },
              { name: "Claim Fraud Sentinel", icon: "Eye", description: "Enhances fraud prevention by linking historical fraud cases to live claim data with pattern-matching intelligence." },
              { name: "Agent Productivity Booster", icon: "Zap", description: "Automates manual workflows for agents, offering task prioritization, documentation assistance, and smart client communication." }
            ],
            "Finance": [
              { name: "Automated Loan Underwriter", icon: "CreditCard", description: "Speeds up loan approvals by analyzing credit history, income documents, and market risk in seconds." },
              { name: "Credit Risk Evaluator", icon: "BarChart3", description: "Continuously assesses borrower risk using transaction history, alternative credit signals, and real-time updates." },
              { name: "Investment Portfolio Optimizer", icon: "PieChart", description: "Builds personalized portfolios by aligning risk appetite with market signals and predictive performance trends." },
              { name: "Regulatory Compliance Copilot", icon: "Scale", description: "Tracks evolving regulations (Basel III, Dodd-Frank, etc.) and ensures institution-wide compliance at all times." },
              { name: "Customer KYC Assistant", icon: "UserCheck", description: "Automates Know Your Customer checks, verifying IDs, documents, and AML compliance in milliseconds." },
              { name: "Wealth Advisory AI", icon: "TrendingUp", description: "Provides intelligent investment recommendations and financial planning insights tailored to each client's life goals." },
              { name: "Transaction Fraud Detector", icon: "Shield", description: "Monitors payments in real time, detecting fraudulent patterns before transactions are processed." }
            ],
            "E-Commerce": [
              { name: "Search by Intent", icon: "Search", description: "AI shopping assistant that understands natural language and recommends tailored products for personalized experiences." },
              { name: "Personalized Product Recommender", icon: "Target", description: "Analyzes browsing and purchase behavior to suggest hyper-relevant products, boosting conversions." },
              { name: "Conversational Shopping Assistant", icon: "MessageCircle", description: "Provides interactive product guidance and customer support via chat, mimicking a personal shopper." },
              { name: "Cart Recovery AI", icon: "ShoppingCart", description: "Identifies abandoned carts, predicts customer intent, and triggers personalized recovery campaigns." },
              { name: "Dynamic Pricing Optimizer", icon: "Tag", description: "Continuously recalibrates pricing models based on demand, competition, and inventory levels." },
              { name: "Inventory Forecasting Agent", icon: "Package", description: "Predicts inventory needs using seasonal patterns, sales velocity, and market signals to reduce stockouts." },
              { name: "Post-Purchase Engagement AI", icon: "Heart", description: "Improves retention by personalizing after-sales communications, loyalty programs, and upsell opportunities." }
            ],
            "Higher Education": [
              { name: "Student Enrollment Advisor", icon: "GraduationCap", description: "Helps prospective students navigate admissions, requirements, and deadlines with personalized guidance." },
              { name: "Financial Aid Navigator", icon: "Calculator", description: "Simplifies FAFSA and financial aid applications with step-by-step support and eligibility insights." },
              { name: "Academic Success Coach", icon: "BookOpen", description: "Monitors student performance and provides proactive nudges to improve grades and retention." },
              { name: "Research Summarizer AI", icon: "Search", description: "Automates literature reviews and condenses academic papers into key findings for faster research." },
              { name: "Alumni Engagement Agent", icon: "Network", description: "Re-engages alumni networks with tailored opportunities for mentoring, events, and fundraising." }
            ],
            "Cybersecurity": [
              { name: "Threat Detection Sentinel", icon: "ShieldAlert", description: "Detects real-time security threats across endpoints, networks, and cloud environments using anomaly detection." },
              { name: "Compliance Monitoring AI", icon: "ShieldCheck", description: "Tracks adherence to cybersecurity standards (NIST, ISO, HIPAA) and flags compliance risks instantly." }
            ],
            "Manufacturing-Retail-Logistics": [
              { name: "Route Optimization AI", icon: "Route", description: "Calculates the most efficient delivery routes in real time, reducing costs and improving delivery SLAs." },
              { name: "Supply Chain Risk Forecaster", icon: "AlertCircle", description: "Anticipates supply chain disruptions using global data on weather, ports, and vendor performance." },
              { name: "Inventory Tracking Copilot", icon: "Scan", description: "Tracks goods across warehouses and transit, providing visibility into stock levels and movement." },
              { name: "Delivery ETA Predictor", icon: "Clock", description: "Improves customer experience by forecasting accurate delivery timelines with real-time data." },
              { name: "Fleet Maintenance Planner", icon: "Wrench", description: "Monitors vehicle health and predicts maintenance needs to prevent breakdowns and reduce downtime." }
            ]
          };
          
          const totalPipeline = pipelineCounts[ind.key] || 0;
          const pipelineAgentList = pipelineAgents[ind.key] || [];
          const inProgressCount = pipelineAgentList.length;
          
          return (
            <section id={ind.anchor} key={ind.key} className="scroll-mt-24 border-t section-surface">
              <div className="container py-12 md:py-16">
                {/* Industry Header Row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <h2 className="heading-display text-2xl md:text-3xl font-bold">{ind.title}</h2>
                    <div className="px-3 py-1 rounded-full bg-accent/40 border border-accent/50">
                      <span className="text-sm font-medium text-accent-foreground">{totalPipeline} in pipeline</span>
                    </div>
                  </div>
                  
                  {/* Floating Agent Icons Tab */}
                  <div className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-muted/50 border border-border/50">
                    {list.map((agent) => {
                      const Icon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;
                      return (
                        <div key={agent.slug} className="group relative">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors cursor-pointer">
                            {Icon && <Icon className="size-5 text-primary" />}
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {agent.name} • Active
                          </div>
                        </div>
                      );
                    })}
                    {pipelineAgentList.map((agent, i) => {
                      const PipelineIcon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;
                      return (
                        <div key={`progress-${i}`} className="group relative">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted/30 hover:bg-muted/40 transition-colors cursor-pointer border border-muted-foreground/20">
                            {PipelineIcon && <PipelineIcon className="size-5 text-muted-foreground/60" />}
                          </div>
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md border opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {agent.name} • In Progress
                          </div>
                        </div>
                      );
                    })}
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
                {pipelineAgentList.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold mb-4 text-foreground">In Progress</h3>
                    <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                      {pipelineAgentList.map((agent, i) => {
                        const PipelineIcon = (Icons as any)[agent.icon] as React.ComponentType<{ className?: string }>;
                        return (
                          <div key={`progress-card-${i}`} className="p-4 rounded-lg border border-dashed border-muted-foreground/30 bg-muted/20">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                                {PipelineIcon && <PipelineIcon className="size-4 text-muted-foreground/60" />}
                              </div>
                              <div className="text-sm font-medium text-muted-foreground">{agent.name}</div>
                            </div>
                            <div className="text-xs text-muted-foreground/70 leading-relaxed">{agent.description}</div>
                          </div>
                        );
                      })}
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
