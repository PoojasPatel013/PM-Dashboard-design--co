"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { ErrorPage } from "@/components/error-page"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <ErrorPage
        errorCode="500"
        title="Something Went Wrong"
        message="We encountered an unexpected error while processing your request."
        suggestion="This issue has been logged and our team will investigate. Please try again or contact support if the problem persists."
        showRetry
        onRetry={reset}
      />
    </div>
  )
}
