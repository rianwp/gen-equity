import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleAbout = ({children}) => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins lg:text-5xl md:text-3xl text-xl font-bold neon-shadow">{children}</AnimatedInObject>
  )
}

export default TitleAbout