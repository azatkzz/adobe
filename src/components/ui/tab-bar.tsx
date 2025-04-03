"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface Tab {
  id: string
  label: string
}

interface TabBarProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  highlight?: boolean
}

export function TabBar({ tabs, activeTab, onChange, highlight = true }: TabBarProps) {
  return (
    <div className="flex gap-6 border-b border-white/10">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "relative pb-2 text-sm font-medium transition-colors",
            activeTab === tab.id 
              ? highlight ? "text-primary" : "text-white" 
              : "text-white/60 hover:text-white/80"
          )}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className={cn(
                "absolute bottom-0 left-0 right-0 h-0.5",
                highlight ? "bg-primary" : "bg-white"
              )}
              initial={false}
            />
          )}
        </button>
      ))}
    </div>
  )
} 