import { Shield, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export function FairScoreCard() {
  const creditScore = 785;
  const maxScore = 900;
  const progressValue = (creditScore / maxScore) * 100;

  return (
    <div className="financial-card">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-success/10">
            <Shield className="h-5 w-5 text-success" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">FairScore</h3>
            <p className="text-sm text-muted-foreground">Credit Assessment</p>
          </div>
        </div>
        <div className="status-success">
          <CheckCircle className="h-3 w-3 mr-1" />
          VERIFIED
        </div>
      </div>

      {/* Score Display */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="metric-large">{creditScore}</div>
          <div className="text-sm text-muted-foreground mt-1">out of {maxScore}</div>
          
          {/* Circular progress background */}
          <div className="absolute -inset-8 opacity-10">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="stroke-current text-muted-foreground"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-current text-success"
                strokeWidth="3"
                strokeDasharray={`${progressValue}, 100`}
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Score Range</span>
          <span className="font-medium">Excellent</span>
        </div>
        <Progress value={progressValue} className="h-2" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>300</span>
          <span>900</span>
        </div>
      </div>

      {/* Action Button */}
      <Button variant="premium" className="w-full" size="lg">
        <ExternalLink className="h-4 w-4 mr-2" />
        Verify on Chain
      </Button>

      {/* Additional Info */}
      <div className="mt-4 p-3 bg-success/5 rounded-lg border border-success/20">
        <p className="text-sm text-success font-medium">Your score improved by 12 points this month!</p>
      </div>
    </div>
  );
}