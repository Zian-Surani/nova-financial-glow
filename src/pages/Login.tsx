import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Github, ArrowLeft, Users, Sparkles } from "lucide-react";

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
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold">Arcana</span>
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

                <Link to="/dashboard">
                  <Button className="w-full gradient-premium text-white border-0 hover:opacity-90 py-6">
                    Sign in
                  </Button>
                </Link>

                <div className="space-y-4">
                  <p className="text-center text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <a href="#" className="text-primary hover:underline">
                      Sign up
                    </a>
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
          <Card className="glass border-0 shadow-2xl w-full max-w-md">
            <CardContent className="p-8 text-center space-y-6">
              <div className="w-24 h-24 gradient-premium rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">A</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">Welcome to Arcana</h2>
                <p className="text-white/80 leading-relaxed">
                  Arcana helps developers to build organized and well-coded dashboards full of beautiful and rich modules. Join us and start building your application today.
                </p>
                <p className="text-white/60">
                  More than 17k people joined us, it's your turn
                </p>
              </div>

              <Card className="glass border-border/20 bg-white/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-2">
                        Get your right job and right place apply now
                      </h3>
                      <p className="text-white/70 text-sm mb-4">
                        Be among the first founders to experience the easiest way to start and run a business.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent border-2 border-white flex items-center justify-center"
                      >
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    ))}
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