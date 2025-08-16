import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Flame, Brain, TrendingUp, Target, Star, Zap, Shield } from "lucide-react";

interface BadgeData {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  earned: boolean;
  progress: number;
  requirement: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const badges: BadgeData[] = [
  {
    id: 'money-savvy',
    name: 'Money Savvy',
    description: 'Maintained 6+ months emergency fund',
    icon: Shield,
    earned: true,
    progress: 100,
    requirement: '6 months emergency fund',
    rarity: 'rare'
  },
  {
    id: 'liquid-burner',
    name: 'Liquid Burner',
    description: 'Optimized liquid investments',
    icon: Flame,
    earned: true,
    progress: 100,
    requirement: 'Liquid investment optimization',
    rarity: 'common'
  },
  {
    id: 'finance-master',
    name: 'Finance Master',
    description: 'Achieved 25%+ portfolio returns',
    icon: Brain,
    earned: false,
    progress: 78,
    requirement: '25% portfolio returns',
    rarity: 'epic'
  },
  {
    id: 'crypto-goat',
    name: 'Crypto GOAT',
    description: 'Crypto portfolio above ₹5L',
    icon: TrendingUp,
    earned: false,
    progress: 45,
    requirement: '₹5L crypto portfolio',
    rarity: 'legendary'
  },
  {
    id: 'wolf-wall-street',
    name: 'Wolf of Wall Street',
    description: 'Net worth above ₹1 Crore',
    icon: Trophy,
    earned: false,
    progress: 62,
    requirement: '₹1 Crore net worth',
    rarity: 'legendary'
  },
  {
    id: 'goal-crusher',
    name: 'Goal Crusher',
    description: 'Achieved 3+ financial goals',
    icon: Target,
    earned: true,
    progress: 100,
    requirement: '3 financial goals',
    rarity: 'rare'
  },
  {
    id: 'investment-ninja',
    name: 'Investment Ninja',
    description: 'Diversified across 5+ assets',
    icon: Star,
    earned: true,
    progress: 100,
    requirement: '5+ asset classes',
    rarity: 'common'
  },
  {
    id: 'debt-slayer',
    name: 'Debt Slayer',
    description: 'Maintained debt-to-income < 30%',
    icon: Zap,
    earned: false,
    progress: 85,
    requirement: 'Debt-to-income < 30%',
    rarity: 'epic'
  }
];

const getRarityGradient = (rarity: string) => {
  switch (rarity) {
    case 'legendary':
      return 'gradient-legendary';
    case 'epic':
      return 'gradient-epic';
    case 'rare':
      return 'gradient-rare';
    default:
      return 'gradient-common';
  }
};

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'legendary':
      return 'text-yellow-400';
    case 'epic':
      return 'text-purple-400';
    case 'rare':
      return 'text-blue-400';
    default:
      return 'text-gray-400';
  }
};

interface GamificationBadgesProps {
  showProgress?: boolean;
  layout?: 'grid' | 'list';
}

export function GamificationBadges({ showProgress = true, layout = 'grid' }: GamificationBadgesProps) {
  const earnedBadges = badges.filter(badge => badge.earned);
  const inProgressBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="space-y-6">
      {/* Earned Badges */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-primary" />
            Earned Badges ({earnedBadges.length})
          </h3>
          <Badge variant="secondary" className="animate-pulse">
            +{earnedBadges.length * 50} XP
          </Badge>
        </div>
        
        <div className={layout === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 gap-4' : 'space-y-3'}>
          {earnedBadges.map((badge) => (
            <Card key={badge.id} className="glass border-0 hover:shadow-glow transition-smooth group">
              <CardContent className="p-4">
                <div className="text-center space-y-2">
                  <div className={`w-12 h-12 mx-auto ${getRarityGradient(badge.rarity)} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <badge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{badge.name}</h4>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                    <Badge variant="outline" className={`text-xs mt-1 ${getRarityColor(badge.rarity)}`}>
                      {badge.rarity.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* In Progress Badges */}
      {showProgress && (
        <div>
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-warning" />
            In Progress ({inProgressBadges.length})
          </h3>
          
          <div className="space-y-3">
            {inProgressBadges.map((badge) => (
              <Card key={badge.id} className="glass border-0 hover:shadow-glow transition-smooth">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${getRarityGradient(badge.rarity)} rounded-xl flex items-center justify-center opacity-50`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold">{badge.name}</h4>
                        <Badge variant="outline" className={`text-xs ${getRarityColor(badge.rarity)}`}>
                          {badge.rarity.toUpperCase()}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{badge.requirement}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${getRarityGradient(badge.rarity)} transition-all duration-1000`}
                            style={{ width: `${badge.progress}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{badge.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}