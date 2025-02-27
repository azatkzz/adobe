"use client"

import { useState } from "react"
import { MapPin, Coffee, Users, Laptop, Dumbbell, ChevronDown, MessageCircle } from "lucide-react"
import { Globe } from "./globe"

type Location = {
  id: number
  name: string
  type: 'workspace' | 'cafe' | 'gym' | 'meeting'
  icon: any
  colleagues: {
    name: string
    avatar: string
    status: string
    duration: string
  }[]
}

const locations: Location[] = [
  {
    id: 1,
    name: "Creative Hub",
    type: "workspace",
    icon: Laptop,
    colleagues: [
      { name: "Sarah Chen", avatar: "SC", status: "Working on Design System", duration: "2h" },
      { name: "Alex Kim", avatar: "AK", status: "In focus mode", duration: "1h" },
      { name: "Maria Garcia", avatar: "MG", status: "Available for chat", duration: "30m" }
    ]
  },
  {
    id: 2,
    name: "Adobe Café",
    type: "cafe",
    icon: Coffee,
    colleagues: [
      { name: "David Park", avatar: "DP", status: "Coffee break", duration: "5m" },
      { name: "Emma Wilson", avatar: "EW", status: "Lunch break", duration: "15m" },
      { name: "Julia Ip", avatar: "JI", status: "Quick break", duration: "10m" }
    ]
  },
  {
    id: 3,
    name: "Wellness Center",
    type: "gym",
    icon: Dumbbell,
    colleagues: [
      { name: "Tom Chen", avatar: "TC", status: "Morning workout", duration: "45m" },
      { name: "Lisa Kim", avatar: "LK", status: "Yoga session", duration: "30m" }
    ]
  }
]

export function OfficeMap() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const totalColleagues = locations.reduce((acc, loc) => acc + loc.colleagues.length, 0)

  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden">
      {/* Globe Background */}
      <div className="absolute inset-0">
        <Globe />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Location Markers */}
      {locations.map((location) => (
        <button
          key={location.id}
          onClick={() => setSelectedLocation(location)}
          className={`absolute ${getLocationPosition(location.id)} z-10`}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-2">
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${getLocationColor(location.type)}`}>
                <location.icon className="w-4 h-4 text-white" />
              </div>
              <div className="hidden group-hover:block">
                <p className="text-white text-sm font-medium whitespace-nowrap">{location.name}</p>
                <p className="text-white/60 text-xs whitespace-nowrap">
                  {location.colleagues.length} colleagues here
                </p>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">{location.colleagues.length}</span>
            </div>
          </div>
        </button>
      ))}

      {/* Active Colleagues Counter */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xl px-3 py-2 rounded-lg border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-white/80 text-sm">{totalColleagues} colleagues in office</span>
        </div>
      </div>

      {/* Location Details Sheet */}
      {selectedLocation && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl rounded-t-2xl border-t border-white/10">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getLocationColor(selectedLocation.type)}`}>
                  <selectedLocation.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedLocation.name}</h3>
                  <p className="text-white/60 text-sm">{selectedLocation.colleagues.length} colleagues here</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedLocation(null)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronDown className="w-5 h-5 text-white/60" />
              </button>
            </div>

            <div className="space-y-3">
              {selectedLocation.colleagues.map((colleague, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <span className="text-white/80">{colleague.avatar}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{colleague.name}</h4>
                      <p className="text-white/60 text-sm">{colleague.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-sm">{colleague.duration}</span>
                    <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <MessageCircle className="w-4 h-4 text-white/60" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function getLocationPosition(id: number): string {
  switch (id) {
    case 1: return "top-[30%] left-[40%]"
    case 2: return "top-[50%] right-[30%]"
    case 3: return "bottom-[30%] left-[30%]"
    default: return ""
  }
}

function getLocationColor(type: Location["type"]): string {
  switch (type) {
    case "workspace": return "bg-blue-500"
    case "cafe": return "bg-orange-500"
    case "gym": return "bg-purple-500"
    case "meeting": return "bg-green-500"
    default: return "bg-gray-500"
  }
} 