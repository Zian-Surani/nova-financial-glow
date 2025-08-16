import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Users, Target, Award, Sparkles, Shield, TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = () => {
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
                About FINEO
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing personal finance with AI-powered insights, transparent credit scoring, 
              and blockchain-verified fairness to help you achieve your financial goals.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To democratize access to fair and transparent financial services through cutting-edge 
                technology, empowering individuals to make informed financial decisions and build 
                sustainable wealth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Transparent and fair credit scoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <span>AI-powered financial insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span>Blockchain-verified fairness</span>
                </div>
              </div>
            </div>
            <Card className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="w-16 h-16 gradient-premium rounded-2xl flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">
                      A world where everyone has equal access to fair financial services, 
                      powered by transparency and innovation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a passionate team of financial experts, technologists, and innovators 
                working to transform the future of finance.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "CEO & Co-Founder", image: "SC" },
                { name: "David Kumar", role: "CTO & Co-Founder", image: "DK" },
                { name: "Maria Rodriguez", role: "Head of AI", image: "MR" }
              ].map((member, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-20 h-20 gradient-premium rounded-full flex items-center justify-center mx-auto">
                      <span className="text-xl font-bold text-white">{member.image}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Transparency", description: "Clear, honest communication in all our services" },
                { icon: Users, title: "Fairness", description: "Equal opportunities for everyone, verified by blockchain" },
                { icon: TrendingUp, title: "Innovation", description: "Cutting-edge technology to solve real problems" },
                { icon: Award, title: "Excellence", description: "Highest standards in everything we do" }
              ].map((value, index) => (
                <Card key={index} className="glass border-0 hover:shadow-glow transition-smooth transform hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of users who trust FINEO for their financial management.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/login">
                <Button variant="outline" size="lg" className="hover:scale-105 transform transition-all">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="premium" size="lg" className="hover:scale-105 transform transition-all shadow-lg hover:shadow-glow">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;