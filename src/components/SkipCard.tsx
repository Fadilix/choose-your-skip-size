import { ChevronRight, AlertCircle, Scale, Calendar } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { motion } from "motion/react"
import type { Skip } from "../interfaces"

interface SkipCardProps {
  skip: Skip
  index: number
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export function SkipCard({ skip, index }: SkipCardProps) {
  const totalPrice = skip.price_before_vat + skip.vat;
  const isHeavyWasteAllowed = skip.allows_heavy_waste;
  const isRoadAllowed = skip.allowed_on_road;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-full"
    >
      <Card className="group relative overflow-hidden bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-50" />

        {/* Content */}
        <div className="relative">
          {/* Image Section */}
          <div className="relative h-[200px] overflow-hidden">
            <img
              src="/4-yarder-skip.jpg"
              alt={`${skip.size} Yard Skip`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Size Badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-white text-emerald-600 px-5 py-2 rounded-full text-xl font-bold shadow-lg">
                {skip.size} Yard
              </span>
            </div>

            {/* Warning Badge */}
            {!isRoadAllowed && (
              <div className="absolute top-6 right-6 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-2">
                <AlertCircle className="w-5 h-5" />
                <span>Road Permit Required</span>
              </div>
            )}

            {/* Price Overlay */}
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
              <span className="text-2xl font-bold text-emerald-600">
                {formatPrice(totalPrice)}
              </span>
              <p className="text-xs text-gray-500">Total Price</p>
            </div>
          </div>

          <CardContent className="p-6">
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-emerald-50/50 rounded-lg p-4 flex items-center space-x-3 group-hover:bg-emerald-50 transition-colors duration-300">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Hire Period</p>
                  <p className="text-sm text-emerald-600 font-semibold">
                    {skip.hire_period_date} days
                  </p>
                </div>
              </div>
              <div className="bg-emerald-50/50 rounded-lg p-4 flex items-center space-x-3 group-hover:bg-emerald-50 transition-colors duration-300">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
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

            {/* Price Breakdown */}
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

            {/* Action Button */}
            <Button
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white border-0 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/20 rounded-lg py-5 text-base font-semibold"
              variant="outline"
            >
              Select This Skip
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  )
} 