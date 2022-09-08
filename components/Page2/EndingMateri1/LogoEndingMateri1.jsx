import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const LogoEndingMateri1 = () => {
  const logoAnimation = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  }
  return (
    <AnimatedInObject className="relative w-[150px]" animation={logoAnimation}>
      <img src="../img/logolebah.svg"/>
    </AnimatedInObject>
  )
}


export default LogoEndingMateri1