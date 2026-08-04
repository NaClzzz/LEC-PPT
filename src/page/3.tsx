import { useEffect, useRef } from 'react'

const history: { date: string; title: string; desc: string }[] = [
  { date: '2010.09', title: '团队创立', desc: '乐程软件工作室正式成立，开启学生软件开发与科研探索之路。' },
  { date: '2010.12', title: '首批成员', desc: '首批成员加入，团队进入运营阶段。' },
  { date: '2011.04', title: '首个项目', desc: '承接校内信息化项目，迈出“学以致用”的第一步。' },
  { date: '2011.11', title: '技术沉淀', desc: '沉淀前后端开发与项目协作规范，团队初步成形。' },
  { date: '2012.06', title: '走出校园', desc: '参与企业合作项目，服务范围从学校走向社会。' },
  { date: '2013.05', title: '竞赛首秀', desc: '首次参加学科竞赛并获奖，开启以赛促学之路。' },
  { date: '2014.09', title: '规模扩大', desc: '成员规模扩大，形成较为完整的梯队培养体系。' },
  { date: '2015.06', title: '保研就业并进', desc: '首届成员保研、就业成果显现，团队影响力提升。' },
  { date: '2016.08', title: '省国赛突破', desc: '斩获多项省级、国家级学科竞赛奖项。' },
  { date: '2017.03', title: '科研探索', desc: '组建科研小组，深入算法与机器学习方向。' },
  { date: '2018.10', title: '前沿布局', desc: '拓展图形学、Agent 等前沿技术方向。' },
  { date: '2019.06', title: '线上协作', desc: '完善远程协作与知识沉淀机制，从容应对时代变化。' },
  { date: '2020.02', title: '全面远程', desc: '全面线上协作，知识库与文档体系逐步完善。' },
  { date: '2020.11', title: '规模破三十', desc: '团队规模扩大至 30 余人，进入快速发展期。' },
  { date: '2021.04', title: '方向多元化', desc: '技术方向覆盖全栈、AI、图形学、游戏开发等领域。' },
  { date: '2021.12', title: '年度大会', desc: '举办年度总结与技术分享大会，沉淀团队文化。' },
  { date: '2022.05', title: '名企输送', desc: '成员去向覆盖字节、腾讯、阿里等一线互联网企业。' },
  { date: '2022.11', title: '高校深造', desc: '多位成员保研至电子科大、川大等知名高校。' },
  { date: '2023.03', title: 'AI 应用落地', desc: '深入大模型与智能体开发，落地多个 AI 应用。' },
  { date: '2023.10', title: '国赛金奖', desc: '在多项国家级竞赛中取得历史最佳成绩。' },
  { date: '2024.06', title: '毕业季', desc: '又一批成员走向企业与高校，薪火相传。' },
  { date: '2024.12', title: '跨年嘉年华', desc: '团队新年活动与技术分享，凝聚团队力量。' },
  { date: '2025.05', title: '持续深耕', desc: '在竞赛、科研与项目开发中持续斩获成果。' },
  { date: '2026.03', title: '招新进行时', desc: '2026 招新开启，期待新的力量加入乐程。' },
]

