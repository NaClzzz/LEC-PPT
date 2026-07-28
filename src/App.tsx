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

function App() {
  return (
    <div className="relative">
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
