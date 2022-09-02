import Section from "../../GlobalComponents/Section"
import SubTitleHero from "./SubTitleHero"
import TitleHero from "./TitleHero"

const Hero = () => {
  return (
    <Section>
      <div className="absolute top-0 left-0 z-20 w-full h-full flex items-center justify-center flex-col text-center">
        <TitleHero>GenEquity</TitleHero>
        <SubTitleHero variant="top">Equality is the beginning of justice</SubTitleHero>
        <SubTitleHero variant="bot">Mari ketahui lebih banyak tentang gender equality</SubTitleHero>
      </div>
      <div className="absolute top-0 left-0 h-3/4">

      </div>
    </Section>
  )
}

export default Hero