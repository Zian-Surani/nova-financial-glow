import { LineChart, TrendingUp, Calendar } from "lucide-react";

export function CashflowCard() {
  const forecastData = [
    { month: "Jan", predicted: 85000, actual: 87000 },
    { month: "Feb", predicted: 92000, actual: 89000 },
    { month: "Mar", predicted: 88000, actual: 91000 },
    { month: "Apr", predicted: 95000, actual: null },
    { month: "May", predicted: 98000, actual: null },
    { month: "Jun", predicted: 102000, actual: null },
  ];

  return (
    <div className="financial-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-info/10">
            <LineChart className="h-5 w-5 text-info" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Cashflow Forecast</h3>
            <p className="text-sm text-muted-foreground">Next 90 days prediction</p>
          </div>
        </div>
        <div className="status-info">
          <TrendingUp className="h-3 w-3 mr-1" />
          +15.2%
        </div>
      </div>

      {/* Chart Area */}
      <div className="chart-container mb-6">
        <div className="relative w-full h-40">
          <svg className="w-full h-full" viewBox="0 0 300 120">
            {/* Grid lines */}
            <defs>
              <pattern id="grid" width="50" height="24" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            
            {/* Uncertainty area */}
            <path
              d="M 0 80 Q 50 70 100 65 T 200 55 T 300 45 L 300 95 Q 250 105 200 100 T 100 95 T 0 105 Z"
              fill="hsl(200 100% 50%)"
              opacity="0.1"
            />
            
            {/* Actual line (past data) */}
            <path
              d="M 0 80 Q 25 75 50 70 Q 75 68 100 65"
              fill="none"
              stroke="hsl(142 76% 36%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            
            {/* Predicted line (future data) */}
            <path
              d="M 100 65 Q 125 62 150 58 Q 175 55 200 52 Q 225 50 250 48 Q 275 46 300 45"
              fill="none"
              stroke="hsl(200 100% 50%)"
              strokeWidth="3"
              strokeDasharray="5,5"
              strokeLinecap="round"
            />
            
            {/* Data points */}
            {forecastData.slice(0, 3).map((point, index) => (
              <circle
                key={index}
                cx={index * 50 + 25}
                cy={80 - (index * 5)}
                r="3"
                fill="hsl(142 76% 36%)"
              />
            ))}
            
            {forecastData.slice(3).map((point, index) => (
              <circle
                key={index + 3}
                cx={(index + 3) * 50 + 25}
                cy={65 - (index * 4)}
                r="3"
                fill="hsl(200 100% 50%)"
                opacity="0.7"
              />
            ))}
          </svg>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-success/5 rounded-lg border border-success/20">
          <p className="text-sm text-muted-foreground">Expected Income</p>
          <p className="font-bold text-success">₹1.02L</p>
          <p className="text-xs text-muted-foreground">Next month</p>
        </div>
        <div className="text-center p-3 bg-info/5 rounded-lg border border-info/20">
          <p className="text-sm text-muted-foreground">Confidence</p>
          <p className="font-bold text-info">87%</p>
          <p className="text-xs text-muted-foreground">Accuracy</p>
        </div>
        <div className="text-center p-3 bg-warning/5 rounded-lg border border-warning/20">
          <p className="text-sm text-muted-foreground">Risk Factor</p>
          <p className="font-bold text-warning">Low</p>
          <p className="text-xs text-muted-foreground">Volatility</p>
        </div>
      </div>

      {/* Forecast Details */}
      <div className="mt-4 p-3 bg-background/50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Next 90 Days Outlook</span>
        </div>
        <p className="text-sm text-muted-foreground">
          Based on your current spending patterns and income trends, we predict a steady 15.2% growth in your cashflow.
        </p>
      </div>
    </div>
  );
}