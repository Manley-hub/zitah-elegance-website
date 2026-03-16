import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-purple-700">
              Zitah Elegance
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('collections')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              Visit Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-700 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:09078536376"
              className="flex items-center space-x-2 bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">Call Now</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-purple-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('collections')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                Collections
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                Visit Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-purple-700 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <a
                href="tel:09078536376"
                className="flex items-center justify-center space-x-2 bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
