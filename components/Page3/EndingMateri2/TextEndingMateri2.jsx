import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextEndingMateri2 = () => {
  const endingMateri1Animation = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={endingMateri1Animation} className="text-white font-poppins md:text-xl text-sm">Gimana sobat GE tentang pembahasan lika-liku terhadap perempuan yang telah kamu baca? Lee mau ngasih pesan nih buat sobat GE terutama perempuan kamu itu berharga, kamu punya pilihan untuk melakukannya jangan minder walaupun kamu perempuan. Karena perempuan juga bisa kok setara dalam hal pendidikan ataupun pekerjaan semangat ya..!!</AnimatedInObject>
    </div>
  )
}

export default TextEndingMateri2