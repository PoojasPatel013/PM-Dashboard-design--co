"use client"

import { LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <Image src="/owl-logo.png" alt="PM Dashboard" width={32} height={32} className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">PM Dashboard</span>
                <div className="text-sm text-gray-500">MVP Release Monitor</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/dashboard"
                className={`font-medium ${
                  pathname === "/dashboard" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🚀 Releases
              </Link>
              <Link
                href="/incidents"
                className={`font-medium ${
                  pathname === "/incidents" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🔴 Incidents
              </Link>
              <Link
                href="/activity-log"
                className={`font-medium ${
                  pathname === "/activity-log" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                📊 Activity Log
              </Link>
              <Link
                href="/team-map"
                className={`font-medium ${
                  pathname === "/team-map" ? "text-blue-600" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                🗺️ Team Map
              </Link>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-emerald-100 text-emerald-700">JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}
