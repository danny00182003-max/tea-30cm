import { useEffect } from 'react'
import useStaticMode from './hooks/useStaticMode.js'
import BootOverlay from './components/BootOverlay.jsx'
import TopBar from './components/TopBar.jsx'
import DotNav from './components/DotNav.jsx'
import FxOverlays from './components/FxOverlays.jsx'
import Hero from './components/sections/Hero.jsx'
import OpsCenter from './components/sections/OpsCenter.jsx'
import Armory from './components/sections/Armory.jsx'
import TrophyRoom from './components/sections/TrophyRoom.jsx'
import CommsRoom from './components/sections/CommsRoom.jsx'
import Team from './components/sections/Team.jsx'
import AboutContact from './components/sections/AboutContact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const isStatic = useStaticMode()

  useEffect(() => {
    document.body.classList.toggle('static', isStatic)
  }, [isStatic])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in-view'))
      return
    }
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.18 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <BootOverlay />
      <TopBar />
      <DotNav />
      <main id="top">
        <Hero interactive={!isStatic} video={!isStatic} />
        <OpsCenter />
        <Armory />
        <TrophyRoom />
        <CommsRoom />
        <Team />
        <AboutContact />
      </main>
      <Footer />
      <FxOverlays />
    </>
  )
}
