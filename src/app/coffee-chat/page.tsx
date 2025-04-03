"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { Header } from "@/components/navigation/header"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Coffee, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  Globe,
  Building2,
  Star,
  MessageCircle,
  BookOpen
} from "lucide-react"
import { useState } from "react"

interface SuggestedMatch {
  id: number
  name: string
  role: string
  location: string
  avatar: string
  matchScore: number
  tags: string[]
  status: string
}

interface PreviousChat {
  id: number
  with: string
  date: string
  notes: string
  tags: string[]
}

const suggestedMatches: SuggestedMatch[] = [
  {
    id: 1,
    name: "Alex Rivera",
    role: "Product Manager",
    location: "San Francisco",
    avatar: "AR",
    matchScore: 92,
    tags: ["Design Systems", "User Research", "Coffee Enthusiast"],
    status: "Free Now"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "UX Designer",
    location: "New York",
    avatar: "SC",
    matchScore: 88,
    tags: ["Design Systems", "Prototyping", "Tea Lover"],
    status: "Available Later Today"
  }
]

const previousChats: PreviousChat[] = [
  {
    id: 1,
    with: "Maria Garcia",
    date: "March 15, 2024",
    notes: "Discussed design system implementation and shared insights about component libraries. Follow up on Figma collaboration.",
    tags: ["Design Systems", "Collaboration"]
  },
  {
    id: 2,
    with: "David Park",
    date: "March 10, 2024",
    notes: "Great conversation about user research methods. Shared some useful resources about remote user testing.",
    tags: ["User Research", "Resources"]
  }
]

export default function CoffeeChatPage() {
  const [matchScope, setMatchScope] = useState<'local' | 'global'>('local')
  const [availability, setAvailability] = useState<'now' | 'later' | 'schedule'>('now')

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto max-w-7xl px-4 py-6 lg:px-8">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-white">Coffee Chat Mixer</h1>
              <p className="text-white/60 mt-1">Connect with colleagues over virtual or in-person coffee chats</p>
            </div>
          </div>

          {/* Location Toggle */}
          <div className="bg-white/5 p-1 rounded-lg inline-flex mb-8">
            <button 
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                matchScope === 'local' ? 'bg-primary text-background' : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setMatchScope('local')}
            >
              <Building2 className="w-4 h-4" />
              Local
            </button>
            <button 
              className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                matchScope === 'global' ? 'bg-primary text-background' : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setMatchScope('global')}
            >
              <Globe className="w-4 h-4" />
              Global
            </button>
          </div>

          {/* When are you free section */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-white mb-4">When are you free?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ModernCard>
                <button 
                  className={`w-full p-4 flex items-center gap-4 ${
                    availability === 'now' ? 'ring-2 ring-primary rounded-xl' : ''
                  }`}
                  onClick={() => setAvailability('now')}
                >
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <Coffee className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Free Now</h3>
                    <p className="text-white/60 text-sm">Start chatting immediately</p>
                  </div>
                </button>
              </ModernCard>

              <ModernCard>
                <button 
                  className={`w-full p-4 flex items-center gap-4 ${
                    availability === 'later' ? 'ring-2 ring-primary rounded-xl' : ''
                  }`}
                  onClick={() => setAvailability('later')}
                >
                  <div className="p-3 rounded-xl bg-purple-500/20">
                    <Clock className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Later Today</h3>
                    <p className="text-white/60 text-sm">Find a time in next 8 hours</p>
                  </div>
                </button>
              </ModernCard>

              <ModernCard>
                <button 
                  className={`w-full p-4 flex items-center gap-4 ${
                    availability === 'schedule' ? 'ring-2 ring-primary rounded-xl' : ''
                  }`}
                  onClick={() => setAvailability('schedule')}
                >
                  <div className="p-3 rounded-xl bg-green-500/20">
                    <Calendar className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Schedule Ahead</h3>
                    <p className="text-white/60 text-sm">Plan for another day</p>
                  </div>
                </button>
              </ModernCard>
            </div>
          </section>

          {/* Suggested Matches */}
          <section className="mb-8">
            <h2 className="text-lg font-medium text-white mb-4">Suggested Matches</h2>
            <div className="space-y-4">
              {suggestedMatches.map((match) => (
                <ModernCard key={match.id}>
                  <div className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-lg font-medium text-white">
                        {match.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-medium flex items-center gap-2">
                              {match.name}
                              <span className="text-sm text-yellow-400 flex items-center gap-1">
                                <Star className="w-3 h-3" /> {match.matchScore}% match
                              </span>
                            </h3>
                            <p className="text-white/60 text-sm">{match.role} • {match.location}</p>
                          </div>
                          <button className="px-4 py-1.5 rounded-lg bg-primary hover:bg-primary/90 text-background text-sm font-medium transition-colors">
                            Connect
                          </button>
                        </div>
                        
                        <div className="mt-3 flex flex-wrap gap-2">
                          {match.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          {match.status}
                        </div>
                      </div>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </div>
          </section>

          {/* Previous Chat Notes */}
          <section>
            <h2 className="text-lg font-medium text-white mb-4">Previous Chat Notes</h2>
            <div className="space-y-4">
              {previousChats.map((chat) => (
                <ModernCard key={chat.id}>
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          <h3 className="text-white font-medium">Chat with {chat.with}</h3>
                          <span className="text-white/40 text-sm">•</span>
                          <span className="text-white/40 text-sm">{chat.date}</span>
                        </div>
                        <p className="text-white/60 text-sm mb-3">{chat.notes}</p>
                        <div className="flex flex-wrap gap-2">
                          {chat.tags.map((tag, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 rounded-md bg-white/5 text-white/60 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <BookOpen className="w-4 h-4 text-white/60" />
                      </button>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </div>
          </section>
        </div>
      </div>
    </AppLayout>
  )
} 