"use client"

import { ModernCard } from "@/components/ui/modern-card"
import { 
  Brain
} from "lucide-react"

interface MindfulnessReminderProps {
  nextMeeting: {
    title: string
    time: string
  }
  timeUntil: number
}

export function MindfulnessReminder({ timeUntil }: MindfulnessReminderProps) {
  return (
    <ModernCard className="bg-gradient-to-br from-purple-500/20 to-blue-500/20">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-purple-500/20">
          <Brain className="w-6 h-6 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-white">
            Time for Mindfulness
          </h3>
          <p className="text-white/60 mb-4">
            You have {timeUntil} minutes before your next meeting
          </p>
          <p className="text-white/60">
            {`Don't forget your daily meditation session`}
          </p>
          <button className="px-4 py-2 rounded-xl bg-purple-500/10 
            hover:bg-purple-500/20 text-purple-400 text-sm">
            Start Quick Meditation
          </button>
        </div>
      </div>
    </ModernCard>
  )
} 