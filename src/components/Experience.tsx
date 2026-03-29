import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Micad Systems UK Ltd',
      location: 'Manchester, UK',
      role: 'Test Automation Lead',
      period: 'Sep 2023 - Present',
      achievements: [
        'Lead end-to-end automation roadmap and quality strategy, owning test artefacts and release sign-off across web and API-based applications',
        'Design and maintain scalable automation frameworks (Selenium; migrating to Playwright) with reliable execution in Azure DevOps CI/CD pipelines',
        'Drive risk-based coverage across UI, API and microservices, using automation as the primary safety net',
        'Run defect triage, root cause analysis, and dashboards for KPIs (defect trends, automation health, pipeline stability)',
        'Collaborate with product, engineering and support teams to ensure quality remains central to the delivery process'
      ],
      current: true
    },
    {
      company: 'HCL Technologies',
      location: 'Bangalore, India',
      role: 'Test Automation Architect',
      period: 'Sep 2020 - Sep 2023',
      client: 'Dell EMC',
      achievements: [
        'Defined automation strategy for enterprise storage products; built UI and API automation aligned to SDLC and release cadence',
        'Integrated regression suites into CI pipelines to accelerate feedback cycles and improve release confidence',
        'Mentored QA engineers and partnered with stakeholders on test planning, coverage and continuous improvement'
      ],
      current: false
    },
    {
      company: 'VMware',
      location: 'Bangalore, India',
      role: 'Senior Member of Technical Staff (QA)',
      period: 'Aug 2015 - Sep 2020',
      achievements: [
        'Implemented a BDD-based automation framework (Cucumber, SpecFlow) and supported integration testing across an enterprise mobility platform',
        'Developed mobile automation using Appium and delivered stable C# Selenium UI automation with reusable utilities',
        'CI execution via Jenkins, driving continuous testing practices'
      ],
      current: false
    },
    {
      company: 'Verifone',
      location: 'Bangalore, India',
      role: 'Automation Test Lead',
      period: 'May 2014 - Aug 2015',
      achievements: [
        'Automated UI and API test scenarios for payment processing systems using Selenium WebDriver and REST Assured',
        'Built reusable test frameworks in Java with TestNG, reducing regression cycles by 40%',
        'Collaborated with development and business teams to ensure quality across fintech products'
      ],
      current: false
    },
    {
      company: 'Ericsson',
      location: 'Bangalore, India',
      role: 'Senior Test Engineer',
      period: 'Jul 2013 - May 2014',
      achievements: [
        'Executed functional, integration, and regression testing for telecom OSS/BSS applications',
        'Automated key workflows using Selenium and TestNG, improving test coverage and execution speed',
        'Worked closely with cross-functional teams to deliver high-quality telecom solutions'
      ],
      current: false
    },
    {
      company: 'Telcocell',
      location: 'Bangalore, India',
      role: 'Test Engineer',
      period: 'Apr 2011 - Jul 2013',
      achievements: [
        'Performed manual and automated testing for telecom billing and provisioning systems',
        'Created and maintained comprehensive test cases and test plans aligned to functional requirements',
        'Implemented automation scripts using Selenium WebDriver and managed defect tracking in JIRA'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            13+ years of delivering quality across enterprise platforms
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20 animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full border-4 border-neutral-950 hidden md:block shadow-lg shadow-blue-500/50" />

                <div className="card-border p-8 md:p-10 rounded-2xl hover:scale-[1.02] transition-all duration-300 group">
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-400 mb-6">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                      Current Position
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-neutral-100 group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold text-lg mb-2">
                        <Briefcase className="w-5 h-5" />
                        <span>{exp.company}</span>
                        {exp.client && (
                          <span className="text-neutral-500 text-base">({exp.client})</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm text-neutral-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex gap-4 text-neutral-300 leading-relaxed"
                      >
                        <span className="text-blue-400 mt-1.5 flex-shrink-0 text-lg">→</span>
                        <span className="flex-1 break-words">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="card-border inline-block px-8 py-6 rounded-2xl">
            <div className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Education</div>
            <div className="font-semibold text-xl text-neutral-100">Bachelor of Technology (B.Tech)</div>
            <div className="text-neutral-400 mt-1">Mahatma Gandhi University, India • 2010</div>
          </div>
        </div>
      </div>
    </section>
  );
}
