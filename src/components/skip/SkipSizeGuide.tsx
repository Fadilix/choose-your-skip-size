import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"

export function SkipSizeGuide() {
  return (
    <>
      <Card className="bg-white/80 backdrop-blur-sm border border-emerald-100">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Skip Size Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">2-4 Yard</span>
              <span className="text-sm text-gray-600">Small Projects</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">4-6 Yard</span>
              <span className="text-sm text-gray-600">Medium Projects</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">8-10 Yard</span>
              <span className="text-sm text-gray-600">Large Projects</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">12+ Yard</span>
              <span className="text-sm text-gray-600">Extra Large Projects</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 backdrop-blur-sm border border-emerald-100">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900">Need Help?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">
            Our team is here to help you choose the right skip size for your project.
          </p>
          <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            Contact Us
          </Button>
        </CardContent>
      </Card>
    </>
  )
} 