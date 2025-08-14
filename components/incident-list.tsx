"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Users } from "lucide-react"

export function IncidentList() {
  const incidents = [
    {
      id: "1",
      title: "API Gateway experiencing high latency and intermittent timeouts",
      description:
        "Users experiencing slow response times when accessing core features. Payment processing may be delayed by 15-30 seconds. Mobile app users reporting frequent loading errors.",
      severity: "High",
      status: "Investigating",
      affectedUsers: "15,420",
      timeOpen: "2h 45m",
      eta: "Overdue",
      owner: "Alex Rodriguez",
      role: "Senior SRE",
      tags: ["api", "performance", "payments", "critical"],
    },
    {
      id: "2",
      title: "Database connection pool exhaustion in primary cluster",
      description:
        "Intermittent connection failures causing login issues for some users. New user registrations may fail. Dashboard loading times increased significantly.",
      severity: "Medium",
      status: "Identified",
      affectedUsers: "8,230",
      timeOpen: "1h 15m",
      eta: "45m",
      owner: "Sarah Kim",
      role: "Database Admin",
      tags: ["database", "connections", "login"],
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
      case "Medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
      default:
        return <Badge variant="secondary">{severity}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Investigating":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Investigating</Badge>
      case "Identified":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Identified</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card className="border border-gray-200">
      <CardHeader className="border-b border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-gray-900">Active Incidents</span>
            <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm font-medium">4</span>
          </div>
          <div className="flex items-center space-x-2">
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>All Severity</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>Active</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {incidents.map((incident) => (
          <div key={incident.id} className="border-b border-gray-100 last:border-b-0 p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-1" />
                <h3 className="font-semibold text-gray-900 flex-1">{incident.title}</h3>
              </div>
              <div className="flex items-center space-x-2">
                {getSeverityBadge(incident.severity)}
                {getStatusBadge(incident.status)}
              </div>
            </div>

            <p className="text-gray-600 text-sm mb-4 ml-6">{incident.description}</p>

            <div className="flex items-center space-x-2 mb-3 ml-6">
              {incident.tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between ml-6">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{incident.affectedUsers} users</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{incident.timeOpen} open</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>
                    ETA:{" "}
                    <span className={incident.eta === "Overdue" ? "text-red-600 font-medium" : ""}>{incident.eta}</span>
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>
                    Service: <span className="font-medium">API Gateway</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-medium">
                    {incident.owner
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{incident.owner}</div>
                    <div className="text-gray-500 text-xs">{incident.role}</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="ml-4 bg-transparent">
                  View Details
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Update
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
