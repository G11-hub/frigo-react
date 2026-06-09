import { useState } from 'react'

const NAV_LINKS = ['Monitoring', 'Funkcije', 'Industrije', 'O nama', 'Kontakt']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav>
        <div
          className="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          FRIGOTECH
        </div>

        <ul className="nav-links">
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a onClick={() => scrollTo(l)}>{l}</a>
            </li>
          ))}
        </ul>

        <button className="nav-cta" onClick={() => scrollTo('kontakt')}>
          Zatražite Demo
        </button>

        <button className="hamburger" onClick={() => setOpen(true)} aria-label="Otvori meni">
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setOpen(false)}>✕</button>
        {NAV_LINKS.map((l) => (
          <a key={l} onClick={() => scrollTo(l)}>
            {l}
          </a>
        ))}
        <button className="nav-cta" onClick={() => scrollTo('kontakt')}>
          Zatražite Demo
        </button>
      </div>
    </>
  )
}
