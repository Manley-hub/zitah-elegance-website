import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visit Our <span className="text-purple-700">Store</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Come experience our collections in person at our boutique in Owerri
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    Our Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ama-Wire, Orji Road<br />
                    Owerri North 460108<br />
                    Imo State, Nigeria
                  </p>
                  <p className="text-purple-700 font-medium mt-2">
                    Plus Code: G28W+5RR Owerri
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-purple-100">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-purple-700" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-2">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Monday - Saturday</span>
                      <span className="text-purple-700 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-purple-700 font-semibold">9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-900">
                      <span className="font-semibold">Note:</span> We recommend calling ahead for custom fittings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-purple-900 p-8 rounded-2xl shadow-xl text-white">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Navigation className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Get Directions
                  </h3>
                  <p className="text-purple-100 mb-4">
                    Easily find us using Google Maps navigation
                  </p>
                  <a
                    href="https://maps.google.com/?q=G28W%2B5RR+Owerri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-purple-700 px-6 py-3 rounded-full font-medium hover:bg-purple-50 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <div className="bg-white p-4 rounded-2xl shadow-xl border border-purple-100 overflow-hidden">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-purple-700 mx-auto mb-4" />
                  <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                    Visit Our Store
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ama-Wire, Orji Road<br />
                    Owerri North, Imo State
                  </p>
                  <a
                    href="https://maps.google.com/?q=G28W%2B5RR+Owerri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Open Map</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-600">
                  Tap to view on Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-50 to-gold-50 rounded-2xl p-8 text-center border border-purple-100">
          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
            Plan Your Visit
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're conveniently located in the heart of Owerri. Stop by to explore our full collection,
            get styled by our experts, or discuss custom design options.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:09078536376"
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors shadow-lg"
            >
              Call to Schedule Visit
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-purple-700 px-8 py-3 rounded-full font-medium border-2 border-purple-700 hover:bg-purple-50 transition-colors"
            >
              Send Us a Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
