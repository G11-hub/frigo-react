const STEPS = [
  { n: '01', icon: '📡', title: 'Senzori Prikupljaju Podatke', desc: 'Bežični senzori postavljeni u svakoj rashladnoj zoni šalju temperaturu i vlagu svakih 10 sekundi putem enkriptovane mesh mreže.' },
  { n: '02', icon: '☁️', title: 'Cloud Platforma Analizira', desc: 'Naš AI engine obrađuje milione podataka u sekundi, detektujući anomalije i predviđajući kvarove opreme.' },
  { n: '03', icon: '🔔', title: 'Korisnik Dobija Instant Alarm', desc: 'SMS, email i push obaveštenja stižu odmah — sa preporukama za postupanje i izveštajima o usklađenosti.' },
]

export default function HowItWorks() {
  return (
    <section
      id="o-nama"
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)' }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Proces</div>
          <h2 className="section-title">Kako Funkcioniše FRIGO</h2>
          <p className="section-sub" style={{ margin: '0 auto 56px' }}>
            Tri koraka od senzora do alarma. Instalacija za manje od 30 minuta.
          </p>
        </div>

        <div className="steps-container reveal">
          {STEPS.map((s, i) => (
            <div key={i} style={{ display: 'contents' }}>
              <div className="step-card">
                <div className="step-num">{s.n}</div>
                <span className="step-icon">{s.icon}</span>
                <div className="step-title">{s.title}</div>
                <div className="step-desc">{s.desc}</div>
              </div>
              {i < 2 && (
                <div className="step-connector">
                  <div className="connector-line">
                    <div className="connector-dot" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
