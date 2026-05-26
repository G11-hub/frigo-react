const FEATURES = [
  { icon: '📡', title: 'Praćenje u Realnom Vremenu',  desc: 'Podaci sa senzora ažuriraju se ispod sekunde putem bežične mesh mreže, bez mrtvih zona.', tag: 'BEŽIČNO',      tagColor: '#00e5ff', gradient: 'linear-gradient(135deg,rgba(0,229,255,0.2),rgba(79,195,247,0.1))' },
  { icon: '🔔', title: 'SMS i Push Alarmi',           desc: 'Instant obaveštenja na više kanala kada temperatura prekorači zadatu granicu.',          tag: 'INSTANT',       tagColor: '#4ade80', gradient: 'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))' },
  { icon: '☁️', title: 'Cloud Istorija',              desc: 'Neograničeno enkriptovano čuvanje podataka sa rezolucijom od 10 sekundi — zauvek.',       tag: 'BEZBEDNO',      tagColor: '#b39ddb', gradient: 'linear-gradient(135deg,rgba(179,157,219,0.2),rgba(179,157,219,0.05))' },
  { icon: '📄', title: 'PDF Izveštaji',               desc: 'Automatski HACCP-usklađeni PDF izveštaji — dnevni, nedeljni ili na zahtev.',              tag: 'HACCP',         tagColor: '#fbbf24', gradient: 'linear-gradient(135deg,rgba(251,191,36,0.2),rgba(251,191,36,0.05))' },
  { icon: '🗺️', title: 'Monitoring Više Lokacija',   desc: 'Upravljajte stotinama objekata iz jednog kontrolnog panela.',                             tag: 'ENTERPRISE',    tagColor: '#4fc3f7', gradient: 'linear-gradient(135deg,rgba(79,195,247,0.2),rgba(79,195,247,0.05))' },
  { icon: '📱', title: 'Mobilna Aplikacija',          desc: 'iOS i Android aplikacija sa live monitoringom, grafikonima, alarmima i timskom saradnjom.', tag: 'iOS & ANDROID', tagColor: '#f472b6', gradient: 'linear-gradient(135deg,rgba(244,114,182,0.2),rgba(244,114,182,0.05))' },
  { icon: '✅', title: 'HACCP Evidencija',            desc: 'Napravljeno za EU i srpske propise o bezbednosti hrane. Automatski digitalni dnevnici.',  tag: 'SERTIFIKOVANO', tagColor: '#4ade80', gradient: 'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))' },
  { icon: '🤖', title: 'AI Detekcija Problema',       desc: 'ML modeli otkrivaju kvarove opreme pre nego što se dogode — prediktivni alarmi.',         tag: 'AI POWERED',    tagColor: '#c084fc', gradient: 'linear-gradient(135deg,rgba(192,132,252,0.2),rgba(192,132,252,0.05))' },
]

function FeatCard({ icon, title, desc, tag, tagColor, gradient, delay = 0 }) {
  return (
    <div className="feat-card reveal" style={{ animationDelay: `${delay}ms` }}>
      <div className="feat-icon-wrap" style={{ background: gradient }}>{icon}</div>
      <div className="feat-title">{title}</div>
      <div className="feat-desc">{desc}</div>
      <span
        className="feat-tag"
        style={{ background: tagColor + '22', color: tagColor, border: `1px solid ${tagColor}33` }}
      >
        {tag}
      </span>
    </div>
  )
}

export default function Features() {
  return (
    <section id="funkcije" className="py-section">
      <div className="blob" style={{ width: 500, height: 500, background: 'rgba(179,157,219,0.05)', top: '30%', left: '-15%', animationDuration: '14s' }} />
      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">Funkcije</div>
          <h2 className="section-title">Sve Što Vam Treba</h2>
          <p className="section-sub">Kompletna platforma za cold chain monitoring — usklađenost, pouzdanost i skalabilnost.</p>
        </div>
        <div className="features-grid">
          {FEATURES.map((f, i) => <FeatCard key={i} {...f} delay={i * 60} />)}
        </div>
      </div>
    </section>
  )
}
