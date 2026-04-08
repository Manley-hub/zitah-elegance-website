import { Phone, Mail, MessageCircle, Send, Instagram, Facebook } from 'lucide-react';
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
    const whatsappUrl = `https://wa.me/2349078536376?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-purple-700">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-gold-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or ready to start your fashion journey? We'd love to hear from you
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
                href="tel:09078536376"
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-purple-100"
              >
                <div className="bg-purple-700 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">
                    Phone
                  </h4>
                  <p className="text-purple-700 font-semibold text-lg">09078536376</p>
                  <p className="text-gray-600 text-sm mt-1">Mon-Sun: 9:00 AM - 6:00 PM</p>
                </div>
              </a>

              <a
                href="https://wa.me/2349078536376"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 group border border-green-100"
              >
                <div className="bg-green-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">
                    WhatsApp
                  </h4>
                  <p className="text-green-700 font-semibold text-lg">Chat with us</p>
                  <p className="text-gray-600 text-sm mt-1">Quick responses guaranteed</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-gold-50 to-white rounded-2xl shadow-lg border border-gold-100">
                <div className="bg-gold-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold text-gray-900 mb-1">
                    Email
                  </h4>
                  <p className="text-gold-700 font-semibold">contact@zitahelegance.com</p>
                  <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-700 p-8 rounded-2xl text-white">
              <h4 className="font-heading text-2xl font-bold mb-4">
                Follow Us
              </h4>
              <p className="text-purple-100 mb-6">
                Stay updated with our latest collections and fashion tips
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none"
                  placeholder="Tell us about your fashion needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-purple-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Send Message via WhatsApp</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-sm text-gray-600 text-center">
                Your message will be sent via WhatsApp for faster response
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
