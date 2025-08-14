import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock } from "lucide-react"

interface IncidentHeaderProps {
  incident: {
    title: string
    severity: string
    status: string
    startTime: string
  }
}

export function IncidentHeader({ incident }: IncidentHeaderProps) {
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "investigating":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Investigating</Badge>
      case "identified":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Identified</Badge>
      case "monitoring":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Monitoring</Badge>
      case "resolved":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Resolved</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const formatDuration = (startTime: string) => {
    const start = new Date(startTime)
    const now = new Date()
    const diffMs = now.getTime() - start.getTime()
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))

    if (diffHours > 0) {
      return `${diffHours}h ${diffMinutes}m`
    }
    return `${diffMinutes}m`
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900">{incident.title}</h1>
        </div>
        <div className="flex items-center space-x-2">
          {getSeverityBadge(incident.severity)}
          {getStatusBadge(incident.status)}
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>Duration: {formatDuration(incident.startTime)}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span>Started: {new Date(incident.startTime).toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
