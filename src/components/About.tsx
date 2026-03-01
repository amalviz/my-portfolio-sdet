import { portfolio } from '../data/portfolio'

export function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p style={{ color: 'var(--muted)', maxWidth: '65ch', lineHeight: 1.7 }}>
        {portfolio.summary}
      </p>
    </section>
  )
}
