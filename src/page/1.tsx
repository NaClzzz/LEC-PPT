import { useEffect, useRef } from 'react'

export default function Section1() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el) }
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-gray-50 px-6"
    >
      <div className="ch-bg-num pointer-events-none absolute left-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-200/50">
        LEC
      </div>
      <div className="ch-bg-num pointer-events-none absolute right-[0.5vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-200/50">
SOF
      </div>

      <nav className="absolute left-0 top-16 z-30 flex w-full items-center justify-center gap-12">
        <a href="#section-2" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">团队概况</a>
        <a href="#section-3" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">团队历史</a>
        <a href="#section-4" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">团队成就</a>
        <a href="#section-5" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">成员去向</a>
        <a href="#section-6" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">技术方向</a>
        <a href="#section-7" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">团队制度</a>
        <a href="#section-8" className="font-sans text-sm tracking-[0.1em] text-gray-800 transition-colors hover:text-accent no-underline">招新报名</a>
      </nav>

      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-[6vw]">
        <span className="whitespace-nowrap font-misans-light text-sm tracking-[0.08em] text-gray-800 uppercase">LEC SOFTWARE STUDIO</span>

        <div className="flex flex-col items-center gap-0 flex-shrink-0">
          {[
            [1, 1, 1],
            [0, 1, 1],
          ].map((row, ri) => (
            <div key={ri} className="flex gap-0">
              {row.map((v, ci) => {
                if (v === 0) return (
                  <div key={ri + '-' + ci} className="h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52" />
                )
                const isStart = ri === 1 && ci === 2
                return (
                  <div key={ri + '-' + ci} className="relative flex items-center justify-center h-28 w-28 sm:h-36 sm:w-36 md:h-52 md:w-52 rounded-full" style={{ backgroundColor: '#42A5F5' }}>
                    {isStart && (
                      <div className="flex flex-col items-center mt-0">
                        <span className="font-misans-light text-[clamp(1.5rem,3vw,2.5rem)] text-white leading-none">→</span>
                        <span className="font-misans-light text-[clamp(0.5rem,0.8vw,0.7rem)] tracking-[0.2em] text-white/80">START</span>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        <span className="whitespace-nowrap font-misans-light text-[1rem] text-gray-800">加入我们，一起用代码创造世界</span>
      </div>

      <div className="absolute bottom-12 left-12 z-20 max-w-4xl text-left">
        <h1 className="ch-title cursor-default">
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span
              className="line-inner block"
              style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter 1.1s cubic-bezier(0.76,0,0.24,1)' }}
            >
              <span className="text-5xl font-bold text-gray-800 sm:text-6xl md:text-8xl lg:text-[7rem]">
                2026 招新
              </span>
            </span>
          </div>
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span
              className="line-inner block"
              style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter 1.1s cubic-bezier(0.76,0,0.24,1) .08s' }}
            >
              <span className="text-5xl font-bold text-gray-900 sm:text-6xl md:text-8xl lg:text-[7rem]">
                乐程软件工作室
              </span>
            </span>
          </div>
        </h1>
      </div>

      <style>{`
        .ch-title:hover .line-inner { letter-spacing: 0.15em !important; }
        .visible .line-inner { transform: translateY(0) !important; }
        .visible .body-p { opacity: 1 !important; transform: none !important; }
        .visible .ch-bg-num { transform: translateY(-50%) translateX(0); opacity: 1; }
        .ch-bg-num {
          transform: translateY(-50%) translateX(30px);
          transition: transform 1.2s cubic-bezier(0.76,0,0.24,1), opacity 1.2s cubic-bezier(0.76,0,0.24,1);
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
