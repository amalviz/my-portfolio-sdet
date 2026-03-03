import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />

      <div className="max-w-5xl mx-auto text-center relative z-10 animate-slide-up">
        <div className="mb-6 inline-block">
          <div className="glass-effect px-4 py-2 rounded-full text-sm text-teal-400 border border-teal-500/30">
            Oracle Certified Professional
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="block text-white">Amal Viswanath</span>
          <span className="gradient-text block mt-2">Senior QA Engineer</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
          Test Automation Lead | 13+ Years Building Quality at Scale
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </a>
          <a
            href="#experience"
            className="px-8 py-3 glass-effect rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="mailto:amal.viswanath@hotmail.com"
            className="p-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/amal-viswanath-sdet/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/amalviz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-teal-400" />
      </a>
    </section>
  );
}
