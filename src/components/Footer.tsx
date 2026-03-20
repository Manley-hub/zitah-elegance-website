import { MapPin, Phone, Clock, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300">
              First Love Assembly
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              A place of worship, word, and transformation. Growing in faith, serving our community,
              and experiencing the transforming power of God's love.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sermons')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Sermons
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-blue-200">
                    Plot 1 Ibeto Street<br />
                    Ikenegbu Extension Layout<br />
                    Owerri 23483, Imo, Nigeria
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+234806347720" className="text-blue-200 hover:text-white transition-colors">
                  +234 806 347 7204
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-300">Service Times</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-blue-200">
                    <span className="font-medium text-white">Sunday Worship</span><br />
                    10:00 AM
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-6 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-sm text-blue-100">
                <span className="font-semibold text-blue-300">Weekly Programs:</span> Prayer meetings, Bible studies, and fellowship throughout the week
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-300 text-sm text-center md:text-left">
              © {new Date().getFullYear()} First Love Assembly. All rights reserved.
            </p>
            <p className="text-blue-300 text-sm flex items-center">
              Built with <Heart className="w-4 h-4 mx-1 text-blue-400" /> for our faith community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
