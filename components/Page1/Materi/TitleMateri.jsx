import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TitleMateri = () => {
  const titleAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <AnimatedInObject animation={titleAnimation} className="text-white font-poppins md:text-4xl text-xl font-bold neon-shadow">Pilih Materi</AnimatedInObject>
  )
}

export default TitleMateri