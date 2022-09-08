import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"
import LebahIntermezzo1 from "./LebahIntermezzo1"

const CardIntermezzo1 = () => {
  const cardAnimation ={
    visible: { opacity: 1,  transition: { duration: 0.5, delay: 0.3} },
    hidden: { opacity: 0}
  }
  return (
    <AnimatedInObject animation={cardAnimation} className="relative lg:w-1/2 md:w-3/4 w-full bg-[#540062] rounded-xl p-4 sm:min-h-[300px] h-[250px] card-shadow">
      <div className="relative text-justify z-10 text-white indent-16 font-poppins md:text-base sm:text-sm text-xs">Hallo sobat GE, ketemu lagi nih sama Lee.  Apakah kalian sudah membaca survey diatas? Nah, kalau sudah. Berdasarkan data tersebut,  Lee masih menemukan ada yang kurang paham nih perihal kesetaraan gender. Baiklah, ikuti perjalananku yuk. Untuk membahas lebih dalam tentang kesetaraan gender.</div>
      <img className="absolute bottom-0 left-0 object-cover object-bottom" src="../img/bungaintermezzo1.svg"/>
      <LebahIntermezzo1/>
    </AnimatedInObject>
  )
}

export default CardIntermezzo1