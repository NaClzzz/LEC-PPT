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

function FixedNav() {
  const items = [
    ['团队概况', '#section-2'],
    ['团队历史', '#section-3'],
    ['团队成就', '#section-4'],
    ['成员去向', '#section-5'],
    ['技术方向', '#section-6'],
    ['团队制度', '#section-7'],
    ['招新报名', '#section-8'],
  ]
  return (
    <nav className="fixed left-1/2 top-4 z-40 flex -translate-x-1/2 flex-col gap-y-1 rounded-full border border-gray-200/60 bg-white/70 px-6 py-3 md:flex-row md:gap-x-10 md:px-8">
      {[items.slice(0, 4), items.slice(4)].map((row, ri) => (
        <div key={ri} className="flex items-center justify-center gap-x-4 md:gap-10">
          {row.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-sans text-[0.65rem] tracking-[0.1em] text-gray-800 whitespace-nowrap transition-colors hover:text-accent no-underline md:text-sm"
            >
              {label}
            </a>
          ))}
        </div>
      ))}
    </nav>
  )
}

function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <FixedNav />
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
