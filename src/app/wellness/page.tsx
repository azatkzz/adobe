"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { MoodTracker } from "@/components/wellness/mood-tracker"
import { 
  Brain,
  Sun,
  Moon,
  Wind,
  Heart,
  Timer,
  PlayCircle
} from "lucide-react"
import { useState } from "react"
import { MeditationPlayer } from "@/components/wellness/meditation-player"
import type { Meditation } from "@/types/meditation"

const meditations: Meditation[] = [
  {
    id: "1",
    title: "Morning Mindfulness",
    duration: "10 min",
    emoji: "🌅",
    description: "Start your day with clarity and purpose",
    theme: "morning",
    icon: Sun,
    gradient: "from-orange-500/10 to-yellow-500/10",
    iconColor: "text-orange-400",
    audioUrl: "/meditations/morning.mp3"
  },
  {
    id: "2",
    title: "Evening Relaxation",
    duration: "15 min",
    emoji: "��",
    description: "Unwind and prepare for restful sleep",
    theme: "evening",
    icon: Moon,
    gradient: "from-indigo-500/10 to-purple-500/10",
    iconColor: "text-indigo-400",
    audioUrl: "/meditations/evening.mp3"
  },
  {
    id: "3",
    title: "Stress Relief",
    duration: "8 min",
    emoji: "🍃",
    description: "Quick stress relief session",
    theme: "stress",
    icon: Wind,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-400",
    audioUrl: "/meditations/stress.mp3"
  },
  {
    id: "4",
    title: "Loving Kindness",
    duration: "12 min",
    emoji: "💝",
    description: "Cultivate compassion and kindness",
    theme: "compassion",
    icon: Heart,
    gradient: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-400",
    audioUrl: "/meditations/kindness.mp3"
  }
]

const wellnessStats = [
  {
    label: "Meditation Minutes",
    value: "45",
    icon: Timer,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    label: "Mood Score",
    value: "4.2",
    icon: Heart,
    color: "text-red-400",
    bgColor: "bg-red-500/20"
  },
  {
    label: "Mindful Days",
    value: "12",
    icon: Brain,
    color: "text-purple-400",
    bgColor: "bg-purple-500/20"
  }
]

export default function WellnessPage() {
  const [selectedMeditation, setSelectedMeditation] = useState<Meditation | null>(null)

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white">Wellness Hub</h1>
          <p className="text-white/60">Take care of your mental and emotional wellbeing</p>
        </div>

        {/* Stats Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          {wellnessStats.map((stat) => (
            <ModernCard key={stat.label}>
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="text-sm text-white/60">{stat.label}</p>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2">
          <ModernCard className="bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white">Quick Meditation</h3>
                <p className="text-white/60">Take a 5-minute mindfulness break</p>
              </div>
              <button className="p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
                <PlayCircle className="w-6 h-6 text-primary" />
              </button>
            </div>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-purple-500/20 to-purple-500/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/20">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-white">Track Mood</h3>
                <p className="text-white/60">Log your emotional wellbeing</p>
              </div>
              <button className="p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                <Heart className="w-6 h-6 text-purple-400" />
              </button>
            </div>
          </ModernCard>
        </div>

        {/* Meditations */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Guided Meditations</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {meditations.map((meditation) => (
              <ModernCard
                key={meditation.id}
                className="cursor-pointer group"
                onClick={() => setSelectedMeditation(meditation)}
              >
                <div className="space-y-4">
                  <div className={`h-24 -mx-5 -mt-5 rounded-t-xl bg-gradient-to-br ${meditation.gradient}
                    flex items-center justify-center`}>
                    <meditation.icon className={`w-8 h-8 ${meditation.iconColor}`} />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">
                      {meditation.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {meditation.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white/40">
                      <Timer className="w-4 h-4" />
                      <span className="text-sm">{meditation.duration}</span>
                    </div>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 
                      transition-colors group-hover:bg-primary/10">
                      <PlayCircle className="w-5 h-5 text-white/60 group-hover:text-primary" />
                    </button>
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>

        {/* Mood Tracking */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Mood Tracking</h2>
          <MoodTracker />
        </div>
      </div>

      {/* Meditation Player Modal */}
      {selectedMeditation && (
        <MeditationPlayer
          meditation={selectedMeditation}
          onClose={() => setSelectedMeditation(null)}
        />
      )}
    </AppLayout>
  )
} 