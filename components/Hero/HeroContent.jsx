import AnimatedInObject from "../GlobalComponents/AnimatedInObject"

const HeroContent = () => {
  return (
    <div className="relative lg:w-5/12 md:w-7/12 sm:w-8/12 w-full float-right h-[712px] bg-cover bg-top-right flex flex-col justify-center z-10">
      <AnimatedInObject distance={200} className="font-lato text-5xl text-white font-bold text-center">Gen Equity</AnimatedInObject>
      <AnimatedInObject distance={300} className="font-poppins text-xl text-white font-bold text-center mt-2">Equality is the beginning of justice</AnimatedInObject>
      <AnimatedInObject distance={400} className="font-poppins text-sm text-white text-center mt-4">Mari ketahui lebih banyak tentang gender equality</AnimatedInObject>
    </div>
  )
}

export default HeroContent