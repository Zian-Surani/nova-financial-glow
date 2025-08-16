import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GripVertical, Settings, Eye, EyeOff, Move } from "lucide-react";

interface Widget {
  id: string;
  title: string;
  type: 'metric' | 'chart' | 'list' | 'badge' | 'custom';
  size: 'small' | 'medium' | 'large';
  visible: boolean;
  order: number;
  component: React.ReactNode;
}

interface CustomizableWidgetProps {
  widget: Widget;
  isEditing: boolean;
  onToggleVisibility: (id: string) => void;
  onReorder?: (id: string, direction: 'up' | 'down') => void;
}

export function CustomizableWidget({ 
  widget, 
  isEditing, 
  onToggleVisibility, 
  onReorder 
}: CustomizableWidgetProps) {
  const [isDragging, setIsDragging] = useState(false);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'col-span-1';
      case 'large':
        return 'col-span-2 row-span-2';
      default:
        return 'col-span-1';
    }
  };

  return (
    <Card 
      className={`
        glass border-0 transition-all duration-300 relative group
        ${widget.visible ? 'opacity-100' : 'opacity-50'}
        ${isDragging ? 'scale-105 shadow-2xl' : 'hover:shadow-glow'}
        ${getSizeClasses(widget.size)}
      `}
    >
      {/* Edit Controls */}
      {isEditing && (
        <div className="absolute -top-2 -right-2 z-10 flex space-x-1">
          <Button
            size="sm"
            variant="outline"
            className="w-8 h-8 p-0 glass"
            onClick={() => onToggleVisibility(widget.id)}
          >
            {widget.visible ? (
              <Eye className="w-4 h-4" />
            ) : (
              <EyeOff className="w-4 h-4" />
            )}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-8 h-8 p-0 glass cursor-grab active:cursor-grabbing"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
          >
            <GripVertical className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Widget Content */}
      <div className={widget.visible ? '' : 'pointer-events-none'}>
        {widget.component}
      </div>

      {/* Size Badge */}
      {isEditing && (
        <Badge 
          variant="secondary" 
          className="absolute bottom-2 left-2 text-xs opacity-70"
        >
          {widget.size}
        </Badge>
      )}
    </Card>
  );
}

interface DashboardCustomizerProps {
  widgets: Widget[];
  isEditing: boolean;
  onToggleEdit: () => void;
  onToggleVisibility: (id: string) => void;
  onSaveLayout: () => void;
}

export function DashboardCustomizer({ 
  widgets, 
  isEditing, 
  onToggleEdit, 
  onToggleVisibility,
  onSaveLayout 
}: DashboardCustomizerProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Customize your view</p>
      </div>
      
      <div className="flex items-center space-x-2">
        {isEditing && (
          <Button variant="premium" onClick={onSaveLayout}>
            Save Layout
          </Button>
        )}
        <Button
          variant={isEditing ? "outline" : "secondary"}
          onClick={onToggleEdit}
          className="flex items-center space-x-2"
        >
          <Settings className="w-4 h-4" />
          <span>{isEditing ? 'Done' : 'Customize'}</span>
        </Button>
      </div>
    </div>
  );
}