export const portfolio = {
  name: 'Amal Viswanath',
  title: 'Senior QA Engineer | Test Lead | Automation Specialist',
  location: 'Manchester, UK',
  email: 'amal.viswanath@hotmail.com',
  phone: '+44 7776588579',

  summary: `15+ years in QA and Test Lead roles, delivering production-ready software across enterprise and SaaS platforms. Hands-on in manual testing (exploratory, integration, API, regression) and automation framework development with Selenium and Playwright. Owns test strategy, release readiness, defect lifecycle, and CI/CD integration in agile SDLC. Strong stakeholder communication, risk identification, and continuous improvement.`,

  coreSkills: [
    {
      category: 'Test Strategy & Management',
      items: ['Test Strategy', 'Test Plans', 'Test Cases', 'Traceability Matrix', 'Defect Management', 'Release Readiness', 'SDLC'],
    },
    {
      category: 'Testing Types',
      items: ['Manual Testing', 'Exploratory Testing', 'Integration Testing', 'API & Microservices Validation', 'Risk-Based Testing'],
    },
    {
      category: 'Automation Frameworks',
      items: ['Selenium WebDriver', 'Playwright', 'REST Assured', 'Cucumber (BDD)', 'Regression Automation'],
    },
    {
      category: 'CI/CD',
      items: ['Jenkins', 'Azure DevOps', 'Git', 'Continuous Testing', 'Shift-Left Practices'],
    },
    {
      category: 'Non-Functional Testing',
      items: ['Performance (JMeter)', 'Load', 'Security Coordination', 'Accessibility (WCAG 2.2)'],
    },
    {
      category: 'Methodologies',
      items: ['Agile/Scrum', 'Root Cause Analysis', 'KPI Reporting', 'Stakeholder & Cross-Functional Collaboration'],
    },
  ],

  technicalSkills: {
    languages: ['Java', 'SQL', 'TypeScript', 'Python'],
    automation: ['Selenium', 'Playwright', 'REST Assured', 'Cucumber', 'TestNG', 'Appium', 'Robot Framework'],
    cicd: ['Jenkins', 'Azure DevOps', 'Git', 'JIRA', 'Confluence', 'Swagger', 'Postman'],
    databases: ['Oracle', 'MySQL', 'PostgreSQL'],
  },

  experience: [
    {
      company: 'Micad Systems UK Ltd',
      location: 'UK',
      role: 'Test Automation Lead / QA Manager',
      start: 'Jun 2022',
      end: 'Present',
      responsibilities: [
        'Own end-to-end test strategy, test artefacts, and release sign-off across web and API-based applications.',
        'Design and maintain scalable automation frameworks (Selenium; migrating to Playwright) integrated into CI/CD.',
        'Drive test planning, defect management, and release readiness with stakeholders.',
        'Lead QA practices, risk-based testing, and continuous improvement.',
      ],
    },
  ],
} as const
