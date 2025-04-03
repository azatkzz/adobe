"use client"

import { AppLayout } from "@/components/layouts/app-layout"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  Trophy,
  Target,
  TrendingUp,
  Star,
  Users,
  Calendar,
  Coffee,
  Brain,
  CheckCircle2,
  Clock,
  Briefcase,
  GraduationCap,
  MapPin,
  Mail,
  ExternalLink
} from "lucide-react"

// Add profile data
const profile = {
  name: "Julia Ip",
  role: "Product Manager",
  avatar: "JI",
  level: 13,
  xpProgress: 82,
  totalXP: "2450 / 3000 XP",
  education: "Minerva University",
  location: "San Francisco, CA",
  email: "julia.ip@adobe.com",
  bio: "Passionate about creating intuitive and delightful user experiences. Working on innovative projects at Adobe.",
  skills: ["UX Design", "Frontend Development", "User Research", "Prototyping"],
  team: "Design Systems"
}

const stats = [
  {
    label: "XP Points",
    value: "2,450",
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/20"
  },
  {
    label: "Goals Completed",
    value: "12",
    icon: Target,
    color: "text-green-400",
    bgColor: "bg-green-500/20"
  },
  {
    label: "Streak",
    value: "5 days",
    icon: TrendingUp,
    color: "text-blue-400",
    bgColor: "bg-blue-500/20"
  }
]

const achievements = [
  {
    title: "Social Butterfly",
    description: "Had coffee chats with 10 different colleagues",
    icon: Coffee,
    progress: 80,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Goal Setter",
    description: "Completed 5 daily challenges",
    icon: Target,
    progress: 100,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Team Player",
    description: "Joined 3 interest groups",
    icon: Users,
    progress: 60,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Rising Star",
    description: "Maintained a 7-day streak",
    icon: Star,
    progress: 70,
    color: "from-purple-500 to-pink-500"
  }
]

const recentActivity = [
  {
    action: "Completed meditation session",
    time: "2 hours ago",
    icon: Brain,
    points: 50
  },
  {
    action: "Attended Design Workshop",
    time: "Yesterday",
    icon: Calendar,
    points: 100
  },
  {
    action: "Completed daily goals",
    time: "2 days ago",
    icon: CheckCircle2,
    points: 75
  }
]

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Profile Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <ModernCard className="lg:col-span-1">
            <div className="space-y-6">
              {/* Avatar and Basic Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-xl font-medium text-primary">
                  {profile.avatar}
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-white">{profile.name}</h1>
                  <p className="text-white/60">{profile.role}</p>
                </div>
              </div>

              {/* Level Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Level {profile.level}</span>
                  <span className="text-white/60">{profile.totalXP}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    style={{ width: `${profile.xpProgress}%` }}
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-white/60">
                  <Briefcase className="w-4 h-4" />
                  <span>{profile.team}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <GraduationCap className="w-4 h-4" />
                  <span>{profile.education}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-sm text-white/60 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/80 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-sm text-white/60 mb-2">About</h3>
                <p className="text-white/80">{profile.bio}</p>
              </div>
            </div>
          </ModernCard>

          {/* Stats Grid - Move to right side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <ModernCard key={stat.label}>
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                      <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </div>

            {/* Recent Activity */}
            <ModernCard>
              <h2 className="text-lg font-medium text-white mb-4">Recent Activity</h2>
              <div className="divide-y divide-white/5">
                {recentActivity.map((activity, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-white/5">
                        <activity.icon className="w-5 h-5 text-white/60" />
                      </div>
                      <div>
                        <p className="text-white">{activity.action}</p>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{activity.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Trophy className="w-4 h-4" />
                      <span>+{activity.points} XP</span>
                    </div>
                  </div>
                ))}
              </div>
            </ModernCard>
          </div>
        </div>

        {/* Achievements Section */}
        <div>
          <h2 className="text-lg font-medium text-white mb-4">Recent Achievements</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <ModernCard key={achievement.title}>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color}/20`}>
                      <achievement.icon className={`w-6 h-6 ${achievement.color.split(' ')[0]}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{achievement.title}</h3>
                      <p className="text-white/60 text-sm">{achievement.description}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${achievement.color}`}
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Progress</span>
                      <span className="text-white">{achievement.progress}%</span>
                    </div>
                  </div>
                </div>
              </ModernCard>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  )
} 