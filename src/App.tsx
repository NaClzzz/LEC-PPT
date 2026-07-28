import { useEffect, useRef } from 'react'
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
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full"
      style={{ backgroundColor: '#42A5F5' }}
    />
  )
}

function App() {
  return (
    <div className="relative">
      <CursorDot />
      <LenisScroll>
        <div>
          <Section1 />
          <Ticker />
          <Section2 />
          <QuoteSection
            bg="blue"
            text={"用代码创造无限可能，\n让青春在团队中绽放最耀眼的光芒"}
            attr="乐程软件工作室 · 2026 招新"
            ambient="CODE"
          />
          <Section3 />
          <Section4 />
          <Section5 />
          <AlumniScroll />
          <Section6 />
          <Section7 />
          <QuoteSection
            bg="white"
            text={"如果你渴望在大学期间提升编程技能，\n参与实际项目开发，结交志同道合的朋友"}
            attr="加入我们，一起用代码创造世界"
            ambient="DREAM"
          />
          <Section8 />
        </div>
      </LenisScroll>

      <LoadingScreen onFinish={() => {}} />
    </div>
  )
}

export default App
