"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  ClipboardList,
  Clock,
  Search,
  Filter,
  Users,
  BarChart,
  Trophy,
  Brain,
  Heart,
  Code,
  Palette
} from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", label: "All Forms", icon: ClipboardList },
  { id: "talent", label: "Talent & HR", icon: Users },
  { id: "ux", label: "UX Research", icon: Palette },
  { id: "engineering", label: "Engineering", icon: Code },
  { id: "wellness", label: "Health & Wellness", icon: Heart },
  { id: "psychology", label: "Psychology", icon: Brain },
]

const surveys = [
  {
    id: 1,
    title: "Developer Experience Survey",
    description: "Help us improve our internal developer tools and workflows",
    team: "Engineering",
    timeToComplete: "10-15 min",
    points: 300,
    deadline: "Mar 25, 2024",
    responses: 145,
    targetResponses: 200,
    tags: ["Tools", "Workflow"],
    category: "engineering",
    urgent: true
  },
  {
    id: 2,
    title: "Workspace Wellness Assessment",
    description: "Share feedback about your work environment and ergonomic needs",
    team: "Health & Safety",
    timeToComplete: "5-7 min",
    points: 150,
    deadline: "Mar 20, 2024",
    responses: 89,
    targetResponses: 100,
    tags: ["Wellness", "Office"],
    category: "wellness"
  },
  {
    id: 3,
    title: "UX Pattern Library Feedback",
    description: "Review and provide feedback on our new design system components",
    team: "UX Design",
    timeToComplete: "15-20 min",
    points: 400,
    deadline: "Mar 28, 2024",
    responses: 56,
    targetResponses: 150,
    tags: ["Design", "Feedback"],
    category: "ux",
    featured: true
  },
  {
    id: 4,
    title: "Remote Work Experience",
    description: "Help us understand how to better support remote employees",
    team: "Talent",
    timeToComplete: "8-10 min",
    points: 200,
    deadline: "Mar 22, 2024",
    responses: 234,
    targetResponses: 300,
    tags: ["Remote", "Culture"],
    category: "talent"
  }
]

export default function SurveysPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredSurveys = surveys.filter(survey => 
    (selectedCategory === "all" || survey.category === selectedCategory) &&
    (searchQuery === "" || 
      survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      survey.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Surveys & Forms</h1>
            <p className="text-white/60">Help teams gather insights and earn rewards</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5">
            <BarChart className="w-5 h-5 text-primary" />
            <span className="text-white font-medium">Your Response Rate: 85%</span>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Search surveys..."
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

        {/* Surveys List */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredSurveys.map((survey) => (
            <ModernCard
              key={survey.id}
              className={`group cursor-pointer overflow-hidden relative
                ${survey.urgent ? 'border-red-500/20' : ''}
                ${survey.featured ? 'border-primary/20' : ''}`}
            >
              {/* Status Indicator */}
              {survey.urgent && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-medium">
                  Urgent
                </div>
              )}
              {survey.featured && !survey.urgent && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Featured
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-2">
                    <Users className="w-4 h-4" />
                    <span>{survey.team}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {survey.title}
                  </h3>
                  <p className="text-white/60 line-clamp-2">
                    {survey.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Responses</span>
                    <span className="text-white/60">
                      {survey.responses}/{survey.targetResponses}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${(survey.responses / survey.targetResponses) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {survey.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{survey.timeToComplete}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span>{survey.points} points</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 
                    text-primary text-sm font-medium transition-colors">
                    Take Survey
                  </button>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 