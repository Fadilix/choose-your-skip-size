import { SkipCard } from "./SkipCard"
import useSkips from "../../hooks/useSkips"

interface SkipSelectionProps {
  onSelectSkip: (skipId: string) => void
  selectedSkipId: string | null
}

export function SkipSelection({ onSelectSkip, selectedSkipId }: SkipSelectionProps) {
  const { data: skips, isLoading, error } = useSkips()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">Failed to load skips. Please try again later.</p>
      </div>
    )
  }

  if (!skips || skips.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No skips available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skips.map((skip, index) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            index={index}
            isSelected={selectedSkipId === skip.id.toString()}
            onSelect={() => onSelectSkip(skip.id.toString())}
          />
        ))}
      </div>
    </div>
  )
} 