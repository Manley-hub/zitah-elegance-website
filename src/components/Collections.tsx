import { useEffect, useState } from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

interface Event {
  id: string;
  title: string;
  description: string;
  day_of_week: string;
  time: string;
  category: string;
}

export default function Services() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
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
          .from('events')
          .select('*')
          .order('day_of_week');

        if (error) throw error;
        setEvents(data || []);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Worship': 'bg-blue-100 text-blue-700 border-blue-300',
      'Prayer': 'bg-purple-100 text-purple-700 border-purple-300',
      'Teaching': 'bg-green-100 text-green-700 border-green-300',
      'Community': 'bg-orange-100 text-orange-700 border-orange-300',
      'Children': 'bg-pink-100 text-pink-700 border-pink-300',
    };
    return colors[category] || 'bg-gray-100 text-gray-700 border-gray-300';
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services & Programs</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for worship, prayer, teaching, and community fellowship throughout the week
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 p-6 border border-gray-100"
              >
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold mb-4 border ${getCategoryColor(event.category)}`}>
                  {event.category}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{event.description}</p>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{event.day_of_week}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="font-medium">{event.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">Community Focused</h3>
              <p className="text-blue-100">Build meaningful relationships with believers who share your faith journey</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">Regular Meetings</h3>
              <p className="text-blue-100">Multiple programs throughout the week to fit your schedule and spiritual needs</p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-2">Flexible Times</h3>
              <p className="text-blue-100">Programs scheduled at convenient times for busy families and individuals</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">What to Expect</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-lg">Sunday Worship Service</h4>
              <p className="text-gray-700">Experience powerful worship, dynamic preaching, and the presence of the Holy Spirit. Our Sunday service is a celebration of faith, filled with praise, prayer, and God's transforming Word. Whether you're a first-time visitor or a longtime member, you'll find a warm welcome and meaningful encounter with God.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-gray-900 text-lg">Weekly Programs</h4>
              <p className="text-gray-700">From prayer meetings to Bible studies and youth fellowships, our programs are designed to deepen your relationship with God and connect you with our church family. Each program creates space for spiritual growth, discipleship, and authentic community. No experience necessary—just bring your heart and desire to grow.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
