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
                  <h1 className="text-3xl sm:text-4xl font-bold  ">
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

            {/* Dense Masonry to fill whitespace */}
            <div className="columns-1 md:columns-2 xl:columns-3 gap-x-6 [column-fill:balance]">
              {visibleWidgets.map((widget) => (
                <div key={widget.id} className="mb-6 animate-fade-in [break-inside:avoid]">
                  {widget.component}
                </div>
              ))}
            </div>

            
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PersonalDashboard;