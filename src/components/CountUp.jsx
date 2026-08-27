import { useEffect, useRef, useState } from 'react'

export default function CountUp({ end, suffix = '' }) {
  const ref = useRef(null)
  const [text, setText] = useState('0')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf = 0
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || el.dataset.done) return
      el.dataset.done = '1'
      const t0 = performance.now()
      const step = now => {
        const k = Math.min(1, (now - t0) / 1100)
        setText(Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US') + (k === 1 ? suffix : ''))
        if (k < 1) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [end, suffix])

  return <b ref={ref}>{text}</b>
}
