import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { FairScoreCard } from "@/components/dashboard/FairScoreCard";
import { PortfolioCard } from "@/components/dashboard/PortfolioCard";
import { CashflowCard } from "@/components/dashboard/CashflowCard";
import { InsightsCard } from "@/components/dashboard/InsightsCard";
import { MandatesCard } from "@/components/dashboard/MandatesCard";
import { GamificationBadges } from "@/components/dashboard/GamificationBadges";
import { DashboardCustomizer } from "@/components/dashboard/DashboardCustomizer";
import { Footer } from "@/components/Footer";
import { Share2, Lock, Globe, Copy, Star, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Widget {
  id: string;
  title: string;
  type: 'metric' | 'chart' | 'list' | 'badge' | 'custom';
  size: 'small' | 'medium' | 'large';
  visible: boolean;
  order: number;
  description: string;
  component: React.ReactNode;
}

const PersonalDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const { toast } = useToast();

  const [widgets, setWidgets] = useState<Widget[]>([
    {
      id: 'fairscore',
      title: 'Fair Score',
      type: 'metric',
      size: 'medium',
      visible: true,
      order: 1,
      description: 'Your credit score and financial health rating',
      component: <FairScoreCard />
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      type: 'chart',
      size: 'medium',
      visible: true,
      order: 2,
      description: 'Asset allocation and portfolio performance overview',
      component: <PortfolioCard />
    },
    {
      id: 'cashflow',
      title: 'Cashflow',
      type: 'chart',
      size: 'medium',
      visible: true,
      order: 3,
      description: '90-day cashflow forecast and trends',
      component: <CashflowCard />
    },
    {
      id: 'badges',
      title: 'Achievements',
      type: 'badge',
      size: 'large',
      visible: true,
      order: 4,
      description: 'Financial achievement badges and progress',
      component: (
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Achievement Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GamificationBadges showProgress={false} layout="grid" />
          </CardContent>
        </Card>
      )
    },
    {
      id: 'insights',
      title: 'AI Insights',
      type: 'list',
      size: 'medium',
      visible: true,
      order: 5,
      description: 'AI-powered financial recommendations',
      component: <InsightsCard />
    },
    {
      id: 'mandates',
      title: 'Mandates',
      type: 'list',
      size: 'medium',
      visible: true,
      order: 6,
      description: 'EMI and recurring payment tracking',
      component: <MandatesCard />
    }
  ]);

  const handleToggleVisibility = (id: string) => {
    setWidgets(prev => prev.map(widget => 
      widget.id === id ? { ...widget, visible: !widget.visible } : widget
    ));
  };

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveLayout = () => {
    setIsEditing(false);
    toast({
      title: "Layout Saved",
      description: "Your dashboard layout has been saved successfully.",
    });
  };

  const handleShareProfile = () => {
    const publicUrl = `${window.location.origin}/public/user123`;
    navigator.clipboard.writeText(publicUrl);
    toast({
      title: "Profile Link Copied",
      description: "Your public profile link has been copied to clipboard.",
    });
  };

  const handleTogglePublic = () => {
    setIsPublic(!isPublic);
    toast({
      title: isPublic ? "Profile Made Private" : "Profile Made Public",
      description: isPublic 
        ? "Your profile is now private and cannot be shared with lenders."
        : "Your profile is now public and can be shared with lenders.",
    });
  };

  const visibleWidgets = widgets.filter(widget => widget.visible);

  // Listen for sidebar collapse/expand to adjust main margin on desktop
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
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="flex">
        <Sidebar />
        
        <div className={`flex-1 flex flex-col transition-[margin] duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
          <Header />
          
          <main className="flex-1 p-4 sm:p-6 space-y-6">
            {/* Profile Controls */}
            <div className="glass rounded-3xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Personal Dashboard
                  </h1>
                  <p className="text-muted-foreground mt-2">
                    Manage your financial profile and share with lenders
                  </p>
                </div>
                
                <div className="flex items-center flex-wrap gap-2 sm:gap-3">
                  <Badge 
                    variant={isPublic ? "success" : "secondary"}
                    className="px-3 py-1"
                  >
                    {isPublic ? (
                      <><Globe className="w-4 h-4 mr-1" /> Public</>
                    ) : (
                      <><Lock className="w-4 h-4 mr-1" /> Private</>
                    )}
                  </Badge>
                  
                  <Button
                    variant="outline"
                    onClick={handleTogglePublic}
                    className="glass"
                  >
                    {isPublic ? "Make Private" : "Make Public"}
                  </Button>
                  
                  <Button
                    variant="premium"
                    onClick={handleShareProfile}
                    disabled={!isPublic}
                    className="flex items-center space-x-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Share Profile</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Dashboard Customizer */}
            <DashboardCustomizer
              widgets={widgets}
              onToggleVisibility={handleToggleVisibility}
              onSaveLayout={handleSaveLayout}
            />

            {/* Core Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Core Features (MVP)</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {visibleWidgets.slice(0, 3).map((widget) => (
                  <div key={widget.id} className="animate-fade-in">
                    {widget.component}
                  </div>
                ))}
              </div>
            </div>

            {/* Extended Features */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold">Extended Features (Add-ons)</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {visibleWidgets.slice(3).map((widget) => (
                  <div key={widget.id} className="animate-fade-in">
                    {widget.component}
                  </div>
                ))}
              </div>
            </div>

            {/* Features List */}
            <Card className="glass border-0">
              <CardHeader>
                <CardTitle>Feature Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-primary">Core Features (MVP)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Unified Finance Dashboard</strong> - One place for net worth, asset allocation, cashflow, and upcoming mandates (EMIs, SIPs, rent)</li>
                      <li>• <strong>FairScore (Transparent Credit Score)</strong> - Score (300-900) based on behaviours like repayment, savings rate, debt-to-income, SIP regularity; shows factor breakdown</li>
                      <li>• <strong>Fairness Audit & Badge</strong> - Checks for gender fairness (Equal Opportunity, Statistical Parity). Shows ✅ badge if fair</li>
                      <li>• <strong>Blockchain Verification</strong> - Fairness report + scoring version hashed and logged on chain; "Verify on Blockchain" button for proof</li>
                      <li>• <strong>Financial Health Predictor</strong> - 90-day cashflow forecast with risk flags: "Cash may run out in 45 days," "12% chance of EMI default"</li>
                      <li>• <strong>Actionable Recommendations</strong> - Nudges like "Increase SIP by ₹2000," "Avoid new loan (DTI high)," "EMI due in 3 days"</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-accent">Extended Features (Add-ons)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Goal Tracking</strong> - User sets a goal (house, study abroad, emergency fund); dashboard shows progress bar (e.g., "62% to goal")</li>
                      <li>• <strong>Simulation ("What If")</strong> - Users can test actions like "Add ₹2000 to SIP" and see updated forecast/goal completion instantly</li>
                      <li>• <strong>Gamification</strong> - Badges and progress markers (e.g., "On-time payer," "Steady saver"), plus monthly improvement stats</li>
                      <li>• <strong>Data Privacy Toggle</strong> - Simple option: "Only I can see my score" or "Share with lender (export PDF)." Builds user trust</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;