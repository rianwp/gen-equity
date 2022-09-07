import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleIstilahKesetaraanGender = () => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5} },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="font-poppins lg:text-2xl md:text-xl text-sm text-white">
      Istilah yang sering digunakan dalam kesetaraan gender
    </AnimatedInObject>
  )
}

export default TitleIstilahKesetaraanGender