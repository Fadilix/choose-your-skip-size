import { SkipSelection } from "../skip/SkipSelection"
import { SkipConfirmation } from "../skip/SkipConfirmation"
import { SkipSizeGuide } from "../skip/SkipSizeGuide"
import { PageHeader } from "./PageHeader"
import useSkips from "../../hooks/useSkips"

interface MainContentProps {
  selectedSkipId: string | null
  onSelectSkip: (skipId: string) => void
  onDeselectSkip: () => void
}

export function MainContent({ selectedSkipId, onSelectSkip, onDeselectSkip }: MainContentProps) {
  const { data: skips } = useSkips();
  const selectedSkip = skips?.find((skip) => skip.id.toString() === selectedSkipId)

  const handleToggleSkip = (skipId: string) => {
    if (selectedSkipId === skipId) {
      onDeselectSkip();
    } else {
      onSelectSkip(skipId);
    }
  };

  const handleContinue = () => {
    if (selectedSkip) {
      // TODO: Process the selected skip
    }
  };

  return (
    <main className="container mx-auto px-4 py-6 pb-24 md:pb-24 mt-4">
      <div className="max-w-7xl mx-auto">
        <PageHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <SkipSelection
              onSelectSkip={handleToggleSkip}
              selectedSkipId={selectedSkipId}
            />

            {selectedSkip && (
              <div className="mt-8">
                <SkipConfirmation
                  skip={selectedSkip}
                  onBack={onDeselectSkip}
                  onContinue={handleContinue}
                />
              </div>
            )}
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <SkipSizeGuide />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 