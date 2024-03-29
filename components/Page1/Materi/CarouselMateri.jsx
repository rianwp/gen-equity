import { motion, useAnimation } from "framer-motion"
import CardButton from "../../GlobalComponents/CardButton"
import CardMateri from "../../GlobalComponents/CardMateri"
import { useRef } from "react"
import CarouselController from "../../GlobalComponents/CarouselController"

const CarouselMateri = () => {
  const dataCard = [
    {
      title: "Yuk, pahami tentang kesetaraan gender",
      link: "/kesetaraangender",
      img: "../img/womenman.svg"
    },
    {
      title: "Kenali lika-liku menjadi perempuan",
      link: "/perempuan",
      img: "../img/womenmatericard.svg" //source: https://www.pngegg.com/id/png-dippg/download
    },
    {
      title: "Stereotip laki-laki dalam masyarakat",
      link: "/lakilaki",
      img: "../img/manmatericard.svg"
    }
  ]
  const controls = useAnimation()

  const handleDrag = (event, info) => {
    controls.set({
      x: info.offset.x
    })
  }
  const slideLength = useRef(0)

  const handleDragEnd = (event, info) => {
    const x = info.offset.x
    if(x < -50 && slideLength.current < 200){
      slideLength.current += 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength.current + "%" 
      })
    } else if(x > 50 && slideLength.current > 0){
      slideLength.current -= 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength.current + "%" 
      })
    } else{
      controls.start({
        x: 0,
      })
    }
  }
  const clickSlideRight = () => {
    if(slideLength.current < 200){
      slideLength.current += 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength.current + "%" 
      })
    } else{
      controls.start({
        x: [0, -25, 0],
        transition: {duration: 0.3}
      })
    }
  }
  const clickSlideLeft = () => {
    if(slideLength.current > 0){
      slideLength.current -= 100
      controls.start({
        x: 0,
        translateX: "-" + slideLength.current + "%" 
      })
    } else{
      controls.start({
        x: [0, 25, 0],
        transition: {duration: 0.3}
      })
    }
  }
  return (
    <>
      <div className="relative w-full sm:hidden block">
        <div className="absolute h-full w-full flex flex-row justify-between items-center">          
          <CarouselController onClick={clickSlideLeft} variant="left" bgColor="bg-blue-900"/>
          <CarouselController onClick={clickSlideRight} variant="right" bgColor="bg-blue-900"/>
        </div>
        <motion.div
          className="flex flex-row items-center justify-start"
          whileTap={{cursor: "grabbing"}}
          whileHover={{cursor: "grab"}}
          animate={controls}
        >
          {dataCard.map((card, index) => 
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{left: 0, right: 0}}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              dragElastic={0.1}
              className="relative w-full shrink-0 flex flex-row justify-center"
            >
              <CardMateri variant="rectangle">
                <img src={card.img} className="absolute z-10 p-4 top-0 w-full h-full"/>
                <div className="absolute top-0 flex flex-col justify-center text-center items-center w-full h-full px-2">
                  <p className="text-white font-poppins md:text-xl text-sm mt-4 font-light z-20">
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
      </div>
      <div className="flex-row items-center justify-center sm:flex hidden">
        {dataCard.map((card, index) => 
          <CardMateri key={index} variant="rectangle">
            <img src={card.img} className="absolute z-10 p-4 top-0 w-full h-full"/>
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
    </>
  )
}

export default CarouselMateri