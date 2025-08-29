import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign, IndianRupee, Euro, PoundSterling, JapaneseYen, PieChart, BarChart3, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { useEffect, useMemo, useRef, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { toast } = useToast();

  // Currency selection state
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY'>('INR');
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false); // legacy (not used with Radix)
  const currencyBtnRef = useRef<HTMLDivElement | null>(null); // legacy (not used with Radix)
  // INR per 1 unit of target currency. Accurate for USD as requested; others are placeholders – adjust as needed.
  const inrPerUnit: Record<'INR' | 'USD' | 'EUR' | 'GBP' | 'JPY', number> = {
    INR: 1,
    USD: 88.18, 
    EUR: 96.0,  
    GBP: 113.0, 
    JPY: 0.61,  
  };

  

  const currencyLocale: Record<typeof currency, { locale: string; code: string }> = {
    INR: { locale: 'en-IN', code: 'INR' },
    USD: { locale: 'en-US', code: 'USD' },
    EUR: { locale: 'de-DE', code: 'EUR' },
    GBP: { locale: 'en-GB', code: 'GBP' },
    JPY: { locale: 'ja-JP', code: 'JPY' },
  };

  const formatCurrency = (amountInINR: number) => {
    const { locale, code } = currencyLocale[currency];
    const converted = currency === 'INR' ? amountInINR : amountInINR / inrPerUnit[currency];
    return new Intl.NumberFormat(locale, { style: 'currency', currency: code, maximumFractionDigits: 2 }).format(converted);
  };

  const CurrencyIcon = () => {
    switch (currency) {
      case 'INR':
        return <IndianRupee className="w-6 h-6 text-white" />;
      case 'USD':
        return <DollarSign className="w-6 h-6 text-white" />;
      case 'EUR':
        return <Euro className="w-6 h-6 text-white" />;
      case 'GBP':
        return <PoundSterling className="w-6 h-6 text-white" />;
      case 'JPY':
        return <JapaneseYen className="w-6 h-6 text-white" />;
      default:
        return <DollarSign className="w-6 h-6 text-white" />;
    }
  };

  // Base figures in INR
  const baseTotalValue = 1245678; 
  const baseDaysGain = 8240; 
  const baseTotalDonut = 1240000; 

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
        
        <div className="glass rounded-3xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text t">
                Portfolio Management
              </h1>
              <p className="text-muted-foreground mt-2">Track and optimize your investment portfolio</p>
            </div>
            <Button
              variant="premium"
              className="px-6"
              onClick={() =>
                toast({ title: 'Rebalance Started', description: 'We will optimize your allocations based on your risk profile.' })
              }
            >
              Rebalance Portfolio
            </Button>
          </div>
        </div>

       
        <div className="grid md:grid-cols-4 gap-6 relative z-0">
          <Card className="glass border-0 hover:shadow-glow transition-smooth relative overflow-visible z-20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Value</p>
                  <p className="text-3xl font-bold">{formatCurrency(baseTotalValue)}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-success text-sm">+12.5%</span>
                  </div>
                </div>
                <div className="relative" ref={currencyBtnRef}>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        className="w-12 h-12 gradient-growth rounded-xl flex items-center justify-center hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/60"
                        aria-label="Change currency"
                      >
                        <CurrencyIcon />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      {(['INR', 'USD', 'EUR', 'GBP', 'JPY'] as const).map((c) => (
                        <DropdownMenuItem
                          key={c}
                          className={`flex items-center gap-2 ${c === currency ? 'font-semibold' : ''}`}
                          onSelect={() => {
                            setCurrency(c);
                            toast({ title: 'Currency Changed', description: `Showing amounts in ${c}.` });
                          }}
                        >
                          {c === 'INR' && <IndianRupee className="w-4 h-4" />} 
                          {c === 'USD' && <DollarSign className="w-4 h-4" />} 
                          {c === 'EUR' && <Euro className="w-4 h-4" />} 
                          {c === 'GBP' && <PoundSterling className="w-4 h-4" />} 
                          {c === 'JPY' && <JapaneseYen className="w-4 h-4" />} 
                          <span>{c}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Day's Gain</p>
                  <p className="text-3xl font-bold text-success">{formatCurrency(baseDaysGain)}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <span className="text-success text-sm">+2.1%</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-success rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Positions</p>
                  <p className="text-3xl font-bold">47</p>
                  <div className="flex items-center mt-2">
                    <Activity className="w-4 h-4 text-info mr-1" />
                    <span className="text-info text-sm">Active</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0 hover:shadow-glow transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Risk Score</p>
                  <p className="text-3xl font-bold">7.2</p>
                  <div className="flex items-center mt-2">
                    <span className="text-warning text-sm">Moderate</span>
                  </div>
                </div>
                <div className="w-12 h-12 gradient-warning rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio Allocation */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="w-5 h-5 mr-2" />
                Asset Allocation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Animated pie chart representation */}
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 rounded-full gradient-growth opacity-80 animate-pulse"></div>
                  <div className="absolute inset-4 rounded-full gradient-premium opacity-70 animate-pulse delay-500"></div>
                  <div className="absolute inset-8 rounded-full gradient-risk opacity-60 animate-pulse delay-1000"></div>
                  <div className="absolute inset-12 rounded-full bg-background flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{formatCurrency(baseTotalDonut)}</p>
                      <p className="text-sm text-muted-foreground">Total</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { name: "Equity Mutual Funds", value: "45%", amount: "₹5.6L", color: "gradient-growth" },
                    { name: "Direct Stocks", value: "25%", amount: "₹3.1L", color: "gradient-premium" },
                    { name: "Bonds & FDs", value: "20%", amount: "₹2.5L", color: "gradient-neutral" },
                    { name: "Crypto", value: "10%", amount: "₹1.2L", color: "gradient-risk" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.amount}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Performance Chart
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Animated performance bars */}
                <div className="space-y-4">
                  {[
                    { period: "1D", value: "+2.1%", width: "85%", color: "gradient-growth" },
                    { period: "1W", value: "+5.7%", width: "92%", color: "gradient-growth" },
                    { period: "1M", value: "+12.3%", width: "95%", color: "gradient-growth" },
                    { period: "3M", value: "-3.2%", width: "45%", color: "gradient-risk" },
                    { period: "6M", value: "+18.9%", width: "98%", color: "gradient-growth" },
                    { period: "1Y", value: "+24.5%", width: "100%", color: "gradient-growth" }
                  ].map((item, index) => (
                    <div key={item.period} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.period}</span>
                        <span className={item.value.startsWith('+') ? 'text-success' : 'text-destructive'}>
                          {item.value}
                        </span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out animate-pulse`}
                          style={{ 
                            width: item.width,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Holdings */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Top Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "HDFC Bank", symbol: "HDFCBANK", price: "₹1,642", change: "+2.1%", holdings: "125 shares", value: "₹2,05,250" },
                { name: "Reliance Industries", symbol: "RELIANCE", price: "₹2,456", change: "+1.8%", holdings: "80 shares", value: "₹1,96,480" },
                { name: "TCS", symbol: "TCS", price: "₹3,789", change: "+0.9%", holdings: "50 shares", value: "₹1,89,450" },
                { name: "Infosys", symbol: "INFY", price: "₹1,623", change: "-0.5%", holdings: "95 shares", value: "₹1,54,185" }
              ].map((stock) => (
                <div key={stock.symbol} className="glass rounded-xl p-4 hover:shadow-glow transition-smooth">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 gradient-premium rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{stock.symbol.slice(0, 2)}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">{stock.name}</h3>
                        <p className="text-sm text-muted-foreground">{stock.symbol}</p>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="font-semibold">{stock.price}</p>
                      <p className={`text-sm ${stock.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                        {stock.change}
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold">{stock.value}</p>
                      <p className="text-sm text-muted-foreground">{stock.holdings}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;