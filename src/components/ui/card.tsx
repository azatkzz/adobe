"use client"

import { cn } from "@/lib/utils"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  highlight?: boolean
  interactive?: boolean
  children: React.ReactNode
}

export function Card({ 
  highlight, 
  interactive,
  className, 
  children,
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface/80 backdrop-blur-lg rounded-xl p-4",
        "border border-white/10",
        highlight && "bg-white/10",
        interactive && "hover:bg-white/15 cursor-pointer transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardAction({ children, className, ...props }: CardProps) {
  return (
    <button
      className={cn(
        "w-full text-left",
        "bg-white/5 hover:bg-white/10",
        "rounded-lg px-4 py-3",
        "border border-white/10",
        "transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
} 