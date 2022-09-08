import Section from "../../GlobalComponents/Section"
import TitleAbout from "./TitleAbout"
import TextAbout from "./TextAbout"

const About = () => {
  return (
    <Section>
      <div id="tentang" className="w-full h-full flex items-center justify-center flex-col text-center">
        <div className="w-full md:py-8 py-4">
          <TitleAbout>Gen Equity</TitleAbout>
        </div>
        <div className="w-full md:py-8 py-4">
          <TextAbout/>
        </div>
      </div>
    </Section>
  )
}

export default About