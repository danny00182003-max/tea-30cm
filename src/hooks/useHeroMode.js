import { useEffect, useState } from 'react'

const NARROW = '(max-width: 900px)'
const COARSE = '(hover: none), (pointer: coarse)'
const REDUCED = '(prefers-reduced-motion: reduce)'

function pick() {
  // SSR / 無 matchMedia 環境退回最保守的 still
  if (typeof window === 'undefined' || !window.matchMedia) return 'still'
  if (window.matchMedia(REDUCED).matches) return 'still'
  if (window.matchMedia(NARROW).matches || window.matchMedia(COARSE).matches) return 'video'
  return 'scrub'
}

/**
 * Hero 呈現模式。
 *
 * 初始值必須同步用 matchMedia 判定：先前固定回 'scrub'，導致手機與
 * prefers-reduced-motion 使用者在第一次 render 就掛上 HeroScrub，
 * 送出 154 張影格請求後才被 effect 換掉，白白吃掉頻寬與主執行緒。
 */
export default function useHeroMode() {
  const [mode, setMode] = useState(pick)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mqls = [NARROW, COARSE, REDUCED].map(q => window.matchMedia(q))
    const update = () => setMode(pick())
    // 掛載與初始判定之間若有變化（例如換裝置方向）補一次
    update()
    mqls.forEach(m => m.addEventListener('change', update))
    return () => mqls.forEach(m => m.removeEventListener('change', update))
  }, [])

  return mode
}
