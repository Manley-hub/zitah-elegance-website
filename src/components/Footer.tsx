import { MapPin, Phone, Clock, Instagram, Facebook, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-3xl font-bold mb-4 text-gold-300">
              Zitah Elegance
            </h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Where elegance meets style. Your premier fashion destination in Owerri for
              sophisticated, high-quality apparel and custom designs.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold-300">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('collections')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('location')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Visit Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-purple-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold-300">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-purple-200">
                    Ama-Wire, Orji Road<br />
                    Owerri North 460108<br />
                    Imo State, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <a href="tel:09078536376" className="text-purple-200 hover:text-white transition-colors">
                  09078536376
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold-300">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-purple-200">
                    <span className="font-medium text-white">Monday - Sunday</span><br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-sm text-purple-100">
                <span className="font-semibold text-gold-300">Note:</span> Please call ahead
                for custom fittings and appointments
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-purple-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Zitah Elegance. All rights reserved.
            </p>
            <p className="text-purple-300 text-sm flex items-center">
              Crafted with <Heart className="w-4 h-4 mx-1 text-gold-400" /> in Owerri, Nigeria
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
