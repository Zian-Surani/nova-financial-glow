import { ArrowLeft, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { NotificationCenter } from "./NotificationCenter";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useUser } from "@/context/UserContext";

export function Header() {
  const location = useLocation();
  const isSubPage = !['/personal', '/dashboard'].includes(location.pathname);
  const { profile } = useUser();
  // Removed search and filter controls as requested
  
  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm mb-4 md:mb-0">
      <div className="flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          {/* Mobile hamburger for sidebar */}
          <button
            type="button"
            aria-label="Open sidebar"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-muted/60 transition-smooth"
            onClick={() => window.dispatchEvent(new CustomEvent('toggle-sidebar'))}
          >
            <Menu className="h-5 w-5" />
          </button>
          {isSubPage && (
            <Link to="/personal">
              <Button variant="ghost" size="sm" className="hover:scale-110 transform transition-all">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Dashboard
              </Button>
            </Link>
          )}
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="hidden sm:block text-sm text-muted-foreground">Welcome back, {profile.firstName || 'User'}</p>
          </div>
        </div>

        {/* Center section removed (search) */}

        {/* Right section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Date-range filter removed */}
          <ThemeToggle />
          <div className="hidden sm:inline-flex">
            <NotificationCenter />
          </div>
          
          {/* Quick stats */}
          <div className="hidden lg:flex space-x-6 pl-6 border-l border-border/50">
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

      {/* Mobile tools row removed (search/filters). Keep header minimal on mobile. */}
    </header>
  );
}