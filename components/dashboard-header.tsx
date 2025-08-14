import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  const lastUpdated = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 text-sm mt-1">Last refreshed: {lastUpdated}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Last updated: {lastUpdated}</span>
        <Button variant="outline" size="sm" className="border-gray-300 bg-transparent">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
    </div>
  )
}