export default function Section3() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add('visible')
          io.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="section-3"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-50 px-6"
    >
      <div className="ch-bg-num pointer-events-none absolute right-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-300/40">
        TWO
      </div>

      <div className="relative z-10 ml-0 w-full max-w-[1500px] text-left md:ml-28">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:gap-8">
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
              TWO · 团队历史
            </div>

        <h2 className="ch-title mb-8 cursor-default">
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span
              className="line-inner block"
              style={{
                transform: 'translateY(110%)',
                letterSpacing: '-0.03em',
                transition:
                  'transform .9s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter 1.1s cubic-bezier(0.76,0,0.24,1)',
              }}
            >
              <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                从零出发
              </span>
            </span>
          </div>
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span
              className="line-inner block"
              style={{
                transform: 'translateY(110%)',
                letterSpacing: '-0.03em',
                transition:
                  'transform .9s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter 1.1s cubic-bezier(0.76,0,0.24,1) .08s',
              }}
            >
              <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                十余年之路
              </span>
            </span>
          </div>
        </h2>

        <div className="space-y-6">
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="font-bebas text-2xl leading-none text-accent">01</span>
              <span className="border-b border-gray-300/40 pb-1 text-sm tracking-[0.15em] text-gray-400 uppercase">
                创立 · 2010
              </span>
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .8s cubic-bezier(0.76,0,0.24,1) .3s, transform .8s cubic-bezier(0.76,0,0.24,1) .3s',
              }}
            >
              乐程软件工作室正式成立，怀着“学以致用，服务学校，走向社会”的宗旨。开启学生软件开发与科研探索之路。
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="font-bebas text-2xl leading-none text-accent">02</span>
              <span className="border-b border-gray-300/40 pb-1 text-sm tracking-[0.15em] text-gray-400 uppercase">
                沉淀 · 2010–2015
              </span>
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .8s cubic-bezier(0.76,0,0.24,1) .4s, transform .8s cubic-bezier(0.76,0,0.24,1) .4s',
              }}
            >
              团队创立初期，沉淀技术基础，积累项目经验。
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="font-bebas text-2xl leading-none text-accent">03</span>
              <span className="border-b border-gray-300/40 pb-1 text-sm tracking-[0.15em] text-gray-400 uppercase">
                突破 · 2016–2020
              </span>
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .8s cubic-bezier(0.76,0,0.24,1) .5s, transform .8s cubic-bezier(0.76,0,0.24,1) .5s',
              }}
            >
              保研、就业齐发展，在各项学科竞赛中崭露头角，获省、国赛奖项数十项。
            </p>
          </div>
          <div>
            <div className="mb-3 flex items-center gap-4">
              <span className="font-bebas text-2xl leading-none text-accent">04</span>
              <span className="border-b border-gray-300/40 pb-1 text-sm tracking-[0.15em] text-gray-400 uppercase">
                壮大 · 2021–2026
              </span>
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .8s cubic-bezier(0.76,0,0.24,1) .6s, transform .8s cubic-bezier(0.76,0,0.24,1) .6s',
              }}
            >
              团队规模扩大至{' '}
              <strong className="relative font-semibold text-gray-800">30 余人</strong>
              ，技术方向拓展至 Agent
              开发、图形学、机器学习等前沿领域，成员去向覆盖字节、腾讯、阿里等一线互联网企业及电子科大、川大等知名高校。
            </p>
          </div>
        </div>
          </div>

          <div className="w-full shrink-0 md:mr-24 md:w-[480px]">
            <div
              className="timeline-scroll relative h-[65vh] min-h-[460px] w-full overflow-y-auto"
              data-lenis-prevent
            >
              <div className="relative space-y-8 pb-2">
                <div className="absolute bottom-0 right-[5px] top-0 w-px bg-gray-300/60" />
                {history.map((h) => (
                  <div key={h.date} className="relative pr-10">
                    <div className="text-right">
                      <div className="font-bebas text-[1.6rem] leading-none text-accent">
                        {h.date}
                      </div>
                      <p className="font-misans-light mt-2 text-[1.05rem] leading-[1.75] text-gray-500">
                        {h.desc}
                      </p>
                    </div>
                    <div className="absolute right-0 top-1 flex h-3 w-3 items-center justify-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-accent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
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
        .body-p strong {
          position: relative;
          cursor: pointer;
        }
        .body-p strong::after {
          content: ''; position: absolute; left: 0; bottom: -2px; right: 0;
          height: 1px; background: #42A5F5;
          transform: scaleX(0); transform-origin: left;
          transition: transform .5s cubic-bezier(0.76,0,0.24,1);
        }
        .body-p strong:hover::after { transform: scaleX(1); }
        .timeline-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .timeline-scroll::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  )
}
