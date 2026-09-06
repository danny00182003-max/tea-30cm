import { useEffect, useState } from 'react'
import { STOPS } from '../data/content.js'
import scrollToSection from '../lib/scrollTo.js'

export default function DotNav() {
  const [active, setActive] = useState(STOPS[0].id)

  // 目前所在區塊：視窗中線落在哪個 section，哪個就是當前項。
  // rootMargin 上下各內縮 50% 後觀察區塌成一條中線，同時只會有一個 section 交會。
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const els = STOPS.map(s => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      entries => {
        const hit = entries.find(e => e.isIntersecting)
        // 捲到 STOPS 以外的區塊（團隊／關於）時沒有命中，保留最後一項不清空
        if (hit) setActive(hit.target.id)
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <nav id="dotnav" aria-label="基地巡覽">
      {STOPS.map((s, i) => {
        const isActive = s.id === active
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            onClick={e => scrollToSection(e, `#${s.id}`)}
            className={isActive ? 'is-active' : undefined}
            aria-label={s.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <i className="dot-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</i>
            <i className="dot-mark" aria-hidden="true"></i>
            <span>{s.label}</span>
          </a>
        )
      })}
    </nav>
  )
}
