import { SPONSORS } from '../../data/content.js'

export default function Sponsors() {
  return (
    <section id="sec-sponsors" className="panel">
      <header className="panel-head reveal">
        <p className="kicker">// SPONSORS</p>
        <h2>後勤支援</h2>
      </header>
      <ul className="sponsor-grid reveal">
        {SPONSORS.map(s => (
          <li key={s.cls} className={`sp ${s.cls}`}>{s.label}</li>
        ))}
      </ul>
    </section>
  )
}
