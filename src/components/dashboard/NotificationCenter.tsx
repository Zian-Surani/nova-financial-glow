import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, X, TrendingUp, AlertTriangle, DollarSign, Calendar, CheckCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'alert';
  title: string;
  message: string;
  time: string;
  read: boolean;
  actionRequired?: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Portfolio Milestone',
    message: 'Congratulations! Your portfolio has reached ₹12.5L',
    time: '2 hours ago',
    read: false,
    actionRequired: false
  },
  {
    id: '2',
    type: 'warning',
    title: 'EMI Due Tomorrow',
    message: 'Your home loan EMI of ₹45,000 is due tomorrow',
    time: '4 hours ago',
    read: false,
    actionRequired: true
  },
  {
    id: '3',
    type: 'info',
    title: 'Market Update',
    message: 'NIFTY 50 reached a new high. Consider rebalancing your equity allocation.',
    time: '6 hours ago',
    read: false,
    actionRequired: false
  },
  {
    id: '4',
    type: 'alert',
    title: 'Credit Score Alert',
    message: 'Your credit score has increased by 15 points to 785',
    time: '1 day ago',
    read: true,
    actionRequired: false
  },
  {
    id: '5',
    type: 'info',
    title: 'SIP Success',
    message: 'Your monthly SIP of ₹10,000 has been processed successfully',
    time: '2 days ago',
    read: true,
    actionRequired: false
  }
];

export function NotificationCenter() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-warning" />;
      case 'info':
        return <TrendingUp className="w-5 h-5 text-info" />;
      case 'alert':
        return <DollarSign className="w-5 h-5 text-primary" />;
      default:
        return <Bell className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-success/10 border-success/20';
      case 'warning':
        return 'bg-warning/10 border-warning/20';
      case 'info':
        return 'bg-info/10 border-info/20';
      case 'alert':
        return 'bg-primary/10 border-primary/20';
      default:
        return 'bg-muted/10 border-border/20';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="w-[92vw] sm:w-[420px] md:w-[480px] h-[70vh] flex flex-col glass no-hover-zoom border-0 overflow-hidden transform-gpu will-change-transform [contain:layout_paint] transition-none [&_*]:transition-none data-[state=open]:animate-none data-[state=closed]:animate-none motion-reduce:animate-none">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">Notifications</DialogTitle>
            {unreadCount > 0 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={markAllAsRead}
                className="text-xs"
              >
                Mark all read
              </Button>
            )}
          </div>
        </DialogHeader>
        
        <div className="space-y-4 mt-6 flex-1 overflow-y-auto overflow-x-hidden pr-2 [scrollbar-gutter:stable_both-edges] overscroll-contain">
          {notifications.length === 0 ? (
            <div className="text-center py-8">
              <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => (
              <Card 
                key={notification.id}
                className={`glass no-hover-zoom border-0 cursor-pointer ring-2 ring-transparent hover:shadow-none ${
                  !notification.read ? 'ring-primary/20' : ''
                } ${getTypeColor(notification.type)}`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-foreground">
                          {notification.title}
                        </h4>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 animate-pulse" />
                        )}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {notification.time}
                        </span>
                        
                        {notification.actionRequired && (
                          <Badge variant="warning" className="text-xs">
                            Action Required
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}