import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextEndingMateri3 = () => {
  const endingMateri1Animation = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={endingMateri1Animation} className="text-white font-poppins md:text-xl text-sm">Gimana sobat GE ? itulah materi yang dapat Lee sampaikan tentang stereotipe laki-laki dalam kehidupan. Menurut Lee, laki-laki juga berhak mendapatkan hak nya tentang kesetaraan gender nih sobat. Jadi, terus dukung kesetaraan gender yang ditujukan untuk memperkuat keseimbangan hak antara laki-laki dan perempuan ya.</AnimatedInObject>
    </div>
  )
}

export default TextEndingMateri3