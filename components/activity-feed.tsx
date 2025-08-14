import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, MessageSquare, GitBranch, AlertTriangle, Users } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "deployment",
      title: "Frontend v2.4.1 deployed to production",
      user: "Sarah Chen",
      time: "2 minutes ago",
      icon: GitBranch,
      color: "text-emerald-600",
    },
    {
      id: 2,
      type: "incident",
      title: "Database connection timeout incident created",
      user: "System Alert",
      time: "15 minutes ago",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 3,
      type: "communication",
      title: "Update sent to #engineering channel",
      user: "Mike Rodriguez",
      time: "23 minutes ago",
      icon: MessageSquare,
      color: "text-blue-500",
    },
    {
      id: 4,
      type: "deployment",
      title: "API Gateway v1.8.0 deployment started",
      user: "CI/CD Pipeline",
      time: "45 minutes ago",
      icon: GitBranch,
      color: "text-emerald-600",
    },
    {
      id: 5,
      type: "team",
      title: "Alex Kim joined the DevOps team",
      user: "HR System",
      time: "1 hour ago",
      icon: Users,
      color: "text-purple-500",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-emerald-600" />
          <span>Recent Activity</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const IconComponent = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0"
              >
                <div className={`p-2 rounded-full bg-gray-50 ${activity.color}`}>
                  <IconComponent className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-xs text-gray-500">{activity.user}</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
