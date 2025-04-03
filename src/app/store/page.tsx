"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Search,
  Trophy,
  Star,
  Gift,
  Coffee,
  ShoppingBag,
  Ticket,
  Sparkles,
  Filter,
  ChevronRight
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", label: "All", icon: Gift },
  { id: "merch", label: "Merch", icon: ShoppingBag },
  { id: "experiences", label: "Experiences", icon: Sparkles },
  { id: "coupons", label: "Coupons", icon: Ticket },
  { id: "coffee", label: "Coffee", icon: Coffee },
]

const rewards = [
  {
    id: 1,
    title: "Adobe Limited Edition Hoodie",
    description: "Exclusive Adobe branded hoodie with creative cloud logo",
    points: 2000,
    image: "🧥",
    category: "merch",
    featured: true,
    stock: 50,
    tags: ["Limited", "Apparel"]
  },
  {
    id: 2,
    title: "Creative Cloud Mug",
    description: "Ceramic mug with Adobe Creative Cloud design",
    points: 500,
    image: "☕️",
    category: "merch",
    stock: 100,
    tags: ["Drinkware"]
  },
  {
    id: 3,
    title: "Coffee Chat with VP",
    description: "30-minute virtual coffee chat with Adobe VP",
    points: 5000,
    image: "👥",
    category: "experiences",
    featured: true,
    stock: 5,
    tags: ["Exclusive", "Networking"]
  },
  {
    id: 4,
    title: "$50 Amazon Gift Card",
    description: "Digital gift card for Amazon purchases",
    points: 2500,
    image: "🎁",
    category: "coupons",
    stock: 200,
    tags: ["Gift Card"]
  },
  {
    id: 5,
    title: "Adobe Max Pass",
    description: "Full access pass to Adobe Max conference",
    points: 10000,
    image: "🎫",
    category: "experiences",
    featured: true,
    stock: 10,
    tags: ["Event", "Premium"]
  }
]

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const userPoints = 5000 // This would come from user context/API

  const filteredRewards = selectedCategory === "all" 
    ? rewards
    : rewards.filter(reward => reward.category === selectedCategory)

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Adobe Store</h1>
            <p className="text-white/60">Redeem your points for exclusive rewards</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">{userPoints.toLocaleString()} points</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search rewards..."
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

        {/* Featured Rewards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredRewards.map((reward) => (
            <ModernCard
              key={reward.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="space-y-4">
                {/* Emoji/Image */}
                <div className="flex justify-center py-6 text-6xl">
                  {reward.image}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {reward.title}
                    </h3>
                    {reward.featured && (
                      <Star className="w-5 h-5 text-yellow-400" />
                    )}
                  </div>
                  <p className="text-white/60 line-clamp-2 mb-4">
                    {reward.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {reward.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Points and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <span className="text-white font-medium">
                      {reward.points.toLocaleString()} points
                    </span>
                  </div>
                  <button 
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors
                      ${userPoints >= reward.points
                        ? "bg-primary/10 hover:bg-primary/20 text-primary"
                        : "bg-white/5 text-white/40 cursor-not-allowed"}`}
                    disabled={userPoints < reward.points}
                  >
                    {userPoints >= reward.points ? "Redeem" : "Not enough points"}
                  </button>
                </div>

                {/* Stock */}
                <div className="text-sm text-white/40">
                  {reward.stock} remaining
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 