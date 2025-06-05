import { ChevronRight, AlertCircle, Scale, Calendar, CheckCircle2, X } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"
import { motion } from "motion/react"
import type { Skip } from "../../interfaces"
import { formatPrice } from "../../utils"


interface SkipCardProps {
  skip: Skip
  index: number
  isSelected: boolean
  onSelect: () => void
}

export function SkipCard({ skip, index, isSelected, onSelect }: SkipCardProps) {
  const isRoadAllowed = skip.allowed_on_road;
  const isHeavyWasteAllowed = skip.allows_heavy_waste;
  const totalPrice = skip.price_before_vat + skip.vat;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full cursor-pointer"
    >
      <Card onClick={onSelect} className={`relative overflow-hidden bg-white border-0 shadow-sm transition-all duration-300 ${isSelected ? 'ring-2 ring-emerald-500 ring-offset-2 shadow-emerald-500/20' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-50" />

        {isSelected && (
          <div className="absolute top-3 right-3 z-10 bg-emerald-500 rounded-full p-1 shadow-lg">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
        )}

        <div className="relative">
          <div className="relative h-[300px] overflow-hidden">
            <img
              src="/4-yarder-skip.jpg"
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-cover"
            />

            <div className="absolute top-6 left-6">
              <span className="bg-white text-emerald-600 px-5 py-2 rounded-full text-xl font-bold shadow-lg">
                {skip.size} Yard
              </span>
            </div>

            {!isRoadAllowed && (
              <div className="absolute top-6 right-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Road Permit Required</span>
              </div>
            )}

            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
              <span className="text-2xl font-bold text-emerald-600">
                {formatPrice(totalPrice)}
              </span>
              <p className="text-xs text-gray-500">Total Price</p>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50/50 rounded-lg p-4 flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Hire Period</p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    {skip.hire_period_date} days
                  </p>
                </div>
              </div>
              <div className="bg-emerald-50/50 rounded-lg p-4 flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <Scale className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Waste Type</p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    {isHeavyWasteAllowed ? 'Heavy Waste' : 'Light Waste'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50/50 rounded-lg p-4 mb-6 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Base Price</span>
                <span className="font-medium text-gray-800">{formatPrice(skip.price_before_vat)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">VAT ({skip.vat}%)</span>
                <span className="font-medium text-gray-800">{formatPrice(skip.vat)}</span>
              </div>
              <div className="border-t border-gray-200 my-2"></div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold text-emerald-600">Total Price</span>
                <span className="font-bold text-emerald-600">{formatPrice(totalPrice)}</span>
              </div>
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className={`w-full rounded-lg py-5 text-base font-semibold ${isSelected
                  ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-500'
                  : 'bg-emerald-500 text-white border-0'
                }`}
              variant="outline"
            >
              {isSelected ? (
                <>
                  <X className="w-5 h-5 mr-2" />
                  Deselect Skip
                </>
              ) : (
                <>
                  Select This Skip
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
} 