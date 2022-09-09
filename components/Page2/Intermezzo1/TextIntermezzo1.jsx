import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextIntermezzo1 = () => {
  const intermezzoAnimation = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={intermezzoAnimation} className="text-white md:indent-16 indent-8 font-poppins text-justify md:text-base sm:text-sm text-xs">Sebelum pengertian kesetaraan gender, mari pahami dulu yuk apa arti dari gender itu sendiri. Menurut World Health Organization (WHO) pengertian gender sendiri adalah sifat perempuan dan laki-laki, seperti norma atau hubungan kelompok pria dan wanita, yang dikonstruksi secara sosial. Sedangkan perbedaan fisik perempuan dan laki-laki terletak pada fisik yang sudah ada sejak lahir sampai saat ini, dimana hal tersbut memiliki sifat yang permanen. Dari pengertian gender dan perbedaan fisik tersebut bisa dismpulkan bahwa keduanya memiliki pengertian yang jelas berbeda. Jadi jangan keliru lagi ya sabat GE.</AnimatedInObject>
    </div>
  )
}

export default TextIntermezzo1