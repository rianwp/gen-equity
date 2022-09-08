import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleSurvey = () => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins md:text-4xl text-xl font-bold">Yuk, Pahami tentang Kesetaraan Gender</AnimatedInObject>
  )
}

export default TitleSurvey