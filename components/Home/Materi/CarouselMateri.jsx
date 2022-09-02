import { motion, useAnimation } from "framer-motion"
import CardButton from "./CardButton"
import CardMateri from "./CardMateri"
import { useEffect, useState, useRef } from "react"

const CarouselMateri = () => {
  const dataCard = [
    {
      title: "Yuk, pahami tentang kesetaraan gender",
      link: "",
      img: "../img/womenman.svg"
    },
    {
      title: "Kenali lika-liku menjadi perempuan",
      link: "",
      img: "../img/womenmatericard.svg"
    },
    {
      title: "Stereotip laki-laki dalam masyarakat",
      link: "",
      img: "../img/manmatericard.svg"
    }
  ]
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(()=>{
    if(typeof window !== "undefined"){
      setWindowWidth(window.innerWidth)
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
      })
    }
  },[])

  const controls = useAnimation()

  const handlePan = (event, info) => {
    controls.set({
      x: info.offset.x
    })
  }
  let slideLength = 0

  const handlePanEnd = (event, info) => {
    const x = info.offset.x
    if(x < -100 && slideLength < 200){
      slideLength += 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength + "%" 
      })
    } else if(x > 100 && slideLength > 0){
      slideLength -= 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength + "%" 
      })
    } else{
      controls.start({
        x: 0,
      })
    }
  }
  useEffect(() => {
    if(slideLength === 0){
      controls.start({
        translateX: 0 + "%" 
      })
    }
  },[windowWidth])
  if(windowWidth <= 500){
    return(
      <motion.div
        className="flex flex-row items-center justify-start cursor-pointer"
        animate={controls}
        
      >
        {dataCard.map((card, index) => 
          <motion.div key={index}
          onPan={handlePan}
        onPanEnd={handlePanEnd} className="w-full shrink-0 flex flex-row justify-center">
            <CardMateri>
              <motion.img src={card.img} className="absolute z-10 p-4 top-0 w-full h-full"/>
              <div className="z-20 absolute top-0 flex flex-col justify-center text-center items-center w-full h-full px-2">
                <p className="text-white font-poppins lg:text-2xl md:text-xl text-sm mt-4 font-light">
                  {card.title}
                </p>
              </div>
              <div className="z-20 absolute top-0 flex flex-row justify-center items-end w-full h-full">
                <div className="h-1/4">
                  <CardButton link={card.link}/>
                </div>
              </div>
            </CardMateri>
          </motion.div>
        )}
      </motion.div>
    )
  }
  return (
    <div className="flex flex-row items-center justify-center">
      {dataCard.map((card, index) => 
        <CardMateri key={index}>
          <motion.img src={card.img} className="absolute z-10 p-4 top-0 w-full h-full"/>
          <div className="z-20 absolute top-0 flex flex-col justify-center text-center items-center w-full h-full px-2">
            <p className="text-white font-poppins lg:text-2xl md:text-xl text-sm mt-4 font-light">
              {card.title}
            </p>
          </div>
          <div className="z-20 absolute top-0 flex flex-row justify-center items-end w-full h-full">
            <div className="h-1/4">
              <CardButton link={card.link}/>
            </div>
          </div>
        </CardMateri>
      )}
    </div>
  )
}

export default CarouselMateri