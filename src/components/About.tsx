import { MapPin, Phone, Mail, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">About Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <MapPin className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-slate-400">Manchester, UK</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <Phone className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-slate-400">+44 ••••••8579</p>
          </div>

          <div className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
            <Mail className="w-8 h-8 text-teal-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-slate-400">amal.••••••••@hotmail.com</p>
          </div>
        </div>

        <div className="glass-effect p-8 md:p-12 rounded-2xl">
          <div className="flex items-start gap-4 mb-6">
            <Award className="w-8 h-8 text-teal-400 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Test Automation and Quality Engineering Lead with <span className="text-teal-400 font-semibold">13+ years of experience</span> delivering reliable, production-ready software across enterprise and SaaS platforms.
                </p>
                <p>
                  Build scalable automation frameworks and CI-first suites using <span className="text-teal-400 font-semibold">Selenium and Playwright</span>, covering UI, API and microservices.
                </p>
                <p>
                  Own automation strategy, release readiness, defect lifecycle and CI/CD integration to ship faster with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
