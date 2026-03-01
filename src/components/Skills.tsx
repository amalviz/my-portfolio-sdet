import { portfolio } from '../data/portfolio'

export function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
          Core skills
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {portfolio.coreSkills.flatMap((group) =>
            group.items.map((item) => (
              <li
                key={item}
                style={{
                  background: 'var(--surface)',
                  padding: '0.35rem 0.75rem',
                  borderRadius: 6,
                  fontSize: '0.9rem',
                }}
              >
                {item}
              </li>
            ))
          )}
        </ul>
      </div>

      <div>
        <h3 style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
          Technical
        </h3>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <div>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Languages: </span>
            {portfolio.technicalSkills.languages.join(', ')}
          </div>
          <div>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Automation & API: </span>
            {portfolio.technicalSkills.automation.join(', ')}
          </div>
          <div>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>CI/CD & tools: </span>
            {portfolio.technicalSkills.cicd.join(', ')}
          </div>
          <div>
            <span style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Databases: </span>
            {portfolio.technicalSkills.databases.join(', ')}
          </div>
        </div>
      </div>
    </section>
  )
}
