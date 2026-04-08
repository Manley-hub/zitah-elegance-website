import { Eye } from 'lucide-react';

export default function Gallery() {
  const galleryImages = [
    {
      url: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Evening Gown',
      category: 'Special Occasion',
    },
    {
      url: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Designer Dress',
      category: 'Premium Collection',
    },
    {
      url: 'https://images.pexels.com/photos/1374510/pexels-photo-1374510.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Casual Elegance',
      category: 'Everyday Wear',
    },
    {
      url: 'https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bridal Collection',
      category: 'Special Occasion',
    },
    {
      url: 'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Custom Design',
      category: 'Bespoke',
    },
    {
      url: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Fashion Forward',
      category: 'Designer',
    },
    {
      url: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Summer Collection',
      category: 'Seasonal',
    },
    {
      url: 'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Professional Attire',
      category: 'Work Wear',
    },
    {
      url: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Party Dress',
      category: 'Evening Wear',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-purple-700">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our stunning collection of elegant designs and fashion pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer aspect-[3/4] text-left"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <span className="text-gold-300 text-sm font-medium mb-2">
                  {image.category}
                </span>
                <h3 className="font-heading text-xl font-bold mb-3">
                  {image.title}
                </h3>
                <div className="flex items-center space-x-2 text-sm hover:opacity-80 transition-opacity">
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-purple-700 text-xs font-medium">Available</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            These are just a few samples from our extensive collection
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-purple-700 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-800 transition-colors shadow-lg"
          >
            View Full Collection In Store
          </button>
        </div>
      </div>
    </section>
  );
}
