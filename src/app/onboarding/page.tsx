"use client"

import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ModernCard } from "@/components/ui/modern-card"
import { 
  User, 
  Briefcase, 
  GraduationCap,
  Heart,
  Target,
  ChevronRight,
  Sparkles,
  LucideIcon
} from "lucide-react"

interface Step {
  id: string;
  title: string;
  icon: LucideIcon;
}

const steps: Step[] = [
  {
    id: "profile",
    title: "Let's get to know you",
    icon: User,
  },
  {
    id: "work",
    title: "Your role at Adobe",
    icon: Briefcase,
  },
  {
    id: "education",
    title: "Educational background",
    icon: GraduationCap,
  },
  {
    id: "interests",
    title: "What interests you?",
    icon: Heart,
  },
  {
    id: "goals",
    title: "Set your goals",
    icon: Target,
  },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  
  const StepIcon = steps[currentStep].icon
  
  return (
    <div className="min-h-screen bg-background text-white p-6">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-surface">
        <motion.div 
          className="h-full bg-primary"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        />
      </div>

      <div className="max-w-xl mx-auto pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ModernCard gradient>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <StepIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">
                    {steps[currentStep].title}
                  </h1>
                  <p className="text-textTertiary">
                    Step {currentStep + 1} of {steps.length}
                  </p>
                </div>
              </div>

              {/* Step content here */}
              
              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                  className="px-6 py-3 rounded-xl bg-surface hover:bg-surfaceHover"
                  disabled={currentStep === 0}
                >
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="px-6 py-3 rounded-xl bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      Complete
                      <Sparkles className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Continue
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </ModernCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
} 