import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MessageSquare, AlertTriangle, CheckCircle, Search } from "lucide-react"

interface IncidentTimelineProps {
  incidentId: string
}

export function IncidentTimeline({ incidentId }: IncidentTimelineProps) {
  // Mock timeline data
  const timelineEvents = [
    {
      id: 1,
      time: "14:22",
      type: "created",
      title: "Incident Created",
      description: "Automated monitoring detected database connection timeouts",
      user: "System Alert",
      icon: AlertTriangle,
      color: "text-red-500",
    },
    {
      id: 2,
      time: "14:25",
      type: "investigating",
      title: "Investigation Started",
      description: "DevOps team notified and began investigating connection pool issues",
      user: "Sarah Chen",
      icon: Search,
      color: "text-blue-500",
    },
    {
      id: 3,
      time: "14:30",
      type: "update",
      title: "Status Update Sent",
      description: "Initial communication sent to #engineering and customer support teams",
      user: "Sarah Chen",
      icon: MessageSquare,
      color: "text-emerald-600",
    },
    {
      id: 4,
      time: "14:35",
      type: "progress",
      title: "Root Cause Identified",
      description: "Connection pool exhaustion during peak traffic confirmed as root cause",
      user: "Mike Rodriguez",
      icon: CheckCircle,
      color: "text-yellow-500",
    },
    {
      id: 5,
      time: "14:40",
      type: "update",
      title: "Customer Update Posted",
      description: "Status page updated with incident details and expected resolution time",
      user: "Sarah Chen",
      icon: MessageSquare,
      color: "text-emerald-600",
    },
  ]

  const getEventBadge = (type: string) => {
    switch (type) {
      case "created":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Created</Badge>
      case "investigating":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Investigating</Badge>
      case "update":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Update</Badge>
      case "progress":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Progress</Badge>
      default:
        return <Badge variant="secondary">{type}</Badge>
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-emerald-600" />
          <span>Incident Timeline</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon
            return (
              <div key={event.id} className="relative">
                {index !== timelineEvents.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-200" />
                )}
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full bg-gray-50 ${event.color}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                      <div className="flex items-center space-x-2">
                        {getEventBadge(event.type)}
                        <span className="text-xs text-gray-500">{event.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                    <p className="text-xs text-gray-500">by {event.user}</p>
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
