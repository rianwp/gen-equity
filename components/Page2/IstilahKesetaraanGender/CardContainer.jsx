import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import CardIstilahKesetaraanGender from "./CardIstilahKesetaraanGender"
import MateriIstilahKesetaraanGender from "./MateriIstilahKesetaraanGender"

const CardContainer = () => {
  const [materiIndex, setMateriIndex] = useState(0)
  const dataCard = [
    {
      title: "Ketidakadilan Gender",
      text: <MateriIstilahKesetaraanGender key={0}>
              <div className="mb-4 font-poppins text-white sm:text-xl text-base text-center font-bold">
                Ketidakadilan Gender
              </div>
              Nah, sekarang kita akan membahas keadilan nih sobat GE. Jadi,   dalam keadilan gender disini sendiri merupakan bentuk yang adil dalam memperlakukan perempuan dan laki-laki. Jadi, mulai sekarang sobat GE jangan ada lagi yang membeda bedakan ya. Agar nantinya, tidak ada lagi ketidakadilan gender.
            </MateriIstilahKesetaraanGender>
    },
    {
      title: "Pengarusutamaan Gender",
      text: <MateriIstilahKesetaraanGender key={1}>
              <div className="mb-4 font-poppins text-white sm:text-xl text-base text-center font-bold">
                Pengarusutamaan Gender
              </div>
              Apa sobat sudah tau apa itu pengarusutamaan? dan apa hubungannya dengan kesenjangan gender ? Nah, mari Lee jelaskan ya 😉.
              <br/>
              <br/>
              Pengarusutamaan merupakan proses membentuk ide, gagasan, dan nilai yang diterima luas oleh masyarakat. Nah, masyarakat sejak dulu sudah membentuk ide gagasan tersebut. Maka dari itu, pengarusutamaan bisa menjadi salah satu yang digunakan untuk mengurangi kesenjangan  yang terjadi dalam pererempuan dan laki-laki.
            </MateriIstilahKesetaraanGender>
    },
    {
      title: "Kesenjangan Gender",
      text: <MateriIstilahKesetaraanGender key={2}>
              <div className="mb-4 font-poppins text-white sm:text-xl text-base text-center font-bold">
                Kesenjangan Gender
              </div>
              Sobat GE tau gak sih, kalo kesenjangan gender itu masih banyak terjadi dilapisan masyarakat. Kesenjangan gender sendiri tentunya membawa dampak yang negative juga bagi generasi muda. Untuk itu, kami Tim GE dan kamu sobat GE mari ajak orang sekitar kita untuk lebih peduli dengan kesenjangan ini. Agar nantinya, tercipta generasi-generasi baru yang lebih menaruh perhatian untuk menuntaskan kesenjangan yang ada sekarang ini. 
            </MateriIstilahKesetaraanGender>
    }
  ]
  return (
    <>
      <div className="flex flex-row sm:flex-nowrap flex-wrap justify-center">
        {dataCard.map((card, index) => 
          <CardIstilahKesetaraanGender onClick={()=>setMateriIndex(index)} key={index}>
            {card.title}
          </CardIstilahKesetaraanGender>
        )}
      </div>
      <AnimatePresence>
        <div className="min-h-[250px] mt-8">
          {dataCard[materiIndex].text}
        </div>
      </AnimatePresence>
    </>
  )
}

export default CardContainer