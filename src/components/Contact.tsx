import { portfolio } from '../data/portfolio'

export function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
        <a href={`tel:${portfolio.phone.replace(/\s/g, '')}`}>{portfolio.phone}</a>
      </div>
    </section>
  )
}
