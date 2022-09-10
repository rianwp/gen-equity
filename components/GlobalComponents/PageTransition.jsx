import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

const PageTransition = ({children}) => {
  const router = useRouter()
  const pageAnimation = {
    in: { opacity: 1,  transition: { duration: 0.5 } },
    out: { opacity: 0,  transition: { duration: 0.5 } }
  }
  return (
    <AnimatePresence
      mode="popLayout"
    >
      <motion.div
        key={router.asPath}
        variants={pageAnimation}
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition