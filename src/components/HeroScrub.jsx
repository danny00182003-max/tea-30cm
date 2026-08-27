import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

const FRAME_COUNT = 154
const pad = n => String(n).padStart(4, '0')

export default function HeroScrub({ sectionRef }) {
  const canvasRef = useRef(null)
  const veilRef = useRef(null)
  const [loadedCount, setLoadedCount] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const section = sectionRef && sectionRef.current
    const canvas = canvasRef.current
    if (!section || !canvas) return
    const ctx = canvas.getContext('2d')
    const dir = `${import.meta.env.BASE_URL}hero-frames/`
    const frames = new Array(FRAME_COUNT).fill(null)
    let loaded = 0
    let current = -1
    let desired = 0
    let killed = false
    let lenis = null
    let tickerFn = null
    const sts = []
    const tweens = []

    const draw = i => {
      const img = frames[i]
      if (!img || !ctx || i === current) return
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      ctx.drawImage(img, 0, 0)
      current = i
    }

    const settle = idx => {
      loaded += 1
      setLoadedCount(loaded)
      if (idx === 0) {
        setReady(true)
        draw(0)
      } else if (idx === desired) {
        draw(idx)
      }
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const idx = i
      const img = new Image()
      img.decoding = 'async'
      img.addEventListener('load', () => { if (!killed) settle(idx) })
      img.addEventListener('error', () => { if (!killed) settle(idx) })
      img.src = `${dir}frame-${pad(idx + 1)}.jpg`
      frames[idx] = img
    }

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
      tweens.forEach(t => {
        if (t.scrollTrigger) t.scrollTrigger.kill()
        t.kill()
      })
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
        src={`${import.meta.env.BASE_URL}hero-poster.png`}
        alt=""
      />
      <canvas ref={canvasRef} className="hero-frames-canvas" aria-hidden="true"></canvas>
      <div className="hero-shade"></div>
      <div ref={veilRef} className="scrub-veil" aria-hidden="true"></div>
      {!ready && (
        <div className="scrub-load">
          UPLINK FRAMES {String(Math.min(loadedCount, FRAME_COUNT)).padStart(3, '0')}/{FRAME_COUNT}
        </div>
      )}
    </>
  )
}
