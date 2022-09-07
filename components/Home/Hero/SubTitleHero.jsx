import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const SubTitleHero = ({children, variant}) => {
  const addVariant = {
    top:"lg:mt-8",
    bot:"lg:mt-16"
  }
  const subTitleAnimation ={
    visible: { opacity: 1,  transition: { duration: 0.5, delay: 0.3} },
    hidden: { opacity: 0}
  }
  const pickedVariant = addVariant[variant]
  return (
    <AnimatedInObject animation={subTitleAnimation} className={`text-white font-poppins md:text-xl text-sm ${pickedVariant} mt-4 font-light`}>{children}</AnimatedInObject>
  )
}

export default SubTitleHero