import { Truck, Shield, CreditCard } from "lucide-react"
import { motion } from "motion/react"

export function BenefitsSection() {
  return (
    <motion.div
      className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-emerald-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Skip Hire Service?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Truck className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Next day delivery available in most areas</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Shield className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Licensed & Insured</h3>
            <p className="text-gray-600 text-sm">Fully licensed waste carrier</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <CreditCard className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Secure Payment</h3>
            <p className="text-gray-600 text-sm">Safe and secure payment options</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
} 