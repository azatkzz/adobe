"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { Header } from "@/components/navigation/header"
import { Card, CardAction } from "@/components/ui/card"
import { 
  Coffee,
  MapPin,
  Calendar,
  Clock,
  Bell,
  ChevronRight,
  Target,
  Flame,
  CalendarDays,
  Star,
  UserPlus,
  CheckCircle2,
  PartyPopper,
  Users,
  Trophy,
  Utensils,
  Heart,
  ArrowRight
} from "lucide-react"
import { useRouter } from "next/navigation"
import { OfficeMap } from "@/components/ui/office-map"
import { TabBar } from "@/components/ui/tab-bar"
import { ActionButton } from "@/components/ui/action-button"
import { OrderCard } from "@/components/ui/order-card"
import { useState } from "react"
import { ModernCard } from "@/components/ui/modern-card"

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

const featuredItems = [
  {
    id: 1,
    title: "Today's Special",
    category: "Food",
    image: "/food.jpg",
    name: "Shrimp Avocado Salad",
    description: "Fresh shrimp, avocado, mixed greens with citrus dressing",
    price: "$14.99",
    rating: 4.8,
    prepTime: "10-12 min",
    path: "/food"
  }
]

const quickActions = [
  {
    title: "Upcoming Events",
    description: "2 events today",
    icon: Calendar,
    path: "/events",
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  },
  {
    title: "Wellness Check",
    description: "Track your mood",
    icon: Heart,
    path: "/wellness",
    color: "text-red-400",
    bgColor: "bg-red-500/20"
  },
  {
    title: "Community",
    description: "12 new posts",
    icon: Users,
    path: "/community",
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  }
]

export default function HomePage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("recent")

  return (
    <AppLayout>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Quick Actions */}
        <div className="px-4 py-3 flex gap-3 overflow-x-auto hide-scrollbar">
          <ActionButton
            icon={Coffee}
            label="Order Food"
            active
          />
          <ActionButton
            icon={Users}
            label="Coffee Chat"
            onClick={() => router.push('/coffee-chat')}
          />
          <ActionButton
            icon={MapPin}
            label="Location"
          />
          <ActionButton
            icon={Calendar}
            label="Events"
          />
        </div>

        {/* Tabs */}
        <div className="px-4 pt-6">
          <TabBar
            tabs={[
              { id: "recent", label: "Recent Orders" },
              { id: "favorites", label: "Favorites" },
              { id: "menu", label: "Menu" }
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
        </div>

        {/* Orders */}
        <div className="p-4 space-y-4">
          <OrderCard
            title="Avocado Shrimp Salad"
            description="No Mayo, Extra Avocado"
            image="/food.jpg"
            className="w-10 h-10"
            onReorder={() => {}}
          />
        </div>

        {/* Calendar Section */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-textPrimary font-medium">Calendar</h2>
            <button className="text-textSecondary text-sm">Events</button>
          </div>
          
          <div className="space-y-3">
            <Card>
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-textPrimary font-medium">POC UI Review</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <Clock className="w-4 h-4" />
                      <span>08:00 AM - 10:00 AM PT</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Virtual Meeting</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-1.5 bg-white/5 rounded-full text-textSecondary text-sm">
                    Edit RSVP
                  </button>
                  <button className="px-4 py-1.5 bg-primary rounded-full text-background text-sm font-medium">
                    Join Meeting
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-7xl px-4 py-6 lg:px-8">
          {/* Welcome Section */}
          <div>
            <h1 className="text-2xl font-semibold text-white">Welcome Back, Sarah</h1>
            <p className="text-white/60">Here's what's happening at Adobe today</p>
          </div>

          {/* Quick Actions Grid */}
          <section className="grid gap-4 md:grid-cols-3 mt-8">
            {quickActions.map((action) => (
              <ModernCard
                key={action.title}
                className="group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${action.bgColor}`}>
                    <action.icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{action.title}</h3>
                    <p className="text-white/60 text-sm">{action.description}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
                </div>
              </ModernCard>
            ))}
          </section>

          {/* Featured Content */}
          <section className="mt-8">
            <h2 className="text-lg font-medium text-white mb-4">Featured</h2>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {featuredItems.map((item) => (
                <ModernCard
                  key={item.id}
                  className="group cursor-pointer overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Update image container aspect ratio and size */}
                    <div className="h-24 md:h-28 -mx-4 -mt-4 overflow-hidden relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transform 
                          group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-semibold text-white">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 text-yellow-400" />
                          <span className="text-white/60 text-sm">{item.rating}</span>
                        </div>
                      </div>
                      <p className="text-white/60 text-sm line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Info */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div className="flex items-center gap-3 text-white/60 text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{item.prepTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Utensils className="w-3.5 h-3.5" />
                          <span>{item.category}</span>
                        </div>
                      </div>
                      <span className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary 
                        bg-clip-text text-transparent">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section className="mt-8">
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
          <section className="mt-8">
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
            <div className="mt-4 p-4 rounded-2xl bg-white/5 border border-white/10">
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
    </div>
    </AppLayout>
  )
}
