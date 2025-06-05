import { motion } from "motion/react"
import { steps } from "../constants"
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

export function ProgressSteps() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100 shadow-sm">
      {/* Desktop Steps */}
      <div className="hidden md:block max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3 group">
                  <div
                    className={`p-2 rounded-full transition-all duration-300 ${step.completed
                        ? "bg-emerald-500 text-white ring-4 ring-emerald-500/20"
                        : step.active
                          ? "bg-emerald-500 text-white ring-4 ring-emerald-500/20"
                          : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${step.completed || step.active ? "text-emerald-600" : "text-gray-400 group-hover:text-gray-600"
                      }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-px mx-4 transition-colors duration-300 ${step.completed ? "bg-emerald-500" : "bg-gray-200"
                    }`} />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Mobile Steps */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full px-4 py-3 flex items-center justify-between bg-white"
        >
          <div className="flex items-center space-x-3">
            {steps.map((step, index) => {
              if (step.active) {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-emerald-500 text-white ring-4 ring-emerald-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-medium text-emerald-600">
                      {step.label}
                    </span>
                  </div>
                )
              }
              return null
            })}
          </div>
          {isMobileMenuOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>

        {/* Mobile Steps Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div
                      className={`p-2 rounded-full transition-all duration-300 ${step.completed
                          ? "bg-emerald-500 text-white"
                          : step.active
                            ? "bg-emerald-500 text-white"
                            : "bg-gray-100 text-gray-400"
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-sm font-medium ${step.completed || step.active ? "text-emerald-600" : "text-gray-400"
                        }`}
                    >
                      {step.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
} 