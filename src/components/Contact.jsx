import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ firma: '', email: '', telefon: '', poruka: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: 'ede34f14-8edb-44d6-8540-2615be63b728',
        subject: 'Nova poruka sa Frigotech sajta',
        from_name: form.firma,
        ...form,
      }),
    })
    const data = await res.json()
    setLoading(false)
    if (data.success) {
      setSent(true)
      setForm({ firma: '', email: '', telefon: '', poruka: '' })
      setTimeout(() => setSent(false), 4000)
    }
  }

  return (
    <section
      id="kontakt"
      className="py-section"
      style={{ background: 'radial-gradient(ellipse at 20% 80%, rgba(179,157,219,0.06) 0%, transparent 60%)' }}
    >
      <div className="blob" style={{ width: 400, height: 400, background: 'rgba(0,229,255,0.05)', bottom: '10%', right: '-10%', animationDuration: '11s' }} />
      <div className="section-inner">
        <div className="reveal text-center">
          <div className="section-tag">Kontakt</div>
          <h2 className="section-title">Počnite Danas</h2>
          <p className="section-sub" style={{ margin: '0 auto 48px' }}>
            Zakažite besplatni demo. Naš tim postavlja vaš prvi klaster senzora u roku od 48 sati.
          </p>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">NAZIV FIRME</label>
              <input className="form-input" name="firma" placeholder="ACME Hladnjača d.o.o." value={form.firma} onChange={handle} required />
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL ADRESA</label>
              <input className="form-input" name="email" type="email" placeholder="vi@kompanija.rs" value={form.email} onChange={handle} required />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">TELEFON</label>
            <input className="form-input" name="telefon" type="tel" placeholder="+381 ..." value={form.telefon} onChange={handle} />
          </div>
          <div className="form-group">
            <label className="form-label">PORUKA</label>
            <textarea className="form-textarea" name="poruka" placeholder="Opišite vaš objekat — broj zona, trenutni izazovi, industrija..." value={form.poruka} onChange={handle} />
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Slanje...' : sent ? '✓ Poruka Poslata!' : 'Pošalji Poruku — Zakaži Demo →'}
          </button>
        </form>

        <div style={{ marginTop: 24, textAlign: 'center', color: 'var(--muted)', fontSize: 14 }}>
          Ili nas kontaktirajte direktno:<br />
          <a href="tel:+381613079197" style={{ color: 'var(--cyan)', textDecoration: 'none', fontWeight: 600 }}>
            +381 613079197
          </a>
        </div>
      </div>
    </section>
  )
}