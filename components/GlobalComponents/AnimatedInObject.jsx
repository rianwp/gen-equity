import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const AnimatedInObject = ({children, className, distance}) => {
  const objectVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, x: distance }
  }
  const control = useAnimation()
  const [ref, inView] = useInView({})

  useEffect(() => {
    if (inView) {
      control.start("visible")
    } else {
      control.start("hidden")
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      variants={objectVariant}
      initial="hidden"
      animate={control}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedInObject