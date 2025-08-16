import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, ExternalLink, Download, Sparkles, Award, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Press = () => {
  const pressReleases = [
    {
      title: "FINEO Raises $50M Series B to Revolutionize Credit Scoring",
      date: "March 15, 2024",
      category: "Funding",
      excerpt: "Leading fintech platform secures major funding round to expand AI-powered financial services and blockchain verification technology.",
      readTime: "3 min read"
    },
    {
      title: "FINEO Launches Industry-First Blockchain-Verified Fair Credit Scoring",
      date: "February 8, 2024",
      category: "Product",
      excerpt: "New transparency features allow users to verify credit scoring fairness through blockchain technology, setting new industry standards.",
      readTime: "4 min read"
    },
    {
      title: "FINEO Partners with Major Banks to Promote Financial Inclusion",
      date: "January 22, 2024",
      category: "Partnership",
      excerpt: "Strategic partnerships aim to provide fair lending opportunities to underserved communities across India.",
      readTime: "2 min read"
    },
    {
      title: "FINEO Wins 'Best Fintech Innovation' at FinTech Awards 2024",
      date: "December 15, 2023",
      category: "Award",
      excerpt: "Recognition for pioneering work in transparent credit scoring and AI-powered financial insights.",
      readTime: "2 min read"
    },
    {
      title: "FINEO Reaches 1 Million Active Users Milestone",
      date: "November 30, 2023",
      category: "Milestone",
      excerpt: "Platform celebrates rapid growth as users embrace transparent, fair financial services.",
      readTime: "3 min read"
    }
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.4 MB" },
    { name: "Company Logo (SVG)", size: "145 KB" },
    { name: "Brand Guidelines", size: "8.2 MB" },
    { name: "Product Screenshots", size: "15.7 MB" },
    { name: "Executive Photos", size: "12.3 MB" },
    { name: "Company Fact Sheet", size: "890 KB" }
  ];

  const awards = [
    { title: "Best Fintech Innovation 2024", organization: "FinTech Awards" },
    { title: "AI Excellence in Finance", organization: "TechCrunch Disrupt" },
    { title: "Blockchain Innovation Award", organization: "Blockchain Summit" },
    { title: "Financial Inclusion Champion", organization: "RBI Innovation Hub" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-premium rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 gradient-growth rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <nav className="p-6">
          <div className="glass rounded-2xl p-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth hover:scale-105 transform">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to home
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    FINEO
                  </span>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-16 space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Press & Media
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Latest news, press releases, and media resources from FINEO's journey to revolutionize finance.
            </p>
          </div>

          {/* Press Releases */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Latest Press Releases</h2>
            </div>

            <div className="grid gap-6">
              {pressReleases.map((release, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">{release.category}</Badge>
                          <span className="text-sm text-muted-foreground">{release.readTime}</span>
                        </div>
                        <CardTitle className="text-xl leading-tight">{release.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {release.date}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{release.excerpt}</p>
                      <Button variant="outline" className="hover:scale-105 transform transition-all">
                        Read Full Release
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Awards Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Awards & Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{award.title}</h3>
                        <p className="text-muted-foreground">{award.organization}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Kit */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Media Kit</h2>
              <p className="text-lg text-muted-foreground">
                Download logos, brand assets, and company information for media coverage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.size}</p>
                      </div>
                      <Button variant="outline" size="sm" className="hover:scale-105 transform transition-all">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="glass rounded-3xl p-8 animate-fade-in">
            <div className="text-center space-y-8">
              <h2 className="text-4xl font-bold">FINEO by the Numbers</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    1M+
                  </div>
                  <p className="text-muted-foreground">Active Users</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    $2B+
                  </div>
                  <p className="text-muted-foreground">Assets Under Management</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    98%
                  </div>
                  <p className="text-muted-foreground">Customer Satisfaction</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    50+
                  </div>
                  <p className="text-muted-foreground">Banking Partners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">Media Inquiries</h2>
            <p className="text-lg text-muted-foreground">
              For press inquiries, interviews, or additional information, please contact our media team.
            </p>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <strong>Email:</strong> press@fineo.com
              </p>
              <p className="text-muted-foreground">
                <strong>Phone:</strong> +91 1800-PRESS-01
              </p>
            </div>
            <Link to="/contact">
              <Button variant="premium" size="lg" className="hover:scale-105 transform transition-all shadow-lg hover:shadow-glow">
                Contact Media Team
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Press;