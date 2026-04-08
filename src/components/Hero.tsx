import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-gold-50 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Premium Fashion Boutique</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 animate-slide-up">
          Elegance Woven Into
          <span className="block text-purple-700 mt-2">Every Thread</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Discover the perfect blend of modern sophistication and timeless style at Zitah Elegance.
          Where every piece tells a story of elegance, creativity, and exceptional craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('collections')}
            className="group bg-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-purple-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-purple-700 px-8 py-4 rounded-full font-medium text-lg border-2 border-purple-700 hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-heading font-bold text-purple-700 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Elegant Designs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-heading font-bold text-purple-700 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Quality Guaranteed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-heading font-bold text-purple-700 mb-2">9-6</div>
            <div className="text-gray-600 font-medium">Open Daily</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-700 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
