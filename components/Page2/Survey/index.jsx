import React from 'react'
import Section from '../../GlobalComponents/Section'
import CarouselSurvey from './CarouselSurvey'
import TitleSurvey from './TitleSurvey'
import SubTitleSurvey from './SubTitleSurvey'

const Survey = () => {
  return (
    <Section>
      <div className="w-full h-full flex items-center justify-center flex-col text-center">
        <div>
          <TitleSurvey/>
          <div className="lg:py-8 md:py-4 py-1">
            <SubTitleSurvey>
              Sebelum kita ke materi penjelasan umum tentang gender equality.
              <br/>
              Yuk, lihat dulu survey yang dilakukan oleh tim kami.
            </SubTitleSurvey>
          </div>
        </div>
        <CarouselSurvey/>
      </div>
    </Section>
    
  )
}

export default Survey