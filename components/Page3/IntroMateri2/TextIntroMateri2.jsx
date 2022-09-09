import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextIntroMateri2 = () => {
  const introMateri2Animation = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 md:w-3/4 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={introMateri2Animation} className="text-white font-poppins md:text-base sm:text-sm text-xs text-justify">
        Perempuan adalah sosok yang dikenal lembut dan penyanyang, tetapi mereka seringkali dianggap sebelah mata oleh beberapa orang yang menilai perempuan itu tidak bisa apa-apa selain mengurus rumah tangga. Penilaian semacam itu mengakibatkan terjadi deskriminasi terhadap perempuan. Padahal, sudah banyak tokoh yang memperjuangkan hak-hak dari perempuan. Akan tetapi tetap saja, seakan-akan deskriminasi yang dialami oleh para perempuan itu justru masih dianggap wajar dilingkup masyarakat. Hal tersebut seharusnya dicegah agar tidak berkembang dengan luas, ketidaksetaraan gender yang seharusnya perempuan juga berhak untuk mendapatkannya. 
        <br/>
        <br/>
        Sebelum itu mari kita bahas tentang apa aja sih sobat GE lika-liku perempuan yang masih melekat sampai sekarang.
      </AnimatedInObject>
    </div>
  )
}

export default TextIntroMateri2