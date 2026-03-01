import { portfolio } from '../data/portfolio'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export function Header() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--surface)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0.75rem 1.5rem',
      }}
    >
      <nav
        style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        <a href="#" style={{ color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}>
          {portfolio.name}
        </a>
        <ul
          style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            gap: '1.5rem',
          }}
        >
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                style={{
                  color: 'var(--muted)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
