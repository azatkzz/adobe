"use client"

import { useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Brain,
  PlayCircle,
  PauseCircle,
  Volume2,
  Clock,
  X
} from "lucide-react"

const meditations = [
  {
    id: 1,
    title: "Quick Focus",
    duration: "5 min",
    description: "A short meditation to help you center before your meeting",
    audioUrl: "/meditations/quick-focus.mp3"
  },
  {
    id: 2,
    title: "Calm Mind",
    duration: "10 min",
    description: "Reduce anxiety and prepare mentally",
    audioUrl: "/meditations/calm-mind.mp3"
  }
]

interface MindfulnessReminderProps {
  nextMeeting: {
    title: string
    startTime: string
  }
  timeUntilMeeting: number // in minutes
  onClose: () => void
}

export function MindfulnessReminder({ nextMeeting, timeUntilMeeting, onClose }: MindfulnessReminderProps) {
  const [selectedMeditation, setSelectedMeditation] = useState<typeof meditations[0] | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <ModernCard className="relative overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5"
      >
        <X className="w-5 h-5 text-white/60" />
      </button>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-primary/20">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-white">
              Time for Mindfulness
            </h3>
            <p className="text-white/60">
              You have {timeUntilMeeting} minutes before your next meeting
            </p>
          </div>
        </div>

        {!selectedMeditation ? (
          <div className="grid gap-4">
            {meditations.map((meditation) => (
              <button
                key={meditation.id}
                onClick={() => setSelectedMeditation(meditation)}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 
                  hover:bg-white/10 transition-colors text-left"
              >
                <div className="flex-1">
                  <h4 className="text-white font-medium mb-1">
                    {meditation.title}
                  </h4>
                  <p className="text-white/60 text-sm">
                    {meditation.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-white/40">
                  <Clock className="w-4 h-4" />
                  <span>{meditation.duration}</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-primary/10 hover:bg-primary/20 
                  flex items-center justify-center transition-colors"
              >
                {isPlaying ? (
                  <PauseCircle className="w-12 h-12 text-primary" />
                ) : (
                  <PlayCircle className="w-12 h-12 text-primary" />
                )}
              </button>
            </div>

            <div className="space-y-2">
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all"
                  style={{ width: '30%' }}
                />
              </div>
              <div className="flex justify-between text-sm text-white/40">
                <span>1:30</span>
                <span>{selectedMeditation.duration}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedMeditation(null)}
              className="w-full px-4 py-2 rounded-xl bg-white/5 text-white/60 
                hover:bg-white/10 transition-colors"
            >
              Choose Another
            </button>
          </div>
        )}
      </div>
    </ModernCard>
  )
} 