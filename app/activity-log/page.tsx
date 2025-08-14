import { Navigation } from "@/components/navigation"
import { ActivityLogHeader } from "@/components/activity-log-header"
import { ActivityLogFilters } from "@/components/activity-log-filters"
import { ActivityLogTable } from "@/components/activity-log-table"

export default function ActivityLogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ActivityLogHeader />
        <div className="space-y-6">
          <ActivityLogFilters />
          <ActivityLogTable />
        </div>
      </main>
    </div>
  )
}
