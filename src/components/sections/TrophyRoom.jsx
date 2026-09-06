import { useState } from 'react'
import Emblem from '../svg/Emblem.jsx'
import ShellField from '../ShellField.jsx'
import { Cup } from '../svg/Rifles.jsx'
import { TROPHIES } from '../../data/content.js'

export default function TrophyRoom() {
  // 新的 burst 重新播放一批有限的子彈，不累積額外節點。
  const [burst, setBurst] = useState(0)
  const fire = () => setBurst(n => n + 1)
  return (
    <section className="scene scene--trophy" id="trophy">
      <div className="art">
        <Emblem className="watermark" />
        <span className="cone cone-a"></span>
        <span className="cone cone-b"></span>
        <ShellField burst={burst} />
        <div className="shelf">
          {TROPHIES.map(t => (
            <div key={t.id} className={`pedestal pedestal--${t.tier}`}>
              <Cup className={`cup cup--${t.tier}`} />
              <label>{t.badge}</label>
            </div>
          ))}
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
        <ul className="honors">
          {TROPHIES.map(t => (
            <li
              key={t.id}
              className={`honor honor--${t.tier}`}
              onClick={fire}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!e.repeat) fire() } }}
              tabIndex={0}
              role="button"
              aria-label={`${t.name} — 觸發彈殼震飛特效`}
            >
              <span className="honor-badge">{t.badge}</span>
              <b className="honor-name">{t.name}</b>
              {t.detail && <em className="honor-detail">{t.detail}</em>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
