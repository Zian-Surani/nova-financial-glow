import { PieChart, TrendingUp, TrendingDown } from "lucide-react";

export function PortfolioCard() {
  const portfolioData = [
    { name: "Equities", value: 45, amount: "₹5.58L", color: "hsl(142 76% 36%)", trend: "+12.4%" },
    { name: "SIPs", value: 25, amount: "₹3.10L", color: "hsl(200 100% 50%)", trend: "+8.2%" },
    { name: "Crypto", value: 20, amount: "₹2.48L", color: "hsl(38 92% 50%)", trend: "-3.1%" },
    { name: "Loans", value: 10, amount: "₹1.24L", color: "hsl(0 84% 60%)", trend: "-0.5%" },
  ];

  const totalValue = "₹12.40L";

  return (
    <div className="financial-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <PieChart className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Portfolio Composition</h3>
            <p className="text-sm text-muted-foreground">Total Value: {totalValue}</p>
          </div>
        </div>
      </div>

      {/* Visual Representation */}
      <div className="chart-container mb-6">
        <div className="relative w-full h-48 flex items-center justify-center">
          {/* Simplified donut chart representation */}
          <div className="relative w-32 h-32">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18" cy="18" r="16"
                fill="none"
                className="stroke-current text-muted/20"
                strokeWidth="3"
              />
              {/* Equities - 45% */}
              <circle
                cx="18" cy="18" r="16"
                fill="none"
                stroke="hsl(142 76% 36%)"
                strokeWidth="3"
                strokeDasharray="45 55"
                strokeDashoffset="0"
              />
              {/* SIPs - 25% */}
              <circle
                cx="18" cy="18" r="16"
                fill="none"
                stroke="hsl(200 100% 50%)"
                strokeWidth="3"
                strokeDasharray="25 75"
                strokeDashoffset="-45"
              />
              {/* Crypto - 20% */}
              <circle
                cx="18" cy="18" r="16"
                fill="none"
                stroke="hsl(38 92% 50%)"
                strokeWidth="3"
                strokeDasharray="20 80"
                strokeDashoffset="-70"
              />
              {/* Loans - 10% */}
              <circle
                cx="18" cy="18" r="16"
                fill="none"
                stroke="hsl(0 84% 60%)"
                strokeWidth="3"
                strokeDasharray="10 90"
                strokeDashoffset="-90"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-lg font-bold">{totalValue}</div>
                <div className="text-xs text-muted-foreground">Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Breakdown */}
      <div className="space-y-3">
        {portfolioData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50">
            <div className="flex items-center space-x-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.value}% allocation</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-sm">{item.amount}</p>
              <div className={`flex items-center text-xs ${item.trend.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                {item.trend.startsWith('+') ? 
                  <TrendingUp className="h-3 w-3 mr-1" /> : 
                  <TrendingDown className="h-3 w-3 mr-1" />
                }
                {item.trend}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}