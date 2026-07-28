import { useEffect, useRef } from 'react'
import PhotoAlbum from '../components/PhotoAlbum'

const albumImages = [
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/2.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/5.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/1.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/6.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/4.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/pictures/7.webp',
]
const albumLabels = Array.from({ length: 6 }, (_, i) => `照片 ${i + 1}`)

export default function Section2() {
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
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="section-2"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-100 px-6"
    >
      <div className="ch-bg-num pointer-events-none absolute right-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-300/40">
        ONE
      </div>

      <div className="relative z-10 ml-0 w-full max-w-7xl text-left md:ml-28">
        <div className="flex gap-16">
          <div className="flex-1">
            <div className="mb-6 flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
              ONE · 团队概况
            </div>

            <h2 className="ch-title mb-20 cursor-default">
              <div className="line-wrap overflow-hidden leading-[1.15]">
                <span
                  className="line-inner block"
                  style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter 1.1s cubic-bezier(0.76,0,0.24,1)' }}
                >
                  <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                    乐程软件工作室
                  </span>
                </span>
              </div>
              <div className="line-wrap overflow-hidden leading-[1.15]">
                <span
                  className="line-inner block"
                  style={{ transform: 'translateY(110%)', letterSpacing: '-0.03em', transition: 'transform .9s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter 1.1s cubic-bezier(0.76,0,0.24,1) .08s' }}
                >
                  <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                    不止于代码
                  </span>
                </span>
              </div>
            </h2>

            <div className="grid max-w-[1100px] gap-6 md:gap-12 md:grid-cols-2">
              <div>
                <div className="mb-5 border-b border-gray-300/40 pb-3 text-sm tracking-[0.15em] text-gray-400 uppercase">
                  团队概况
                </div>
                <p
                  className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
                  style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s cubic-bezier(0.76,0,0.24,1) .4s, transform .8s cubic-bezier(0.76,0,0.24,1) .4s' }}
                >
                  乐程软件工作室（LEC SOFTWARE STUDIO）自 <strong className="relative font-semibold text-gray-800">2010 年 6 月</strong> 创立以来，已在软件开发和作品开发领域深耕十余年。我们是学生科研领域的佼佼者，致力于多方向的技术学习与人才培养。
                </p>
              </div>
              <div>
                <div className="mb-5 border-b border-gray-300/40 pb-3 text-sm tracking-[0.15em] text-gray-400 uppercase">
                  团队规模
                </div>
                <p
                  className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
                  style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s cubic-bezier(0.76,0,0.24,1) .55s, transform .8s cubic-bezier(0.76,0,0.24,1) .55s' }}
                >
                  团队目前有成员 <strong className="relative font-semibold text-gray-800">30 余人</strong>，采取每周 <strong className="relative font-semibold text-gray-800">28 小时</strong> 考勤制度，定期开展例会和学习交流，形成良好学风。涵盖前后端开发、算法竞赛、机器学习、游戏开发等多个领域。
                </p>
              </div>
            </div>
          </div>

          <div className="album-wrap hidden items-center -mr-40 md:flex" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'opacity .8s cubic-bezier(0.76,0,0.24,1) .7s, transform .8s cubic-bezier(0.76,0,0.24,1) .7s' }}>
            <PhotoAlbum images={albumImages} labels={albumLabels} />
          </div>
        </div>
      </div>

      <style>{`
        .ch-title:hover .line-inner { letter-spacing: 0.15em !important; }
        .visible .line-inner { transform: translateY(0) !important; }
        .visible .body-p { opacity: 1 !important; transform: none !important; }
        .visible .ch-bg-num { transform: translateY(-50%) translateX(0); opacity: 1; }
        .visible .album-wrap { opacity: 1 !important; transform: translateY(0) !important; }
        .ch-bg-num {
          transform: translateY(-50%) translateX(30px);
          transition: transform 1.2s cubic-bezier(0.76,0,0.24,1), opacity 1.2s cubic-bezier(0.76,0,0.24,1);
          opacity: 0;
        }
        .ch-title:hover .line-inner { letter-spacing: 0.02em; }
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
      `}</style>
    </section>
  )
}
