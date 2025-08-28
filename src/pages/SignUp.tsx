import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, ArrowLeft, Sparkles, Shield, CheckCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    bio: ''
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account Created Successfully!",
      description: "Welcome to FINEO. You're now ready to start your financial journey.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 gradient-premium rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 gradient-growth rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 min-h-screen flex">
     
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-lg space-y-8 animate-fade-in">
           
            <div className="flex items-center justify-between w-full">
              <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth hover:scale-105 transform">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to home
              </Link>
              <ThemeToggle />
            </div>

         
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-premium rounded-lg flex items-center justify-center animate-pulse">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">FINEO</span>
            </div>

         
            <Card className="glass border-0 shadow-xl hover:shadow-glow transition-smooth">
              <CardHeader className="space-y-1 pb-6">
                <CardTitle className="text-2xl font-bold">Create Account</CardTitle>
                <p className="text-muted-foreground">Start your financial journey with FINEO</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        type="text"
                        required
                        className="glass border-border/50 hover:border-primary/50 transition-smooth"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        required
                        className="glass border-border/50 hover:border-primary/50 transition-smooth"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="glass border-border/50 hover:border-primary/50 transition-smooth"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        required
                        className="glass border-border/50 hover:border-primary/50 transition-smooth pr-10"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">Use 8+ characters with a mix of letters, numbers, and symbols.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      required
                      className="glass border-border/50 hover:border-primary/50 transition-smooth"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    />
                    {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                      <p className="text-xs text-destructive">Passwords do not match.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">About You (optional)</Label>
                    <textarea
                      id="bio"
                      rows={4}
                      placeholder="Tell us a bit about your goals..."
                      className="w-full glass border border-border/50 rounded-md px-3 py-2 text-sm outline-none focus:border-primary/50 transition-smooth"
                      value={formData.bio}
                      onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    />
                    <p className="text-xs text-muted-foreground">This helps personalize your experience.</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="terms" className="text-sm text-muted-foreground">
                      I agree to the <a className="text-primary underline" href="#">Terms</a> and <a className="text-primary underline" href="#">Privacy Policy</a>.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!agreeTerms || !formData.password || formData.password !== formData.confirmPassword}
                    className="w-full glass bg-gradient-premium text-white font-semibold py-3 hover:scale-105 transform transition-all shadow-lg hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    Create Account
                  </Button>
                </form>

                <div className="text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link to="/login" className="text-primary hover:underline font-medium hover:scale-105 transform inline-block transition-all">
                    Sign in
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8">
          <div className="glass rounded-3xl p-8 max-w-md space-y-8 animate-fade-in delay-300">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 gradient-premium rounded-2xl flex items-center justify-center mx-auto animate-pulse">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Secure & Transparent</h3>
              <p className="text-muted-foreground">
                Your financial data is protected with bank-grade security and blockchain verification.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">AI-powered financial insights</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Transparent credit scoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Portfolio optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-success" />
                <span className="text-sm">Loan management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;