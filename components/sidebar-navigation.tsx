"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export function SidebarNavigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/dashboard", label: "Releases", icon: "🚀" },
    { href: "/incidents", label: "Incidents", icon: "⚠️" },
    { href: "/activity-log", label: "Activity Log", icon: "📊" },
    { href: "/team-map", label: "Team Map", icon: "🗺️" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 flex items-center justify-center">
            <Image src="/owl-logo.png" alt="PM Dashboard" width={32} height={32} className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">PM Dashboard</h1>
            <p className="text-sm text-gray-500">MVP Release Monitor</p>
          </div>
        </Link>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
