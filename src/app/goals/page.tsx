"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { 
  Bell,
  Users,
  Handshake,
  Brain,
  Heart,
  Calendar,
  Sparkles,
  ChevronRight,
  ArrowRight,
  ChevronDown
} from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion"

const goals = [
  {
    id: 1,
    icon: Users,
    title: "Meet New People",
    description: "Expand your network within Adobe",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    icon: Handshake,
    title: "Collaborate More",
    description: "Work with different teams",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 3,
    icon: Brain,
    title: "Develop New Skills",
    description: "Learn and grow professionally",
    color: "from-green-500 to-green-600"
  },
  {
    id: 4,
    icon: Heart,
    title: "Prioritize Well-being",
    description: "Balance work and life",
    color: "from-red-500 to-red-600"
  },
  {
    id: 5,
    icon: Calendar,
    title: "Attend More Events",
    description: "Participate in Adobe activities",
    color: "from-orange-500 to-orange-600"
  }
]

export default function GoalSettingPage() {
  const [selectedGoals, setSelectedGoals] = useState<number[]>([])
  const router = useRouter()
  
  // Motion values for drag gesture
  const y = useMotionValue(0)
  const opacity = useTransform(y, [0, 200], [1, 0])
  const scale = useTransform(y, [0, 200], [1, 0.95])

  const toggleGoal = (id: number) => {
    setSelectedGoals(prev => 
      prev.includes(id) 
        ? prev.filter(goalId => goalId !== id)
        : [...prev, id]
    )
  }

  const handleContinue = () => {
    if (selectedGoals.length >= 3) {
      // Save goals and redirect to personalized dashboard
      router.push('/')
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 200) {
      router.push('/')
    }
  }

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
        {/* Pull to go home indicator */}
        <div className="absolute top-0 left-0 right-0 flex justify-center py-3 z-10">
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <ChevronDown className="w-4 h-4 animate-bounce" />
            Pull to go home
          </div>
        </div>

        {/* Status Bar */}
        <div className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white/80 text-sm font-medium">9:41</span>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Scrollable Content Container */}
        <div className="absolute inset-0 top-12 bottom-16 overflow-y-auto overflow-x-hidden">
          {/* Header */}
          <div className="relative h-48 flex items-end pb-6 px-6">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            <div className="relative">
              <h1 className="text-2xl font-semibold text-white mb-2">Set Your Goals</h1>
              <p className="text-white/80 text-sm">Select 3+ goals to personalize your experience</p>
            </div>
          </div>

          {/* Goals Grid */}
          <div className="px-6 -mt-6">
            <div className="space-y-4">
              {goals.map((goal) => {
                const isSelected = selectedGoals.includes(goal.id)
                const Icon = goal.icon
                
                return (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`w-full p-4 rounded-2xl border transition-all duration-300 group
                      ${isSelected 
                        ? 'bg-white/10 border-white/20 backdrop-blur-xl' 
                        : 'bg-black/40 border-white/5 hover:border-white/10'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${goal.color} transition-transform duration-300 ${isSelected ? 'scale-110' : 'group-hover:scale-105'}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-white font-medium mb-1">{goal.title}</h3>
                        <p className="text-white/60 text-sm">{goal.description}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${isSelected ? 'text-white rotate-90' : 'text-white/40 group-hover:text-white/60'}`} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* AI Suggestions */}
            <div className="mt-8 mb-6">
              <button className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-white font-medium">Get AI Suggestions</h3>
                    <p className="text-white/60 text-sm">Based on your profile</p>
                  </div>
                </div>
              </button>
            </div>

            {/* Continue Button */}
            <button 
              onClick={handleContinue}
              className={`w-full py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                selectedGoals.length >= 3
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/20 hover:from-red-600 hover:to-red-700'
                  : 'bg-white/5 text-white/40 cursor-not-allowed'
              }`}
              disabled={selectedGoals.length < 3}
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Progress Indicator */}
            <div className="mt-6 mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/60">{selectedGoals.length} selected</span>
                <span className="text-white/40">3+ recommended</span>
              </div>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300"
                  style={{ width: `${Math.min((selectedGoals.length / 3) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-around items-center h-full">
            <button className="p-2 group" onClick={() => router.push('/')}>
              <Users className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Sparkles className="w-6 h-6 text-red-500 group-hover:scale-110 transition-all" />
            </button>
          </div>
        </nav>
      </motion.div>
    </AppLayout>
  )
} 