import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-neutral-300">Oracle Certified Professional</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="block gradient-text">Amal Viswanath</span>
        </h1>

        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl md:text-4xl font-semibold text-neutral-400 mb-4">
            Senior QA Engineer
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Test Automation Lead specializing in building quality at scale with 13+ years of enterprise experience
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </span>
          </a>
          <a
            href="#experience"
            className="px-8 py-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl font-semibold hover:bg-neutral-800/50 transition-all duration-300"
          >
            View Experience
          </a>
        </div>

        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="mailto:amal.viswanath@hotmail.com"
            className="p-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-neutral-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/amal-viswanath-sdet/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-neutral-400" />
          </a>
          <a
            href="https://github.com/amalviz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-neutral-400" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-2 border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm rounded-full hover:bg-neutral-800/50 transition-all animate-bounce"
      >
        <ArrowDown className="w-5 h-5 text-neutral-400" />
      </a>
    </section>
  );
}
