import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const LebahMateri = () => {
  const lebahAnimation = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: 100 }
  }
  return (
    <AnimatedInObject className="relative lg:w-[300px] md:w-[250px] w-[200px]" animation={lebahAnimation}>
      <img src="../img/lebahmateri.svg"/>
    </AnimatedInObject>
  )
}


export default LebahMateri