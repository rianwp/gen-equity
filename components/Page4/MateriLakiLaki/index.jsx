import ListMateri from '../../GlobalComponents/ListMateri'
import MateriLakiLaki1 from './MateriLakiLaki1'
import MateriLakiLaki2 from './MateriLakiLaki2'

const MateriLakiLaki = () => {
  const dataCard = [
    {
      component: <MateriLakiLaki1/>,
      img: "../img/materilakilaki1.svg"
    },
    {
      component: <MateriLakiLaki2/>,
      img: "../img/materilakilaki2.svg"
    }
  ]
  return (
    <ListMateri dataCard={dataCard}/>
  )
}

export default MateriLakiLaki