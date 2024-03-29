import { motion } from "framer-motion"

const MateriIstilahKesetaraanGender = ({children}) => {
  const materiAnimation ={
    visible: { opacity: 1, transition: { duration: 0.3} },
    hidden: { opacity: 0 },
  }
  return (
    <motion.div
      variants={materiAnimation}
      animate="visible"
      initial="hidden"
      className="sm:w-3/4 w-full font-poppins md:text-xl text-sm text-white mx-auto text-justify"
    >
      {children}
    </motion.div>
  )
}

export default MateriIstilahKesetaraanGender