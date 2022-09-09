import Section from "./Section"
import CardMateri from "./CardMateri"
import CardButton from "./CardButton"
import PopupMateri from "./PopupMateri"
import CloseButton from "./CloseButton"
import { useState } from "react"

const ListMateri = ({dataCard}) => {
  const [isShow, setIsShow] = useState(false)
  const [materiIndex, setMateriIndex] = useState(0)
  return (
    <>
      {dataCard.map((card, index) => 
        <Section key={index}>
          <div className="w-full h-full flex items-center justify-center flex-col">
            <CardMateri key={index} variant="square">
              <div className="flex flex-col justify-center items-center h-full">
                <img src={card.img} className="relative p-4 w-full z-10 h-1/2"/>
                <div className="flex flex-row justify-center items-end w-full relative z-10">
                  <div className="h-1/4">
                    <CardButton onClick={() => {
                      setIsShow(true)
                      setMateriIndex(index)
                    }}/>
                  </div>
                </div>
              </div>
            </CardMateri>
          </div>
        </Section>
      )}
      <PopupMateri show={isShow}>
        <CloseButton onClick={() => setIsShow(false)}/>
        {dataCard[materiIndex].component}
      </PopupMateri>
    </>
  )
}

export default ListMateri