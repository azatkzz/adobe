"use client"

import { ModernCard } from "@/components/ui/modern-card"
import { 
  Coffee, 
  Clock, 
  Star, 
  Heart,
  Utensils,
  Salad,
  ChevronRight,
  TrendingUp
} from "lucide-react"

const popularItems = [
  {
    id: 1,
    name: "Adobe Signature Bowl",
    description: "Quinoa, grilled chicken, avocado, mixed greens",
    price: "$12.99",
    emoji: "🥗",
    tags: ["Healthy", "High Protein", "Gluten Free"],
    rating: 4.8,
    prepTime: "15-20 min",
    trending: true
  },
  {
    id: 2,
    name: "Creative Cloud Coffee",
    description: "House blend with oat milk and cinnamon",
    price: "$4.99",
    emoji: "☕️",
    tags: ["Vegan", "Hot Drinks"],
    rating: 4.9,
    prepTime: "3-5 min"
  },
  {
    id: 3,
    name: "Photoshop Poke Bowl",
    description: "Fresh salmon, mango, edamame, sushi rice",
    price: "$14.99",
    emoji: "🐟",
    tags: ["Fresh", "Protein", "Raw"],
    rating: 4.7,
    prepTime: "10-15 min"
  }
]

const categories = [
  { id: 'all', name: 'All', icon: Utensils },
  { id: 'bowls', name: 'Bowls', icon: Salad },
  { id: 'drinks', name: 'Drinks', icon: Coffee }
]

export function FoodSection() {
  return (
    <section className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-6 mb-8">
        <div className="relative z-10">
          <h1 className="text-2xl font-semibold text-white mb-2">
            Adobe Café
          </h1>
          <p className="text-white/80">
            Fresh and healthy food for creative minds
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 text-8xl rotate-12 opacity-50">
          🍽️
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.id}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          >
            <category.icon className="w-4 h-4 text-white/60" />
            <span className="text-white/80 whitespace-nowrap">
              {category.name}
            </span>
          </button>
        ))}
      </div>

      {/* Popular Items */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Popular Today</h2>
          <button className="text-white/60 hover:text-white text-sm flex items-center gap-1">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {popularItems.map((item) => (
            <ModernCard
              key={item.id}
              interactive
              className="group overflow-hidden"
            >
              {/* Emoji Header */}
              <div className="relative h-40 -mx-5 -mt-5 mb-4 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <span className="text-7xl transform group-hover:scale-110 transition-transform duration-300">
                  {item.emoji}
                </span>
                {item.trending && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                    <TrendingUp className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">
                      Trending
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-medium text-white mb-1">
                    {item.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white/80 text-sm">
                        {item.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-white/40" />
                      <span className="text-white/60 text-sm">
                        {item.prepTime}
                      </span>
                    </div>
                  </div>
                  <button 
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                  >
                    <Heart className="w-5 h-5 text-white/60 group-hover:text-primary transition-colors" />
                  </button>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {item.price}
                  </span>
                  <button className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  )
} 