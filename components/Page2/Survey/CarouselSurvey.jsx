import Survey1 from "./Survey1"
import CarouselController from "../../GlobalComponents/CarouselController"
import { motion, useAnimation } from "framer-motion"
import Survey2 from "./Survey2"
import Survey3 from "./Survey3"
import { useRef } from "react"

const CarouselSurvey = () => {
  const dataCarousel = [
    {
      title:"Seberapa tahu responden mengenai Kesetaraan Gender",
      component: <Survey1/>
    },
    {
      title:"Ketertarikan responden pada issue Kesetaraan Gender",
      component: <Survey2/>
    },
    {
      title:"Apakah perbedaan fisik sama dengan pengertian gender?",
      component: <Survey3/>
    },
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

  return(
    <div className="relative lg:w-1/2 md:w-3/4 w-full bg-white rounded-xl overflow-hidden my-4">
      <div className="absolute h-full w-full flex flex-row justify-between items-center">          
        <CarouselController onClick={clickSlideLeft} variant="left" bgColor="bg-[#160040]/50 lg:hover:bg-[#160040]"/>
        <CarouselController onClick={clickSlideRight} variant="right" bgColor="bg-[#160040]/50 lg:hover:bg-[#160040]"/>
      </div>
      <motion.div
        className="relative flex flex-row items-center justify-start"
        whileTap={{cursor: "grabbing"}}
        whileHover={{cursor: "grab"}}
        animate={controls}
      >
        {dataCarousel.map((carousel, index) => 
          <motion.div 
            key={index}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.1}
            className="w-full shrink-0 flex flex-row justify-center"
          >
            <div className="w-full p-1">
              <div className="text-black font-poppins font-normal lg:text-base md:text-sm text-xs">{carousel.title}</div>
              {carousel.component}
            </div>
          </motion.div>
        )}
      </motion.div>
     
    </div>
  )
}

export default CarouselSurvey