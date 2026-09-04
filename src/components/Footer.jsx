import Emblem from './svg/Emblem.jsx'
import { FOOT_NAV, FOOT_SOCIAL } from '../data/content.js'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="foot-cols">
        <div className="foot-brand">
          <Emblem className="foot-mark" />
          <strong>30 CM</strong>
          <small>NIGHT OPS SQUAD</small>
        </div>
        <nav className="foot-nav" aria-label="頁尾導覽">
          {FOOT_NAV.map(l => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="foot-social">
          {FOOT_SOCIAL.map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
          ))}
        </div>
      </div>
      <p className="disclaimer">
        非官方聲明：本網站為粉絲與社群自行製作之非官方網站，與 KRAFTON, Inc. 及 PUBG: BATTLEGROUNDS 並無隸屬、合作或背書關係。站內所有武器圖像僅為通用寫實外觀之原創描繪，不含任何遊戲內素材、貼圖或商標。
      </p>
      <p className="copyright">© 2026 30 CM — ALL RIGHTS RESERVED</p>
    </footer>
  )
}
