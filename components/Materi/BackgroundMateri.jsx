import AnimatedInObject from "../GlobalComponents/AnimatedInObject"

const BackgroundMateri = () => {
  return (
      <div className="relative w-full h-[1000px] -z-10">
        <div className="absolute w-full h-full top-0 right-0 overflow-hidden">
          <img className="w-full h-full object-cover object-right-top" src="../img/bgmateri.svg"/>
        </div>
        <AnimatedInObject distance={-100} className="absolute lg:left-0 md:-left-24 sm:-left-36 left-full bottom-28 overflow-hidden"><img className="w-[250px]" src="../img/bunga.svg"/></AnimatedInObject>
      </div>
  )
}

export default BackgroundMateri