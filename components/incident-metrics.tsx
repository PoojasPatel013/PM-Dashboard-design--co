"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Users, Clock, Activity } from "lucide-react"

export function IncidentMetrics() {
  const metrics = [
    {
      value: "4",
      label: "Active Incidents",
      sublabel: "1 high severity",
      icon: AlertTriangle,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      value: "18,610",
      label: "Affected Users",
      sublabel: "Across all incidents",
      icon: Users,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      value: "2h 3m",
      label: "Avg. Resolution",
      sublabel: "Current incidents",
      icon: Clock,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      value: "99.2%",
      label: "System Uptime",
      sublabel: "Last 30 days",
      icon: Activity,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Incident Management</h2>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">📧 Send Incident Update</Button>
      </div>
      <p className="text-gray-600 text-sm mb-6">
        Monitor and manage active incidents across your systems. Track impact, resolution progress, and stakeholder
        communications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <Card key={index} className="border border-gray-200 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${metric.bgColor}`}>
                    <IconComponent className={`w-5 h-5 ${metric.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm font-medium text-gray-900">{metric.label}</div>
                    <div className="text-xs text-gray-500">{metric.sublabel}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
