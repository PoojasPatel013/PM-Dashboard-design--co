import { Navigation } from "@/components/navigation"
import { ErrorPage } from "@/components/error-page"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <ErrorPage
        errorCode="503"
        title="Scheduled Maintenance"
        message="We're currently performing scheduled maintenance to improve your experience."
        suggestion="We'll be back online shortly. Thank you for your patience."
      />
    </div>
  )
}
