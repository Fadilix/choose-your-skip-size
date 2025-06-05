import { useState } from "react"
import { motion } from "motion/react"
import type { ProgressStepsProps } from "../../interfaces/step"
import { STEPS } from "../../constants/steps"
import { StepIndicator } from "./StepIndicator"
import { NavigationButtons } from "./NavigationButtons"
import { MobileSteps } from "./MobileSteps"

export function ProgressSteps({ currentStep, onNext, onPrevious, hasSelectedSkip }: ProgressStepsProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center w-full justify-center md:justify-start">
              {STEPS.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex items-center flex-shrink-0"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StepIndicator
                    step={step}
                    index={index}
                    currentStep={currentStep}
                  />
                  {index < STEPS.length - 1 && (
                    <div className={`w-8 lg:w-16 xl:w-24 h-0.5 mx-2 lg:mx-4 ${index < currentStep ? "bg-emerald-500" : "bg-gray-200"
                      }`} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <NavigationButtons
            onPrevious={onPrevious}
            onNext={onNext}
            hasSelectedSkip={hasSelectedSkip}
          />
        </div>
      </div>

      <MobileSteps
        steps={STEPS}
        currentStep={currentStep}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onPrevious={onPrevious}
        onNext={onNext}
        hasSelectedSkip={hasSelectedSkip}
      />
    </div>
  )
} 