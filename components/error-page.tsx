"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import Link from "next/link"

interface ErrorPageProps {
  errorCode: string
  title: string
  message: string
  suggestion?: string
  showRetry?: boolean
  onRetry?: () => void
}

export function ErrorPage({ errorCode, title, message, suggestion, showRetry, onRetry }: ErrorPageProps) {
  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardContent className="p-8 space-y-6">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            <div className="space-y-2">
              <div className="text-6xl font-bold text-gray-300">{errorCode}</div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>

          <div className="space-y-3 text-gray-600">
            <p>{message}</p>
            {suggestion && <p className="text-sm">{suggestion}</p>}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/dashboard" className="flex-1">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                <Home className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>

            {showRetry && onRetry && (
              <Button variant="outline" onClick={onRetry} className="flex-1 bg-transparent">
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            )}
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">
              Need help? Contact our{" "}
              <a href="mailto:support@company.com" className="text-emerald-600 hover:underline">
                support team
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
