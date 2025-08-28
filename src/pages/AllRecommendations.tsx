import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, TrendingDown, Shield, AlertTriangle, Target, Lightbulb, Star, DollarSign, CreditCard, PiggyBank, Home } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

const AllRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Increase SIP Amount",
      description: "Consider increasing your SIP by ₹2,000 to reach your goal faster",
      category: "Investment",
      priority: "high",
      impact: "High",
      timeframe: "This month",
      icon: TrendingUp,
      color: "gradient-growth",
      potentialGain: "₹45,000 additional returns in 5 years",
      action: "Increase monthly SIP from ₹15,000 to ₹17,000"
    },
    {
      id: 2,
      title: "EMI Due Alert",
      description: "Your home loan EMI of ₹28,500 is due in 3 days",
      category: "Payment",
      priority: "urgent",
      impact: "Critical",
      timeframe: "3 days",
      icon: AlertTriangle,
      color: "gradient-risk",
      potentialGain: "Avoid late payment charges",
      action: "Set up auto-debit for timely payments"
    },
    {
      id: 3,
      title: "Credit Score Improvement",
      description: "Pay down credit card debt to improve your credit utilization ratio",
      category: "Credit",
      priority: "medium",
      impact: "Medium",
      timeframe: "Next 30 days",
      icon: Shield,
      color: "gradient-premium",
      potentialGain: "Potential 25+ point credit score increase",
      action: "Pay down ₹45,000 credit card balance"
    },
    {
      id: 4,
      title: "Emergency Fund Target",
      description: "Build your emergency fund to 6 months of expenses (₹3.2L)",
      category: "Savings",
      priority: "medium",
      impact: "High",
      timeframe: "6 months",
      icon: PiggyBank,
      color: "gradient-neutral",
      potentialGain: "Complete financial security",
      action: "Save additional ₹8,000 monthly"
    },
    {
      id: 5,
      title: "Tax Saving Opportunity",
      description: "Invest ₹85,000 more in ELSS to maximize 80C deduction",
      category: "Tax",
      priority: "high",
      impact: "High",
      timeframe: "Before March 31",
      icon: DollarSign,
      color: "gradient-growth",
      potentialGain: "Save up to ₹25,500 in taxes",
      action: "Invest remaining 80C limit in ELSS funds"
    },
    {
      id: 6,
      title: "Insurance Coverage Gap",
      description: "Your life insurance coverage is 40% below recommended amount",
      category: "Insurance",
      priority: "medium",
      impact: "High",
      timeframe: "Next month",
      icon: Shield,
      color: "gradient-risk",
      potentialGain: "Complete family protection",
      action: "Increase term insurance to ₹1.5 Cr"
    },
    {
      id: 7,
      title: "Investment Rebalancing",
      description: "Your equity allocation is 75%, consider rebalancing to 65%",
      category: "Portfolio",
      priority: "low",
      impact: "Medium",
      timeframe: "Next quarter",
      icon: Target,
      color: "gradient-premium",
      potentialGain: "Better risk-adjusted returns",
      action: "Move ₹2L from equity to debt funds"
    },
    {
      id: 8,
      title: "Home Loan Prepayment",
      description: "Use bonus to prepay ₹5L home loan and save ₹8.2L interest",
      category: "Loan",
      priority: "medium",
      impact: "High",
      timeframe: "After bonus",
      icon: Home,
      color: "gradient-growth",
      potentialGain: "Save ₹8.2L in interest payments",
      action: "Partial prepayment of ₹5,00,000"
    },
    {
      id: 9,
      title: "Credit Card Reward Optimization",
      description: "Switch to cashback card for grocery spends to earn 5% rewards",
      category: "Rewards",
      priority: "low",
      impact: "Low",
      timeframe: "Anytime",
      icon: CreditCard,
      color: "gradient-neutral",
      potentialGain: "Earn ₹2,400 additional rewards annually",
      action: "Apply for grocery cashback credit card"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'Urgent';
      case 'high': return 'High';
      case 'medium': return 'Medium';
      case 'low': return 'Low';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="flex">
        <div className="fixed left-0 top-0 h-full z-30">
          <Sidebar />
        </div>
        
        <div className="flex-1 md:ml-64 flex flex-col">
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-6">
            {/* Header */}
            <div className="glass rounded-3xl p-4 sm:p-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    All AI Recommendations
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Personalized financial advice based on your goals and current situation
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">{recommendations.length}</p>
                    <p className="text-sm text-muted-foreground">Total Recommendations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-500">
                      {recommendations.filter(r => r.priority === 'urgent' || r.priority === 'high').length}
                    </p>
                    <p className="text-sm text-muted-foreground">High Priority</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter Section */}
            <div className="glass rounded-2xl p-4 animate-fade-in">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
                <div className="flex space-x-2">
                  {['All', 'Investment', 'Payment', 'Credit', 'Savings', 'Tax', 'Insurance'].map((filter) => (
                    <Button key={filter} variant="outline" size="sm" className="hover:scale-105 transform transition-all">
                      {filter}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations Grid */}
            <div className="grid gap-6">
              {recommendations.map((rec, index) => (
                <Card 
                  key={rec.id} 
                  className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className={`w-14 h-14 ${rec.color} rounded-2xl flex items-center justify-center`}>
                          <rec.icon className="w-7 h-7 text-white" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <CardTitle className="text-xl">{rec.title}</CardTitle>
                            <Badge 
                              variant="outline" 
                              className={`${getPriorityColor(rec.priority)} text-white border-0`}
                            >
                              {getPriorityText(rec.priority)}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{rec.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <Badge variant="secondary">{rec.category}</Badge>
                            <span className="text-muted-foreground">Impact: {rec.impact}</span>
                            <span className="text-muted-foreground">Timeline: {rec.timeframe}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="premium" className="hover:scale-105 transform transition-all shadow-lg hover:shadow-glow">
                        Take Action
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="glass rounded-xl p-4">
                          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Potential Benefit</h4>
                          <p className="text-success font-medium">{rec.potentialGain}</p>
                        </div>
                        <div className="glass rounded-xl p-4">
                          <h4 className="font-semibold text-sm text-muted-foreground mb-2">Recommended Action</h4>
                          <p className="text-primary font-medium">{rec.action}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          This recommendation is based on your financial profile and goals
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Summary Card */}
            <Card className="glass border-0 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                  Recommendation Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-success">₹78.7L</p>
                    <p className="text-sm text-muted-foreground">Potential Savings if All Actions Taken</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-primary">85%</p>
                    <p className="text-sm text-muted-foreground">Goal Achievement Acceleration</p>
                  </div>
                  <div className="text-center space-y-2">
                    <p className="text-3xl font-bold text-accent">42</p>
                    <p className="text-sm text-muted-foreground">Credit Score Improvement Points</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllRecommendations;