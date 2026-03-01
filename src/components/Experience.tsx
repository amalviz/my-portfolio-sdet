import { portfolio } from '../data/portfolio'

export function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {portfolio.experience.map((job) => (
        <article
          key={job.company}
          style={{
            background: 'var(--surface)',
            padding: '1.5rem',
            borderRadius: 8,
            marginBottom: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <div>
              <strong style={{ fontSize: '1.1rem' }}>{job.role}</strong>
              <div style={{ color: 'var(--accent)', fontSize: '0.95rem' }}>
                {job.company} — {job.location}
              </div>
            </div>
            <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              {job.start} – {job.end}
            </span>
          </div>
          <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--muted)', lineHeight: 1.7 }}>
            {job.responsibilities.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
