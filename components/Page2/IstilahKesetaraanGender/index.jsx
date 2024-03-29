import Section from "../../GlobalComponents/Section"
import CardContainer from "./CardContainer"
import TitleIstilahKesetaraanGender from "./TitleIstilahKesetaraanGender"

const IstilahKesetaraanGender = () => {
  return (
    <Section>
      <div className="w-full h-full flex items-center justify-center flex-col text-center">
        <TitleIstilahKesetaraanGender/>
        <CardContainer/>
      </div>
    </Section>
  )
}

export default IstilahKesetaraanGender