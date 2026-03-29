import { MapPin, Award, Target, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">About</span>
          </h2>
          <p className="text-neutral-500 text-lg">Building quality-first engineering culture</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="card-border p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-200">Based in</h3>
            <p className="text-neutral-400">Manchester, UK</p>
          </div>

          <div className="card-border p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-200">Experience</h3>
            <p className="text-neutral-400">13+ Years</p>
          </div>

          <div className="card-border p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-neutral-200">Specialization</h3>
            <p className="text-neutral-400">Test Automation</p>
          </div>
        </div>

        <div className="card-border p-10 md:p-14 rounded-2xl">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6 text-neutral-100">Professional Profile</h3>
              <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
                <p>
                  Test Automation and Quality Engineering Lead with <span className="text-blue-400 font-semibold">13+ years of experience</span> delivering reliable, production-ready software across enterprise and SaaS platforms.
                </p>
                <p>
                  Build scalable automation frameworks and CI-first suites using <span className="text-blue-400 font-semibold">Selenium and Playwright</span>, covering UI, API and microservices architectures.
                </p>
                <p>
                  Own automation strategy, release readiness, defect lifecycle and CI/CD integration to ship faster with confidence and maintain high quality standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
