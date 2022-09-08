import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const LebahPengertianKesetaraanGender = () => {
  const lebahAnimation = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: -100 }
  }
  return (
    <AnimatedInObject className="absolute z-0 -bottom-1 -left-16 sm:w-[200px] w-[150px]" animation={lebahAnimation}>
      <img className="w-full object-cover object-bottom " src="../img/lebahpengertiankesetaraangender.svg"/>
    </AnimatedInObject>
  )
}


export default LebahPengertianKesetaraanGender