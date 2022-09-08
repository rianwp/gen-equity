import Section from "../../GlobalComponents/Section"
import LebahPerkenalan from "./LebahPerkenalan"
import TextPerkenalan from "./TextPerkenalan"

const Perkenalan = () => {
  return (
    <Section>
      <div className="w-full h-full flex items-center justify-center flex-col text-center">
        <TextPerkenalan/>
        <div className="sm:self-end mt-8">
          <LebahPerkenalan/>
        </div>
      </div>
    </Section>  
  )
}

export default Perkenalan