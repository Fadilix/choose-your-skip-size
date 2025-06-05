import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/button"
import type { Step } from "../../interfaces/step"

interface MobileStepsProps {
  steps: Step[]
  currentStep: number
  isMobileMenuOpen: boolean
  onToggleMenu: () => void
  onPrevious: () => void
  onNext: () => void
  hasSelectedSkip: boolean
}

export function MobileSteps({
  steps,
  currentStep,
  isMobileMenuOpen,
  onToggleMenu,
  onPrevious,
  onNext,
  hasSelectedSkip
}: MobileStepsProps) {
  const currentStepData = steps[currentStep]
  const Icon = currentStepData.icon

  return (
    <div className="md:hidden">
      <button
        onClick={onToggleMenu}
        className="w-full px-4 py-3 flex items-center justify-between bg-white"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-emerald-50 rounded-full">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-500">Step {currentStep + 1} of {steps.length}</p>
            <p className="font-medium text-gray-900">{currentStepData.label}</p>
          </div>
        </div>
        <div className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white border-t border-gray-100"
        >
          <div className="px-4 py-3 space-y-4">
            {steps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 ${
                    index === currentStep ? "text-emerald-600" : "text-gray-500"
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    index < currentStep
                      ? "bg-emerald-500 border-emerald-500"
                      : index === currentStep
                      ? "border-emerald-500"
                      : "border-gray-200"
                  }`}>
                    {index < currentStep ? (
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    ) : (
                      <StepIcon className={`w-4 h-4 ${
                        index === currentStep ? "text-emerald-500" : "text-gray-400"
                      }`} />
                    )}
                  </div>
                  <span className="font-medium">{step.label}</span>
                </div>
              )
            })}
          </div>

          <div className="px-4 py-3 border-t border-gray-100 flex items-center space-x-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onPrevious}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            <Button
              className={`flex-1 ${hasSelectedSkip ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
              onClick={onNext}
              disabled={!hasSelectedSkip}
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  )
} 