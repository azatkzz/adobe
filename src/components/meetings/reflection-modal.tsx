"use client"

import { useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Lightbulb,
  X,
  Smile,
  Meh,
  Frown
} from "lucide-react"

interface ReflectionModalProps {
  meetingTitle: string
  onClose: () => void
  onSubmit: (data: any) => void
}

export function ReflectionModal({ meetingTitle, onClose, onSubmit }: ReflectionModalProps) {
  const [mood, setMood] = useState<'positive' | 'neutral' | 'negative'>()
  const [feedback, setFeedback] = useState("")
  const [takeaways, setTakeaways] = useState("")

  const moods = [
    { value: 'positive', icon: Smile, label: 'Productive' },
    { value: 'neutral', icon: Meh, label: 'Neutral' },
    { value: 'negative', icon: Frown, label: 'Could be better' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <ModernCard className="w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Meeting Reflection
            </h2>
            <p className="text-white/60">
              {meetingTitle}
            </p>
          </div>

          {/* Mood Selection */}
          <div className="space-y-3">
            <label className="text-sm text-white/60">
              How was the meeting?
            </label>
            <div className="flex gap-4">
              {moods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMood(m.value as any)}
                  className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-xl border 
                    transition-colors
                    ${mood === m.value 
                      ? 'bg-primary/10 border-primary/50 text-primary' 
                      : 'border-white/10 text-white/60 hover:bg-white/5'}`}
                >
                  <m.icon className="w-6 h-6" />
                  <span className="text-sm">{m.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Feedback */}
          <div className="space-y-3">
            <label className="text-sm text-white/60">
              What went well? What could be improved?
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full h-24 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                focus:border-primary/50 focus:outline-none focus:ring-0 
                text-white placeholder-white/40 resize-none"
              placeholder="Share your thoughts..."
            />
          </div>

          {/* Key Takeaways */}
          <div className="space-y-3">
            <label className="text-sm text-white/60">
              Key takeaways or action items
            </label>
            <textarea
              value={takeaways}
              onChange={(e) => setTakeaways(e.target.value)}
              className="w-full h-24 px-4 py-3 rounded-xl bg-white/5 border border-white/10 
                focus:border-primary/50 focus:outline-none focus:ring-0 
                text-white placeholder-white/40 resize-none"
              placeholder="What are your main takeaways?"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-white/60 hover:bg-white/5"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit({ mood, feedback, takeaways })}
              className="px-4 py-2 rounded-xl bg-primary text-white"
            >
              Submit Reflection
            </button>
          </div>
        </div>
      </ModernCard>
    </div>
  )
} 