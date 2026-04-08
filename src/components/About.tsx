import { Heart, Award, Palette, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'Every piece is crafted with love and attention to detail, ensuring you look and feel your best.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest fabrics and materials to create lasting, elegant garments.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Our designs blend modern trends with timeless elegance for truly unique fashion.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We offer personalized service and custom designs.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-purple-700">Zitah Elegance</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Welcome to Zitah Elegance, where style meets sophistication in the heart of Owerri
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fashion boutique"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-purple-700 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-heading font-bold">Since 2020</div>
              <div className="text-purple-100">Serving Owerri</div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-heading text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Zitah Elegance was born from a passion for creating beautiful, high-quality fashion
              that empowers individuals to express their unique style. Located in the vibrant city
              of Owerri, we've become a trusted destination for those seeking elegance and sophistication.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our mission is simple: to deliver stylish, elegant, and high-quality fashion that celebrates
              creativity and modern African aesthetics. From everyday wear to special occasions, we curate
              and create pieces that make you feel confident and beautiful.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-700 p-6 rounded-r-lg">
              <p className="text-purple-900 font-medium italic">
                "We believe that fashion is more than clothing—it's a form of self-expression,
                a celebration of individuality, and an art form that deserves to be crafted with excellence."
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="bg-purple-700 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="font-heading text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
