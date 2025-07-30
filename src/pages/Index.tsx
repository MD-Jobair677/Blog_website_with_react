import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentPosts } from "@/components/dashboard/RecentPosts";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { AnalyticsChart } from "@/components/dashboard/AnalyticsChart";
import { 
  FileText, 
  Eye, 
  MessageSquare, 
  Users,
  TrendingUp 
} from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-primary-foreground/90 text-lg">
            Here's what's happening with your blog today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Posts"
            value={42}
            description="All time"
            icon={FileText}
            trend={{ value: 12, isPositive: true }}
          />
          <StatsCard
            title="Total Views"
            value="24.8K"
            description="This month"
            icon={Eye}
            trend={{ value: 8.2, isPositive: true }}
          />
          <StatsCard
            title="Comments"
            value={156}
            description="This month"
            icon={MessageSquare}
            trend={{ value: 3.1, isPositive: false }}
          />
          <StatsCard
            title="Subscribers"
            value="1.2K"
            description="Total active"
            icon={Users}
            trend={{ value: 15.3, isPositive: true }}
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            <AnalyticsChart />
            <RecentPosts />
          </div>
          
          {/* Right Column - 1/3 width */}
          <div className="space-y-6">
            <QuickActions />
            
            {/* Additional Stats */}
            <div className="space-y-4">
              <StatsCard
                title="Avg. Reading Time"
                value="4.2 min"
                description="This week"
                icon={TrendingUp}
                className="bg-gradient-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
