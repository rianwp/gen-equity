import Section from "../../GlobalComponents/Section"
import TitleAbout from "./TitleAbout"
import TextAbout from "./TextAbout"

const About = () => {
  return (
    <Section>
      <div id="tentang" className="w-full h-full flex items-center justify-center flex-col text-center">
        <TitleAbout>Gen Equity</TitleAbout>
        <TextAbout/>
      </div>
    </Section>
  )
}

export default About