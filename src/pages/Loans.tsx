import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Home, Car, GraduationCap, Building, Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { useEffect, useState } from "react";

const Loans = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className={`flex-1 flex flex-col transition-[margin] duration-300 ${sidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        <Header />
        <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br from-background via-primary/5 to-accent/10">
          <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
        {/* Header */}
        <div className="glass rounded-3xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Loan Management
              </h1>
              <p className="text-muted-foreground mt-2">Track, manage, and optimize your loan portfolio</p>
            </div>
            <Button variant="premium" className="px-6">
              <Calculator className="w-4 h-4 mr-2" />
              Loan Calculator
            </Button>
          </div>
        </div>

        {/* Loan Overview */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Outstanding</p>
                  <p className="text-3xl font-bold">₹45,67,890</p>
                  <div className="flex items-center mt-2">
                    <span className="text-warning text-sm">4 Active Loans</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-warning rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly EMI</p>
                  <p className="text-3xl font-bold">₹32,450</p>
                  <div className="flex items-center mt-2">
                    <span className="text-info text-sm">Next: 15th Jan</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-info rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Interest Saved</p>
                  <p className="text-3xl font-bold text-success">₹2,15,670</p>
                  <div className="flex items-center mt-2">
                    <span className="text-success text-sm">This Year</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credit Score</p>
                  <p className="text-3xl font-bold">785</p>
                  <div className="flex items-center mt-2">
                    <span className="text-success text-sm">Excellent</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Loans */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  type: "Home Loan",
                  bank: "HDFC Bank",
                  icon: <Home className="w-6 h-6 text-white" />,
                  principal: "₹35,00,000",
                  outstanding: "₹28,50,000",
                  emi: "₹24,560",
                  rate: "8.5%",
                  tenure: "15 years",
                  remaining: "12 years",
                  progress: 18.5,
                  color: "gradient-growth"
                },
                {
                  type: "Car Loan",
                  bank: "ICICI Bank",
                  icon: <Car className="w-6 h-6 text-white" />,
                  principal: "₹8,50,000",
                  outstanding: "₹5,20,000",
                  emi: "₹18,900",
                  rate: "9.2%",
                  tenure: "5 years",
                  remaining: "2.5 years",
                  progress: 38.8,
                  color: "gradient-premium"
                },
                {
                  type: "Personal Loan",
                  bank: "Axis Bank",
                  icon: <CreditCard className="w-6 h-6 text-white" />,
                  principal: "₹5,00,000",
                  outstanding: "₹3,25,000",
                  emi: "₹12,450",
                  rate: "12.5%",
                  tenure: "3 years",
                  remaining: "1.8 years",
                  progress: 35.0,
                  color: "gradient-warning"
                },
                {
                  type: "Education Loan",
                  bank: "SBI",
                  icon: <GraduationCap className="w-6 h-6 text-white" />,
                  principal: "₹12,00,000",
                  outstanding: "₹8,72,890",
                  emi: "₹15,200",
                  rate: "7.8%",
                  tenure: "10 years",
                  remaining: "6.2 years",
                  progress: 27.3,
                  color: "gradient-info"
                }
              ].map((loan, index) => (
                <div key={index} className="glass rounded-xl p-6 hover:shadow-glow transition-smooth">
                  <div className="grid lg:grid-cols-5 gap-6 items-center">
                    {/* Loan Info */}
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${loan.color} rounded-xl flex items-center justify-center`}>
                        {loan.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{loan.type}</h3>
                        <p className="text-sm text-muted-foreground">{loan.bank}</p>
                      </div>
                    </div>

                    {/* Amounts */}
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Outstanding</p>
                      <p className="font-semibold">{loan.outstanding}</p>
                      <p className="text-xs text-muted-foreground">of {loan.principal}</p>
                    </div>

                    {/* EMI & Rate */}
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Monthly EMI</p>
                      <p className="font-semibold">{loan.emi}</p>
                      <p className="text-xs text-muted-foreground">@ {loan.rate}</p>
                    </div>

                    {/* Progress */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{loan.progress}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${loan.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${loan.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground">{loan.remaining} remaining</p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col space-y-2">
                      <Button size="sm" variant="outline">
                        Pay Extra
                      </Button>
                      <Button size="sm" variant="ghost" className="text-xs">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Loan Opportunities */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Prepayment Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  loan: "Personal Loan",
                  currentEmi: "₹12,450",
                  extraPayment: "₹50,000",
                  newTenure: "1.2 years",
                  savings: "₹45,670"
                },
                {
                  loan: "Car Loan",
                  currentEmi: "₹18,900",
                  extraPayment: "₹75,000",
                  newTenure: "1.8 years",
                  savings: "₹32,890"
                }
              ].map((opportunity, index) => (
                <div key={index} className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold">{opportunity.loan}</h4>
                    <Button size="sm" variant="success">
                      Pay ₹{opportunity.extraPayment}
                    </Button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Interest Savings</p>
                      <p className="font-semibold text-success">₹{opportunity.savings}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">New Tenure</p>
                      <p className="font-semibold">{opportunity.newTenure}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle>Loan Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="glass rounded-xl p-4 bg-gradient-to-r from-success/10 to-success/5">
                <h4 className="font-semibold text-success mb-2">Top-up Loan Available</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Based on your excellent payment history, you're eligible for a home loan top-up at 8.2%
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Up to ₹15,00,000</span>
                  <Button size="sm" variant="success">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="glass rounded-xl p-4 bg-gradient-to-r from-info/10 to-info/5">
                <h4 className="font-semibold text-info mb-2">Balance Transfer Option</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Transfer your personal loan to get 2% lower interest rate and save ₹78,000
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Save ₹78,000</span>
                  <Button size="sm" variant="info">
                    Compare
                  </Button>
                </div>
              </div>

              <div className="glass rounded-xl p-4 bg-gradient-to-r from-warning/10 to-warning/5">
                <h4 className="font-semibold text-warning mb-2">Credit Card Upgrade</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Upgrade to premium card with 5% cashback and higher credit limit
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">₹5,00,000 limit</span>
                  <Button size="sm" variant="warning">
                    Upgrade
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Loans;