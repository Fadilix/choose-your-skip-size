import { Truck, Calendar, CreditCard, Trash, MapPin } from "lucide-react"
import type { Step } from "../interfaces/step"

export const STEPS: Step[] = [
  {
    icon: MapPin,
    label: "Postcode",
    description: "Enter your postcode to check if we deliver to your area"
  },
  {
    icon: Trash,
    label: "Waste Type",
    description: "Select the type of waste you need to dispose of"
  },
  {
    icon: Truck,
    label: "Select Skip",
    description: "Choose your preferred skip"
  },
  {
    icon: CreditCard,
    label: "Payment check",
    description: "Complete your payment details"
  },
  {
    icon: Calendar,
    label: "Choose date",
    description: "Choose your preferred delivery date"
  }
] 