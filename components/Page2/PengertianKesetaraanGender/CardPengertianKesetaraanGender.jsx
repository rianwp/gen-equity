import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"
import LebahPengertianKesetaraanGender from "./LebahPengertianKesetaraanGender"

const CardPengertianKesetaraanGender = () => {
  const cardAnimation ={
    visible: { opacity: 1,  transition: { duration: 0.5, delay: 0.3} },
    hidden: { opacity: 0}
  }
  return (
    <AnimatedInObject animation={cardAnimation} className="lg:w-1/2 md:w-3/4 w-full">
      <div className="text-justify z-10 mb-2 text-white font-poppins md:text-xl text-sm font-bold neon-shadow">Lalu apa itu kesetaraan gender Lee?</div>
      <div className="relative bg-[#540062] rounded-xl lg:p-8 p-4 lg:min-h-[500px] min-h-[400px] card-shadow">
        <div className="relative text-justify z-10 text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs">Baiklah Lee akan membantu sobat GE, atas pertanyaan tentang kesetaraan gender. Menurut WHO pengertian kesetaraan gender adalah kesamaan kondisi bagi laki-laki atau perempuan guna memperoleh kesempatan serta hak-haknya sebagai manusia, agar mampu berpartisipasi dalam kegiatan politik, sosial budaya, pendidikan, serta kesamaan dalam menikmati hasil pembangunan. Nah, didalam gender equailty ini ada beberapa istilah yang sering digunakan  sobat Lee. Apa saja yuk cari tau.</div>
        <LebahPengertianKesetaraanGender/>
      </div>
    </AnimatedInObject>
    
  )
}

export default CardPengertianKesetaraanGender