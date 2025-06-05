import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "../ui/button"

interface NavigationButtonsProps {
  onPrevious: () => void
  onNext: () => void
  hasSelectedSkip: boolean
}

export function NavigationButtons({ onPrevious, onNext, hasSelectedSkip }: NavigationButtonsProps) {
  return (
    <div className="flex items-center space-x-4 ml-8 shrink-0">
      <Button
        variant="outline"
        className="flex items-center text-sm md:text-base"
        onClick={onPrevious}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline">Previous</span>
      </Button>
      <Button
        className={`flex items-center text-sm md:text-base ${hasSelectedSkip ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
        onClick={onNext}
        disabled={!hasSelectedSkip}
      >
        <span className="hidden sm:inline">Next</span>
        <ArrowRight className="w-4 h-4 sm:ml-2" />
      </Button>
    </div>
  )
} 