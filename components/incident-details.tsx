import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText } from "lucide-react"

interface IncidentDetailsProps {
  incident: {
    description: string
    impact: string
  }
}

export function IncidentDetails({ incident }: IncidentDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <span>Incident Description</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">What's Happening</h3>
          <p className="text-gray-700 leading-relaxed">{incident.description}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Customer Impact</h3>
          <p className="text-gray-700">{incident.impact}</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Current Actions</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Engineering team investigating database connection pool configuration</li>
            <li>Monitoring error rates and response times in real-time</li>
            <li>Preparing rollback plan if issue persists</li>
            <li>Customer support team notified of potential delays</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
