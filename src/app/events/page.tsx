"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { 
  Calendar,
  Search,
  Filter,
  MapPin,
  Clock,
  Star,
  UserPlus,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Sparkles,
  Zap,
  Users,
  Building2
} from "lucide-react"
import { useState } from "react"

type EventCategory = "All" | "Featured" | "Workshop" | "Conference" | "Social" | "Tech"

const categories: EventCategory[] = ["All", "Featured", "Workshop", "Conference", "Social", "Tech"]

const events = [
  {
    id: 1,
    title: "Adobe Design Week 2024",
    type: "Featured",
    category: "Conference",
    emoji: "🎨",
    date: "Mar 15",
    time: "2:00 PM",
    location: "Creative Hub & Virtual",
    description: "Join us for a week of design inspiration, workshops, and networking with industry leaders.",
    attendees: [
      { name: "Sarah Chen", avatar: "SC" },
      { name: "Alex Kim", avatar: "AK" },
      { name: "Maria Garcia", avatar: "MG" },
      { name: "David Park", avatar: "DP" }
    ],
    totalAttendees: 24,
    xpReward: 500,
    isRegistered: true,
    tags: ["Design", "Innovation", "Networking"]
  },
  // ... add more events here
]

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>("All")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <AppLayout>
      <>
        {/* Status Bar */}
        <div className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white/80 text-sm font-medium">Events</span>
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="absolute inset-0 top-12 bottom-16 overflow-y-auto">
          {/* Search Bar */}
          <div className="p-4 sticky top-0 bg-black/60 backdrop-blur-xl z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/20"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="px-4 -mt-2">
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Event */}
          <div className="px-4 mb-6">
            <div className="relative h-48 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/80 text-sm">Featured Event</span>
                </div>
                <h2 className="text-white text-xl font-semibold mb-1">Adobe Design Week 2024</h2>
                <p className="text-white/80 text-sm">Join us for a week of design inspiration</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-white/60" />
                    <span className="text-white/80 text-sm">Mar 15</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4 text-white/60" />
                    <span className="text-white/80 text-sm">24 attending</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event List */}
          <div className="px-4 space-y-4 mb-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
              >
                {/* Event content (same as in landing page) */}
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl">
                      {event.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-white font-medium">{event.title}</span>
                        {event.type === "Featured" && (
                          <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-white/60 text-sm mb-2">{event.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {event.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 rounded-full bg-white/5 text-white/60 text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-white/60 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Stats */}
                <div className="px-4 py-3 border-t border-white/5 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {event.attendees.slice(0, 3).map((attendee, i) => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-white/10 border border-black flex items-center justify-center text-xs text-white/80"
                          >
                            {attendee.avatar}
                          </div>
                        ))}
                        {event.totalAttendees > 3 && (
                          <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                            <span className="text-white/60 text-xs">+{event.totalAttendees - 3}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400 text-xs">
                        <Star className="w-3 h-3" />
                        <span>+{event.xpReward} XP</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.isRegistered ? (
                        <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-400 text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Registered</span>
                        </button>
                      ) : (
                        <>
                          <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                            <UserPlus className="w-4 h-4 text-white/60" />
                          </button>
                          <button className="px-3 py-1.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm transition-colors">
                            RSVP
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </AppLayout>
  )
} 