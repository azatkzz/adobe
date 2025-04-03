"use client"

import { cn } from "@/lib/utils"
import { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react"

// Omit children from base props since it will come from HTML attributes
interface BaseCardProps {
  highlight?: boolean
  interactive?: boolean
  className?: string
}

// For regular card div
type CardDivProps = BaseCardProps & {
  as?: "div"
  children?: ReactNode
} & Omit<HTMLAttributes<HTMLDivElement>, 'children'>

// For button card
type CardButtonProps = BaseCardProps & {
  as: "button"
  children?: ReactNode
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'>

type CardProps = CardDivProps | CardButtonProps

export function Card({ 
  children, 
  highlight = false, 
  interactive = false,
  className,
  as = "div",
  ...props
}: CardProps) {
  // Use proper type checking to determine the component type
  if (as === "button") {
    return (
      <button
        className={cn(
          "rounded-xl p-4",
          "bg-surface border border-surface",
          highlight && "border-primary/50",
          interactive && "hover:border-primary/50 cursor-pointer transition-colors",
          className
        )}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    )
  }

  return (
    <div
      className={cn(
        "rounded-xl p-4",
        "bg-surface border border-surface",
        highlight && "border-primary/50",
        interactive && "hover:border-primary/50 cursor-pointer transition-colors",
        className
      )}
      {...(props as HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  )
}

export function CardAction({ 
  children, 
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "w-full text-left",
        "bg-white/5 hover:bg-white/10",
        "px-4 py-3 rounded-lg",
        "transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export function CardContent({ 
  children, 
  className 
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  )
} 