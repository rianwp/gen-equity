import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const LebahPerkenalan = () => {
  const lebahAnimation = {
    visible: { opacity: 1, x:0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x:100 }
  }
  return (
    <AnimatedInObject className="relative lg:w-[200px] md:w-[150px] w-[150px]" animation={lebahAnimation}>
      <div className="absolute top-0 left-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-white rounded-full blur-3xl opacity-60"></div>
      <img className="absolute top-0" src="../img/lebahperkenalan.svg"/>
    </AnimatedInObject>
  )
}

export default LebahPerkenalan