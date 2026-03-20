import { Phone, Mail, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/2348063477204?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to visit us? We'd love to hear from you and welcome you to our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for the perfect outfit, interested in custom designs,
                or just want to learn more about our collections, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="tel:+234806347720"
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-blue-100"
              >
                <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Phone
                  </h4>
                  <p className="text-blue-600 font-semibold text-lg">+234 806 347 7204</p>
                  <p className="text-gray-600 text-sm mt-1">Mon-Sun: 9:00 AM - 4:00 PM</p>
                </div>
              </a>

              <a
                href="https://wa.me/2348063477204"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-green-100"
              >
                <div className="bg-green-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-green-700 font-semibold text-lg">Chat with us</p>
                  <p className="text-gray-600 text-sm mt-1">Quick responses guaranteed</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg border border-purple-100">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-purple-700 font-semibold">preciousodiwomma09@gmail.com</p>
                  <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border border-indigo-100">
                <div className="bg-indigo-600 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Location
                  </h4>
                  <p className="text-indigo-700 font-semibold">Ikenegbu Extension Layout</p>
                  <p className="text-gray-600 text-sm mt-1">Plot 1 Ibeto Street, Owerri, Imo, Nigeria</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border border-cyan-100">
                <div className="bg-cyan-600 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Service Hours
                  </h4>
                  <p className="text-cyan-700 font-semibold">Sunday: 10:00 AM</p>
                  <p className="text-gray-600 text-sm mt-1">Additional programs throughout the week</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">
                Connect With Us
              </h4>
              <p className="text-blue-100 mb-6">
                Stay updated with our latest sermons, events, and community updates
              </p>
              <p className="text-blue-100 text-sm mb-4">
                Follow us on social media for inspiring messages, community stories, and upcoming events
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your question or prayer request..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Send Message via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                We'll respond to your message as soon as possible
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
