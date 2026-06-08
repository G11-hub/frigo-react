const STEPS = [
  {
    n: '01',
    icon: '❄️',
    title: 'Senzori Mere Temperaturu',
    desc:
      'Senzori postavljeni u rashladnim komorama prate temperaturu i vlagu tokom celog dana i automatski šalju podatke sistemu.',
  },

  {
    n: '02',
    icon: '📊',
    title: 'Platforma Čuva Evidenciju',
    desc:
      'FRIGO platforma prikazuje istoriju temperature, stanje komora i HACCP evidenciju za više lokacija na jednom mestu.',
  },

  {
    n: '03',
    icon: '🔔',
    title: 'Automatski Alarmi',
    desc:
      'Kada temperatura izađe van dozvoljenog opsega, korisnici dobijaju push i email obaveštenja u realnom vremenu.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="o-nama"
      className="py-section"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(0,229,255,0.03) 0%, transparent 70%)',
      }}
    >
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">
            Proces
          </div>

          <h2 className="section-title">
            Kako Funkcioniše FRIGO
          </h2>

          <p
            className="section-sub"
            style={{ margin: '0 auto 56px' }}
          >
            Jednostavan sistem za monitoring temperature,
            alarme i HACCP evidenciju.
          </p>
        </div>

        <div className="steps-container reveal">
          {STEPS.map((s, i) => (
            <div
              key={i}
              style={{ display: 'contents' }}
            >
              <div className="step-card">
                <div className="step-num">
                  {s.n}
                </div>

                <span className="step-icon">
                  {s.icon}
                </span>

                <div className="step-title">
                  {s.title}
                </div>

                <div className="step-desc">
                  {s.desc}
                </div>
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