import { motion } from "framer-motion"

const CloseButton = ({ onClick }) => {
  const buttonAnimation ={
    initial: {scale: 1, opacity: 0.6},
    hover: {scale: 1.2, opacity: 1, cursor: "pointer", transition: { duration: 0.3}},
    tap: {scale: 0.9, opacity: 1, cursor: "pointer", transition: { duration: 0.3}}
  }
  return (
    <motion.div 
      variants={buttonAnimation}
      role="button" 
      onClick={onClick} 
      className="float-right m-2"
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <img className="h-5 w-5" src="../img/close.svg"/>
    </motion.div>
  )
}

export default CloseButton