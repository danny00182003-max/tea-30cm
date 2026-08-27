import Emblem from '../svg/Emblem.jsx'
import { Cup } from '../svg/Rifles.jsx'
import CountUp from '../CountUp.jsx'
import { CHIPS, MILESTONES, HIGHLIGHTS } from '../../data/content.js'

export default function TrophyRoom() {
  return (
    <section className="scene scene--trophy" id="trophy">
      <div className="art">
        <Emblem className="watermark" />
        <span className="cone cone-a"></span>
        <span className="cone cone-b"></span>
        <span className="cone cone-c"></span>
        <div className="shelf">
          <div className="pedestal p-a">
            <Cup className="cup cup-a" />
            <label>城市巡迴賽 冠軍</label>
          </div>
          <div className="pedestal p-b">
            <Cup className="cup cup-b" />
            <label>夏季聯賽 連霸</label>
          </div>
          <div className="pedestal p-c">
            <Cup className="cup cup-c" />
            <label>週末盃 首冠</label>
          </div>
        </div>
        <b className="dust d1"></b>
        <b className="dust d2"></b>
        <b className="dust d3"></b>
        <b className="dust d4"></b>
        <b className="dust d5"></b>
      </div>
      <div className="content align-left wide">
        <p className="kicker">SECTOR 04 // 榮譽室</p>
        <h2>戰功牆</h2>
        <ul className="chips">
          {CHIPS.map(c => (
            <li key={c.label}>
              <CountUp end={c.end} suffix={c.suffix} />
              {c.label}
            </li>
          ))}
        </ul>
        <ul className="milestones">
          {MILESTONES.map(m => (
            <li key={m.time}>
              <time>{m.time}</time>{m.text}
            </li>
          ))}
        </ul>
        <div className="highlights">
          {HIGHLIGHTS.map(h => (
            <a key={h.cls} className={`hl ${h.cls}`} href="#" rel="noopener">
              <span aria-hidden="true"></span>
              <em>{h.title}</em>
              <i>{h.dur}</i>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
