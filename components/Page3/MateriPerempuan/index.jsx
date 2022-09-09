import React from 'react'
import ListMateri from '../../GlobalComponents/ListMateri'
import MateriPerempuan1 from './MateriPerempuan1'
import MateriPerempuan2 from './MateriPerempuan2'
import MateriPerempuan3 from './MateriPerempuan3'

const MateriPerempuan = () => {
  const dataCard = [
    {
      component: <MateriPerempuan1/>,
      img: "../img/materiperempuan1.svg"
    },
    {
      component: <MateriPerempuan2/>,
      img: "../img/materiperempuan2.svg"
    },
    {
      component: <MateriPerempuan3/>,
      img: "../img/materiperempuan3.svg"
    }
  ]
  return (
    <ListMateri dataCard={dataCard}/>
  )
}

export default MateriPerempuan