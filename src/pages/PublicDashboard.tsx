import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FairScoreCard } from "@/components/dashboard/FairScoreCard";
import { PortfolioCard } from "@/components/dashboard/PortfolioCard";
import { GamificationBadges } from "@/components/dashboard/GamificationBadges";
import { Footer } from "@/components/Footer";
import { 
  Shield, 
  Award, 
  Calendar, 
  TrendingUp, 
  CheckCircle,
  Lock,
  Globe,
  Download,
  Share2,
  Verified
} from "lucide-react";

const PublicDashboard = () => {
  const { userId } = useParams();

  // Mock user data - in real app, this would be fetched based on userId
  const userData = {
    name: "Rahul Sharma",
    joinDate: "March 2024",
    lastUpdated: "2 hours ago",
    verified: true,
    fairScore: 785,
    creditHistory: "24 months",
    totalAssets: "₹12,45,678",
    riskProfile: "Moderate",
    achievements: 6
  };

  const handleDownloadReport = () => {
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '/api/download-credit-report';
    link.download = `${userData.name}-credit-report.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {/* Header */}
      <header className="glass border-b border-white/10 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold flex items-center">
                {userData.name}
                {userData.verified && (
                  <Verified className="w-5 h-5 ml-2 text-success" />
                )}
              </h1>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  Public Profile
                </span>
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Updated {userData.lastUpdated}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" onClick={handleShare} className="glass">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="premium" onClick={handleDownloadReport}>
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Profile Summary */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Credit Profile Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{userData.fairScore}</div>
                <div className="text-sm text-muted-foreground">Fair Score</div>
                <Badge variant="success" className="mt-1">Excellent</Badge>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userData.totalAssets}</div>
                <div className="text-sm text-muted-foreground">Total Assets</div>
                <Badge variant="outline" className="mt-1">Verified</Badge>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userData.creditHistory}</div>
                <div className="text-sm text-muted-foreground">Credit History</div>
                <Badge variant="info" className="mt-1">Stable</Badge>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{userData.achievements}</div>
                <div className="text-sm text-muted-foreground">Achievements</div>
                <Badge variant="warning" className="mt-1">Active</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid lg:grid-cols-2 gap-8">
          <FairScoreCard />
          <PortfolioCard />
        </div>

        {/* Achievement Badges */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              Financial Achievement Badges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GamificationBadges showProgress={false} layout="grid" />
          </CardContent>
        </Card>

        {/* Verification & Trust Indicators */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Verification & Trust
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl glass">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
                <h4 className="font-semibold">Identity Verified</h4>
                <p className="text-sm text-muted-foreground">KYC completed and verified</p>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <Shield className="w-8 h-8 text-info mx-auto mb-2" />
                <h4 className="font-semibold">Blockchain Secured</h4>
                <p className="text-sm text-muted-foreground">Score verified on blockchain</p>
              </div>
              <div className="text-center p-4 rounded-xl glass">
                <TrendingUp className="w-8 h-8 text-warning mx-auto mb-2" />
                <h4 className="font-semibold">Real-time Data</h4>
                <p className="text-sm text-muted-foreground">Live financial metrics</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lender Information */}
        <Card className="glass border-0 border-l-4 border-l-primary">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-info rounded-xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">For Lenders & Financial Institutions</h3>
                <p className="text-muted-foreground mb-4">
                  This public profile provides verified financial metrics and creditworthiness indicators. 
                  All data is anonymized and complies with privacy regulations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Real-time Verification</Badge>
                  <Badge variant="outline">Blockchain Certified</Badge>
                  <Badge variant="outline">Privacy Compliant</Badge>
                  <Badge variant="outline">Fraud Protected</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default PublicDashboard;