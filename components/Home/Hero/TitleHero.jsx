import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleHero = ({children}) => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins lg:text-7xl md:text-5xl text-4xl font-bold">{children}</AnimatedInObject>
  )
}

export default TitleHero