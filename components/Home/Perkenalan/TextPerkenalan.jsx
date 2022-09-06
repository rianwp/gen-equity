import Container from "../../GlobalComponents/Container"
import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextPerkenalan = () => {
  const perkenalanAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <Container className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={perkenalanAnimation} className="text-white font-poppins lg:text-2xl md:text-xl text-sm">Halo sobat GE, selamat datang di web GenEquity. Tenang jangan takut, aku tidak menyengat kamu kok, hehe. Kenalin dulu namaku Lee, si lebah cerdas yang akan menemani kamu dalam menjelaskan banyak materi dan survey tentang Gender Equality nih. Yuk ikutin perjalananku untuk lebih tau tentang Gender Equality 😁.</AnimatedInObject>
    </Container>
  )
}

export default TextPerkenalan