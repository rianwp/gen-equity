import { motion } from "framer-motion"

const MateriIstilahKesetaraanGender = ({children, key}) => {
  const materiAnimation ={
    visible: { opacity: 1, transition: { duration: 0.3} },
    hidden: { opacity: 0 },
  }
  return (
    <motion.div
      variants={materiAnimation}
      key={key}
      animate="visible"
      initial="hidden"
      className="sm:w-3/4 w-full font-poppins sm:text-base text-xs text-white mx-auto text-justify"
    >
      {children}
    </motion.div>
  )
}

export default MateriIstilahKesetaraanGender