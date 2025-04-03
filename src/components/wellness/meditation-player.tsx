"use client"

import { useState, useEffect } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Play, 
  Pause, 
  X, 
  Volume2, 
  SkipBack, 
  SkipForward 
} from "lucide-react"
import type { Meditation } from "@/types/meditation"

interface MeditationPlayerProps {
  meditation: Meditation
  onClose: () => void
}

export function MeditationPlayer({ meditation, onClose }: MeditationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Reset state when meditation changes
    setIsPlaying(false)
    setProgress(0)
  }, [meditation.id])

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <ModernCard className="w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${meditation.gradient}`}>
              <meditation.icon className={`w-8 h-8 ${meditation.iconColor}`} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{meditation.title}</h2>
              <p className="text-white/60">{meditation.duration}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-1 bg-white/10 rounded-full">
              <div 
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-sm text-white/40">
              <span>0:00</span>
              <span>{meditation.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <SkipBack className="w-6 h-6 text-white/60" />
            </button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-4 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-primary" />
              ) : (
                <Play className="w-8 h-8 text-primary" />
              )}
            </button>

            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <SkipForward className="w-6 h-6 text-white/60" />
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <Volume2 className="w-5 h-5 text-white/40" />
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="w-3/4 h-full bg-white/40 rounded-full" />
            </div>
          </div>
        </div>
      </ModernCard>
    </div>
  )
} 