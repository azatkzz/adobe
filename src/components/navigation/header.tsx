"use client"

import { Bell, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center justify-between px-4 lg:px-8 h-16">
        {/* Logo/Brand */}
        <div className="flex items-center gap-4">
          <button 
            className="lg:hidden p-2 hover:bg-white/5 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5 text-white/80" />
          </button>
          <span className="text-white font-semibold">Adobe Connect</span>
        </div>

        {/* Search (Desktop) */}
        <div className="hidden lg:block flex-1 max-w-2xl mx-8">
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-white/40"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-white/5 rounded-lg">
            <Bell className="w-5 h-5 text-white/80" />
          </button>
          <div className="hidden lg:block">
            <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-sm">JI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10">
          {/* Add mobile menu items here */}
        </div>
      )}
    </header>
  )
} 