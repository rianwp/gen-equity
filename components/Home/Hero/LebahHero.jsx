import { motion } from "framer-motion"

const LebahHero = () => {
  return (
    <motion.div
      style={{transformOrigin: "top"}}
      animate={{
        
        rotate: [15,-15,15],
        transition: {
          duration: 2,
          repeat: Infinity,
        }
      }}
      className="relative lg:w-[200px] md:w-[150px] w-[100px] h-full"
    >
      <div className="absolute bottom-0 lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[150px] w-[100px] h-[100px] bg-[#FCFF68] rounded-full md:blur-3xl blur-2xl opacity-60"></div>
      <img className="absolute bottom-0 object-cover object-bottom" src="../img/lebahhero.svg"/>
    </motion.div>
  )
}

export default LebahHero