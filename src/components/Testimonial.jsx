export default function Testimonial() {
  return (
    <section className="py-section">
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">
            Monitoring u Praksi
          </div>

          <h2
            className="section-title"
            style={{ marginBottom: 48 }}
          >
            Pouzdanost Kada Je Najpotrebnija
          </h2>
        </div>

        <div className="testimonial-card reveal">
          <p className="testimonial-text">
            "FRIGO omogućava jednostavan pregled
            temperature i brz odgovor u slučaju
            odstupanja. Alarm sistem i istorija
            podataka značajno olakšavaju HACCP
            evidenciju i svakodnevni nadzor
            rashladnih komora."
          </p>

          <div className="testimonial-author">
            <div className="author-avatar">
              FR
            </div>

            <div>
              <div className="author-name">
                FRIGO Monitoring
              </div>

              <div className="author-role">
                Sistem za monitoring temperature
                i HACCP evidenciju
              </div>
            </div>

            <div
              style={{
                marginLeft: 'auto',
                display: 'flex',
                gap: 4,
              }}
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    color: '#fbbf24',
                    fontSize: 18,
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}