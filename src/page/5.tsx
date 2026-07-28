import { useEffect, useRef } from 'react'

export default function Section5() {
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
    <section id="section-5" ref={ref} className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 px-6">
      <div className="ch-bg-num pointer-events-none absolute right-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-300/40">
        FOUR
      </div>

      <div className="relative z-10 ml-0 w-full max-w-4xl text-left md:ml-28">
        <div className="mb-6 flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
          FOUR · 成员去向
        </div>

        <h2 className="ch-title mb-8 cursor-default">
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span className="line-inner block" style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter 1.1s cubic-bezier(0.76,0,0.24,1)' }}>
               <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">卓越去向</span>
            </span>
          </div>
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span className="line-inner block" style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter 1.1s cubic-bezier(0.76,0,0.24,1) .08s' }}>
               <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">大厂名校</span>
            </span>
          </div>
        </h2>

        <p className="body-p mb-8 max-w-[1100px] font-misans-light text-[1.05rem] leading-[1.75] text-gray-500" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s cubic-bezier(0.76,0,0.24,1) .3s, transform .8s cubic-bezier(0.76,0,0.24,1) .3s' }}>
          通过乐程的学习与培养，历届成员在深造与就业方面均取得了优异成绩。
        </p>

        <div className="grid max-w-[1100px] gap-6 md:gap-10 md:grid-cols-2">
          <div>
            <div className="mb-4 border-b border-gray-300/40 pb-2 text-sm tracking-[0.15em] text-gray-400 uppercase">保研深造</div>
            <ul className="space-y-2">
              {['电子科技大学', '重庆大学','天津大学','北京航空航天大学'].map((s, i) => (
                <li key={s} className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500" style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity .8s cubic-bezier(0.76,0,0.24,1) ${.4 + i * .1}s, transform .8s cubic-bezier(0.76,0,0.24,1) ${.4 + i * .1}s` }}>
                  <span className="mr-3 font-bebas text-lg text-accent">—</span>
                  <strong className="font-semibold text-gray-800">{s}</strong>
                  {i === 3 && <span className="text-gray-400"> 等知名高校</span>}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-4 border-b border-gray-300/40 pb-2 text-sm tracking-[0.15em] text-gray-400 uppercase">就业名企</div>
            <ul className="space-y-2">
              {['字节跳动', '腾讯', '阿里巴巴', '美团'].map((s, i) => (
                <li key={s} className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500" style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity .8s cubic-bezier(0.76,0,0.24,1) ${.5 + i * .1}s, transform .8s cubic-bezier(0.76,0,0.24,1) ${.5 + i * .1}s` }}>
                  <span className="mr-3 font-bebas text-lg text-accent">—</span>
                  <strong className="font-semibold text-gray-800">{s}</strong>
                  {i === 3 && <span className="text-gray-400"> 等互联网行业领军企业</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <blockquote className="body-p mt-8 max-w-[1100px] border-l-2 border-accent pl-5 font-misans-light text-[1rem] leading-[1.75] text-gray-400 italic" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s cubic-bezier(0.76,0,0.24,1) .7s, transform .8s cubic-bezier(0.76,0,0.24,1) .7s' }}>
          这里有直系学长学姐沉淀多年的复试真题库与导师避坑指南，有能写进简历、让面试官眼前一亮的硬核项目经历，更有考研冲刺期团队为你主动减负、集体督学的陪伴机制。让你从大一起就站在学习的快车道上。
        </blockquote>
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
