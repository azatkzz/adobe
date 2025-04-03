"use client"

import { Card } from "./card"
import { Heart, Edit } from "lucide-react"
import { motion } from "framer-motion"

interface OrderCardProps {
  title: string
  description: string
  image: string
  onReorder?: () => void
  onEdit?: () => void
  onFavorite?: () => void
  className?: string
}

export function OrderCard({
  title,
  description,
  image,
  onReorder,
  onEdit,
  onFavorite,
  className
}: OrderCardProps) {
  return (
    <Card className={`overflow-hidden ${className || ''}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-white/60 text-sm">{description}</p>
        </div>
        <div className="flex gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            onClick={onEdit}
          >
            <Edit className="w-5 h-5 text-white/60" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            onClick={onFavorite}
          >
            <Heart className="w-5 h-5 text-white/60" />
          </motion.button>
        </div>
      </div>

      <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 px-4 rounded-full bg-primary text-background font-medium"
        onClick={onReorder}
      >
        Reorder
      </motion.button>
    </Card>
  )
} 