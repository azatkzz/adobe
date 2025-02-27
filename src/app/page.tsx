"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { 
  Bell, 
  Calendar, 
  Home,
  Search,
  Trophy,
  Users,
  Coffee,
  Target,
  Flame,
  CalendarDays,
  Star,
  TrendingUp,
  ChevronDown,
  ArrowRight,
  Building2,
  MapPin,
  Share2,
  Clock,
  ChevronRight,
  UserPlus,
  CheckCircle2,
  PartyPopper
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion"
import { OfficeMap } from "@/components/ui/office-map"

const officeLocations = [
  { name: "San Francisco HQ", status: "20 colleagues here", avatar: "SF" },
  { name: "New York Office", status: "12 colleagues here", avatar: "NY" },
  { name: "Tokyo Space", status: "8 colleagues here", avatar: "TK" },
]

const events = [
  {
    id: 1,
    title: "Adobe Design Week 2024",
    type: "Featured",
    emoji: "🎨",
    date: "Mar 15",
    time: "2:00 PM",
    location: "Creative Hub & Virtual",
    attendees: [
      { name: "Sarah Chen", avatar: "SC" },
      { name: "Alex Kim", avatar: "AK" },
      { name: "Maria Garcia", avatar: "MG" },
      { name: "David Park", avatar: "DP" }
    ],
    totalAttendees: 24,
    xpReward: 500,
    isRegistered: true
  },
  {
    id: 2,
    title: "AI & Creativity Workshop",
    type: "Workshop",
    emoji: "🤖",
    date: "Mar 18",
    time: "11:00 AM",
    location: "Innovation Lab",
    attendees: [
      { name: "Emma Wilson", avatar: "EW" },
      { name: "Tom Chen", avatar: "TC" }
    ],
    totalAttendees: 12,
    xpReward: 300,
    isRegistered: false
  },
  {
    id: 3,
    title: "Tech Talks: Future of UX",
    type: "Conference",
    emoji: "💡",
    date: "Mar 20",
    time: "3:00 PM",
    location: "Virtual",
    attendees: [
      { name: "Julia Ip", avatar: "JI" },
      { name: "Lisa Kim", avatar: "LK" }
    ],
    totalAttendees: 18,
    xpReward: 400,
    isRegistered: false
  }
]

export default function LandingPage() {
  const router = useRouter()
  
  // Motion values for drag gesture
  const y = useMotionValue(0)
  const opacity = useTransform(y, [0, 200], [1, 0])
  const scale = useTransform(y, [0, 200], [1, 0.95])

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 200) {
      router.push('/dashboard')
    }
  }

  const quickActions = [
    {
      icon: Coffee,
      title: "Coffee Chat",
      description: "Find a partner",
      color: "from-blue-500 to-blue-600",
      path: '/coffee-chat'
    },
    {
      icon: Target,
      title: "Daily Challenge",
      description: "Start now",
      color: "from-red-500 to-red-600",
      path: '/goals'
    },
    {
      icon: Flame,
      title: "Interest Group",
      description: "Join community",
      color: "from-orange-500 to-orange-600",
      path: '/goals'
    },
    {
      icon: CalendarDays,
      title: "Events",
      description: "View upcoming",
      color: "from-purple-500 to-purple-600",
      path: '/events'
    }
  ]

  return (
    <AppLayout>
      <motion.div 
        className="relative h-full"
        style={{ y, opacity, scale }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.7}
        onDragEnd={handleDragEnd}
      >
        {/* Pull to dashboard indicator */}
        <div className="absolute top-0 left-0 right-0 flex justify-center py-3 z-10">
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            Pull to view dashboard
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white/80 text-sm font-medium">9:41</span>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="absolute inset-0 top-12 bottom-16 overflow-y-auto overflow-x-hidden">
          {/* Welcome Section */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 opacity-90" />
            <div className="relative px-6 pt-8 pb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                  <span className="text-white text-lg font-medium">JI</span>
                </div>
                <div>
                  <h2 className="text-white/80 text-base font-medium">Good morning,</h2>
                  <p className="text-white text-xl font-semibold">Julia Ip</p>
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-sm">Engagement</span>
                  </div>
                  <p className="text-2xl font-semibold text-white">92%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">Streak</span>
                  </div>
                  <p className="text-2xl font-semibold text-white">5 days</p>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions Grid */}
          <section className="px-6 -mt-6">
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => (
                <button 
                  key={index}
                  onClick={() => router.push(action.path)}
                  className={`group bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all ${
                    action.title === "Coffee Chat" ? 'relative overflow-hidden' : ''
                  }`}
                >
                  {action.title === "Coffee Chat" && (
                    <div className="absolute -top-1 -right-1 bg-blue-500 px-2 py-1 rounded-bl-lg rounded-tr-lg text-xs font-medium text-white">
                      New
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${action.color} mb-3 group-hover:scale-105 transition-transform`}>
                    <action.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium block mb-1">{action.title}</span>
                  <p className="text-white/60 text-xs">{action.description}</p>
                  {action.title === "Coffee Chat" && (
                    <div className="mt-3 flex items-center gap-2 text-blue-400 text-xs">
                      <span>Try it now</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          {/* Daily Challenge */}
          <section className="px-6 mt-8">
            <h2 className="text-lg font-semibold text-white mb-4">Daily Challenge</h2>
            <div className="bg-black/40 backdrop-blur-xl p-5 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-2">Meet Someone New</h3>
                  <p className="text-white/60 text-sm mb-4">Connect with a colleague from the Design team</p>
                  <button className="bg-red-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-600 transition-colors">
                    Start Challenge
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="px-6 mt-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Upcoming Events</h2>
              <button 
                onClick={() => router.push('/events')}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm transition-all"
              >
                View All
              </button>
            </div>

            <div className="space-y-4">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="group bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                >
                  {/* Event Header */}
                  <div className="p-4 pb-0">
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
                        <div className="flex items-center gap-3 text-white/60 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-white/40 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Stats */}
                  <div className="px-4 py-3 mt-3 border-t border-white/5 bg-white/5">
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

            {/* XP Reward Card */}
            <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <PartyPopper className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Event Participation Rewards</h3>
                  <p className="text-white/60 text-sm">Attend events to earn XP and unlock special badges</p>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="px-6 mt-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Office Activity</h2>
              <button className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-sm transition-all">
                Share Location
              </button>
            </div>
            
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <OfficeMap />
            </div>

            {/* Privacy Notice */}
            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Location Sharing</h3>
                  <p className="text-white/60 text-sm">Your location is only visible to your team members during work hours</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </AppLayout>
  )
}
