import { MINI_SCHEDULE } from '../../data/content.js'
import useHeroMode from '../../hooks/useHeroMode.js'

const BARS = Array.from({ length: 8 })

export default function OpsCenter() {
  const mode = useHeroMode()
  return (
    <section className="scene scene--ops" id="ops">
      <div className="art">
        {mode !== 'scrub' && (
          <img
            className="ops-poster-bg"
            src={`${import.meta.env.BASE_URL}hero-poster.png`}
            alt=""
          />
        )}
        <div className="glow"></div>
        <div className="monwall">
          <div className="monitor hud-frame">
            <div className="monitor-frame">
              <div className="feed f-bars">
                {BARS.map((_, i) => <i key={i}></i>)}
              </div>
            </div>
          </div>
          <div className="monitor hud-frame">
            <div className="monitor-frame">
              <div className="feed f-radar"><b></b></div>
            </div>
          </div>
          <div className="monitor hud-frame">
            <div className="monitor-frame">
              <div className="feed f-map">
                <u className="blip bl-a"></u>
                <u className="blip bl-b"></u>
                <u className="blip bl-c"></u>
              </div>
            </div>
          </div>
          <div className="monitor hud-frame hud-frame--live">
            <div className="monitor-frame">
              <div className="feed f-live">
                <span className="bug">LIVE</span>
                <em>SQUAD_Wipe_04</em>
              </div>
              <div className="live-indicator" aria-live="polite">
                <i className="pulse-dot"></i>
                <span>ON AIR</span>
              </div>
            </div>
          </div>
          <div className="monitor hud-frame">
            <div className="monitor-frame">
              <div className="feed f-wave">
                <svg viewBox="0 0 120 48" preserveAspectRatio="none" aria-hidden="true">
                  <polyline points="0,24 10,10 20,34 30,18 40,30 50,8 60,38 70,20 80,28 90,12 100,36 110,22 120,24" />
                </svg>
              </div>
            </div>
          </div>
          <div className="monitor hud-frame">
            <div className="monitor-frame">
              <div className="feed f-log">
                <p>
                  {'>'} UPLINK … OK<br />
                  {'>'} CH.30CM 頻道同步<br />
                  {'>'} 火力配置：滿載<br />
                  {'>'} Awaiting orders<span className="caret">▌</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="console">
          <i></i><i></i><i></i><i></i><i></i><i></i>
        </div>
      </div>
      <div className="content align-right">
        <p className="kicker">SECTOR 02 // 作戰中心</p>
        <h2>現在直播中 <span className="live-tag"><i className="live-dot"></i>LIVE</span></h2>
        <p>監控牆已上線——賽況、地圖、火力全在螢幕上。</p>
        <div className="platforms">
          <a className="btn btn--twitch" href="#" rel="noopener">Twitch</a>
          <a className="btn btn--youtube" href="#" rel="noopener">YouTube</a>
        </div>
        <ul className="mini-sched">
          {MINI_SCHEDULE.map(m => (
            <li key={m.time + m.text}>
              <time>{m.time}</time>{m.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}