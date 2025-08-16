import { Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MandatesCard() {
  const mandates = [
    {
      id: 1,
      name: "HDFC Mutual Fund SIP",
      amount: "₹5,000",
      dueDate: "Mar 15",
      status: "upcoming",
      daysLeft: 3,
      type: "SIP"
    },
    {
      id: 2,
      name: "Home Loan EMI",
      amount: "₹25,000",
      dueDate: "Mar 20",
      status: "upcoming",
      daysLeft: 8,
      type: "EMI"
    },
    {
      id: 3,
      name: "Car Insurance Premium",
      amount: "₹12,500",
      dueDate: "Mar 12",
      status: "paid",
      daysLeft: 0,
      type: "Premium"
    },
    {
      id: 4,
      name: "Credit Card Payment",
      amount: "₹8,750",
      dueDate: "Mar 25",
      status: "upcoming",
      daysLeft: 13,
      type: "Payment"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid": return <CheckCircle className="h-4 w-4 text-success" />;
      case "upcoming": return <Clock className="h-4 w-4 text-info" />;
      case "overdue": return <AlertCircle className="h-4 w-4 text-destructive" />;
      default: return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "paid": return "border-success/20 bg-success/5";
      case "upcoming": return "border-info/20 bg-info/5";
      case "overdue": return "border-destructive/20 bg-destructive/5";
      default: return "border-border/20 bg-background/5";
    }
  };

  const upcomingMandates = mandates.filter(m => m.status === "upcoming");
  const totalUpcoming = upcomingMandates.reduce((sum, m) => sum + parseInt(m.amount.replace(/[₹,]/g, '')), 0);

  return (
    <div className="financial-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-warning/10">
            <Calendar className="h-5 w-5 text-warning" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Mandates & EMIs</h3>
            <p className="text-sm text-muted-foreground">Upcoming payments</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Due</p>
          <p className="font-bold text-lg">₹{totalUpcoming.toLocaleString()}</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-lg bg-info/5 border border-info/20">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4 text-info" />
            <span className="text-sm font-medium text-info">Due Soon</span>
          </div>
          <p className="text-2xl font-bold text-foreground">{upcomingMandates.length}</p>
          <p className="text-xs text-muted-foreground">Next 15 days</p>
        </div>
        <div className="p-4 rounded-lg bg-success/5 border border-success/20">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-success" />
            <span className="text-sm font-medium text-success">Completed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">1</p>
          <p className="text-xs text-muted-foreground">This month</p>
        </div>
      </div>

      {/* Mandates List */}
      <div className="space-y-3">
        {mandates.map((mandate) => (
          <div key={mandate.id} className={`p-4 rounded-lg border transition-smooth ${getStatusStyle(mandate.status)}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getStatusIcon(mandate.status)}
                <div>
                  <p className="font-medium text-sm">{mandate.name}</p>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <span>{mandate.type}</span>
                    <span>•</span>
                    <span>Due {mandate.dueDate}</span>
                    {mandate.status === "upcoming" && mandate.daysLeft <= 7 && (
                      <>
                        <span>•</span>
                        <span className="text-warning font-medium">{mandate.daysLeft} days left</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm">{mandate.amount}</p>
                {mandate.status === "upcoming" && (
                  <Button variant="ghost" size="sm" className="text-xs h-6 px-2 mt-1">
                    Pay Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-4 border-t border-border/30">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm">
            Set Reminder
          </Button>
          <Button variant="outline" size="sm">
            Auto-Pay Setup
          </Button>
        </div>
      </div>
    </div>
  );
}