"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Trophy,
  Target,
  TrendingUp,
  CheckCircle2,
  Clock,
  Plus,
  ChevronRight
} from "lucide-react"

const goals = [
  {
    id: 1,
    title: "Complete Adobe XD Certification",
    description: "Master Adobe XD and get certified",
    progress: 75,
    deadline: "Mar 30, 2024",
    points: 1000,
    category: "Learning",
    status: "in-progress"
  },
  {
    id: 2,
    title: "Mentor 3 New Employees",
    description: "Help onboard and guide new team members",
    progress: 33,
    deadline: "Jun 15, 2024",
    points: 1500,
    category: "Leadership",
    status: "in-progress"
  },
  {
    id: 3,
    title: "Host Design Workshop",
    description: "Organize and conduct a design thinking workshop",
    progress: 0,
    deadline: "Apr 20, 2024",
    points: 800,
    category: "Community",
    status: "not-started"
  }
]

const categories = [
  { id: "all", label: "All Goals" },
  { id: "learning", label: "Learning" },
  { id: "leadership", label: "Leadership" },
  { id: "community", label: "Community" },
  { id: "innovation", label: "Innovation" }
]

export default function GoalsPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-white">Goals</h1>
            <p className="text-white/60">Track your progress and earn rewards</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white">
            <Plus className="w-5 h-5" />
            <span>New Goal</span>
          </button>
        </div>

        {/* Progress Overview */}
        <div className="grid gap-6 md:grid-cols-3">
          <ModernCard className="bg-gradient-to-br from-primary/20 to-primary/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm text-white/60">Active Goals</h3>
                <p className="text-2xl font-semibold text-white">5</p>
              </div>
            </div>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-green-500/20 to-green-500/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-green-500/20">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-sm text-white/60">Completed</h3>
                <p className="text-2xl font-semibold text-white">12</p>
              </div>
            </div>
          </ModernCard>

          <ModernCard className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/5">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-yellow-500/20">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-sm text-white/60">Points Earned</h3>
                <p className="text-2xl font-semibold text-white">3,500</p>
              </div>
            </div>
          </ModernCard>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className="px-6 py-2 rounded-full bg-white/5 text-white/60 
                hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Goals List */}
        <div className="space-y-4">
          {goals.map((goal) => (
            <ModernCard 
              key={goal.id}
              className="group cursor-pointer hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-primary/20"
                    style={{
                      clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - goal.progress}%)`
                    }}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {goal.title}
                      </h3>
                      <p className="text-white/60">
                        {goal.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white/60 transition-colors" />
                  </div>

                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{goal.deadline}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span>{goal.points} points</span>
                    </div>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-xs">
                      {goal.category}
                    </span>
                  </div>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </AppLayout>
  )
} 