import { useRef } from 'react'
import Emblem from '../svg/Emblem.jsx'
import HeroCanvas from '../HeroCanvas.jsx'
import HeroScrub from '../HeroScrub.jsx'
import useHeroMode from '../../hooks/useHeroMode.js'
import scrollToSection from '../../lib/scrollTo.js'

const RUNWAY = Array.from({ length: 7 })

function SceneArt() {
  return (
    <>
      <div className="sky"></div>
      <div className="searchlight sl-a"></div>
      <div className="searchlight sl-b"></div>
      <div className="beacon"></div>
      <div className="facade">
        <div className="hazard"></div>
        <div className="facade-lamp fl-a"></div>
        <div className="facade-lamp fl-b"></div>
      </div>
      <div className="door">
        <Emblem className="door-emblem" />
        <div className="seam"></div>
      </div>
      <div className="ground"></div>
      <div className="runway">
        {RUNWAY.map((_, i) => <i key={i}></i>)}
      </div>
      <div className="fog fog-a"></div>
      <div className="fog fog-b"></div>
      <div className="fog fog-c"></div>
      <div className="rain r-a"></div>
      <div className="rain r-b"></div>
    </>
  )
}

export default function Hero({ interactive }) {
  const mode = useHeroMode()
  const sectionRef = useRef(null)
  return (
    <section className="scene scene--hero" id="hero" ref={sectionRef}>
      <div className="art">
        {mode === 'scrub' && <HeroScrub sectionRef={sectionRef} />}
        {mode === 'video' && (
          <>
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              poster={`${import.meta.env.BASE_URL}hero-poster.webp`}
              src={`${import.meta.env.BASE_URL}hero-bg.mp4`}
            ></video>
            <div className="hero-shade"></div>
          </>
        )}
        {mode === 'still' && (
          <>
            <img
              className="hero-video hero-video--still"
              src={`${import.meta.env.BASE_URL}hero-poster.webp`}
              alt=""
            />
            <div className="hero-shade"></div>
            <SceneArt />
          </>
        )}
        <HeroCanvas active={interactive} />
      </div>
      <div className="content align-left">
        <p className="kicker">// NIGHT OPS — 夜間滲透</p>
        <h1 className="mega">30<span>CM</span></h1>
        <p className="slogan">耳機戴上，今晚由我們空降戰場</p>
        <div className="cta-row">
          <a className="btn btn--primary" href="#ops" onClick={e => scrollToSection(e, '#ops')}>觀看直播</a>
          <a className="btn btn--ghost" href="#comms" onClick={e => scrollToSection(e, '#comms')}>加入社群</a>
        </div>
        <p className="scroll-hint">SCROLL TO BREACH<span></span></p>
      </div>
    </section>
  )
}
