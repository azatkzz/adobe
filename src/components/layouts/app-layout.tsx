"use client"

import { Iphone15Pro } from "@/components/ui/iphone-15-pro"
import { BottomNav } from "@/components/navigation/bottom-nav"
import { useEffect, useState } from "react"

export function AppLayout({ children }: { children: React.ReactNode }) {
  // Add hydration handling
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render until client-side hydration is complete
  if (!isMounted) {
    return null
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <div className="relative">
        <Iphone15Pro 
          width={433} 
          height={882}
          className="relative z-10"
        >
          <foreignObject x="21.25" y="19.25" width="389.5" height="843.5">
            <div className="w-full h-full overflow-hidden rounded-[55.75px] bg-black relative">
              {children}
              <BottomNav />
            </div>
          </foreignObject>
        </Iphone15Pro>
      </div>
    </main>
  )
} 