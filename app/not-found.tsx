import { Navigation } from "@/components/navigation"
import { ErrorPage } from "@/components/error-page"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <ErrorPage
        errorCode="404"
        title="Page Not Found"
        message="The page you're looking for doesn't exist or has been moved."
        suggestion="Check the URL or return to the dashboard to find what you need."
      />
    </div>
  )
}
