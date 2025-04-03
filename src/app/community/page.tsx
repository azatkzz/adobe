"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Users,
  Search,
  Filter,
  Palette,
  Code,
  Camera,
  Music,
  Globe,
  BookOpen,
  Heart,
  Bike,
  Coffee,
  Gamepad2,
  Plus,
  MessageCircle
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", label: "All Groups", icon: Users },
  { id: "creative", label: "Creative", icon: Palette },
  { id: "tech", label: "Tech", icon: Code },
  { id: "wellness", label: "Wellness", icon: Heart },
  { id: "social", label: "Social", icon: Coffee },
  { id: "learning", label: "Learning", icon: BookOpen },
]

const groups = [
  {
    id: 1,
    name: "Adobe Photography Club",
    description: "Share your photography, get feedback, and organize photo walks",
    category: "creative",
    icon: Camera,
    members: 234,
    events: 2,
    discussions: 15,
    image: "📸",
    tags: ["Photography", "Creative", "Events"],
    featured: true
  },
  {
    id: 2,
    name: "Tech Innovators",
    description: "Discuss emerging technologies, share projects, and collaborate on innovations",
    category: "tech",
    icon: Code,
    members: 456,
    events: 1,
    discussions: 28,
    image: "💻",
    tags: ["Technology", "Innovation", "Development"]
  },
  {
    id: 3,
    name: "Global Culture Exchange",
    description: "Celebrate diversity and share cultural experiences",
    category: "social",
    icon: Globe,
    members: 189,
    events: 3,
    discussions: 12,
    image: "🌍",
    tags: ["Culture", "Diversity", "Social"]
  },
  {
    id: 4,
    name: "Wellness Warriors",
    description: "Focus on mental and physical wellbeing through group activities",
    category: "wellness",
    icon: Heart,
    members: 312,
    events: 4,
    discussions: 23,
    image: "🧘‍♀️",
    tags: ["Wellness", "Health", "Mindfulness"]
  },
  {
    id: 5,
    name: "Adobe Musicians",
    description: "Connect with fellow musicians, share music, and jam together",
    category: "creative",
    icon: Music,
    members: 145,
    events: 1,
    discussions: 18,
    image: "🎵",
    tags: ["Music", "Creative", "Performance"]
  },
  {
    id: 6,
    name: "Cycling Club",
    description: "Group rides, route sharing, and cycling tips",
    category: "wellness",
    icon: Bike,
    members: 98,
    events: 2,
    discussions: 8,
    image: "🚲",
    tags: ["Sports", "Outdoors", "Fitness"]
  },
  {
    id: 7,
    name: "Gaming Community",
    description: "Connect with fellow gamers, organize tournaments, and discuss games",
    category: "social",
    icon: Gamepad2,
    members: 267,
    events: 2,
    discussions: 32,
    image: "🎮",
    tags: ["Gaming", "Social", "Events"]
  }
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGroups = groups.filter(group => 
    (selectedCategory === "all" || group.category === selectedCategory) &&
    (searchQuery === "" || 
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Adobe Community</h1>
            <p className="text-white/60">Connect with colleagues who share your interests</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white">
            <Plus className="w-5 h-5" />
            <span>Create Group</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search communities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-colors whitespace-nowrap
                ${category.id === selectedCategory
                  ? "bg-primary text-white" 
                  : "bg-white/5 text-white/60 hover:bg-white/10"}`}
            >
              <category.icon className="w-5 h-5" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group) => (
            <ModernCard
              key={group.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="space-y-4">
                {/* Group Icon/Image */}
                <div className="flex justify-center py-6 text-6xl">
                  {group.image}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {group.name}
                  </h3>
                  <p className="text-white/60 line-clamp-2 mb-4">
                    {group.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-white/40 text-sm mb-1">
                      <Users className="w-4 h-4" />
                      <span>Members</span>
                    </div>
                    <p className="text-white font-medium">{group.members}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-white/40 text-sm mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Events</span>
                    </div>
                    <p className="text-white font-medium">{group.events}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-white/40 text-sm mb-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>Discussions</span>
                    </div>
                    <p className="text-white font-medium">{group.discussions}</p>
                  </div>
                </div>

                {/* Join Button */}
                <button className="w-full px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 
                  text-primary text-sm font-medium transition-colors">
                  Join Group
                </button>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 