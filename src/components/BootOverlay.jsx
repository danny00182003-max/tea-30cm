import { useEffect, useState } from 'react'
import { BOOT_LINES } from '../data/content.js'

export default function BootOverlay() {
  const [text, setText] = useState('')
  const [done, setDone] = useState(false)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return
    }
    let li = 0
    let ci = 0
    let out = ''
    const timer = setInterval(() => {
      if (li >= BOOT_LINES.length) {
        clearInterval(timer)
        setTimeout(() => setDone(true), 350)
        return
      }
      const line = BOOT_LINES[li]
      out += line[ci] || ''
      ci += 1
      if (ci >= line.length) {
        out += '\n'
        li += 1
        ci = 0
      }
      setText(out)
    }, 9)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (!done) return
    const t = setTimeout(() => setGone(true), 700)
    return () => clearTimeout(t)
  }, [done])

  if (gone) return null
  return (
    <div className={`boot${done ? ' done' : ''}`} onClick={() => setDone(true)} aria-hidden="true">
      <div className="boot-lines">{text}</div>
      <div className="boot-skip">CLICK TO SKIP</div>
    </div>
  )
}
