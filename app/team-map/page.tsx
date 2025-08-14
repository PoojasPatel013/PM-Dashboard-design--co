"use client"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, MessageSquare, GitBranch, AlertTriangle } from "lucide-react"

export default function TeamMapPage() {
  const communicationFlow = [
    {
      level: "Users",
      icon: "👥",
      description: "End users experiencing issues",
      connects: ["Product Manager"],
      recent: ["Reported payment delays", "Mobile app crashes"],
    },
    {
      level: "Product Manager",
      icon: "🎯",
      description: "Coordinates between users and development teams",
      connects: ["Development Team", "Stakeholders"],
      recent: ["Prioritized API fixes", "Updated roadmap"],
    },
    {
      level: "Development Team",
      icon: "💻",
      description: "Engineers, DevOps, and technical staff",
      connects: ["Product Manager", "Stakeholders"],
      recent: ["Deployed hotfix v2.4.1", "Database optimization"],
    },
    {
      level: "Stakeholders",
      icon: "📊",
      description: "Leadership, investors, and key decision makers",
      connects: ["Product Manager"],
      recent: ["Approved emergency budget", "Reviewed incident report"],
    },
  ]

  const recentChanges = [
    {
      id: 1,
      type: "deployment",
      title: "API Gateway v1.8.0 deployed",
      user: "Alex Rodriguez",
      role: "Senior SRE",
      time: "15 minutes ago",
      impact: "Reduced latency by 40%",
    },
    {
      id: 2,
      type: "incident",
      title: "Database connection issue resolved",
      user: "Sarah Kim",
      role: "Database Admin",
      time: "1 hour ago",
      impact: "Restored service for 8,230 users",
    },
    {
      id: 3,
      type: "communication",
      title: "Stakeholder update sent",
      user: "Mike Chen",
      role: "Product Manager",
      time: "2 hours ago",
      impact: "Informed leadership of resolution progress",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Team Communication Map</h1>
          <p className="text-gray-500 text-sm mt-1">
            Visualize communication flows and track who's responsible for what changes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Communication Flow */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-600" />
                <span>Communication Hierarchy</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {communicationFlow.map((level, index) => (
                <div key={level.level} className="relative">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{level.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{level.level}</h3>
                      <p className="text-sm text-gray-600 mb-2">{level.description}</p>

                      <div className="space-y-1">
                        <div className="text-xs text-gray-500">Recent Activity:</div>
                        {level.recent.map((activity, i) => (
                          <div key={i} className="text-xs text-gray-700 bg-gray-50 px-2 py-1 rounded">
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {index < communicationFlow.length - 1 && (
                    <div className="flex items-center justify-center mt-4">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Changes Tracker */}
          <Card className="border border-gray-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <GitBranch className="w-5 h-5 text-green-600" />
                <span>Who Did What</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentChanges.map((change) => (
                <div key={change.id} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {change.type === "deployment" && <GitBranch className="w-4 h-4 text-green-600" />}
                      {change.type === "incident" && <AlertTriangle className="w-4 h-4 text-red-600" />}
                      {change.type === "communication" && <MessageSquare className="w-4 h-4 text-blue-600" />}
                      <Badge variant="outline" className="text-xs">
                        {change.type}
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">{change.time}</span>
                  </div>

                  <h4 className="font-medium text-gray-900 mb-1">{change.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{change.impact}</p>

                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                      {change.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{change.user}</div>
                      <div className="text-xs text-gray-500">{change.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
