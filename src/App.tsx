import { useEffect, useRef, useState } from 'react'
import LenisScroll from './components/LenisScroll'
import LoadingScreen from './components/LoadingScreen'
import AlumniScroll from './components/AlumniScroll'
import QuoteSection from './components/QuoteSection'
import Ticker from './components/Ticker'
import Section1 from './page/1'
import Section2 from './page/2'
import Section3 from './page/3'
import Section4 from './page/4'
import Section5 from './page/5'
import Section6 from './page/6'
import Section7 from './page/7'
import Section8 from './page/8'

const sectionNames = ['首页', '团队概况', '团队历史', '团队成就', '成员去向', '技术方向', '团队制度', '招新报名']

function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const scaleRef = useRef(1)
  const currentScale = useRef(1)

  useEffect(() => {
    const update = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      if ((e.target as HTMLElement).closest('[data-hover-scale]')) {
        scaleRef.current = 1.5
      } else {
        scaleRef.current = 1
      }
    }
    window.addEventListener('mousemove', update)
    return () => window.removeEventListener('mousemove', update)
  }, [])

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return
    let raf: number
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      currentScale.current += (scaleRef.current - currentScale.current) * 0.12
      dot.style.transform = `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px) scale(${currentScale.current})`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full md:block"
      style={{ backgroundColor: '#42A5F5' }}
    />
  )
}

function ScrollProgress() {
  const [active, setActive] = useState(0)
  const sections = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const els = sectionNames.map((_, i) => document.getElementById(`progress-section-${i}`))
    sections.current = els as HTMLElement[]

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.id.replace('progress-section-', ''))
            setActive(idx)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    )

    els.forEach((el) => { if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  const handleClick = (i: number) => {
    const el = document.getElementById(`progress-section-${i}`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 md:flex">
      {sectionNames.map((_, i) => (
          <button
          key={i}
          onClick={() => handleClick(i)}
          className="group flex items-center"
        >
          <div
            className={`rounded-full transition-all duration-300 ${i === active ? 'w-5 bg-accent' : 'w-1.5 bg-gray-300'}`}
            style={{ height: '2px' }}
          />
        </button>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="relative">
      <CursorDot />
      <ScrollProgress />
      <LenisScroll>
        <div>
          <div id="progress-section-0"><Section1 /></div>
          <Ticker />
          <div id="progress-section-1"><Section2 /></div>
          <QuoteSection
            bg="blue"
            text={"用代码创造无限可能，\n让青春在团队中绽放最耀眼的光芒"}
            attr="乐程软件工作室 · 2026 招新"
            ambient="CODE"
          />
          <div id="progress-section-2"><Section3 /></div>
          <div id="progress-section-3"><Section4 /></div>
          <div id="progress-section-4"><Section5 /></div>
          <AlumniScroll />
          <div id="progress-section-5"><Section6 /></div>
          <div id="progress-section-6"><Section7 /></div>
          <QuoteSection
            bg="white"
            text={"如果你渴望在大学期间提升编程技能，\n参与实际项目开发，结交志同道合的朋友"}
            attr="加入我们，一起用代码创造世界"
            ambient="DREAM"
          />
          <div id="progress-section-7"><Section8 /></div>
        </div>
      </LenisScroll>

      <LoadingScreen onFinish={() => {}} />
    </div>
  )
}

export default App
