const INDUSTRIES = [
  { icon: '🍽️', name: 'Restorani',          desc: 'Monitoring kuhinja i rashladnih komora' },
  { icon: '🛒', name: 'Supermarketi',        desc: 'Usklađenost rashladnih zona' },
  { icon: '🏭', name: 'Hladnjače',           desc: 'Industrijski cold chain menadžment' },
  { icon: '💊', name: 'Apoteke',             desc: 'Čuvanje lekova (2–8°C) regulativa' },
  { icon: '📦', name: 'Magacini Hrane',      desc: 'Praćenje distribucije u velikom obimu' },
  { icon: '🚛', name: 'Rashladni Transport', desc: 'GPS + temperatura u tranzitu' },
]

export default function Industries() {
  return (
    <section
      id="industrije"
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(79,195,247,0.04) 0%, transparent 60%)' }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Industrije</div>
          <h2 className="section-title">Napravljeno za Vašu Industriju</h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Od malih apoteka do velikih nacionalnih lanaca — FRIGOTECH raste sa vama.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="industry-card reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <span className="industry-icon">{ind.icon}</span>
              <div className="industry-name">{ind.name}</div>
              <div className="industry-desc">{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
