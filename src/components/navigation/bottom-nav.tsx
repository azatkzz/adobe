"use client"

import { Home, Search, Coffee, Trophy, Users } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export function BottomNav() {
  const router = useRouter()
  const pathname = usePathname()

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/search', label: 'Search' },
    { icon: Coffee, path: '/coffee-chat', label: 'Coffee Chat', hasNotification: true },
    { icon: Trophy, path: '/dashboard', label: 'Dashboard' },
    { icon: Users, path: '/goals', label: 'Goals' }
  ]

  return (
    <nav className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-xl border-t border-white/10">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => (
          <button 
            key={item.path}
            className="p-2 group relative"
            onClick={() => router.push(item.path)}
          >
            {item.hasNotification && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full" />
            )}
            <item.icon 
              className={`w-6 h-6 transition-all ${
                pathname === item.path
                  ? 'text-red-500'
                  : 'text-white/60 group-hover:text-white'
              } group-hover:scale-110`}
            />
          </button>
        ))}
      </div>
    </nav>
  )
} 