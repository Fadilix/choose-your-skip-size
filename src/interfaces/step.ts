import type { LucideIcon } from "lucide-react"

export interface Step {
  icon: LucideIcon
  label: string
  description: string
}

export interface ProgressStepsProps {
  currentStep: number
  onNext: () => void
  onPrevious: () => void
  hasSelectedSkip: boolean
} 