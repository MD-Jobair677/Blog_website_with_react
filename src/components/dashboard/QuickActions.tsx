import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  PlusCircle, 
  Edit3, 
  BarChart3, 
  Settings,
  Users,
  MessageSquare
} from "lucide-react";

const actions = [
  {
    label: "New Post",
    description: "Create a new blog post",
    icon: PlusCircle,
    href: "/posts/new",
    color: "bg-gradient-primary text-white"
  },
  {
    label: "Edit Draft",
    description: "Continue working on drafts",
    icon: Edit3,
    href: "/posts?filter=draft",
    color: "bg-gradient-secondary text-secondary-foreground"
  },
  {
    label: "View Analytics",
    description: "Check your blog performance",
    icon: BarChart3,
    href: "/analytics",
    color: "bg-gradient-accent text-white"
  },
  {
    label: "Manage Comments",
    description: "Review and moderate comments",
    icon: MessageSquare,
    href: "/comments",
    color: "bg-muted text-muted-foreground"
  },
  {
    label: "Audience Insights",
    description: "Understand your readers",
    icon: Users,
    href: "/audience",
    color: "bg-muted text-muted-foreground"
  },
  {
    label: "Settings",
    description: "Configure your blog",
    icon: Settings,
    href: "/settings",
    color: "bg-muted text-muted-foreground"
  }
];

export function QuickActions() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {actions.map((action) => (
            <Button
              key={action.label}
              variant="outline"
              className={`h-auto p-4 flex flex-col items-center gap-2 hover:shadow-soft transition-all duration-200 ${action.color}`}
              asChild
            >
              <a href={action.href}>
                <action.icon className="w-5 h-5" />
                <div className="text-center">
                  <div className="font-medium text-sm">{action.label}</div>
                  <div className="text-xs opacity-80">{action.description}</div>
                </div>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}