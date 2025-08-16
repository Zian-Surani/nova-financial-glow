import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings, Eye, EyeOff, Save } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Widget {
  id: string;
  title: string;
  type: 'metric' | 'chart' | 'list' | 'badge' | 'custom';
  size: 'small' | 'medium' | 'large';
  visible: boolean;
  order: number;
  description: string;
}

interface DashboardCustomizerProps {
  widgets: Widget[];
  onToggleVisibility: (id: string) => void;
  onSaveLayout: () => void;
}

export function DashboardCustomizer({ 
  widgets, 
  onToggleVisibility,
  onSaveLayout 
}: DashboardCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (widgetId: string) => {
    onToggleVisibility(widgetId);
  };

  const handleSave = () => {
    onSaveLayout();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="glass border-border/50 hover:shadow-glow transition-all duration-300"
        >
          <Settings className="w-4 h-4 mr-2" />
          Customize Dashboard
        </Button>
      </DialogTrigger>
      
      <DialogContent 
        className="max-w-2xl max-h-[80vh] overflow-y-auto glass border-0 z-50" 
        onPointerDownOutside={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Customize Your Dashboard
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <p className="text-muted-foreground">
            Select which widgets you want to see on your dashboard. You can hide widgets you don't need to focus on what matters most.
          </p>
          
          <div className="grid gap-4">
            {widgets.map((widget) => (
              <Card 
                key={widget.id} 
                className={`glass border-0 transition-all duration-300 hover:shadow-glow ${
                  widget.visible ? 'ring-2 ring-primary/20' : 'opacity-60'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Checkbox
                        id={widget.id}
                        checked={widget.visible}
                        onCheckedChange={() => handleToggle(widget.id)}
                        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <div className="space-y-1">
                        <label 
                          htmlFor={widget.id}
                          className="text-sm font-medium cursor-pointer flex items-center space-x-2"
                        >
                          <span>{widget.title}</span>
                          <span className="px-2 py-1 text-xs bg-secondary rounded-full">
                            {widget.size}
                          </span>
                        </label>
                        <p className="text-xs text-muted-foreground">
                          {widget.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {widget.visible ? (
                        <Eye className="w-4 h-4 text-success" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-between pt-6 border-t border-border/30">
            <Button 
              variant="outline" 
              onClick={() => setIsOpen(false)}
              className="glass border-border/50"
            >
              Cancel
            </Button>
            <Button 
              onClick={handleSave}
              className="gradient-premium text-white hover:scale-105 transform transition-all shadow-lg hover:shadow-glow"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}