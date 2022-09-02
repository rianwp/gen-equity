import CardMateri from "./CardMateri"
import Section from "../../GlobalComponents/Section"
import TitleMateri from "./TitleMateri"
import CarouselMateri from "./CarouselMateri"

const Materi = () => {
  return (
    <Section>
      <div className="w-full h-full flex items-center justify-center flex-col text-center">
        <div className="w-full lg:py-16 md:py-8 py-4">
          <TitleMateri>Pilih Materi</TitleMateri>
        </div>
        <CarouselMateri/>
      </div>
    </Section>
  )
}

export default Materi