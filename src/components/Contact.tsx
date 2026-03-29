import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Open to opportunities and collaborations in quality engineering and test automation
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-slate-400">
                    amal.••••••••@hotmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-slate-400">
                    +44 ••••••8579
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-slate-400">Manchester, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/amal-viswanath-sdet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
            </a>
            <a
              href="https://github.com/amalviz"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 group-hover:text-teal-400 transition-colors" />
            </a>
          </div>

          <p className="text-slate-400">
            © 2026 Amal Viswanath. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
