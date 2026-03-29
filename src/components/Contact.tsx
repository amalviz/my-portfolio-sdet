import { MapPin, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            Open to opportunities and collaborations in quality engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <div className="card-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-neutral-200">Location</h3>
                  <p className="text-neutral-400">Manchester, United Kingdom</p>
                </div>
              </div>
            </div>

            <div className="card-border p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-neutral-200">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/amal-viswanath-sdet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 hover:scale-105 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 mx-auto text-neutral-400 group-hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="https://github.com/amalviz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 hover:scale-105 group"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 mx-auto text-neutral-400 group-hover:text-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="card-border p-10 rounded-2xl">
            <h3 className="text-2xl font-bold mb-8 text-neutral-100">Send a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3 text-neutral-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3 text-neutral-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors text-neutral-100"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3 text-neutral-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-xl focus:outline-none focus:border-blue-500 transition-colors resize-none text-neutral-100"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center border-t border-neutral-800 pt-12">
          <p className="text-neutral-500">
            © 2026 Amal Viswanath. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
