"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, GitBranch, User, ExternalLink } from "lucide-react"

export function ReleaseStatusCard() {
  const releases = [
    {
      id: 1,
      name: "Frontend v2.4.1",
      status: "ready",
      deploymentTime: "2024-01-15 14:30",
      version: "v2.4.1",
      owner: "Sarah Chen",
      environment: "Production",
    },
    {
      id: 2,
      name: "API Gateway v1.8.0",
      status: "deploying",
      deploymentTime: "2024-01-15 15:45",
      version: "v1.8.0",
      owner: "Mike Rodriguez",
      environment: "Staging",
    },
    {
      id: 3,
      name: "Database Migration",
      status: "blocked",
      deploymentTime: "Pending approval",
      version: "v3.1.0",
      owner: "Alex Kim",
      environment: "Production",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Ready</Badge>
      case "deploying":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Deploying</Badge>
      case "blocked":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Blocked</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <GitBranch className="w-5 h-5 text-emerald-600" />
          <span>Release Status</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {releases.map((release) => (
          <div key={release.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900">{release.name}</h3>
              {getStatusBadge(release.status)}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{release.deploymentTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GitBranch className="w-4 h-4" />
                <span>{release.version}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{release.owner}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 text-center">🌐</span>
                <span>{release.environment}</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full bg-transparent"
              onClick={() => {
                // In a real app, this would navigate to a release details page
                console.log(`Viewing details for release ${release.id}`)
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Details
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
