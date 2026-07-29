import { useEffect, useRef } from 'react'

const alumni = [
  { grade: '2022届', name: '陈信豪', dest: '字节跳动', type: '就业' },
  { grade: '2022届', name: '隋炀', dest: '天津大学', type: '保研' },
  { grade: '2022届', name: '杨东明', dest: '作业帮', type: '就业' },
  { grade: '2021届', name: '赵泽熙', dest: '北京航空航天大学', type: '保研' },
  { grade: '2022届', name: '陈双彬', dest: '字节跳动', type: '就业' },
  { grade: '2021届', name: '张歆予', dest: '电子科技大学', type: '保研' },
  { grade: '2021届', name: '李亚文', dest: '美团', type: '就业' },
  { grade: '2021届', name: '宋遗平', dest: '百度', type: '就业' },
]

export default function AlumniScroll() {
  const ref = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add('visible'); io.unobserve(el) }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const sc = scrollRef.current
    if (!sc) return
    let raf: number
    let skip = 0

    function step() {
      const s = scrollRef.current
      if (s) {
        skip = (skip + 1) % 3
        if (skip === 0) s.scrollLeft += 1
        if (s.scrollLeft >= s.scrollWidth / 2) {
          s.scrollLeft = 0
        }
      }
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gray-50 pt-6 pb-8"
    >
      <div className="mx-auto mb-3 max-w-7xl px-6">
        <div className="flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
          历届成员去向一览
        </div>
      </div>

      <div ref={scrollRef} className="scroll-area flex gap-6 overflow-x-auto px-6 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {[...alumni, ...alumni].map((a, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl bg-white p-8 shadow-sm"
            style={{ width: 'clamp(220px, 18vw, 300px)', opacity: 0, transform: 'translateY(30px)', transition: `opacity .7s cubic-bezier(0.76,0,0.24,1) ${.1 + i * .04}s, transform .7s cubic-bezier(0.76,0,0.24,1) ${.1 + i * .04}s` }}
          >
            <div className="mb-3 font-bebas text-xs tracking-[0.15em] text-accent uppercase">{a.grade}</div>
            <div className="mb-1 text-xl font-bold text-gray-800">{a.name}</div>
            <div className="font-misans-light text-sm leading-relaxed text-gray-500">{a.dest}</div>
            <div className="absolute bottom-3 right-3 font-bebas text-[0.7rem] tracking-[0.15em] text-accent uppercase">{a.type}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end px-6">
        <button className="cursor-pointer rounded-full border border-accent/30 px-5 py-2 font-misans-light text-xs tracking-[0.12em] text-accent transition-all duration-300 hover:bg-accent hover:text-white mr-24">
          全部成员 →
        </button>
      </div>

      <style>{`
        .visible .scroll-area > div { opacity: 1 !important; transform: none !important; }
        .scroll-area::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
