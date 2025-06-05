import { useState } from "react";
import { Header } from "./components/layout/Header";
import { MainContent } from "./components/layout/MainContent";
import { ProgressSteps } from "./components/steps/ProgressSteps";
import { Footer } from "./components/layout/Footer";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import useSkips from "./hooks/useSkips";
import { formatPrice } from "./utils";

export default function App() {
  const [selectedSkipId, setSelectedSkipId] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(2);
  const { data: skips } = useSkips();
  const selectedSkip = skips?.find((skip) => skip.id.toString() === selectedSkipId);

  const handleSelectSkip = (skipId: string) => {
    setSelectedSkipId(skipId);
  };

  const handleDeselectSkip = () => {
    setSelectedSkipId(null);
  };

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <ProgressSteps
        currentStep={currentStep}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasSelectedSkip={!!selectedSkipId}
      />
      
      <AnimatePresence>
        {selectedSkip && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sticky top-[72px] right-0 z-40 ml-auto mr-4 max-w-[280px]"
          >
            <div className="bg-white rounded-lg shadow-lg border border-emerald-100 overflow-hidden">
              <div className="bg-emerald-50 p-2 flex items-center space-x-2 border-b border-emerald-100">
                <div className="bg-emerald-100 rounded-full p-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <span className="font-medium text-xs text-emerald-800">Your Skip Selection</span>
              </div>
              <div className="p-2 space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Size:</span>
                  <span className="text-xs font-semibold text-gray-800">{selectedSkip.size} Yard</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Hire Period:</span>
                  <span className="text-xs font-semibold text-gray-800">{selectedSkip.hire_period_date} days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Total Price:</span>
                  <span className="text-xs font-bold text-emerald-600">
                    {formatPrice(selectedSkip.price_before_vat + selectedSkip.vat)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleDeselectSkip}
                className="w-full p-1.5 text-xs text-center text-emerald-600 border-t border-emerald-100"
              >
                Change Selection
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <MainContent
        selectedSkipId={selectedSkipId}
        onSelectSkip={handleSelectSkip}
        onDeselectSkip={handleDeselectSkip}
      />
      <Footer />

      {selectedSkipId && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={handleNext}
            disabled={!selectedSkipId}
            className={`rounded-full w-16 h-16 shadow-lg ${
              selectedSkipId
                ? "bg-emerald-500 shadow-emerald-500/20"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            <ArrowRight className="w-8 h-8 text-white" />
          </Button>
        </div>
      )}
    </div>
  );
}
