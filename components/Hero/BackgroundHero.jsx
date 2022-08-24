import AnimatedInObject from "../GlobalComponents/AnimatedInObject"

const BackgroundHero = () => {
  return (
      <div className="relative w-full h-[712px] z-0">
        <div className="absolute h-full top-0 right-0 overflow-hidden"><img className="w-full h-full object-cover object-left-top" src="../img/bgcontent.svg"/></div>
        <AnimatedInObject distance={-200} className="absolute left-0 top-0 h-full overflow-hidden"><img className="w full h-full object-cover object-left-top" src="../img/pohon.svg"/></AnimatedInObject>
        <AnimatedInObject distance={-100} className="absolute -left-16 -bottom-10 lg:rounded-b-[100px] rounded-b-[75px] overflow-hidden"><img className="lg:w-[350px] w-[250px]" src="../img/batubunga.svg"/></AnimatedInObject>
      </div>
  )
}

export default BackgroundHero