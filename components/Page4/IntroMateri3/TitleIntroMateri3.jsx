import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleIntroMateri3 = () => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins md:text-3xl text-xl font-bold lg:w-1/2 md:w-3/4 w-full neon-shadow">Stereotip Laki-Laki Dalam Masyarakat</AnimatedInObject>
  )
}

export default TitleIntroMateri3