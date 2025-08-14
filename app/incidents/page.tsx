import { Navigation } from "@/components/navigation"
import { IncidentMetrics } from "@/components/incident-metrics"
import { IncidentList } from "@/components/incident-list"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function IncidentsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <h1 className="text-xl font-bold text-gray-900">PM Dashboard</h1>
              <p className="text-sm text-gray-500">MVP Release Monitor</p>
            </div>

            <nav className="space-y-2">
              <a
                href="/dashboard"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <span className="text-lg">🚀</span>
                <span>Releases</span>
              </a>
              <a
                href="/incidents"
                className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg"
              >
                <span className="text-lg">⚠️</span>
                <span>Incidents</span>
              </a>
              <a
                href="/activity-log"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <span className="text-lg">📊</span>
                <span>Activity Log</span>
              </a>
              <a
                href="/team-map"
                className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <span className="text-lg">🗺️</span>
                <span>Team Map</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">Last refreshed: 10:18:09 AM</p>
              </div>
              <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                <RefreshCw className="w-4 h-4" />
                <span>Refresh</span>
              </Button>
            </div>

            {/* Incident Management Section */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Incident Management</h2>
                  <p className="text-gray-600">
                    Monitor and manage active incidents across your systems. Track impact, resolution progress, and
                    stakeholder communications.
                  </p>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <span className="mr-2">📤</span>
                  Send Incident Update
                </Button>
              </div>

              {/* Metrics Cards */}
              <IncidentMetrics />
            </div>

            {/* Active Incidents List */}
            <IncidentList />
          </div>
        </div>
      </div>
    </div>
  )
}
