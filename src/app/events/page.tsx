"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Search,
  Calendar,
  Users,
  MapPin,
  Star,
  ChevronRight,
  Filter
} from "lucide-react"

const categories = [
  { id: "all", label: "All", active: true },
  { id: "featured", label: "Featured" },
  { id: "workshop", label: "Workshop" },
  { id: "conference", label: "Conference" },
  { id: "social", label: "Social" },
  { id: "tech", label: "Tech" },
]

const events = [
  {
    id: 1,
    title: "Adobe Design Week 2024",
    description: "Join us for a week of design inspiration, workshops, and networking with industry leaders.",
    date: "Mar 15",
    time: "2:00 PM",
    location: "Creative Hub & Virtual",
    attendees: 24,
    tags: ["Design", "Innovation", "Networking"],
    featured: true,
    xp: 500,
    registered: true,
    image: "/events/design-week.jpg"
  },
  // Add more events...
]

export default function EventsPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white/5 border border-white/10 
                focus:border-primary/50 focus:outline-none focus:ring-0 
                text-white placeholder-white/40"
            />
          </div>
          <button className="h-12 px-4 rounded-2xl bg-white/5 border border-white/10 
            hover:bg-white/10 transition-colors flex items-center gap-2">
            <Filter className="w-5 h-5 text-white/60" />
            <span className="text-white/60">Filters</span>
          </button>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full transition-colors whitespace-nowrap
                ${category.active 
                  ? "bg-primary text-white" 
                  : "bg-white/5 text-white/60 hover:bg-white/10"}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Event */}
        <ModernCard 
          className="relative overflow-hidden group cursor-pointer"
          onClick={() => {}}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20" />
          <div className="relative z-10 p-8">
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Featured Event</span>
            </div>
            
            <h2 className="text-3xl font-semibold text-white mb-2">
              Adobe Design Week 2024
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Join us for a week of design inspiration
            </p>

            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>Mar 15</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>24 attending</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 
            opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>
        </ModernCard>

        {/* Event List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <ModernCard
              key={event.id}
              className="group cursor-pointer"
              onClick={() => {}}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-white/60 line-clamp-2">
                    {event.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.registered ? (
                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                      Registered
                    </span>
                  ) : (
                    <button className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 
                      text-primary text-sm font-medium transition-colors">
                      Register
                    </button>
                  )}
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 