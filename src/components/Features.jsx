const FEATURES = [
{
  icon: '❄️',
  title: 'Monitoring Temperature',
  desc:
    'Praćenje temperature i vlage u rashladnim komorama uz automatsko osvežavanje podataka na svakih 20 minuta.',
  tag: 'MONITORING',
  tagColor: '#00e5ff',
  gradient:
    'linear-gradient(135deg,rgba(0,229,255,0.2),rgba(79,195,247,0.1))',
},

  {
    icon: '🔔',
    title: 'Push i Email Alarmi',
    desc:
      'Automatska obaveštenja kada temperatura izađe van dozvoljenih granica.',
    tag: 'ALARMI',
    tagColor: '#4ade80',
    gradient:
      'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))',
  },

  {
    icon: '📊',
    title: 'Istorija Podataka',
    desc:
      'Pregled istorije temperature i vlage kroz grafikone i digitalnu evidenciju.',
    tag: 'ISTORIJA',
    tagColor: '#b39ddb',
    gradient:
      'linear-gradient(135deg,rgba(179,157,219,0.2),rgba(179,157,219,0.05))',
  },

  {
    icon: '📄',
    title: 'PDF HACCP Izveštaji',
    desc:
      'Generisanje PDF izveštaja za HACCP evidenciju i internu kontrolu.',
    tag: 'HACCP',
    tagColor: '#fbbf24',
    gradient:
      'linear-gradient(135deg,rgba(251,191,36,0.2),rgba(251,191,36,0.05))',
  },

  {
    icon: '🏢',
    title: 'Više Lokacija',
    desc:
      'Praćenje više objekata i rashladnih zona kroz jednu platformu.',
    tag: 'MULTI-LOKACIJA',
    tagColor: '#4fc3f7',
    gradient:
      'linear-gradient(135deg,rgba(79,195,247,0.2),rgba(79,195,247,0.05))',
  },

  {
    icon: '📱',
    title: 'Mobilna Aplikacija',
    desc:
      'Android i iOS aplikacija za monitoring, grafikone i alarme sa bilo kog mesta.',
    tag: 'iOS & ANDROID',
    tagColor: '#f472b6',
    gradient:
      'linear-gradient(135deg,rgba(244,114,182,0.2),rgba(244,114,182,0.05))',
  },

  {
    icon: '✅',
    title: 'Digitalna Evidencija',
    desc:
      'Centralizovana evidencija temperature i aktivnosti za HACCP procese.',
    tag: 'EVIDENCIJA',
    tagColor: '#4ade80',
    gradient:
      'linear-gradient(135deg,rgba(74,222,128,0.2),rgba(74,222,128,0.05))',
  },
{
  icon: '📈',
  title: 'Grafikoni Temperature',
  desc:
    'Pregled promene temperature i vlage kroz jednostavne grafikone i istoriju podataka.',
  tag: 'ANALITIKA',
  tagColor: '#c084fc',
  gradient:
    'linear-gradient(135deg,rgba(192,132,252,0.2),rgba(192,132,252,0.05))',
},
]

function FeatCard({
  icon,
  title,
  desc,
  tag,
  tagColor,
  gradient,
  delay = 0,
}) {
  return (
    <div
      className="feat-card reveal"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div
        className="feat-icon-wrap"
        style={{ background: gradient }}
      >
        {icon}
      </div>

      <div className="feat-title">
        {title}
      </div>

      <div className="feat-desc">
        {desc}
      </div>

      <span
        className="feat-tag"
        style={{
          background: tagColor + '22',
          color: tagColor,
          border: `1px solid ${tagColor}33`,
        }}
      >
        {tag}
      </span>
    </div>
  )
}

export default function Features() {
  return (
    <section id="funkcije" className="py-section">
      <div
        className="blob"
        style={{
          width: 500,
          height: 500,
          background: 'rgba(179,157,219,0.05)',
          top: '30%',
          left: '-15%',
          animationDuration: '14s',
        }}
      />

      <div className="section-inner">
        <div className="reveal">
          <div className="section-tag">
            Funkcije
          </div>

          <h2 className="section-title">
            Sve Što Vam Treba
          </h2>

          <p className="section-sub">
            Platforma za monitoring temperature,
            alarme i digitalnu HACCP evidenciju.
          </p>
        </div>

        <div className="features-grid">
          {FEATURES.map((f, i) => (
            <FeatCard
              key={i}
              {...f}
              delay={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  )
}