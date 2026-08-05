import { useEffect, useRef } from 'react'
import GridMotion from '../components/GridMotion'

const gridItems: string[] = [
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336220.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336220.jpg',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/%E5%85%A8%E5%9B%BD%E6%80%BB%E5%86%B3%E8%B5%9B_%E8%BD%AF%E4%BB%B6%E8%B5%9B_C%2B%2BB%E7%BB%84_%E4%BA%8C%E7%AD%89%E5%A5%96_%E9%93%89%E7%BB%8D%E6%99%96_1702034415_2951555.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336219.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336218.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336217.png',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/933a9fec32e6cc0a74360a4a30681d98.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336201.jpg',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/1.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/%E9%99%88%E6%98%B1%E7%92%8B%E7%9D%BF%E6%8A%97%E5%9B%BD%E8%B5%9B.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336215.jpg',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/Snipaste_2026-08-04_21-04-55.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336205.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336207.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336204.jpg',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336203.jpg',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/56184878cff8ae5f5f8f969e25308627.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336219.jpg',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/ade0100a4608d956435a05eed09cb3b1.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/CCCC2025GPLT09064_%E5%85%A8%E5%9B%BD%E6%80%BB%E5%86%B3%E8%B5%9B_%E5%9B%A2%E9%98%9F%E4%BA%8C%E7%AD%89%E5%A5%96_%E8%A5%BF%E5%8D%97%E7%9F%B3%E6%B2%B9%E5%A4%A7%E5%AD%A6_swpu1_%E9%BE%9A%E4%BA%91%E9%A3%9E_00.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336220.jpg', 
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/CCCC2025GPLT09064_%E5%85%A8%E5%9B%BD%E6%80%BB%E5%86%B3%E8%B5%9B_%E5%9B%A2%E9%98%9F%E4%BA%8C%E7%AD%89%E5%A5%96_%E8%A5%BF%E5%8D%97%E7%9F%B3%E6%B2%B9%E5%A4%A7%E5%AD%A6_swpu1_%E9%BE%9A%E4%BA%91%E9%A3%9E_00.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/2.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/a285175c79272781e9abfa4964ea9828.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/5.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/3.webp',
  'https://ziro.oss-cn-shanghai.aliyuncs.com/achievements/4.webp',
  'https://trudbot-md-img.oss-cn-shanghai.aliyuncs.com/202407172336208.jpg',
]

export default function Section4() {
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
      id="section-4"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-gray-100 px-6"
    >
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
        <GridMotion items={gridItems} gradientColor="#ffffff" />
      </div>

      <div className="ch-bg-num pointer-events-none absolute right-[-2vw] top-1/2 select-none font-bebas text-[clamp(16rem,40vw,38rem)] leading-none tracking-[-0.06em] text-gray-300/40">
        THREE
      </div>

      <div className="relative z-10 ml-0 w-full max-w-4xl text-left md:ml-28">
        <div className="mb-6 flex items-center gap-5 text-sm tracking-[0.3em] text-gray-400 before:block before:h-[1.5px] before:w-[30px] before:flex-shrink-0 before:bg-accent uppercase">
          THREE · 团队成就
        </div>

        <h2 className="ch-title mb-8 cursor-default">
          <div className="line-wrap overflow-hidden leading-[1.15]">
            <span
              className="line-inner block"
              style={{
                transform: 'translateY(110%)',
                letterSpacing: '-0.03em',
                transition:
                  'transform .7s cubic-bezier(0.76,0,0.24,1), letter-spacing .6s ease, filter .85s cubic-bezier(0.76,0,0.24,1)',
              }}
            >
              <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                硕果累累
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
                  'transform .7s cubic-bezier(0.76,0,0.24,1) .08s, letter-spacing .6s ease .08s, filter .85s cubic-bezier(0.76,0,0.24,1) .08s',
              }}
            >
              <span className="text-3xl font-bold text-gray-800 sm:text-5xl md:text-7xl lg:text-8xl">
                用作品说话
              </span>
            </span>
          </div>
        </h2>

        <div className="grid max-w-[1100px] gap-8 md:gap-10 md:grid-cols-3">
          <div>
            <div className="mb-3 font-bebas text-5xl leading-none text-accent">100+</div>
            <div className="mb-3 border-b border-gray-300/40 pb-2 text-sm tracking-[0.15em] text-gray-400 uppercase">
              学科竞赛
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .65s cubic-bezier(0.76,0,0.24,1) .3s, transform .65s cubic-bezier(0.76,0,0.24,1) .3s',
              }}
            >
              累计获省、国赛奖项{' '}
              <strong className="relative font-semibold text-gray-800">百余项</strong>
              ，涵盖算法竞赛、软件开发、创新创业等多个赛道。
            </p>
          </div>
          <div>
            <div className="mb-3 font-bebas text-5xl leading-none text-accent">N+</div>
            <div className="mb-3 border-b border-gray-300/40 pb-2 text-sm tracking-[0.15em] text-gray-400 uppercase">
              科研立项
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .65s cubic-bezier(0.76,0,0.24,1) .45s, transform .65s cubic-bezier(0.76,0,0.24,1) .45s',
              }}
            >
              团队项目多次成功获{' '}
              <strong className="relative font-semibold text-gray-800">学院立项</strong>
              ，多个课题进入校级、省级培育计划。
            </p>
          </div>
          <div>
            <div className="mb-3 font-bebas text-5xl leading-none text-accent">∞</div>
            <div className="mb-3 border-b border-gray-300/40 pb-2 text-sm tracking-[0.15em] text-gray-400 uppercase">
              项目成果
            </div>
            <p
              className="body-p font-misans-light text-[1.05rem] leading-[1.75] text-gray-500"
              style={{
                opacity: 0,
                transform: 'translateY(24px)',
                transition:
                  'opacity .65s cubic-bezier(0.76,0,0.24,1) .6s, transform .65s cubic-bezier(0.76,0,0.24,1) .6s',
              }}
            >
              持续产出优质软件作品，将学术创新与项目实践相结合，部分成果已落地服务于校园数字化生活。
            </p>
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
      `}</style>
    </section>
  )
}
