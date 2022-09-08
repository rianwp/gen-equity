import LebahMateri from "./LebahMateri"
import Section from "../../GlobalComponents/Section"
import TitleMateri from "./TitleMateri"
import CarouselMateri from "./CarouselMateri"

const Materi = () => {
  return (
    <Section>
      <div id="materi" className="w-full h-full flex items-center justify-center flex-col text-center">
        <div className="w-full lg:py-16 md:py-8 py-4">
          <TitleMateri/>
        </div>
        <CarouselMateri/>
        <div className="lg:mt-16 mt-8">
          <LebahMateri/>
        </div>
      </div>
    </Section>
  )
}

export default Materi