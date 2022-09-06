import { motion } from "framer-motion"

const AnimatedInObject = ({children, className, animation}) => {
  return (
    <motion.div
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedInObject