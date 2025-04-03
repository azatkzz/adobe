"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Utensils,
  Clock,
  Star,
  Search,
  Filter,
  Salad,
  Coffee,
  Leaf
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", label: "All", icon: Utensils },
  { id: "healthy", label: "Healthy", icon: Leaf },
  { id: "salads", label: "Salads", icon: Salad },
  { id: "drinks", label: "Drinks", icon: Coffee }
]

const menuItems = [
  {
    id: 1,
    name: "Shrimp Avocado Salad",
    description: "Fresh shrimp, avocado, mixed greens with citrus dressing",
    price: "$14.99",
    image: "/food.jpg",
    category: "salads",
    prepTime: "10-12 min",
    calories: 380,
    rating: 4.8,
    tags: ["High Protein", "Low Carb", "Gluten Free"],
    nutritionInfo: {
      protein: "24g",
      carbs: "12g",
      fats: "22g",
      fiber: "8g"
    },
    featured: true
  },
  {
    id: 2,
    name: "Adobe Power Bowl",
    description: "Quinoa, grilled chicken, roasted vegetables, tahini dressing",
    price: "$13.99",
    image: "🥗",
    category: "healthy",
    prepTime: "12-15 min",
    calories: 450,
    rating: 4.7,
    tags: ["High Protein", "Whole Grain"],
    nutritionInfo: {
      protein: "32g",
      carbs: "48g",
      fats: "18g",
      fiber: "12g"
    }
  },
  // Add more items...
]

export default function FoodPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredItems = menuItems.filter(item => 
    (selectedCategory === "all" || item.category === selectedCategory) &&
    (searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-white">Adobe Café</h1>
          <p className="text-white/60">Healthy and delicious meals for your workday</p>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search menu..."
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

        {/* Menu Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ModernCard
              key={item.id}
              className="group cursor-pointer overflow-hidden"
            >
              <div className="space-y-4">
                {/* Image */}
                <div className="aspect-video -mx-5 -mt-5 overflow-hidden">
                  {typeof item.image === 'string' && item.image.startsWith('/') ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transform 
                        group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-6xl bg-white/5">
                      {item.image}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-white/60">{item.rating}</span>
                    </div>
                  </div>
                  <p className="text-white/60 line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{item.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Leaf className="w-4 h-4" />
                      <span>{item.calories} cal</span>
                    </div>
                  </div>
                  <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary 
                    bg-clip-text text-transparent">
                    {item.price}
                  </span>
                </div>

                {/* Order Button */}
                <button className="w-full px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 
                  text-primary text-sm font-medium transition-colors">
                  Order Now
                </button>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 