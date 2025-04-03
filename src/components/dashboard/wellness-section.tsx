"use client"

import { ModernCard } from "@/components/ui/modern-card"
import { 
  Calendar,
  Clock, 
  Brain,
  Sparkles,
  Wind,
  Waves,
  TreePine,
  Coffee,
  ChevronRight,
  PlayCircle,
  Timer
} from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { MeditationPlayer } from "@/components/meditation/meditation-player"

// Mock calendar data
const schedule = [
  { 
    id: 1,
    title: "Team Sync",
    start: "09:00",
    end: "10:00",
    type: "meeting"
  },
  { 
    id: 2,
    title: "Lunch Break",
    start: "12:00",
    end: "13:00",
    type: "break"
  },
  { 
    id: 3,
    title: "Design Review",
    start: "14:00",
    end: "15:30",
    type: "meeting"
  }
]

// Meditation suggestions based on break duration
const meditationSuggestions = [
  {
    id: 1,
    title: "Quick Refresh",
    duration: "5 min",
    emoji: "🌟",
    description: "Perfect for short breaks",
    theme: "Energy",
    icon: Sparkles,
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400"
  },
  {
    id: 2,
    title: "Calm Mind",
    duration: "10 min",
    emoji: "🌊",
    description: "Reduce stress and anxiety",
    theme: "Peace",
    icon: Waves,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400"
  },
  {
    id: 3,
    title: "Forest Bath",
    duration: "15 min",
    emoji: "🌲",
    description: "Deep relaxation session",
    theme: "Nature",
    icon: TreePine,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-400"
  }
]

export function WellnessSection() {
  const [selectedMeditation, setSelectedMeditation] = useState<typeof meditationSuggestions[0] | null>(null)

  // In a real app, this would be calculated from actual calendar data
  const nextBreak = {
    start: "12:00",
    end: "13:00",
    duration: 60 // minutes
  }

  return (
    <section className="space-y-8">
      {/* Wellness Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent p-6">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <h2 className="text-lg font-medium text-white">Wellness Break</h2>
          </div>
          <p className="text-white/80">
            You have a {nextBreak.duration} minute break at {nextBreak.start}. 
            Take some time to recharge!
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 text-8xl rotate-12 opacity-30">
          🧘
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white/80 font-medium">Today's Schedule</h3>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Clock className="w-4 h-4" />
            <span>
              {new Date().toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {schedule.map((event) => (
            <div 
              key={event.id}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 text-sm text-white/60">
                {event.start}
              </div>
              <div className="flex-1">
                <div className="text-white font-medium">
                  {event.title}
                </div>
                <div className="text-white/60 text-sm">
                  {event.start} - {event.end}
                </div>
              </div>
              {event.type === 'break' && (
                <div className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                  Break Time
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Meditation Suggestions */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white/80 font-medium">
            Recommended for Your Break
          </h3>
          <button className="text-white/60 hover:text-white text-sm flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {meditationSuggestions.map((meditation) => (
            <ModernCard
              key={meditation.id}
              interactive
              className="group"
              onClick={() => setSelectedMeditation(meditation)}
            >
              <div className={`relative h-32 -mx-5 -mt-5 mb-4 rounded-t-2xl bg-gradient-to-br ${meditation.gradient} flex items-center justify-center`}>
                <span className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                  {meditation.emoji}
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-medium text-white">
                      {meditation.title}
                    </h3>
                    <div className="flex items-center gap-1 text-white/60 text-sm">
                      <Timer className="w-4 h-4" />
                      <span>{meditation.duration}</span>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">
                    {meditation.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${meditation.gradient} flex items-center justify-center`}>
                      <meditation.icon className={`w-4 h-4 ${meditation.iconColor}`} />
                    </div>
                    <span className="text-white/60 text-sm">
                      {meditation.theme}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                  >
                    <PlayCircle className="w-6 h-6 text-white" />
                  </motion.button>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>

      {/* Meditation Player Modal */}
      {selectedMeditation && (
        <MeditationPlayer
          meditation={selectedMeditation}
          onClose={() => setSelectedMeditation(null)}
        />
      )}
    </section>
  )
} 