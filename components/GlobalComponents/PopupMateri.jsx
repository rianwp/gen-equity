import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const PopupMateri = ({ children, show }) => {
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(show)
  }, [show])
  useEffect(() => {
    if(isShow){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'visible'
    }
  }, [isShow])
  const bgAnimation = {
    in: { opacity: 1,  transition: { duration: 0.3 } },
    out: { opacity: 0,  transition: { duration: 0.3 } }
  }
  const cardAnimation = {
    initial: { opacity: 0, y: -100 },
    in: { opacity: 1, y: 0,  transition: { duration: 0.3, delay: 0.3} },
    out: { opacity: 0, y: 100, transition: { duration: 0.3 } }
  }
  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          key="popup"
          variants={bgAnimation}
          initial="out"
          animate="in"
          exit="out"
          className="fixed top-0 left-0 z-50 w-full h-screen bg-black/50 flex flex-row items-center justify-center"
        >
          <motion.div 
            variants={cardAnimation}
            initial="initial"
            animate="in"
            exit="out"
            className="relative lg:w-1/2 md:w-3/4 w-full max-h-[calc(100%-2rem)] bg-[#540062] rounded-xl overflow-auto m-4"
          >
            <div className="relative z-10 w-full sm:p-8 p-4 min-h-[500px] max-h-[calc(100%-2rem)]">
              <div className="relative z-10">
                {children}
              </div>
              <img className="absolute bottom-0 left-0 object-cover object-bottom" src="../img/bungakiri.svg"/>
              <img className="absolute bottom-0 right-0 object-cover object-bottom" src="../img/bungakanan.svg"/>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 


export default PopupMateri