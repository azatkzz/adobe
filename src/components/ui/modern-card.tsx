"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
  interactive?: boolean
  children: React.ReactNode
}

export function ModernCard({ 
  gradient,
  interactive,
  className, 
  children,
  ...props 
}: ModernCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { scale: 1.02 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      className={cn(
        "relative overflow-hidden",
        "bg-surface/90 backdrop-blur-xl",
        "border border-white/10",
        "rounded-2xl p-5",
        gradient && "bg-gradient-to-br from-primary/10 to-secondary/10",
        interactive && "cursor-pointer hover:bg-surfaceHover",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Glow effect */}
      {gradient && (
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
} 