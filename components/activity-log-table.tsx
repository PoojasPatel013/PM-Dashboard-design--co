"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageSquare, Mail, Smartphone, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

interface ActivityLogEntry {
  id: string
  timestamp: string
  sender: string
  channel: "slack" | "email" | "sms"
  recipient: string
  subject: string
  summary: string
  severity: "high" | "medium" | "low"
  incidentId?: string
  status: "sent" | "delivered" | "failed"
}

export function ActivityLogTable() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Mock data - in real app this would come from API
  const activityData: ActivityLogEntry[] = [
    {
      id: "1",
      timestamp: "2024-01-15T15:45:00Z",
      sender: "Sarah Chen",
      channel: "slack",
      recipient: "#engineering",
      subject: "Database Connection Timeout - Resolution Update",
      summary: "Incident resolved: Database connection pool increased, monitoring shows normal response times",
      severity: "high",
      incidentId: "INC-001",
      status: "sent",
    },
    {
      id: "2",
      timestamp: "2024-01-15T15:30:00Z",
      sender: "Mike Rodriguez",
      channel: "email",
      recipient: "Stakeholders",
      subject: "Incident Update: Database Connection Issues",
      summary: "Update on ongoing database connection timeout affecting payment processing",
      severity: "high",
      incidentId: "INC-001",
      status: "delivered",
    },
    {
      id: "3",
      timestamp: "2024-01-15T15:15:00Z",
      sender: "System Alert",
      channel: "slack",
      recipient: "#incidents",
      subject: "New Incident Created: Database Connection Timeout",
      summary: "Automated alert for new high-severity incident affecting payment processing",
      severity: "high",
      incidentId: "INC-001",
      status: "sent",
    },
    {
      id: "4",
      timestamp: "2024-01-15T14:50:00Z",
      sender: "Alex Kim",
      channel: "email",
      recipient: "Customer Support",
      subject: "CDN Cache Issues - Customer Impact Notice",
      summary: "Notification about slower page load times in EU region affecting user experience",
      severity: "medium",
      incidentId: "INC-002",
      status: "delivered",
    },
    {
      id: "5",
      timestamp: "2024-01-15T14:30:00Z",
      sender: "DevOps Team",
      channel: "slack",
      recipient: "#devops",
      subject: "API Rate Limiting - Investigation Started",
      summary: "Team notified about third-party integration delays, investigation in progress",
      severity: "low",
      incidentId: "INC-003",
      status: "sent",
    },
    {
      id: "6",
      timestamp: "2024-01-15T14:15:00Z",
      sender: "Sarah Chen",
      channel: "sms",
      recipient: "On-call Team",
      subject: "Critical Alert: Database Connection Issues",
      summary: "SMS alert sent to on-call engineers about critical database connectivity problems",
      severity: "high",
      incidentId: "INC-001",
      status: "delivered",
    },
    {
      id: "7",
      timestamp: "2024-01-15T13:45:00Z",
      sender: "Mike Rodriguez",
      channel: "email",
      recipient: "Executive Team",
      subject: "Weekly Infrastructure Report",
      summary: "Regular weekly report on infrastructure status and upcoming maintenance windows",
      severity: "low",
      status: "delivered",
    },
    {
      id: "8",
      timestamp: "2024-01-15T13:30:00Z",
      sender: "System Alert",
      channel: "slack",
      recipient: "#monitoring",
      subject: "Performance Metrics Alert",
      summary: "Automated alert about elevated response times in payment processing system",
      severity: "medium",
      status: "sent",
    },
  ]

  const totalPages = Math.ceil(activityData.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentData = activityData.slice(startIndex, endIndex)

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "slack":
        return <MessageSquare className="w-4 h-4 text-purple-600" />
      case "email":
        return <Mail className="w-4 h-4 text-blue-600" />
      case "sms":
        return <Smartphone className="w-4 h-4 text-green-600" />
      default:
        return <MessageSquare className="w-4 h-4 text-gray-600" />
    }
  }

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium</Badge>
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low</Badge>
      default:
        return <Badge variant="secondary">{severity}</Badge>
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sent":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Sent</Badge>
      case "delivered":
        return <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Delivered</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Communication Activity</span>
          <span className="text-sm font-normal text-gray-600">{activityData.length} total entries</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Sender</TableHead>
                  <TableHead>Channel</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((entry) => {
                  const { date, time } = formatTimestamp(entry.timestamp)
                  return (
                    <TableRow key={entry.id}>
                      <TableCell>
                        <div className="text-sm">
                          <div className="font-medium">{date}</div>
                          <div className="text-gray-600">{time}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{entry.sender}</div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getChannelIcon(entry.channel)}
                          <span className="capitalize">{entry.channel}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">{entry.recipient}</div>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          <div className="font-medium text-sm truncate">{entry.subject}</div>
                          <div className="text-xs text-gray-600 truncate">{entry.summary}</div>
                        </div>
                      </TableCell>
                      <TableCell>{getSeverityBadge(entry.severity)}</TableCell>
                      <TableCell>{getStatusBadge(entry.status)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(endIndex, activityData.length)} of {activityData.length} entries
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
