import { Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InsightsCard() {
  const insights = [
    {
      type: "savings",
      title: "Optimize SIP Allocation",
      description: "Increase your SIP by ₹2,000 to achieve 30% savings rate",
      impact: "+₹24,000 annual savings",
      priority: "high",
    },
    {
      type: "investment",
      title: "Rebalance Portfolio",
      description: "Consider reducing crypto exposure and increasing equity allocation",
      impact: "Reduce risk by 15%",
      priority: "medium",
    },
    {
      type: "credit",
      title: "Credit Utilization",
      description: "Keep utilization below 30% to maintain excellent credit score",
      impact: "Maintain 785+ score",
      priority: "low",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "border-warning/20 bg-warning/5 text-warning";
      case "medium": return "border-info/20 bg-info/5 text-info";
      case "low": return "border-success/20 bg-success/5 text-success";
      default: return "border-border/20 bg-background/5 text-muted-foreground";
    }
  };

  return (
    <div className="financial-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-accent/10">
            <Lightbulb className="h-5 w-5 text-accent" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">AI Insights</h3>
            <p className="text-sm text-muted-foreground">Personalized recommendations</p>
          </div>
        </div>
        <div className="flex items-center text-accent">
          <Sparkles className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">3 New</span>
        </div>
      </div>

      {/* Insights List */}
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index} className="group">
            <div className="p-4 rounded-xl border border-border/30 bg-background/30 hover:bg-background/50 transition-smooth">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-sm">{insight.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                      {insight.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{insight.description}</p>
                  <p className="text-sm font-medium text-foreground">{insight.impact}</p>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-smooth">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <Button variant="outline" className="w-full">
          View All Recommendations
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {/* AI Badge */}
      <div className="mt-4 flex items-center justify-center">
        <div className="px-3 py-1 rounded-full bg-gradient-premium text-white text-xs font-medium">
          <Sparkles className="h-3 w-3 mr-1 inline" />
          Powered by AI
        </div>
      </div>
    </div>
  );
}