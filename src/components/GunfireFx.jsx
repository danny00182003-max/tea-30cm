import { useEffect, useState } from 'react'

/** One bounded burst on real controls. Never intercepts navigation or tracks the cursor. */
export default function GunfireFx() {
  const [shot, setShot] = useState(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let timer
    let sequence = 0
    let lastShot = -Infinity
    const clear = () => { clearTimeout(timer); setShot(null) }
    const fire = event => {
      if (reduced.matches || document.hidden) return
      const keyboard = event.type === 'keydown'
      if (keyboard ? event.key !== 'Enter' || event.repeat : event.button !== 0) return
      const target = event.target instanceof Element && event.target.closest('a.btn, a.mlink')
      if (!target || performance.now() - lastShot < 180) return
      lastShot = performance.now()
      const rect = target.getBoundingClientRect()
      const x = keyboard ? rect.right - 12 : event.clientX
      const y = keyboard ? rect.top + rect.height / 2 : event.clientY
      clearTimeout(timer)
      setShot({ id: ++sequence, x, y })
      timer = setTimeout(() => setShot(null), 460)
    }
    document.addEventListener('pointerdown', fire, { passive: true })
    document.addEventListener('keydown', fire)
    document.addEventListener('visibilitychange', clear)
    reduced.addEventListener('change', clear)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('pointerdown', fire)
      document.removeEventListener('keydown', fire)
      document.removeEventListener('visibilitychange', clear)
      reduced.removeEventListener('change', clear)
    }
  }, [])

  if (!shot) return null
  return (
    <div key={shot.id} className="gunfire-fx" style={{ left: shot.x, top: shot.y }} aria-hidden="true">
      <svg className="gunfire-mark" viewBox="0 0 64 64" fill="none">
        <path d="m22 22 6 6m8 8 6 6m0-20-6 6m-8 8-6 6" />
        <path className="gunfire-sparks" d="m32 5 1 10m24 17H47M32 59l-1-10M5 32h10" />
      </svg>
      <span className="gunfire-casing" />
    </div>
  )
}
