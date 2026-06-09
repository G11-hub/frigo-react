const FOOTER_COLS = [
  { t: 'Platforma', ls: ['Live Dashboard', 'API Pristup', 'Integracije', 'Mobilna Aplikacija', 'Status'] },
  { t: 'Kompanija', ls: ['O nama', 'Blog', 'Karijere', 'Press', 'Partneri'] },
  { t: 'Pravno',    ls: ['Politika Privatnosti', 'Uslovi Korišćenja', 'GDPR', 'Bezbednost', 'Kolačići'] },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="nav-logo" style={{ display: 'block', marginBottom: 12 }}>FRIGOTECH</span>
          <p className="footer-desc">
            Pametno praćenje temperature i vlage za restorane, apoteke, hladnjače i rashladni transport.
            HACCP-sertifikovano.
          </p>
          <div className="social-links" style={{ marginTop: 20 }}>
            {['in', 'tw', 'fb', 'yt'].map((s) => (
              <a key={s} href="#" className="social-link">{s}</a>
            ))}
          </div>
        </div>

        {FOOTER_COLS.map((col) => (
          <div key={col.t}>
            <div className="footer-title">{col.t}</div>
            <ul className="footer-links">
              {col.ls.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-copy">© 2026 FRIGO Technologies. Sva prava zadržana.</div>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <a href="#" style={{ color: 'var(--muted)', fontSize: 13, textDecoration: 'none' }}>Privatnost</a>
          <a href="#" style={{ color: 'var(--muted)', fontSize: 13, textDecoration: 'none' }}>Uslovi</a>
          <a href="#" style={{ color: 'var(--muted)', fontSize: 13, textDecoration: 'none' }}>GDPR</a>
        </div>
      </div>
    </footer>
  )
}
