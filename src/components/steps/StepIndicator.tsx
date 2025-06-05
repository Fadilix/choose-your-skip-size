import { CheckCircle2 } from "lucide-react"
import type { Step } from "../../interfaces/step"

interface StepIndicatorProps {
  step: Step
  index: number
  currentStep: number
}

export function StepIndicator({ step, index, currentStep }: StepIndicatorProps) {
  const Icon = step.icon
  const isCompleted = index < currentStep
  const isCurrent = index === currentStep

  return (
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 flex-shrink-0 ${
        isCompleted
          ? "bg-emerald-500 border-emerald-500"
          : isCurrent
          ? "border-emerald-500"
          : "border-gray-200"
      }`}>
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-white" />
        ) : (
          <Icon className={`w-4 h-4 ${
            isCurrent ? "text-emerald-500" : "text-gray-400"
          }`} />
        )}
      </div>
      <div className={`ml-2 ${
        isCurrent ? "text-emerald-600" : "text-gray-500"
      }`}>
        <span className="text-xs font-medium whitespace-nowrap hidden lg:inline">
          {step.label}
        </span>
      </div>
    </div>
  )
} 