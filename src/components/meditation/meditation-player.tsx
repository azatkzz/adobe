"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { 
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Moon,
  Sun,
  X
} from "lucide-react"
import { ModernCard } from "@/components/ui/modern-card"
import type { Meditation } from "@/types/meditation"

interface MeditationPlayerProps {
  meditation: Meditation
  onClose: () => void
}

export function MeditationPlayer({ meditation, onClose }: MeditationPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.8)
  const [isMuted, setIsMuted] = useState(false)
  const [ambientMode, setAmbientMode] = useState<'light' | 'dark'>('dark')
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const intervalRef = useRef<number | null>(null)

  // Convert duration string to seconds
  const totalDuration = parseInt(meditation.duration) * 60

  const clearCurrentInterval = () => {
    if (intervalRef.current !== null) {
      window.clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1
          setProgress((newTime / totalDuration) * 100)
          if (newTime >= totalDuration) {
            setIsPlaying(false)
            clearCurrentInterval()
            return 0
          }
          return newTime
        })
      }, 1000)
    }

    return () => {
      clearCurrentInterval()
    }
  }, [isPlaying, totalDuration])

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        clearCurrentInterval()
      } else {
        audioRef.current.play()
        intervalRef.current = window.setInterval(() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
            setProgress((audioRef.current.currentTime / totalDuration) * 100)
          }
        }, 1000)
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value)
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
    >
      <ModernCard className="w-full max-w-lg relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Ambient Background */}
        <div 
          className={`absolute inset-0 transition-colors duration-1000 ${
            ambientMode === 'dark' 
              ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20' 
              : 'bg-gradient-to-br from-orange-400/20 to-yellow-400/20'
          }`}
        >
          <div className="absolute inset-0 backdrop-blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <span className="text-8xl animate-float">
              {meditation.emoji}
            </span>
            <h2 className="text-2xl font-semibold text-white mt-4">
              {meditation.title}
            </h2>
            <p className="text-white/60">
              {meditation.description}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-secondary"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between text-sm text-white/60">
              <span>{formatTime(currentTime)}</span>
              <span>{meditation.duration}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button 
              onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
              className="p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <SkipBack className="w-6 h-6 text-white/80" />
            </button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlayPause}
              className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </motion.button>

            <button 
              onClick={() => setCurrentTime(Math.min(totalDuration, currentTime + 10))}
              className="p-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <SkipForward className="w-6 h-6 text-white/80" />
            </button>
          </div>

          {/* Settings */}
          <div className="flex items-center justify-between">
            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white/60" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white/60" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-20 accent-white/60"
              />
            </div>

            {/* Ambient Mode Toggle */}
            <button
              onClick={() => setAmbientMode(prev => prev === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {ambientMode === 'dark' ? (
                <Moon className="w-5 h-5 text-white/60" />
              ) : (
                <Sun className="w-5 h-5 text-white/60" />
              )}
            </button>
          </div>
        </div>

        {/* Audio Element */}
        {meditation.audioUrl && (
          <audio
            ref={audioRef}
            src={meditation.audioUrl}
            loop={false}
            muted={isMuted}
            onEnded={() => {
              setIsPlaying(false)
              clearCurrentInterval()
            }}
          />
        )}
      </ModernCard>
    </motion.div>
  )
} 