import { motion } from "motion/react"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "../ui/button"
import { Card } from "../ui/card"
import type { Skip } from "../../interfaces"
import { formatPrice } from "../../utils"

interface SkipConfirmationProps {
  skip: Skip | null
  onBack: () => void
  onContinue: () => void
}

export function SkipConfirmation({ skip, onBack, onContinue }: SkipConfirmationProps) {
  if (!skip) return null;

  const totalPrice = skip.price_before_vat + skip.vat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="w-full"
    >
      <Card className="relative overflow-hidden bg-white border-2 border-emerald-500">
        <div className="p-4 border-b border-gray-100 bg-emerald-50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Your Skip Selection</h2>
              <p className="text-sm text-gray-600">You've chosen the {skip.size} Yard Skip</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="sm:w-1/2 space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600">Hire Period</p>
                <p className="text-sm font-semibold text-emerald-600">{skip.hire_period_date} days</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600">Waste Type</p>
                <p className="text-sm font-semibold text-emerald-600">
                  {skip.allows_heavy_waste ? 'Heavy Waste' : 'Light Waste'}
                </p>
              </div>
            </div>

            <div className="sm:w-1/2">
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">Base Price</span>
                  <span className="font-medium">{formatPrice(skip.price_before_vat)}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-600">VAT ({skip.vat}%)</span>
                  <span className="font-medium">{formatPrice(skip.vat)}</span>
                </div>
                <div className="border-t border-gray-200 my-1" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">Total Price</span>
                  <span className="text-base font-bold text-emerald-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="text-sm"
              onClick={onBack}
            >
              <ArrowLeft className="w-3 h-3 mr-1" />
              Change
            </Button>
            <Button
              className="flex-1 bg-emerald-500 text-white text-sm"
              size="sm"
              onClick={onContinue}
            >
              Continue to Next Step
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  )
} 