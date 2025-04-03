"use client"

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ActionButtonProps {
  icon: LucideIcon
  label: string
  active?: boolean
  onClick?: () => void
  className?: string
}

export function ActionButton({ 
  icon: Icon, 
  label, 
  active, 
  onClick,
  className 
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-1",
        "w-14 transition-transform hover:scale-105",
        className
      )}
    >
      <div className={cn(
        "w-14 h-14 rounded-full flex items-center justify-center",
        "transition-colors duration-200",
        active 
          ? "bg-primary" 
          : "bg-white/10 hover:bg-white/20"
      )}>
        <Icon className={cn(
          "w-6 h-6",
          active ? "text-background" : "text-white/60"
        )} />
      </div>
      <span className="text-xs text-white/60">
        {label}
      </span>
    </button>
  )
} 