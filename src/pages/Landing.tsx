import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, TrendingUp, Zap } from "lucide-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-premium rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 gradient-growth rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 gradient-risk rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="glass rounded-2xl p-4 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                FINEO
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">Home</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">Personal</a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-smooth">Business</a>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" className="text-foreground">
                  Log in
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="premium" className="px-6">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* 3D Coins Animation */}
          <div className="relative mb-12 flex justify-center">
            <div className="relative">
              {/* Primary coin */}
              <div className="w-32 h-32 rounded-full gradient-premium shadow-glow animate-bounce flex items-center justify-center transform rotate-12">
                <span className="text-white text-2xl font-bold">₹</span>
              </div>
              
              {/* Secondary coins */}
              <div className="absolute -top-4 -left-8 w-24 h-24 rounded-full gradient-growth shadow-md animate-pulse flex items-center justify-center transform -rotate-12">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              <div className="absolute -bottom-2 -right-6 w-20 h-20 rounded-full gradient-risk shadow-md animate-pulse delay-500 flex items-center justify-center transform rotate-45">
                <Shield className="w-5 h-5 text-white" />
              </div>
              
              <div className="absolute top-8 right-12 w-16 h-16 rounded-full gradient-neutral shadow-sm animate-pulse delay-1000 flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                A new era of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                personal finance
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              World's most advanced digital clinic to help you live longer, prevent disease, and feel your best
            </p>
          </div>

          <div className="flex justify-center">
            <Link to="/dashboard">
              <Button 
                variant="premium" 
                size="lg" 
                className="px-12 py-6 text-lg font-semibold group"
              >
                Join waitlist
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="glass rounded-3xl p-8 hover:shadow-glow transition-smooth group">
            <div className="w-12 h-12 gradient-growth rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Investing</h3>
            <p className="text-muted-foreground">AI-powered portfolio management with real-time insights and automated rebalancing.</p>
          </div>

          <div className="glass rounded-3xl p-8 hover:shadow-glow transition-smooth group">
            <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Secure Banking</h3>
            <p className="text-muted-foreground">Bank-grade security with biometric authentication and blockchain verification.</p>
          </div>

          <div className="glass rounded-3xl p-8 hover:shadow-glow transition-smooth group">
            <div className="w-12 h-12 gradient-risk rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Instant Transfers</h3>
            <p className="text-muted-foreground">Lightning-fast money transfers with zero fees and real-time notifications.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;