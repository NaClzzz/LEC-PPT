import { useEffect, useRef, useState } from 'react'

const alumni = [
  { grade: '2022级', name: '陈信豪', dest: '字节跳动', type: '就业' },
  { grade: '2022级', name: '隋炀', dest: '天津大学', type: '保研' },
  { grade: '2022级', name: '杨东明', dest: '作业帮', type: '就业' },
  { grade: '2021级', name: '赵泽熙', dest: '北京航空航天大学', type: '保研' },
  { grade: '2022级', name: '李焕然', dest: '成都互联网', type: '就业' },
  { grade: '2021级', name: '张歆予', dest: '电子科技大学', type: '保研' },
  { grade: '2021级', name: '李亚文', dest: '美团', type: '就业' },
  { grade: '2021级', name: '宋遗平', dest: '百度', type: '就业' },
]

const allMembers: { grade: string; name: string; dest: string; type: string; qq?: string }[] = [
  { grade: '2025', name: '王硕', dest: '软件工程', type: '', qq: '3563745142' },
  { grade: '2025', name: '赵佳琦', dest: '物联网', type: '', qq: '3594513696' },
  { grade: '2025', name: '付豪', dest: '网络安全', type: '', qq: '2643673981' },
  { grade: '2025', name: '铉绍晖', dest: '软件工程', type: '', qq: '3338001408' },
  { grade: '2025', name: '代泽阳', dest: '软件工程', type: '', qq: '3371437652' },
  { grade: '2025', name: '朱俊豪', dest: '软件工程', type: '', qq: '1438644314' },
  { grade: '2025', name: '罗闽渝', dest: '软件工程', type: '', qq: '2145432672' },
  { grade: '2025', name: '黄禹霖', dest: '物联网', type: '', qq: '2543037355' },
  { grade: '2025', name: '林佳政', dest: '物联网', type: '', qq: '1661874625' },
  { grade: '2025', name: '汪美琳', dest: '物联网', type: '', qq: '1700930362' },
]

const gradeLabels = ['2025', '2024', '2023', '2022', '2021', '2020']

export default function AlumniScroll() {
  const ref = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [showAll, setShowAll] = useState(false)
  const [closing, setClosing] = useState(false)
  const [activeGrade, setActiveGrade] = useState('2025')

  const handleOpen = () => setShowAll(true)
  const handleClose = () => {
    setClosing(true)
    setTimeout(() => { setShowAll(false); setClosing(false) }, 500)
  }

  const filtered = allMembers.filter(m => m.grade === activeGrade)

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
        <button onClick={handleOpen} data-hover-scale className="cursor-pointer rounded-full border border-accent/30 px-5 py-2 font-misans-light text-xs tracking-[0.12em] text-accent transition-all duration-300 hover:bg-accent hover:text-white mr-24">
          全部成员 →
        </button>
      </div>

      {showAll && (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/20 ${closing ? 'overlay-fade-out' : 'overlay-fade-in'}`} onClick={handleClose}>
          <div
            className={`bg-white rounded-xl shadow-lg overflow-hidden flex w-[90vw] max-w-[1000px] h-[78vh] relative ${closing ? 'animate-[slideOutLeft_0.5s_cubic-bezier(0.4,0,0.2,1)]' : 'animate-[slideInRight_0.8s_cubic-bezier(0.16,1,0.3,1)]'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center z-10 transition-colors"
              onClick={handleClose}
            >
              <span className="text-gray-800 text-lg leading-none">✕</span>
            </button>

            <div className="flex-1 flex flex-col p-8 sm:p-12 overflow-y-auto card-content">
              <div className="mb-1 font-bebas text-xs tracking-[0.15em] text-accent uppercase">MEMBERS</div>
              <h3 className="text-[clamp(1.2rem,3vw,2.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-gray-900 mb-6">
                历届成员
              </h3>

              <div className="mb-8 flex gap-4 border-b border-gray-200 pb-3">
                {gradeLabels.map((g) => (
                  <button
                    key={g}
                    onClick={() => setActiveGrade(g)}
                    data-hover-scale
                    className={`font-misans-light text-sm tracking-[0.08em] pb-1 transition-colors ${activeGrade === g ? 'text-accent border-b-2 border-accent' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {g}级
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" style={{ minHeight: '180px' }}>
                {filtered.map((m) => (
                  <div key={m.name} className="flex items-center gap-4 rounded-lg border border-gray-100 bg-gray-50 px-5 h-20">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-base font-semibold text-accent overflow-hidden">
                      {m.qq ? (
                        <img src={`http://q1.qlogo.cn/g?b=qq&nk=${m.qq}&s=100`} alt="" className="h-full w-full object-cover" />
                      ) : (
                        m.name[0]
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-base font-semibold text-gray-800">{m.name}</div>
                      <div className="truncate font-misans-light text-sm text-gray-400">{m.dest}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .visible .scroll-area > div { opacity: 1 !important; transform: none !important; }
        .scroll-area::-webkit-scrollbar { display: none; }
        @keyframes slideInRight {
          from { transform: translateX(100vw); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-100vw); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .overlay-fade-in { animation: fadeIn .4s ease; }
        .overlay-fade-out { animation: fadeOut .5s ease forwards; }
        .card-content { scrollbar-width: none; -ms-overflow-style: none; }
        .card-content::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
