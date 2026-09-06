import { lazy, Suspense, useEffect, useRef, useState } from 'react'

// 動態載入：three/R3F 只在真的要跑 3D 時才進網路，手機與減少動態使用者完全不下載
const HeroShard = lazy(() => import('./HeroShard.jsx'))

export default function HeroCanvas({ active }) {
  // 包裝層同步存在，讓 ScrollTrigger 在 3D 載入前就能綁定淡出目標。
  const wrapperRef = useRef(null)
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)
  const [pageVisible, setPageVisible] = useState(() => document.visibilityState !== 'hidden')
  const running = active && inView && pageVisible

  useEffect(() => {
    const update = () => setPageVisible(document.visibilityState !== 'hidden')
    document.addEventListener('visibilitychange', update)
    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => setInView(entries[0].isIntersecting))
      : null
    if (observer) observer.observe(wrapperRef.current)
    else setInView(true)
    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', update)
    }
  }, [])

  useEffect(() => {
    if (!running || armed) return
    if (window.requestIdleCallback) {
      const h = window.requestIdleCallback(() => setArmed(true), { timeout: 2500 })
      return () => window.cancelIdleCallback(h)
    }
    const t = setTimeout(() => setArmed(true), 1200)
    return () => clearTimeout(t)
  }, [running, armed])

  return (
    <div ref={wrapperRef} className="hero-canvas" aria-hidden="true">
      {active && armed && (
        <Suspense fallback={null}>
          <HeroShard running={running} />
        </Suspense>
      )}
    </div>
  )
}
