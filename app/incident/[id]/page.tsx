import { Navigation } from "@/components/navigation"
import { IncidentHeader } from "@/components/incident-header"
import { IncidentDetails } from "@/components/incident-details"
import { IncidentMetrics } from "@/components/incident-metrics"
import { IncidentTimeline } from "@/components/incident-timeline"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data - in real app this would come from API
const getIncidentData = (id: string) => {
  const incidents = {
    "1": {
      id: "1",
      title: "Database Connection Timeout",
      severity: "high",
      status: "investigating",
      description:
        "We are currently experiencing intermittent database connection timeouts affecting our payment processing system. Users may experience delays of 2-3 minutes when completing transactions. Our engineering team has identified the issue as related to connection pool exhaustion during peak traffic periods.",
      impact: "Payment processing delayed by 2-3 minutes",
      affectedUsers: 1200,
      startTime: "2024-01-15T14:22:00Z",
      owner: {
        name: "Sarah Chen",
        role: "Senior DevOps Engineer",
        email: "sarah.chen@company.com",
        avatar: "SC",
      },
      metrics: {
        errorRate: "12.5%",
        responseTime: "8.2s",
        affectedServices: ["Payment API", "User Dashboard", "Mobile App"],
        estimatedResolution: "30 minutes",
      },
    },
  }
  return incidents[id as keyof typeof incidents]
}

export default function IncidentDetailsPage({ params }: { params: { id: string } }) {
  const incident = getIncidentData(params.id)

  if (!incident) {
    return <div>Incident not found</div>
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <IncidentHeader incident={incident} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <IncidentDetails incident={incident} />
          </div>
          <div>
            <IncidentMetrics incident={incident} />
          </div>
        </div>

        <div className="mt-8">
          <IncidentTimeline incidentId={incident.id} />
        </div>
      </main>
    </div>
  )
}
