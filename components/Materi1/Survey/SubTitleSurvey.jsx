import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const SubTitleHero = ({children}) => {
  const subTitleAnimation ={
    visible: { opacity: 1,  transition: { duration: 0.5, delay: 0.3} },
    hidden: { opacity: 0}
  }
  return (
    <AnimatedInObject animation={subTitleAnimation} className="text-white font-poppins md:text-xl text-sm mt-4 font-light">{children}</AnimatedInObject>
  )
}

export default SubTitleHero