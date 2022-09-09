import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextEndingMateri1 = () => {
  const endingMateri1Animation = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={endingMateri1Animation} className="text-white font-poppins md:text-xl text-sm">Kesetaraan gender belum sepenuhnya tersebar dengan luas, bahkan hanya dengan pengertiannyapun masih banyak yang keliru. Bila hal tersebut dibiarkan berlarut-larut, dapat menyebabkan deskriminatif antara laki-laki dan perempuan. Tak jarang juga banyak yang keliru atau tidak setuju dengan kesetaraan gender itu sendiri. Nah, sudah saatnya kita bisa menggalakkan kesetaraan gender ini agar tidak banyak yang salah paham tentang kesetaraan gender itu sendiri.</AnimatedInObject>
    </div>
  )
}

export default TextEndingMateri1