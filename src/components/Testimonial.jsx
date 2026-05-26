export default function Testimonial() {
  return (
    <section className="py-section">
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Utisci Klijenata</div>
          <h2 className="section-title" style={{ marginBottom: 48 }}>Šta Kažu Naši Klijenti</h2>
        </div>
        <div className="testimonial-card reveal">
          <p className="testimonial-text">
            "FRIGO nas je spasio od ogromnog kvara. Naše apotekarske rashladne komore izgubile su hlađenje tokom
            noći i instant SMS alarm nam je omogućio da premestimo sve na rezervni sistem za 20 minuta. Gubitak
            robe bio je nula. Pre FRIGO-a, to bi bila katastrofa od 60.000€."
          </p>
          <div className="testimonial-author">
            <div className="author-avatar">MR</div>
            <div>
              <div className="author-name">Marija Radović</div>
              <div className="author-role">Direktorka Operacija · PharmaLogix Srbija</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#fbbf24', fontSize: 18 }}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
