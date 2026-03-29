import { Code2, Database, Cloud, TestTube, GitBranch, Gauge, Shield, Target } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Test Automation',
      icon: TestTube,
      skills: ['Playwright', 'Selenium WebDriver', 'REST Assured', 'Cucumber BDD', 'SpecFlow', 'Appium', 'TestNG', 'NUnit'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'CI/CD & Delivery',
      icon: GitBranch,
      skills: ['Azure DevOps', 'AWS', 'Jenkins', 'Git', 'Continuous Testing', 'Shift-Left', 'Release Management'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Programming',
      icon: Code2,
      skills: ['Java', 'C#', 'TypeScript', 'Python', 'SQL', 'PowerShell'],
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['Oracle', 'MySQL', 'PostgreSQL', 'SQL Server'],
      color: 'from-teal-500 to-emerald-500'
    },
    {
      title: 'Quality Engineering',
      icon: Target,
      skills: ['Risk-Based Testing', 'API Testing', 'Microservices', 'Integration Testing', 'Defect Triage', 'RCA', 'Test Strategy'],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Performance & Security',
      icon: Gauge,
      skills: ['JMeter', 'K6', 'WCAG 2.2 Accessibility', 'Security Testing', 'Load Testing'],
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="gradient-text">Core Skills</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          Expertise across the full testing and automation stack
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4">{category.title}</h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-800/50 rounded-full text-sm text-slate-300 border border-slate-700/50 hover:border-teal-500/50 transition-colors"
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
