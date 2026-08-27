import { MATCH_ROWS } from '../../data/content.js'

export default function Schedule() {
  const today = new Date().getDay()
  return (
    <section id="sec-schedule" className="panel">
      <header className="panel-head reveal">
        <p className="kicker">// FULL SCHEDULE</p>
        <h2>完整賽程</h2>
      </header>
      <div className="table-wrap reveal">
        <table>
          <thead>
            <tr>
              <th>日期</th><th>時間</th><th>賽事</th><th>對手／項目</th><th>平台</th><th>狀態</th>
            </tr>
          </thead>
          <tbody>
            {MATCH_ROWS.map(r => (
              <tr key={r.date + r.event} className={r.day === today ? 'today' : ''}>
                <td>{r.date}</td>
                <td>{r.time}</td>
                <td>{r.event}</td>
                <td>{r.vs}</td>
                <td>{r.platform}</td>
                <td><s className={`tag ${r.tag}`}>{r.tagText}</s></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
