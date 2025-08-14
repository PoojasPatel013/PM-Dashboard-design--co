"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Clock, Users, MessageSquare } from "lucide-react"
import { SendUpdateModal } from "@/components/send-update-modal"
import Link from "next/link"

export function IncidentSummaryCard() {
  const [sendUpdateModalOpen, setSendUpdateModalOpen] = useState(false)
  const [selectedIncident, setSelectedIncident] = useState<{ title: string; id: string } | null>(null)

  const incidents = [
    {
      id: "1",
      title: "Database Connection Timeout",
      impact: "Payment processing delayed by 2-3 minutes",
      severity: "high",
      eta: "30 minutes",
      startTime: "14:22",
      affectedUsers: "~1,200 users",
      owner: "DevOps Team",
    },
    {
      id: "2",
      title: "CDN Cache Issues",
      impact: "Slower page load times in EU region",
      severity: "medium",
      eta: "1 hour",
      startTime: "13:45",
      affectedUsers: "~500 users",
      owner: "Infrastructure Team",
    },
    {
      id: "3",
      title: "API Rate Limiting",
      impact: "Third-party integrations experiencing delays",
      severity: "low",
      eta: "2 hours",
      startTime: "12:30",
      affectedUsers: "~50 users",
      owner: "Backend Team",
    },
  ]

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Severity</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Severity</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Severity</Badge>
      default:
        return <Badge variant="secondary">{severity}</Badge>
    }
  }

  const handleSendUpdate = (incident: { title: string; id: string }) => {
    setSelectedIncident(incident)
    setSendUpdateModalOpen(true)
  }

  return (
    <>
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            <span>Active Incidents</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {incidents.map((incident) => (
            <div key={incident.id} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-gray-900 flex-1">{incident.title}</h3>
                {getSeverityBadge(incident.severity)}
              </div>

              <p className="text-sm text-gray-600">{incident.impact}</p>

              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>ETA: {incident.eta}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>{incident.affectedUsers}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 text-center">⏰</span>
                  <span>Started: {incident.startTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 text-center">👥</span>
                  <span>{incident.owner}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Link href={`/incident/${incident.id}`} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Details
                  </Button>
                </Link>
                <Button
                  size="sm"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  onClick={() => handleSendUpdate({ title: incident.title, id: incident.id })}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Update
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <SendUpdateModal
        open={sendUpdateModalOpen}
        onOpenChange={setSendUpdateModalOpen}
        incidentTitle={selectedIncident?.title}
        incidentId={selectedIncident?.id}
      />
    </>
  )
}
