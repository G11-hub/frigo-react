const FEATURES = [
  { icon: '❄️', title: 'Monitoring Temperature', desc: 'Praćenje temperature i vlage u rashladnim komorama uz automatsko osvežavanje podataka.', tag: 'MONITORING', tagColor: '#00e5ff', gradient: 'linear-gradient(135deg,rgba(0,229,255,0.2),rgba(79,195,247,0.1))' },
  { icon: '🔔', title: 'Push i Email Alarmi', desc: 'Automatska obaveštenja kada temperatura izađe van dozvoljenih granica — pre nego što dođe do štete.', tag: 'ALARMI', tagColor: '#4ade80', gradient: 'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))' },
  { icon: '📊', title: 'Istorija Podataka', desc: 'Pregled istorije temperature i vlage kroz grafikone i digitalnu evidenciju.', tag: 'ISTORIJA', tagColor: '#b39ddb', gradient: 'linear-gradient(135deg,rgba(179,157,219,0.2),rgba(179,157,219,0.05))' },
  { icon: '📄', title: 'PDF/CSV HACCP Izveštaji', desc: 'Generisanje PDF i CSV izveštaja za HACCP evidenciju i inspekcijske službe — jednim klikom.', tag: 'HACCP', tagColor: '#fbbf24', gradient: 'linear-gradient(135deg,rgba(251,191,36,0.2),rgba(251,191,36,0.05))' },
  { icon: '🏢', title: 'Više Lokacija', desc: 'Praćenje više objekata i rashladnih zona kroz jednu platformu.', tag: 'MULTI-LOKACIJA', tagColor: '#4fc3f7', gradient: 'linear-gradient(135deg,rgba(79,195,247,0.2),rgba(79,195,247,0.05))' },
  { icon: '📱', title: 'Mobilna Aplikacija', desc: 'Android i iOS aplikacija za monitoring, grafikone i alarme sa bilo kog mesta.', tag: 'iOS & ANDROID', tagColor: '#f472b6', gradient: 'linear-gradient(135deg,rgba(244,114,182,0.2),rgba(244,114,182,0.05))' },
  { icon: '✅', title: 'Digitalna Evidencija', desc: 'Centralizovana evidencija temperature i aktivnosti za HACCP procese.', tag: 'EVIDENCIJA', tagColor: '#4ade80', gradient: 'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))' },
  { icon: '📈', title: 'Grafikoni Temperature', desc: 'Pregled promene temperature i vlage kroz jednostavne grafikone i istoriju podataka.', tag: 'ANALITIKA', tagColor: '#c084fc', gradient: 'linear-gradient(135deg,rgba(192,132,252,0.2),rgba(192,132,252,0.05))' },
]

const BENEFITS = [
  { icon: '💰', title: 'Prevencija gubitaka', desc: 'Alarm u realnom vremenu sprečava kvarenje robe pre nego što se dogodi. Jedan incident može koštati više od godišnje pretplate.', bg: 'rgba(74,222,128,0.06)', border: 'rgba(74,222,128,0.2)', accent: '#4ade80', iconBg: 'rgba(74,222,128,0.1)' },
  { icon: '📋', title: 'HACCP usklađenost', desc: 'Automatska digitalna evidencija i PDF izvoz za inspekcijske kontrole. Nema više ručnog unosa i izgubljenih papira.', bg: 'rgba(251,191,36,0.06)', border: 'rgba(251,191,36,0.2)', accent: '#fbbf24', iconBg: 'rgba(251,191,36,0.1)' },
  { icon: '🖥️', title: 'Jednostavnost', desc: 'Nadgledajte 100+ uređaja iz jednog kontrolnog centra, s telefona ili računara. Bez komplikovane instalacije.', bg: 'rgba(0,229,255,0.06)', border: 'rgba(0,229,255,0.2)', accent: '#00e5ff', iconBg: 'rgba(0,229,255,0.1)' },
  { icon: '🤝', title: 'Lična podrška', desc: 'Nismo bezlični sistem — znamo vas po imenu. Brz odgovor i servis na terenu kad vam treba.', bg: 'rgba(179,157,219,0.06)', border: 'rgba(179,157,219,0.2)', accent: '#b39ddb', iconBg: 'rgba(179,157,219,0.1)' },
]

function FeatCard({ icon, title, desc, tag, tagColor, gradient, delay = 0 }) {
  return (
    <div className="feat-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <div className="feat-icon-wrap" style={{ background: gradient }}>{icon}</div>
      <div className="feat-title">{title}</div>
      <div className="feat-desc">{desc}</div>
      <span className="feat-tag" style={{ background: tagColor + '22', color: tagColor, border: `1px solid ${tagColor}33` }}>{tag}</span>
    </div>
  )
}

export default function Features() {
  return (
    <section id="funkcije" className="py-section">
      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(179,157,219,0.05)', top: '30%', left: '-15%', animationDuration: '14s' }} />

      <div className="section-inner">

        {/* ── Benefiti sekcija ── */}
        <div className="reveal" style={{ marginBottom: 72 }}>
          <div className="section-tag">Zašto Frigotech</div>
          <h2 className="section-title">Konkretne prednosti za vaš posao</h2>
          <p className="section-sub">
            Svaki euro uložen u monitoring vraća se kroz sprečene gubitke, manje papirologije i sigurnost u slučaju inspekcije.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{
                background: b.bg,
                border: `1px solid ${b.border}`,
                borderRadius: 16,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '20%', right: '20%', height: 1, background: `linear-gradient(90deg, transparent, ${b.accent}, transparent)` }} />
                <div style={{ width: 48, height: 48, borderRadius: 12, background: b.iconBg, border: `1px solid ${b.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: 16 }}>{b.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{b.title}</div>
                <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Funkcije grid ── */}
        <div className="reveal">
          <div className="section-tag">Funkcije</div>
          <h2 className="section-title">Sve Što Vam Treba</h2>
          <p className="section-sub">Platforma za monitoring temperature, alarme i digitalnu HACCP evidenciju.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <FeatCard key={i} {...f} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  )
}