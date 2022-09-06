import CardIstilahKesetaraanGender from "./CardIstilahKesetaraanGender"

const CardContainer = () => {
  const dataCard = [
    {
      title: "Ketidakadilan Gender",
      text: ""
    },
    {
      title: "Pengarusutamaan Gender",
      text: ""
    },
    {
      title: "Kesenjangan Gender",
      text: ""
    }
  ]
  return (
    <div className="flex flex-row sm:flex-nowrap flex-wrap justify-center">
      {dataCard.map((card, index) => 
        <CardIstilahKesetaraanGender>
          {card.title}
        </CardIstilahKesetaraanGender>
      )}
    </div>
  )
}

export default CardContainer