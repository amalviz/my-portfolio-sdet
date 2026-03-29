import { Code2, Database, TestTube, GitBranch, Gauge, Target } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Test Automation',
      icon: TestTube,
      skills: ['Playwright', 'Selenium WebDriver', 'REST Assured', 'Cucumber BDD', 'SpecFlow', 'Appium', 'TestNG', 'NUnit'],
    },
    {
      title: 'CI/CD & Delivery',
      icon: GitBranch,
      skills: ['Azure DevOps', 'AWS', 'Jenkins', 'Git', 'Continuous Testing', 'Shift-Left', 'Release Management'],
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Java', 'C#', 'TypeScript', 'Python', 'SQL', 'PowerShell'],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['Oracle', 'MySQL', 'PostgreSQL', 'SQL Server'],
    },
    {
      title: 'Quality Engineering',
      icon: Target,
      skills: ['Risk-Based Testing', 'API Testing', 'Microservices', 'Integration Testing', 'Defect Triage', 'RCA', 'Test Strategy'],
    },
    {
      title: 'Performance & Security',
      icon: Gauge,
      skills: ['JMeter', 'K6', 'WCAG 2.2 Accessibility', 'Security Testing', 'Load Testing'],
    }
  ];

  return (
    <section id="skills" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-neutral-500 text-lg">
            Expertise across the full testing and automation stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="card-border p-8 rounded-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-6 text-neutral-100">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-neutral-900/80 rounded-lg text-sm text-neutral-300 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-800/80 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
