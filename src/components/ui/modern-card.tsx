"use client"

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

interface ModernCardProps extends Omit<HTMLMotionProps<"div">, "className"> {
  className?: string
  interactive?: boolean
  gradient?: boolean
  children: React.ReactNode
}

export function ModernCard({ 
  className,
  interactive = true,
  gradient = false,
  children,
  ...props
}: ModernCardProps) {
  return (
    <motion.div
      whileHover={interactive ? { scale: 1.02 } : undefined}
      whileTap={interactive ? { scale: 0.98 } : undefined}
      className={cn(
        "relative rounded-2xl bg-white/5 border border-white/10 p-6",
        "backdrop-blur-sm shadow-lg",
        "transition-colors duration-200",
        "hover:bg-white/10",
        gradient && "bg-gradient-to-br from-primary/10 to-secondary/10",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
} 