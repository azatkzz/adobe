"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { 
  Bell,
  Trophy,
  Users,
  Home,
  Search,
  Flame,
  Star,
  TrendingUp,
  Medal,
  Target,
  Coffee,
  Sparkles,
  ChevronRight,
  Crown
} from "lucide-react"
import { useRouter } from "next/navigation"

const badges = [
  {
    id: 1,
    icon: Coffee,
    title: "Social Butterfly",
    description: "Had coffee chats with 10 different colleagues",
    color: "from-blue-500 to-blue-600",
    progress: 100
  },
  {
    id: 2,
    icon: Target,
    title: "Goal Setter",
    description: "Completed 5 daily challenges",
    color: "from-purple-500 to-purple-600",
    progress: 80
  },
  {
    id: 3,
    icon: Medal,
    title: "Team Player",
    description: "Joined 3 interest groups",
    color: "from-yellow-500 to-yellow-600",
    progress: 60
  },
  {
    id: 4,
    icon: Star,
    title: "Rising Star",
    description: "Maintained a 7-day streak",
    color: "from-orange-500 to-orange-600",
    progress: 40
  }
]

const leaderboard = [
  { name: "Sarah Chen", role: "Product Designer", xp: 2840, avatar: "SC" },
  { name: "Julia Ip", role: "UX Engineer", xp: 2450, avatar: "JI" },
  { name: "Maria Garcia", role: "Visual Designer", xp: 2300, avatar: "MG" },
  { name: "Alex Kim", role: "UI Developer", xp: 2100, avatar: "AK" }
]

export default function DashboardPage() {
  const router = useRouter()
  const level = 12
  const xp = 2450
  const nextLevel = 3000

  return (
    <AppLayout>
      <>
        {/* Status Bar */}
        <div className="h-12 bg-black/40 backdrop-blur-xl flex items-center justify-between px-6 border-b border-white/10">
          <span className="text-white/80 text-sm font-medium">9:41</span>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-white/80" />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="absolute inset-0 top-12 bottom-16 overflow-y-auto overflow-x-hidden">
          {/* Profile Header */}
          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 opacity-90" />
            <div className="relative px-6 pt-8 pb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20">
                    <span className="text-white text-xl font-medium">JI</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center border-2 border-black">
                    <span className="text-black text-xs font-bold">{level}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-white text-xl font-semibold">Julia Ip</h2>
                  <p className="text-white/80 text-sm">UX Engineer</p>
                  <div className="mt-2 bg-black/20 rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-yellow-500"
                      style={{ width: `${(xp / nextLevel) * 100}%` }}
                    />
                  </div>
                  <p className="text-white/60 text-xs mt-1">{xp} / {nextLevel} XP to Level {level + 1}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-orange-400" />
                    <span className="text-white text-sm">Streak</span>
                  </div>
                  <p className="text-xl font-semibold text-white">5 days</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-white text-sm">Badges</span>
                  </div>
                  <p className="text-xl font-semibold text-white">8</p>
                </div>
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-blue-400" />
                    <span className="text-white text-sm">Network</span>
                  </div>
                  <p className="text-xl font-semibold text-white">24</p>
                </div>
              </div>
            </div>
          </section>

          {/* AI Insight */}
          <section className="px-6 -mt-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-xl p-4 rounded-2xl border border-purple-500/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Weekly Insight</h3>
                  <p className="text-white/80 text-sm">You've connected with 5 new people this week! Keep it up! 🚀</p>
                </div>
              </div>
            </div>
          </section>

          {/* Badges */}
          <section className="px-6 mt-8">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Badges</h2>
            <div className="space-y-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id}
                  className="bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${badge.color}`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{badge.title}</h3>
                      <p className="text-white/60 text-sm">{badge.description}</p>
                      <div className="mt-2 bg-white/5 rounded-full h-1.5">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${badge.color}`}
                          style={{ width: `${badge.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Leaderboard */}
          <section className="px-6 mt-8 mb-8">
            <h2 className="text-lg font-semibold text-white mb-4">Top Performers</h2>
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 divide-y divide-white/5">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center gap-4 p-4">
                  {index === 0 && (
                    <Crown className="w-5 h-5 text-yellow-500 absolute -mt-8 ml-8" />
                  )}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-yellow-500' : 'bg-white/10'
                  }`}>
                    <span className={`text-sm font-medium ${
                      index === 0 ? 'text-black' : 'text-white'
                    }`}>{user.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{user.name}</h3>
                    <p className="text-white/60 text-sm">{user.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{user.xp} XP</p>
                    <p className="text-white/40 text-xs">Level {Math.floor(user.xp / 250)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation Bar */}
        <nav className="absolute bottom-0 left-0 right-0 h-16 bg-black/40 backdrop-blur-xl border-t border-white/10">
          <div className="flex justify-around items-center h-full">
            <button className="p-2 group" onClick={() => router.push('/')}>
              <Home className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Search className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Trophy className="w-6 h-6 text-red-500 group-hover:scale-110 transition-all" />
            </button>
            <button className="p-2 group">
              <Users className="w-6 h-6 text-white/60 group-hover:text-white group-hover:scale-110 transition-all" />
            </button>
          </div>
        </nav>
      </>
    </AppLayout>
  )
} 