"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { MoodTracker } from "@/components/wellness/mood-tracker"
import { 
  Brain,
  Heart,
  Flower2,
  Moon,
  Sun,
  Wind,
  Music,
  Timer,
  PlayCircle
} from "lucide-react"
import { useState } from "react"

const meditations = [
  {
    id: 1,
    title: "Morning Focus",
    duration: "10 min",
    category: "Focus",
    icon: Sun,
    description: "Start your day with clarity and purpose",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-500",
    audio: "/meditations/morning-focus.mp3"
  },
  {
    id: 2,
    title: "Midday Reset",
    duration: "5 min",
    category: "Break",
    icon: Flower2,
    description: "Quick reset between meetings",
    color: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-500",
    audio: "/meditations/midday-reset.mp3"
  },
  {
    id: 3,
    title: "Deep Work",
    duration: "15 min",
    category: "Focus",
    icon: Brain,
    description: "Enhance concentration and productivity",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500",
    audio: "/meditations/deep-work.mp3"
  },
  {
    id: 4,
    title: "Evening Wind Down",
    duration: "10 min",
    category: "Relax",
    icon: Moon,
    description: "Transition from work to personal time",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-500",
    audio: "/meditations/evening-wind-down.mp3"
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
  const [selectedMeditation, setSelectedMeditation] = useState<typeof meditations[0] | null>(null)

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
                  <div className={`h-24 -mx-5 -mt-5 rounded-t-xl bg-gradient-to-br ${meditation.color}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <ModernCard className="w-full max-w-lg">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {selectedMeditation.title}
                  </h3>
                  <p className="text-white/60">
                    {selectedMeditation.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedMeditation(null)}
                  className="p-2 rounded-full hover:bg-white/5"
                >
                  <Wind className="w-5 h-5 text-white/60" />
                </button>
              </div>

              <div className="flex justify-center">
                <button className="w-20 h-20 rounded-full bg-primary/10 hover:bg-primary/20 
                  flex items-center justify-center transition-colors">
                  <PlayCircle className="w-12 h-12 text-primary" />
                </button>
              </div>

              <div className="space-y-2">
                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-0 bg-primary rounded-full" />
                </div>
                <div className="flex justify-between text-sm text-white/40">
                  <span>0:00</span>
                  <span>{selectedMeditation.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full hover:bg-white/5">
                    <Music className="w-5 h-5 text-white/60" />
                  </button>
                  <span className="text-white/60">Ambient Sound</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-24"
                />
              </div>
            </div>
          </ModernCard>
        </div>
      )}
    </AppLayout>
  )
} 