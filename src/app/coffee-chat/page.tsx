"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { 
  Bell,
  Coffee,
  Users,
  Home,
  Search,
  Trophy,
  Globe2,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  Video,
  Building2,
  ArrowRight,
  CalendarClock
} from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type MatchMode = 'local' | 'global'
type TimePreference = 'now' | 'today' | 'schedule'

const suggestedMatches = [
  {
    name: "Alex Rivera",
    role: "Product Manager",
    location: "San Francisco",
    interests: ["Design Systems", "User Research", "Coffee Enthusiast"],
    avatar: "AR",
    matchScore: 92
  },
  {
    name: "Emma Chen",
    role: "Visual Designer",
    location: "Singapore",
    interests: ["UI Animation", "Typography", "Tea Culture"],
    avatar: "EC",
    matchScore: 88
  }
]

export default function CoffeeChatPage() {
  const router = useRouter()
  const [matchMode, setMatchMode] = useState<MatchMode>('local')
  const [timePreference, setTimePreference] = useState<TimePreference>('now')
  const [isMatching, setIsMatching] = useState(false)

  const handleStartMatching = () => {
    setIsMatching(true)
    // Simulate matching process
    setTimeout(() => {
      setIsMatching(false)
    }, 2000)
  }

  return (
    <AppLayout>
      <>
        {/* Status Bar */}
        <div className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white/80 text-sm font-medium">9:41</span>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="absolute inset-0 top-12 bottom-16 overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 opacity-90" />
            <div className="relative px-6 pt-8 pb-12">
              <h1 className="text-2xl font-semibold text-white mb-2">Coffee Chat Mixer</h1>
              <p className="text-white/80 text-sm">Connect with colleagues over a virtual coffee ☕</p>
            </div>
          </section>

          {/* Match Mode Selection */}
          <section className="px-6 -mt-6">
            <div className="bg-black/40 backdrop-blur-xl p-2 rounded-2xl border border-white/10 flex">
              <button
                onClick={() => setMatchMode('local')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${
                  matchMode === 'local' 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Local</span>
              </button>
              <button
                onClick={() => setMatchMode('global')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${
                  matchMode === 'global' 
                    ? 'bg-white/10 text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                <Globe2 className="w-4 h-4" />
                <span className="text-sm font-medium">Global</span>
              </button>
            </div>
          </section>

          {/* Time Preference */}
          <section className="px-6 mt-6">
            <h2 className="text-lg font-semibold text-white mb-4">When are you free?</h2>
            <div className="space-y-3">
              {[
                { id: 'now', icon: Coffee, label: 'Free Now', desc: 'Start chatting immediately' },
                { id: 'today', icon: Clock, label: 'Later Today', desc: 'Find a time in next 8 hours' },
                { id: 'schedule', icon: Calendar, label: 'Schedule Ahead', desc: 'Plan for another day' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setTimePreference(option.id as TimePreference)}
                  className={`w-full p-4 rounded-2xl border transition-all ${
                    timePreference === option.id
                      ? 'bg-white/10 border-white/20 backdrop-blur-xl'
                      : 'bg-black/40 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <option.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="text-white font-medium">{option.label}</h3>
                      <p className="text-white/60 text-sm">{option.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* AI Suggestions */}
          <section className="px-6 mt-8">
            <h2 className="text-lg font-semibold text-white mb-4">Suggested Matches</h2>
            <div className="space-y-4">
              {suggestedMatches.map((match, index) => (
                <div 
                  key={index}
                  className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                      <span className="text-white font-medium">{match.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-white font-medium">{match.name}</h3>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-white/80 text-sm">{match.matchScore}% match</span>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm">{match.role}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-4 h-4 text-white/40" />
                        <span className="text-white/40 text-sm">{match.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {match.interests.map((interest, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 rounded-lg bg-white/5 text-white/60 text-xs"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Start Button */}
          <section className="px-6 mt-8 mb-8">
            <button
              onClick={handleStartMatching}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all"
            >
              {isMatching ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Finding your match...
                </div>
              ) : (
                <>
                  Start Coffee Chat
                  <Coffee className="w-5 h-5" />
                </>
              )}
            </button>
          </section>
        </div>

        {/* Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-around items-center h-full">
            <button className="p-2 group" onClick={() => router.push('/')}>
              <Home className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Search className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Coffee className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Users className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
          </div>
        </nav>
      </>
    </AppLayout>
  )
} 