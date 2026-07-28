import { useEffect, useRef } from 'react'

const techs = [
  ['前端开发', 'Web 页面 / 跨端应用 / 可视化'],
  ['后端开发', '服务端架构 / API 设计 / 数据库'],
  ['Agent 开发', '智能体 / 自动化 / AI 应用'],
  ['游戏开发', 'Unity / Unreal 引擎'],
  ['机器学习', '数据分析 / 模型训练 / 深度学习'],
  ['图形学', '渲染 / 三维建模 / 实时交互'],
  ['算法', '算法竞赛 / 数据结构 / 算法设计'],
]

export default function Section6() {
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
    <section id="section-6" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-gray-100 px-6">
      <div className="ch-bg-num pointer-events-none absolute right-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-300/40">
        FIVE
      </div>

      <div className="relative z-10 ml-28 w-full max-w-4xl text-left">
        <div className="mb-6 flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
          FIVE · 技术方向
        </div>

        <h2 className="ch-title mb-8 cursor-default">
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span className="line-inner block" style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter 1.1s cubic-bezier(0.76,0,0.24,1)' }}>
               <span className="text-5xl font-bold text-gray-800 sm:text-6xl md:text-7xl lg:text-8xl">多元技术</span>
            </span>
          </div>
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span className="line-inner block" style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter 1.1s cubic-bezier(0.76,0,0.24,1) .08s' }}>
               <span className="text-5xl font-bold text-gray-800 sm:text-6xl md:text-7xl lg:text-8xl">总有一款适合你</span>
            </span>
          </div>
        </h2>

        <div className="grid max-w-[1000px] gap-4 md:grid-cols-2">
          {techs.map(([name, desc], i) => (
            <div
              key={name}
              className="tech-item rounded-sm border border-gray-200/60 bg-white/50 px-6 py-5"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: `opacity .6s cubic-bezier(0.76,0,0.24,1) ${.3 + i * .06}s, transform .6s cubic-bezier(0.76,0,0.24,1) ${.3 + i * .06}s` }}
            >
              <div className="mb-1 font-bebas text-xs tracking-[0.15em] text-accent uppercase">0{i + 1}</div>
              <div className="mb-1 text-base font-semibold text-gray-800">{name}</div>
              <div className="font-misans-light text-sm leading-relaxed text-gray-400">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ch-title:hover .line-inner { letter-spacing: 0.15em !important; }
        .visible .line-inner { transform: translateY(0) !important; }
        .visible .tech-item { opacity: 1 !important; transform: none !important; }
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
