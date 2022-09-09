import { motion } from "framer-motion"

const CardMateri = ({children, variant}) => {
  const addVariant = {
    rectangle: {
      size: "lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[300px] w-[150px] h-[200px]",
    },
    square: {
      size: "lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px]",
    },
  }
  const pickedVariant = addVariant[variant]

  const cardAnimation ={
    visible: { opacity: 1, scaleY: [0.8, 1], scaleX: 1, transition: { duration: 0.3} },
    hidden: { opacity: 0, scaleX: 0.1, scaleY: 0.1 },
    hover: {scale: 1.1}
  }
  return (
    <motion.div
      variants={cardAnimation}
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className={`shrink-0 ${pickedVariant.size} bg-gradient-to-b from-[#0031FF] to-[#B900FF] p-1 rounded-2xl lg:m-8 md:m-4 m-2 relative`}
    >
      <div className={`absolute top-0 bg-black/90 w-full h-full blur-md`}></div>
      <div className="w-full h-full">
        {children}
      </div>
    </motion.div>
  )
}

export default CardMateri