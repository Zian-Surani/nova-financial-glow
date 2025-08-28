import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, ArrowLeft, Users, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-premium rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 gradient-growth rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
        {/* Left Side - Login Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-8">
            {/* Back to Home */}
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth hover:scale-105 transform">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <ThemeToggle />
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FINEO</span>
            </div>

            {/* Login Card */}
            <Card className="glass border-0 shadow-xl">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@doe@gmail.com"
                      className="glass border-border/50 focus:border-primary/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••"
                        className="glass border-border/50 focus:border-primary/50 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-auto p-1 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4 text-muted-foreground" />
                        ) : (
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="remember" className="rounded" />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      Remember me
                    </Label>
                  </div>
                </div>

                <Link to="/personal">
                  <Button className="w-full gradient-premium text-white border-0 hover:opacity-90 hover:scale-105 transform transition-all py-6 shadow-lg hover:shadow-glow">
                    Sign in
                  </Button>
                </Link>

                <div className="space-y-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-primary hover:underline">
                      Sign up
                    </Link>
                  </p>
                  <p className="text-center">
                    <a href="#" className="text-sm text-primary hover:underline">
                      Forgot Password
                    </a>
                  </p>
                </div>

                {/* Social Login */}
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" className="glass border-border/50">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </Button>
                  <Button variant="outline" className="glass border-border/50">
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="glass border-border/50">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side - Welcome Card */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8">
          <Card className="glass border-0 shadow-2xl w-full max-w-md animate-fade-in">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-24 h-24 gradient-premium rounded-2xl flex items-center justify-center mx-auto mb-6 animate-bounce">
                <span className="text-white text-3xl font-bold">F</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Welcome to FINEO</h2>
                <p className="text-muted-foreground leading-relaxed">
                  FINEO empowers you with AI-driven financial insights, portfolio tracking, and secure blockchain verification. 
                  Transform your financial future with intelligent wealth management.
                </p>
                <p className="text-muted-foreground/80">
                  Join thousands of users building wealth smarter
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="glass rounded-xl p-4 hover:scale-110 transform transition-all">
                  <TrendingUp className="w-8 h-8 gradient-growth rounded-lg p-1 mx-auto mb-2" />
                  <p className="text-xs font-medium">Smart Investing</p>
                </div>
                <div className="glass rounded-xl p-4 hover:scale-110 transform transition-all">
                  <Shield className="w-8 h-8 gradient-premium rounded-lg p-1 mx-auto mb-2" />
                  <p className="text-xs font-medium">Secure Banking</p>
                </div>
                <div className="glass rounded-xl p-4 hover:scale-110 transform transition-all">
                  <Zap className="w-8 h-8 gradient-risk rounded-lg p-1 mx-auto mb-2" />
                  <p className="text-xs font-medium">Real-time Analytics</p>
                </div>
              </div>

              <Card className="glass border-border/20 bg-card/50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-foreground font-semibold mb-2">
                        Start Your Wealth Journey Today
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Join the future of personal finance with AI-powered insights and blockchain security.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex -space-x-2 justify-center">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-background flex items-center justify-center hover:scale-110 transform transition-all"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-bold">
                      +5K
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;