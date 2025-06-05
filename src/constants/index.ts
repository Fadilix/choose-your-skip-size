import { Calendar, CreditCard, MapPin, Shield, Trash2, Truck } from "lucide-react";

export const steps = [
    { icon: MapPin, label: "Postcode", completed: true },
    { icon: Trash2, label: "Waste Type", active: true },
    { icon: Truck, label: "Select Skip", upcoming: true },
    { icon: Shield, label: "Permit Check", upcoming: true },
    { icon: Calendar, label: "Choose Date", upcoming: true },
    { icon: CreditCard, label: "Payment", upcoming: true },
]