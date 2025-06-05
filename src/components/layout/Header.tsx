export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-emerald-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
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
  )
} 