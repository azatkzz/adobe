"use client"

import { useState } from "react"
import { MapPin, ChevronDown, MessageCircle } from "lucide-react"
import { Globe } from "./globe"

interface OfficeLocation {
  id: string
  name: string
  coordinates: [number, number]
  employees: number
}

interface OfficeMapProps {
  locations: OfficeLocation[]
  _selectedLocation?: string
  _onSelectLocation?: (id: string) => void
}

export function OfficeMap({ 
  locations,
  _selectedLocation,
  _onSelectLocation 
}: OfficeMapProps) {
  const [selectedLocationState, setSelectedLocation] = useState<OfficeLocation | null>(null)
  const totalColleagues = locations.reduce((acc, loc) => acc + loc.employees, 0)

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
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${getLocationColor(location.name)}`}>
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="hidden group-hover:block">
                <p className="text-white text-sm font-medium whitespace-nowrap">{location.name}</p>
                <p className="text-white/60 text-xs whitespace-nowrap">
                  {location.employees} colleagues here
                </p>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">{location.employees}</span>
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
      {selectedLocationState && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl rounded-t-2xl border-t border-white/10">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${getLocationColor(selectedLocationState.name)}`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{selectedLocationState.name}</h3>
                  <p className="text-white/60 text-sm">{selectedLocationState.employees} colleagues here</p>
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
              {/* Assuming you have a way to access colleagues for each location */}
              {/* This is a placeholder and should be replaced with actual data */}
              {/* For example, you can fetch colleagues from a database or API */}
              {/* Here's a simple example with hardcoded colleagues */}
              {Array.from({ length: selectedLocationState.employees }, (_, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <span className="text-white/80">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Colleague {index + 1}</h4>
                      <p className="text-white/60 text-sm">Status: Working</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/40 text-sm">Duration: 2h</span>
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

function getLocationPosition(id: string): string {
  switch (id) {
    case "Creative Hub": return "top-[30%] left-[40%]"
    case "Adobe Café": return "top-[50%] right-[30%]"
    case "Wellness Center": return "bottom-[30%] left-[30%]"
    default: return ""
  }
}

function getLocationColor(name: string): string {
  switch (name) {
    case "Creative Hub": return "bg-blue-500"
    case "Adobe Café": return "bg-orange-500"
    case "Wellness Center": return "bg-purple-500"
    default: return "bg-gray-500"
  }
} 