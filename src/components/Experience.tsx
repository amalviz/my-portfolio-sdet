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
      company: 'HCL Technologies / Dell EMC',
      location: 'Bangalore, India',
      role: 'Test Automation Architect',
      period: 'Sep 2020 - Sep 2023',
      achievements: [
        'Defined automation strategy for enterprise storage products; built UI and API automation aligned to SDLC and release cadence',
        'Integrated regression suites into CI pipelines to accelerate feedback cycles and improve release confidence',
        'Mentored QA engineers and partnered with stakeholders on test planning, coverage and continuous improvement',
        'Led quality initiatives across multiple product lines, ensuring robust test coverage and automation adoption'
      ],
      current: false
    },
    {
      company: 'VMware',
      location: 'Bangalore, India',
      role: 'Senior Member of Technical Staff',
      period: 'Aug 2015 - Sep 2020',
      achievements: [
        'Implemented a BDD-based automation framework (Cucumber, SpecFlow) and supported integration testing across an enterprise mobility platform',
        'Developed mobile automation using Appium and delivered stable C# Selenium UI automation with reusable utilities',
        'CI execution via Jenkins, driving continuous testing practices',
        'Collaborated with cross-functional teams to enhance test coverage and quality metrics'
      ],
      current: false
    },
    {
      company: 'Verifone',
      location: 'Bangalore, India',
      role: 'Automation Engineer',
      period: '2014 - 2015',
      achievements: [
        'Built automation frameworks for fintech payment systems',
        'Validated payment gateway integrations and security compliance',
        'Delivered quality solutions for enterprise payment platforms'
      ],
      current: false
    },
    {
      company: 'Ericsson',
      location: 'Bangalore, India',
      role: 'QA Engineer',
      period: '2013 - 2014',
      achievements: [
        'Performed functional and integration testing for telecom systems',
        'Developed automated test scripts to improve testing efficiency',
        'Collaborated with development teams on defect resolution and quality improvements'
      ],
      current: false
    },
    {
      company: 'Telcocell',
      location: 'Bangalore, India',
      role: 'QA Engineer',
      period: '2011 - 2013',
      achievements: [
        'Executed manual and automated testing for telecom applications',
        'Created test plans and test cases based on requirements',
        'Participated in defect tracking and resolution processes'
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Professional Experience</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          13+ years of delivering quality across enterprise platforms
        </p>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute left-5 top-6 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full border-4 border-slate-950 hidden md:block" />

                <div className="glass-effect p-6 md:p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                  {exp.current && (
                    <div className="inline-block px-3 py-1 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-teal-500/50 rounded-full text-sm text-teal-400 mb-4">
                      Current Position
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-teal-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-teal-400 font-semibold mb-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex gap-3 text-slate-300"
                      >
                        <span className="text-teal-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="glass-effect inline-block px-6 py-4 rounded-2xl">
            <div className="text-sm text-slate-400 mb-2">Education</div>
            <div className="font-semibold">Bachelor of Technology (B.Tech)</div>
            <div className="text-slate-400">Mahatma Gandhi University, India • 2010</div>
          </div>
        </div>
      </div>
    </section>
  );
}
