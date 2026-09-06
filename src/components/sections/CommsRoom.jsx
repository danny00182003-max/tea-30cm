import { DISCORD_CHANNELS } from '../../data/content.js'
import scrollToSection from '../../lib/scrollTo.js'

const EQ = Array.from({ length: 18 })

export default function CommsRoom() {
  return (
    <section className="scene scene--comms" id="comms">
      <div className="art">
        <span className="ring rg-a"></span>
        <span className="ring rg-b"></span>
        <span className="ring rg-c"></span>
        <div className="desk"></div>
        <div className="eq">
          {EQ.map((_, i) => <span key={i}></span>)}
        </div>
      </div>
      <div className="content align-center">
        <p className="kicker">SECTOR 05 // 通訊室</p>
        <h2>頻道已開啟</h2>
        <p>加入 Discord 作戰頻道——內部情報、自訂房間、語音陪跑。</p>
        <div className="discord-row">
          {DISCORD_CHANNELS.map(d => (
            <a
              key={d.url}
              className="btn btn--discord"
              href={d.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {d.label}
            </a>
          ))}
        </div>
        <p className="exit-hint">
          <a
            className="exit-link"
            href="#hero"
            aria-label="EXIT → 回到夜色（返回首頁）"
            onClick={e => scrollToSection(e, '#hero')}
          >
            EXIT → 回到夜色
          </a>
        </p>
      </div>
    </section>
  )
}
