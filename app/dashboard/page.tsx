import { DashboardHeader } from "@/components/dashboard-header"
import { ReleaseStatusCard } from "@/components/release-status-card"
import { IncidentSummaryCard } from "@/components/incident-summary-card"
import { SidebarNavigation } from "@/components/sidebar-navigation"
import { IncidentMetrics } from "@/components/incident-metrics"
import { IncidentList } from "@/components/incident-list"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <SidebarNavigation />

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <DashboardHeader />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <ReleaseStatusCard />
              <IncidentSummaryCard />
            </div>

            <div className="mb-8">
              <IncidentMetrics />
            </div>

            <IncidentList />
          </div>
        </div>
      </div>
    </div>
  )
}
