import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  PieChart, 
  Lightbulb, 
  CreditCard, 
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/personal" },
  { icon: PieChart, label: "Portfolio", path: "/portfolio" },
  { icon: Lightbulb, label: "Insights", path: "/insights" },
  { icon: CreditCard, label: "Loans", path: "/loans" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} h-screen bg-card border-r border-border/50 transition-smooth flex flex-col fixed left-0 top-0 z-50`}>
      {/* Header */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NovaFinance
            </h1>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="h-8 w-8 p-0"
          >
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => 
              `flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? 'bg-primary/20 text-primary shadow-glow' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-premium flex items-center justify-center">
            <span className="text-xs font-semibold text-white">JD</span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">Premium Plan</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}