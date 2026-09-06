import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 154
// 關鍵幀間距：先鋪 16 張涵蓋全段，再回填中間幀
const KEY_STEP = 10
const pad = n => String(n).padStart(4, '0')

export default function HeroScrub({ sectionRef }) {
  const canvasRef = useRef(null)
  const veilRef = useRef(null)
  const [loadedCount, setLoadedCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const section = sectionRef && sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    const ctx = canvas.getContext('2d')
    const dir = `${import.meta.env.BASE_URL}hero-frames/`
    const frames = new Array(FRAME_COUNT).fill(null)
    const ready = new Array(FRAME_COUNT).fill(false)
    const requested = new Array(FRAME_COUNT).fill(false)
    let loaded = 0
    let current = -1
    let desired = 0
    let killed = false
    let firstPainted = false
    let lenis = null
    let tickerFn = null
    const sts = []
    const tweens = []

    // 找出離 i 最近、已解碼可用的影格；全部沒有時回 -1
    const nearestReady = i => {
      if (ready[i]) return i
      for (let d = 1; d < FRAME_COUNT; d++) {
        const a = i - d, b = i + d
        if (a >= 0 && ready[a]) return a
        if (b < FRAME_COUNT && ready[b]) return b
      }
      return -1
    }

    const draw = i => {
      // 目標幀還沒到位就退到最近可用幀，避免捲動時出現空白/破圖
      const use = nearestReady(i)
      if (use < 0 || use === current) return
      const img = frames[use]
      if (!img) return
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      ctx.drawImage(img, 0, 0)
      current = use
    }

    // 依序載入一批影格，每張完成後若正好是使用者當下要看的就立刻補畫
    const loadBatch = (list, done) => {
      let pending = list.length
      if (!pending) { done && done(); return }
      list.forEach(idx => {
        if (requested[idx]) { if (--pending === 0) done && done(); return }
        requested[idx] = true
        const img = new Image()
        img.decoding = 'async'
        const settle = ok => {
          if (killed) return
          if (ok) { frames[idx] = img; ready[idx] = true }
          loaded += 1
          setLoadedCount(loaded)
          if (idx === 0 || (!firstPainted && ok)) { firstPainted = true; setStarted(true) }
          // 目前停在哪就補哪：新到的幀若比現在畫的更接近目標，立即重畫
          if (ok && (current < 0 || Math.abs(idx - desired) < Math.abs(current - desired))) draw(desired)
          if (--pending === 0) done && done()
        }
        img.addEventListener('load', () => settle(true))
        // 單張失敗不中斷整體：標記為不可用，nearestReady 會自動跳過
        img.addEventListener('error', () => settle(false))
        img.src = `${dir}frame-${pad(idx + 1)}.webp`
      })
    }

    // 第一階段：整段均勻取關鍵幀，讓任何捲動位置都先有畫面
    const keyframes = []
    for (let i = 0; i < FRAME_COUNT; i += KEY_STEP) keyframes.push(i)
    if (keyframes[keyframes.length - 1] !== FRAME_COUNT - 1) keyframes.push(FRAME_COUNT - 1)

    // 第二階段：補完其餘中間幀
    const rest = []
    for (let i = 0; i < FRAME_COUNT; i++) if (!keyframes.includes(i)) rest.push(i)

    loadBatch(keyframes, () => { if (!killed) loadBatch(rest) })

    lenis = new Lenis({ lerp: 0.1 })
    lenis.on('scroll', ScrollTrigger.update)
    tickerFn = time => lenis.raf(time * 1000)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)
    window.__lenis = lenis

    document.body.classList.add('scrub-on')

    sts.push(ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: true,
      onUpdate: self => {
        const idx = Math.min(FRAME_COUNT - 1, Math.round(self.progress * (FRAME_COUNT - 1)))
        desired = idx
        draw(idx)
      },
    }))

    tweens.push(gsap.fromTo(veilRef.current,
      { opacity: 0 },
      { opacity: 1, ease: 'none',
        scrollTrigger: { trigger: '#ops', start: 'top 60%', end: 'top top', scrub: true } }
    ))

    tweens.push(gsap.to('#hero .content, #hero .hero-canvas',
      { opacity: 0, y: -50, ease: 'none',
        scrollTrigger: { trigger: '#ops', start: 'top 85%', end: 'top 55%', scrub: true } }
    ))

    tweens.push(gsap.fromTo('#ops .content',
      { opacity: 0, y: 70 },
      { opacity: 1, y: 0, ease: 'none',
        scrollTrigger: { trigger: '#ops', start: 'top 92%', end: 'top 30%', scrub: true } }
    ))

    const onResize = () => ScrollTrigger.refresh()
    window.addEventListener('load', onResize)

    return () => {
      killed = true
      window.removeEventListener('load', onResize)
      document.body.classList.remove('scrub-on')
      sts.forEach(s => s.kill())
      // 切換手機 / reduced-motion 模式時還原淡出樣式，不能只停止 tween。
      tweens.forEach(t => t.revert())
      if (tickerFn) gsap.ticker.remove(tickerFn)
      if (lenis) {
        if (window.__lenis === lenis) delete window.__lenis
        lenis.destroy()
      }
    }
  }, [sectionRef])

  return (
    <>
      <img
        className="hero-video hero-video--still"
        src={`${import.meta.env.BASE_URL}hero-poster.webp`}
        alt=""
      />
      <canvas ref={canvasRef} className="hero-frames-canvas" aria-hidden="true"></canvas>
      <div className="hero-shade"></div>
      <div ref={veilRef} className="scrub-veil" aria-hidden="true"></div>
      {!started && (
        <div className="scrub-load">
          UPLINK FRAMES {String(Math.min(loadedCount, FRAME_COUNT)).padStart(3, '0')}/{FRAME_COUNT}
        </div>
      )}
    </>
  )
}
