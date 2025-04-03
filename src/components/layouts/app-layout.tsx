"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { 
  Home, 
  Coffee, 
  Calendar, 
  Trophy,
  Users,
  Settings,
  LogOut,
  Bell,
  ShoppingBag,
  ClipboardList,
  Heart,
  Utensils
} from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { 
    icon: Home, 
    label: "Home", 
    path: "/",
    description: "Overview and activity"
  },
  { 
    icon: Coffee, 
    label: "Community", 
    path: "/community",
    description: "Join interest groups and connect"
  },
  { 
    icon: Calendar, 
    label: "Events", 
    path: "/events",
    description: "Upcoming activities"
  },
  { 
    icon: Trophy, 
    label: "Dashboard", 
    path: "/dashboard",
    description: "Your achievements"
  },
  { 
    icon: Users, 
    label: "Goals", 
    path: "/goals",
    description: "Track your progress"
  },
  { 
    icon: ShoppingBag, 
    label: "Store", 
    path: "/store",
    description: "Redeem rewards"
  },
  {
    icon: ClipboardList,
    label: "Surveys",
    path: "/surveys",
    description: "Provide feedback and earn points"
  },
  {
    icon: Heart,
    label: "Wellness",
    path: "/wellness",
    description: "Mindfulness and wellbeing"
  },
  {
    icon: Utensils,
    label: "Food",
    path: "/food",
    description: "Healthy meal options"
  }
]

export function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen">
        <div className="lg:pl-72">
          <div className="min-h-screen">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Ambient background effect */}
      <div className="ambient-glow" />

      {/* Desktop Sidebar */}
      <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 glass">
        <div className="flex flex-col w-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-white/5">
            <span className="text-xl font-semibold gradient-text">
              Adobe Life
            </span>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 py-8 px-4">
            <div className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                    pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-white/5">
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5">
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-72">
        {/* Top Bar */}
        <div className="sticky top-0 z-40 h-16 glass">
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-lg font-medium text-white">Welcome Back</h1>
            <button className="p-2 rounded-full hover:bg-white/5">
              <Bell className="w-5 h-5 text-white/60" />
            </button>
          </div>
        </div>

        <div className="min-h-[calc(100vh-4rem)] p-6">
          {children}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden">
        <div className="glass border-t border-white/5">
          <div className="flex justify-around py-2">
            {sidebarItems.map((item) => (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className="flex flex-col items-center gap-1 p-2"
              >
                <item.icon 
                  className={cn(
                    "w-6 h-6 transition-colors",
                    pathname === item.path
                      ? "text-primary"
                      : "text-white/60"
                  )}
                />
                <span className="text-xs text-white/60">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 