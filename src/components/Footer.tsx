import { Shield, Lock, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
              NovaFinance
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering your financial future with AI-driven insights and blockchain-verified transparency.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Blockchain Verification
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Support Center
              </a>
            </div>
          </div>

          {/* Security */}
          <div>
            <h4 className="font-semibold text-foreground mb-3">Security & Trust</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-success" />
                <span>Bank-grade encryption</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4 text-success" />
                <span>Blockchain verified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-info" />
                <span>support@novafinance.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 NovaFinance. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Powered by AI • Secured by Blockchain
          </p>
        </div>
      </div>
    </footer>
  );
}