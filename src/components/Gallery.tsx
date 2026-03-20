import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface Sermon {
  id: string;
  title: string;
  description: string;
  speaker: string;
  date: string;
  video_url: string;
}

export default function Sermons() {
  const [sermons, setSermons] = useState<Sermon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSermons = async () => {
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
          .from('sermons')
          .select('*')
          .order('date', { ascending: false })
          .limit(6);

        if (error) throw error;
        setSermons(data || []);
      } catch (error) {
        console.error('Error fetching sermons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSermons();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Recent <span className="text-blue-600">Sermons & Messages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be encouraged and transformed by powerful messages of faith and spiritual growth
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : sermons.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {sermons.map((sermon) => (
                <div
                  key={sermon.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer text-left bg-gray-50"
                >
                  <div className="aspect-video relative bg-gray-900">
                    {sermon.video_url && (
                      <iframe
                        width="100%"
                        height="100%"
                        src={sermon.video_url}
                        title={sermon.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    )}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-semibold mb-2">
                      {formatDate(sermon.date)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                      {sermon.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {sermon.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-sm font-medium text-gray-700">
                        By {sermon.speaker}
                      </span>
                      <span className="text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Watch →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-6">
                Watch full messages and get inspired by our recent services
              </p>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center space-x-2"
              >
                <span>Visit Our YouTube Channel</span>
                <Play className="w-4 h-4" />
              </a>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Sermons will be available soon</p>
          </div>
        )}
      </div>
    </section>
  );
}
