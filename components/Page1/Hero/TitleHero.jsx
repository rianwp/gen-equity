import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleHero = () => {
  const titleAnimation = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins lg:text-7xl md:text-5xl text-4xl font-bold neon-shadow">GenEquity</AnimatedInObject>
  )
}

export default TitleHero