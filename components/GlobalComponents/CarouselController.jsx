import { motion } from "framer-motion"

const CarouselController = ({variant, onClick, bgColor}) => {
  const addVariant = {
    left:{
      className: "ml-2",
      img: "../img/chevron-left.svg"
    },
    right:{
      className:"mr-2",
      img: "../img/chevron-right.svg"
    }
  }
  const pickedVariant = addVariant[variant]

  const buttonAnimation ={
    visible: { opacity: 1, transition: { duration: 0.3} },
    hidden: { opacity: 0 },
    hover: {scale: 1.2}
  }

  return (
    <motion.div
      variants={buttonAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      onClick={onClick} 
      whileHover="hover" 
      className={`${bgColor} rounded-full p-3 shadow-2xl z-30 cursor-pointer ${pickedVariant.className}`}
    >
      <img src={pickedVariant.img}/>
    </motion.div>
  )
}

export default CarouselController