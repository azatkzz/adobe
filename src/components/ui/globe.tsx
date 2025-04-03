"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe from "cobe"
import { cn } from "@/lib/utils"

interface GlobeProps {
  size?: number
  scale?: number
}

export function Globe({ 
  size = 400,
  scale = 1.5 
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    let phi = 0
    let width = 0
    let globe: ReturnType<typeof createGlobe> | null = null

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener('resize', onResize)
    onResize()

    if (canvasRef.current) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.3,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.1, 0.1, 0.1],
        markerColor: [251 / 255, 100 / 255, 21 / 255],
        glowColor: [1, 1, 1],
        scale: scale,
        offset: [0, 0],
        markers: [
          // Adobe offices
          { location: [37.7749, -122.4194], size: 0.05 }, // San Francisco
          { location: [40.7128, -74.0060], size: 0.05 },  // New York
          { location: [51.5074, -0.1278], size: 0.05 },   // London
          { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
          { location: [48.8566, 2.3522], size: 0.05 },    // Paris
          { location: [-33.8688, 151.2093], size: 0.05 }, // Sydney
          { location: [52.5200, 13.4050], size: 0.05 },   // Berlin
          { location: [19.0760, 72.8777], size: 0.05 },   // Mumbai
        ],
        onRender: (state) => {
          // This prevents rotation while dragging
          if (!pointerInteracting.current) {
            phi += 0.005
          }
          state.phi = phi + rotation
          state.width = width * 2
          state.height = width * 2
        }
      })
    }

    return () => {
      if (globe) {
        globe.destroy()
      }
      window.removeEventListener('resize', onResize)
    }
  }, [scale, rotation])

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grabbing'
    }
  }

  const handlePointerUp = () => {
    pointerInteracting.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab'
    }
  }

  const handlePointerOut = () => {
    pointerInteracting.current = null
    if (canvasRef.current) {
      canvasRef.current.style.cursor = 'grab'
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setRotation(delta / 200)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (pointerInteracting.current !== null && e.touches[0]) {
      const delta = e.touches[0].clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setRotation(delta / 100)
    }
  }

  return (
    <div 
      className="relative aspect-square w-full max-w-[400px] mx-auto"
      style={{ 
        width: size,
        height: size,
        maxWidth: '100%',
        aspectRatio: '1',
      }}
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full cursor-grab"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      />
    </div>
  )
} 