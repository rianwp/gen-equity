import Container from "../../GlobalComponents/Container"
import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextAbout = () => {
  const aboutAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <Container className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={aboutAnimation} className="text-white font-poppins md:text-xl text-sm">Platform edukasi GenEquity dibuat dengan tujuan mengedukasi para generasi muda agar mengetahui tentang pentingnya persamaan gender. Dikarenakan hal tersebut  masih banyak terjadi diskriminasi berdasarkan gender yang  terjadi pada aspek kehidupan. Kami mempunyai harapan dengan adanya GenEquity ini, dapat membuka wawasan masyarakat Indonesia agar lebih menaruh perhatiannya terhadap kesetaraan gender.</AnimatedInObject>
    </Container>
  )
}

export default TextAbout