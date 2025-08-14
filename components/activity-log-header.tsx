import { Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ActivityLogHeader() {
  const lastUpdated = new Date().toLocaleString()

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Activity Log</h1>
        <p className="text-gray-600 mt-1">Track all incident communications and team updates</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">Last updated: {lastUpdated}</span>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button variant="outline" size="sm">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>
    </div>
  )
}
