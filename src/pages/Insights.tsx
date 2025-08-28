import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertTriangle, Lightbulb, Target, Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { useEffect, useState } from "react";

const Insights = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      if (e?.detail && typeof e.detail.collapsed === 'boolean') {
        setSidebarCollapsed(e.detail.collapsed);
      }
    };
    window.addEventListener('sidebar-collapsed' as any, handler as any);
    return () => window.removeEventListener('sidebar-collapsed' as any, handler as any);
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-[margin] duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        <Header />

        <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="glass rounded-3xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI Financial Insights
              </h1>
              <p className="text-muted-foreground mt-2">Personalized recommendations powered by machine learning</p>
            </div>
            <Button variant="premium" className="px-6">
              <Brain className="w-4 h-4 mr-2" />
              Generate New Insights
            </Button>
          </div>
        </div>

        {/* AI Score Dashboard */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full gradient-growth animate-spin-slow"></div>
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold">85</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">AI Health Score</h3>
                  <p className="text-sm text-muted-foreground">Financial wellness rating</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full gradient-premium animate-pulse"></div>
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold">92</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Investment IQ</h3>
                  <p className="text-sm text-muted-foreground">Portfolio optimization</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative w-24 h-24 mx-auto">
                  <div className="absolute inset-0 rounded-full gradient-risk animate-bounce"></div>
                  <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                    <span className="text-2xl font-bold">67</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Risk Tolerance</h3>
                  <p className="text-sm text-muted-foreground">Risk assessment score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actionable Insights */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-warning" />
                Smart Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  type: "High Priority",
                  icon: <AlertTriangle className="w-5 h-5 text-destructive" />,
                  title: "Increase Emergency Fund",
                  description: "Your emergency fund covers only 2.3 months of expenses. Aim for 6 months.",
                  action: "Add ₹85,000",
                  color: "gradient-risk"
                },
                {
                  type: "Medium Priority",
                  icon: <TrendingUp className="w-5 h-5 text-warning" />,
                  title: "Optimize SIP Amount",
                  description: "Increase your SIP by ₹2,000 to achieve 30% savings rate and reach goals faster.",
                  action: "Increase SIP",
                  color: "gradient-warning"
                },
                {
                  type: "Opportunity",
                  icon: <Target className="w-5 h-5 text-success" />,
                  title: "Tax Saving Opportunity",
                  description: "You can save ₹46,800 in taxes by investing in ELSS funds before March.",
                  action: "Invest Now",
                  color: "gradient-growth"
                }
              ].map((insight, index) => (
                <div key={index} className="glass rounded-xl p-4 hover:shadow-glow transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${insight.color} rounded-xl flex items-center justify-center`}>
                      {insight.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {insight.type}
                        </span>
                        <Button size="sm" variant="outline" className="text-xs">
                          {insight.action}
                        </Button>
                      </div>
                      <h4 className="font-semibold mb-1">{insight.title}</h4>
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-primary" />
                Market Intelligence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Market Sentiment Gauge */}
              <div className="text-center space-y-4">
                <div className="relative w-32 h-16 mx-auto overflow-hidden">
                  <div className="absolute inset-0 rounded-t-full border-8 border-muted"></div>
                  <div className="absolute inset-0 rounded-t-full border-8 border-t-success border-r-success border-l-transparent border-b-transparent transform rotate-45 animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-foreground rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-success">Bullish Market</h3>
                  <p className="text-sm text-muted-foreground">Current sentiment: 78% positive</p>
                </div>
              </div>

              {/* Market Insights */}
              <div className="space-y-4">
                {[
                  {
                    sector: "Technology",
                    trend: "↗️ Strong Growth",
                    recommendation: "Consider increasing tech allocation",
                    confidence: "95%"
                  },
                  {
                    sector: "Banking",
                    trend: "📈 Steady Rise",
                    recommendation: "Good time for banking stocks",
                    confidence: "87%"
                  },
                  {
                    sector: "Pharma",
                    trend: "⚡ Volatility",
                    recommendation: "Wait for better entry points",
                    confidence: "72%"
                  }
                ].map((market, index) => (
                  <div key={index} className="glass rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">{market.sector}</span>
                      <span className="text-sm text-primary">{market.confidence}</span>
                    </div>
                    <p className="text-sm mb-1">{market.trend}</p>
                    <p className="text-xs text-muted-foreground">{market.recommendation}</p>
                  </div>
                ))}
              </div>

              {/* AI Analysis */}
              <div className="glass rounded-xl p-4 bg-gradient-to-r from-primary/10 to-accent/10">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Analysis
                </h4>
                <p className="text-sm text-muted-foreground">
                  Based on your risk profile and market conditions, consider rebalancing your portfolio. 
                  The AI suggests moving 5% from bonds to equity mutual funds for better returns.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Goal Tracking */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Goal Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  goal: "House Down Payment",
                  target: "₹50,00,000",
                  current: "₹32,00,000",
                  progress: 64,
                  timeLeft: "18 months",
                  status: "On Track"
                },
                {
                  goal: "Child's Education",
                  target: "₹25,00,000",
                  current: "₹12,50,000",
                  progress: 50,
                  timeLeft: "8 years",
                  status: "Ahead"
                },
                {
                  goal: "Retirement Fund",
                  target: "₹2,00,00,000",
                  current: "₹45,00,000",
                  progress: 22.5,
                  timeLeft: "25 years",
                  status: "Behind"
                }
              ].map((goal, index) => (
                <div key={index} className="glass rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{goal.goal}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      goal.status === 'On Track' ? 'bg-success/10 text-success' :
                      goal.status === 'Ahead' ? 'bg-info/10 text-info' :
                      'bg-warning/10 text-warning'
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{goal.current}</span>
                      <span>{goal.target}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full gradient-growth rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{goal.progress}% complete</span>
                      <span>{goal.timeLeft} left</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Insights;