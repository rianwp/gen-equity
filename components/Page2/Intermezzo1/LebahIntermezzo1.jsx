import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const LebahIntermezzo1 = () => {
  const lebahAnimation = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 }
  }
  return (
    <AnimatedInObject className="absolute z-0 -bottom-1 -right-16 w-[175px] sm:block hidden" animation={lebahAnimation}>
      <img className="object-cover object-bottom w-full" src="../img/lebahintermezzo1.svg"/>
    </AnimatedInObject>
  )
}


export default LebahIntermezzo1