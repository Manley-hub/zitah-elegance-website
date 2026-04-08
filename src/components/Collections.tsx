import { Sparkles } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      title: "Women's Fashion",
      description: 'Elegant dresses, tops, and bottoms for the modern woman',
      image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-600 to-purple-800',
    },
    {
      title: 'Designer Outfits',
      description: 'Exclusive, handcrafted pieces for those special moments',
      image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gold-600 to-gold-800',
    },
    {
      title: 'Casual Wear',
      description: 'Comfortable yet stylish everyday fashion',
      image: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-700 to-purple-900',
    },
    {
      title: 'Special Occasion',
      description: 'Stunning gowns and outfits for weddings and events',
      image: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gold-700 to-gold-900',
    },
    {
      title: 'Custom Designs',
      description: 'Bespoke creations tailored to your unique vision',
      image: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-purple-800 to-purple-950',
    },
    {
      title: 'Accessories',
      description: 'Complete your look with our curated accessories',
      image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800',
      gradient: 'from-gold-800 to-gold-950',
    },
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-700">Collections</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated collections designed to elevate your style
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer text-left"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.gradient} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-gold-300" />
                  <span className="text-sm font-medium text-gold-200">Premium Collection</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2">
                  {collection.title}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {collection.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <span className="inline-flex items-center text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                    Explore Collection
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-purple-50 border border-purple-200 rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl">
              We offer custom design services to bring your unique fashion vision to life. Let our expert designers create something special just for you.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors shadow-lg"
            >
              Request Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
