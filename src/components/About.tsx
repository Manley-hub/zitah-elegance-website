import { useEffect, useState } from 'react';
import { Heart, Target, Lightbulb } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface AboutContent {
  section: string;
  title: string;
  content: string;
}

export default function About() {
  const [aboutData, setAboutData] = useState<AboutContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseKey) {
          console.error('Missing Supabase credentials');
          setLoading(false);
          return;
        }

        const supabase = createClient(supabaseUrl, supabaseKey);
        const { data, error } = await supabase
          .from('about_content')
          .select('*')
          .order('section');

        if (error) throw error;
        setAboutData(data || []);
      } catch (error) {
        console.error('Error fetching about content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const getIcon = (section: string) => {
    switch (section) {
      case 'mission':
        return <Heart className="w-8 h-8" />;
      case 'vision':
        return <Lightbulb className="w-8 h-8" />;
      default:
        return <Target className="w-8 h-8" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-blue-600">First Love Assembly</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our heart, purpose, and the journey that guides everything we do
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {aboutData.map((item) => (
              <div
                key={item.section}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-blue-100"
              >
                <div className="text-blue-600 mb-4">{getIcon(item.section)}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">✓</span>
                  <span>Faith in Jesus Christ as Lord and Savior</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">✓</span>
                  <span>The transforming power of the Holy Spirit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">✓</span>
                  <span>Community and authentic fellowship</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">✓</span>
                  <span>Servant leadership and compassion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">✓</span>
                  <span>Spiritual growth and personal transformation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Join Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">•</span>
                  <span>Powerful, Spirit-filled worship services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">•</span>
                  <span>Sound biblical teaching and mentorship</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">•</span>
                  <span>Welcoming, inclusive community</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">•</span>
                  <span>Opportunities to serve and grow spiritually</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-200 mt-1">•</span>
                  <span>Real relationships and accountability</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            First Love Assembly was founded with a burning passion to create a sanctuary where believers can authentically encounter God's presence. Our journey began with a simple vision: to build a community of faith that is not just a Sunday gathering, but a spiritual family committed to daily transformation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over the years, we've witnessed countless lives changed, families healed, and communities impacted by the power of God's Word and the Holy Spirit. Today, we continue that legacy, standing as a beacon of hope, faith, and love in Owerri and beyond. Whether you're taking your first steps in faith or you're a seasoned believer, there's a place for you here at First Love Assembly.
          </p>
        </div>
      </div>
    </section>
  );
}
