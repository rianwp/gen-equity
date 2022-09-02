import Section from "../../GlobalComponents/Section"
import LebahPerkenalan from "./LebahPerkenalan"
import TextPerkenalan from "./TextPerkenalan"

const Perkenalan = () => {
  return (
    <Section>
      <div className="w-full h-3/4 flex items-center justify-center flex-col text-center">
        <TextPerkenalan/>
      </div>
      <div className="float-right h-1/4">
        <LebahPerkenalan/>
      </div>
    </Section>  
  )
}

export default Perkenalan