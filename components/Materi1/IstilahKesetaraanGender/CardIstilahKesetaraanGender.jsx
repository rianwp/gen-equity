import { motion } from "framer-motion"

const CardIstilahKesetaraanGender = ({children}) => {
  const cardAnimation ={
    visible: { opacity: 1, scaleX: [0.8, 1], scaleY: 1, transition: { duration: 0.3} },
    hidden: { opacity: 0, scaleY: 0.1, scaleX: 0.1 },
    hover: {scale: 1.1}
  }
  return (
    <motion.div
      variants={cardAnimation}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className="bg-gradient-to-b from-[#0031FF] to-[#B900FF] p-1 rounded-2xl lg:m-8 md:m-4 m-2 relative"
    >
      <div className="z-0 absolute top-0 bg-black/90 w-full h-full blur-md"></div>
      <div className="w-full h-full px-4 py-2">
        {children}
      </div>
    </motion.div>
  )
}

export default CardIstilahKesetaraanGender