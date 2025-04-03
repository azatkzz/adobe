"use client"

import { useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Smile,
  Meh,
  Frown,
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react"

const moodLevels = [
  { value: 5, icon: Smile, label: "Great", color: "text-green-400" },
  { value: 4, icon: Smile, label: "Good", color: "text-green-300" },
  { value: 3, icon: Meh, label: "Okay", color: "text-yellow-400" },
  { value: 2, icon: Frown, label: "Not Great", color: "text-orange-400" },
  { value: 1, icon: Frown, label: "Struggling", color: "text-red-400" }
]

export function MoodTracker() {
  const [currentMood, setCurrentMood] = useState<number>()

  return (
    <div className="space-y-6">
      {/* Current Mood Selection */}
      <ModernCard>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">
            How are you feeling?
          </h3>
          <div className="flex gap-2">
            {moodLevels.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setCurrentMood(mood.value)}
                className={`flex-1 flex flex-col items-center gap-2 p-3 rounded-xl 
                  transition-colors
                  ${currentMood === mood.value 
                    ? 'bg-white/10 ' + mood.color
                    : 'text-white/60 hover:bg-white/5'}`}
              >
                <mood.icon className="w-6 h-6" />
                <span className="text-xs">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>
      </ModernCard>

      {/* Simple Mood Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <ModernCard>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/60">
              <TrendingUp className="w-4 h-4" />
              <span>Average Mood</span>
            </div>
            <p className="text-2xl font-semibold text-white">4.2</p>
          </div>
        </ModernCard>

        <ModernCard>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-4 h-4" />
              <span>Best Time</span>
            </div>
            <p className="text-2xl font-semibold text-white">2:00 PM</p>
          </div>
        </ModernCard>

        <ModernCard>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="w-4 h-4" />
              <span>Tracked Days</span>
            </div>
            <p className="text-2xl font-semibold text-white">15</p>
          </div>
        </ModernCard>
      </div>

      {/* Basic Mood History */}
      <ModernCard>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">Recent Moods</h3>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-white/60">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
            </select>
          </div>

          <div className="space-y-2">
            {[
              { time: "9:00 AM", mood: 4 },
              { time: "11:00 AM", mood: 3 },
              { time: "2:00 PM", mood: 5 },
              { time: "4:00 PM", mood: 4 }
            ].map((entry, i) => (
              <div 
                key={i}
                className="flex items-center justify-between p-3 rounded-lg bg-white/5"
              >
                <span className="text-white/60">{entry.time}</span>
                <div className="flex items-center gap-2">
                  {entry.mood >= 4 ? (
                    <Smile className="w-5 h-5 text-green-400" />
                  ) : entry.mood === 3 ? (
                    <Meh className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Frown className="w-5 h-5 text-red-400" />
                  )}
                  <span className="text-white">{entry.mood}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ModernCard>
    </div>
  )
} 