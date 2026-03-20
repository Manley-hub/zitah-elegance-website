import { ArrowRight, Sparkles, Heart } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6 animate-fade-in">
          <Heart className="w-4 h-4" />
          <span className="text-sm font-medium">Welcome to Our Community</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 animate-slide-up">
          Welcome to
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">First Love Assembly</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          A Place of Worship, Word, and Transformation. Join us as we encounter God's presence, grow spiritually, and serve our community with love and compassion.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => scrollToSection('services')}
            className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
          >
            <span>Join Us for Service</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium text-lg border-2 border-blue-600 hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
          >
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-bold text-blue-600 mb-2">Sun 10 AM</div>
            <div className="text-gray-600 font-medium">Worship Service</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-bold text-blue-600 mb-2">5 Days</div>
            <div className="text-gray-600 font-medium">Weekly Programs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
            <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Community Members</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
