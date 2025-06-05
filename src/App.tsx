import { ProgressSteps } from "./components/ProgressSteps"
import { SkipCard } from "./components/SkipCard"
import useSkips from "./hooks/useSkips"
import type { Skip } from "./interfaces"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"

export default function App() {
  const { data: skips, isLoading, error } = useSkips()

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <img src="/logo.png" alt="Remwaste Logo" className="h-8 w-auto" /> */}
              <span className="text-xl font-bold text-emerald-600">Remwaste</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Services</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        {/* Skip Hire Information */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Skip Size
          </h1>
          <p className="text-lg text-gray-600">
            Select the perfect skip size for your project. We offer a range of options to suit your needs.
          </p>
        </div>

        {/* Sticky Steps */}
        <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-sm border-b border-emerald-100 mb-8">
          <ProgressSteps />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skip Cards */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Available Skip Sizes</h2>
              <p className="text-gray-600 mb-8">Select the skip size that best fits your needs</p>
              
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
                </div>
              ) : error ? (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                  Error loading skips. Please try again later.
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8">
                  {skips?.map((skip: Skip, index: number) => (
                    <SkipCard key={skip.id} skip={skip} index={index} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Skip Size Guide */}
              <Card className="bg-white/80 backdrop-blur-sm border border-emerald-100">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">Skip Size Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">2 Yard</span>
                      <span className="text-sm text-gray-600">Small Projects</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">4 Yard</span>
                      <span className="text-sm text-gray-600">Medium Projects</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">8 Yard</span>
                      <span className="text-sm text-gray-600">Large Projects</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">12 Yard</span>
                      <span className="text-sm text-gray-600">Extra Large Projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Need Help? */}
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
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
