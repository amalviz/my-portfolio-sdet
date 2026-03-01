import { portfolio } from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        paddingTop: '4rem',
        paddingBottom: '4rem',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
        {portfolio.name}
      </h1>
      <p style={{ color: 'var(--accent)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
        {portfolio.title}
      </p>
      <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
        {portfolio.location}
      </p>
    </section>
  )
}
