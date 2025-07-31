import { 
  Home, 
  FileText, 
  BarChart3, 
  Users, 
  Settings, 
  PlusCircle,
  TrendingUp,
  MessageSquare,
  ChevronDown,
  Eye,
  Edit
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { 
    title: "Posts", 
    icon: FileText,
    subItems: [
      { title: "All Posts", url: "/show/all/post", icon: Eye },
      { title: "Add Post", url: "/posts/new", icon: PlusCircle },
      { title: "Edit Posts", url: "/posts/edit", icon: Edit },
      // { title: "Single Post", url: "/posts/edit", icon: Edit },
    ]
  },
  { 
    title: "Tag", 
    icon: FileText,
    subItems: [
      { title: "All Tag", url: "/show/all/tag", icon: Eye },
      { title: "Add Tag", url: "/add/tag", icon: PlusCircle },
      { title: "Edit Tag", url: "/edit/tag", icon: Edit },
      // { title: "Single Post", url: "/posts/edit", icon: Edit },
    ]
  },
  { 
    title: "Analytics", 
    icon: BarChart3,
    subItems: [
      { title: "Overview", url: "/analytics", icon: TrendingUp },
      { title: "Traffic", url: "/analytics/traffic", icon: BarChart3 },
    ]
  },
  { title: "Comments", url: "/comments", icon: MessageSquare },
  { title: "Audience", url: "/audience", icon: Users },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const [openItems, setOpenItems] = useState<string[]>([]);

  const isActive = (path: string) => currentPath === path;
  const isCollapsed = state === "collapsed";

  const toggleItem = (title: string) => {
    setOpenItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-gradient-primary text-primary-black font-medium shadow-soft" 
      : "hover:bg-secondary/50 transition-all duration-200";

  return (
    <Sidebar
      className="border-r border-border/50"
      collapsible="icon"
    >
      <SidebarContent>
        <div className="p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <FileText className="w-4 h-4 text-black" />
            </div>
            {!isCollapsed && (
              <div>
                <h2 className="font-bold text-lg text-foreground">BlogDash</h2>
                <p className="text-xs text-muted-foreground">Content Management</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup className="px-4 py-4">
          <SidebarGroupLabel className="text-muted-foreground font-medium">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.subItems ? (
                    <Collapsible 
                      open={openItems.includes(item.title)} 
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="hover:bg-secondary/50 transition-all duration-200">
                          <item.icon className="w-4 h-4" />
                          {!isCollapsed && (
                            <>
                              <span>{item.title}</span>
                              <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
                            </>
                          )}
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      {!isCollapsed && (
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink to={subItem.url} className={getNavClass}>
                                    <subItem.icon className="w-4 h-4" />
                                    <span>{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      )}
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url || "/"} end className={getNavClass}>
                        <item.icon className="w-4 h-4" />
                        {!isCollapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto p-4 border-t border-border/50">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink to="/settings" className={getNavClass}>
                      <Settings className="w-4 h-4" />
                      {!isCollapsed && <span>Settings</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}