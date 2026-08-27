import Emblem from './svg/Emblem.jsx'
import { NAV_LINKS } from '../data/content.js'

export default function TopBar() {
  return (
    <header id="topbar">
      <a className="brand" href="#hero">
        <Emblem className="brand-mark" />
        <span className="brand-name">30<b>CM</b></span>
      </a>
      <nav className="top-nav" aria-label="主導覽">
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </nav>
      <div className="live-pill"><i></i>LIVE</div>
    </header>
  )
}
