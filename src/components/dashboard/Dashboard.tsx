import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { FairScoreCard } from "./FairScoreCard";
import { PortfolioCard } from "./PortfolioCard";
import { CashflowCard } from "./CashflowCard";
import { InsightsCard } from "./InsightsCard";
import { MandatesCard } from "./MandatesCard";
import { Footer } from "../Footer";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col md:ml-64">
          <Header />
          
          {/* Dashboard Content */}
          <main className="flex-1 p-4 sm:p-6 space-y-6">
            {/* Top Row - Key Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <FairScoreCard />
              <PortfolioCard />
              <CashflowCard />
            </div>
            
            {/* Bottom Row - Insights & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InsightsCard />
              <MandatesCard />
            </div>
          </main>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}