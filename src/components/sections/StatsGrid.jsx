import CountUp from '../CountUp.jsx'
import { STATS_GRID } from '../../data/content.js'

export default function StatsGrid() {
  return (
    <section id="sec-stats" className="panel">
      <header className="panel-head reveal">
        <p className="kicker">// DATA GRID</p>
        <h2>數據成就</h2>
      </header>
      <ul className="stat-grid reveal">
        {STATS_GRID.map(s => (
          <li key={s.label}>
            <CountUp end={s.end} suffix={s.suffix} />
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
