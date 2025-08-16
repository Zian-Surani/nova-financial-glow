import { Calendar, Search, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../ThemeToggle";
import { NotificationCenter } from "./NotificationCenter";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();
  const isSubPage = !['/personal', '/dashboard'].includes(location.pathname);
  
  return (
    <header className="h-16 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          {isSubPage && (
            <Link to="/personal">
              <Button variant="ghost" size="sm" className="hover:scale-110 transform transition-all">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          )}
          <Link to="/" className="hover:scale-105 transform transition-all">
            <Button variant="ghost" size="sm">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back, John</p>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions, investments..."
              className="pl-10 bg-background/50 border-border/50"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="text-sm">
            <Calendar className="h-4 w-4 mr-2" />
            Last 30 days
          </Button>
          <ThemeToggle />
          <NotificationCenter />
          
          {/* Quick stats */}
          <div className="flex space-x-6 pl-6 border-l border-border/50">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Net Worth</p>
              <p className="text-lg font-semibold">₹12.4L</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Credit Score</p>
              <p className="text-lg font-semibold text-success">785</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}