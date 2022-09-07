import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const CardPengertianKesetaraanGender = () => {
  const cardAnimation ={
    visible: { opacity: 1,  transition: { duration: 0.5, delay: 0.3} },
    hidden: { opacity: 0}
  }
  return (
    <AnimatedInObject animation={cardAnimation} className="lg:w-1/2 md:w-3/4 w-full">
      <div className="text-justify z-10 mb-2 text-white font-poppins md:text-xl text-sm font-bold">Lalu apa itu kesetaraan gender Lee?</div>
      <div className="relative bg-[#540062] rounded-xl p-4 lg:min-h-[500px] min-h-[400px]">
        <div className="relative text-justify z-10 text-white indent-16 font-poppins md:text-base sm:text-sm text-xs">Baiklah Lee akan membantu sobat GE, atas pertanyaan tentang kesetaraan gender. Menurut WHO pengertian kesetaraan gender adalah kesamaan kondisi bagi laki-laki atau perempuan guna memperoleh kesempatan serta hak-haknya sebagai manusia, agar mampu berpartisipasi dalam kegiatan politik, sosial budaya, pendidikan, serta kesamaan dalam menikmati hasil pembangunan. Nah, didalam gender equailty ini ada beberapa istilah yang sering digunakan  sobat Lee. Apa saja yuk cari tau.</div>
        <img className="absolute z-0 -bottom-1 -left-16 object-cover object-bottom sm:w-[200px] w-[150px]" src="../img/lebahpengertiankesetaraangender.svg"/>
      </div>
    </AnimatedInObject>
    
  )
}

export default CardPengertianKesetaraanGender