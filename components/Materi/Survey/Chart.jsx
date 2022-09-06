import { useState } from "react"
import { Bar, Pie } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

const Chart = ({variant, surveyData, colors}) => {
  const totalResponden = () => {
    let countResponden = 0
    surveyData.map(data => {
      countResponden += data.count
    })
    return countResponden
  }

  const [chartData, setChartData] = useState({
    labels: surveyData.map(data => data.label + "(" + (data.count/totalResponden()*100).toFixed(1) + "%)"),
    datasets: [{
      label: totalResponden() + " Responden",
      data: surveyData.map(data => data.count),
      backgroundColor: colors
    }]
  })
  switch(variant){
    case "bar":
      return (
        <Bar data={chartData}/>
      )
    case "pie":
      return (
        <Pie data={chartData}/>
      )
  }
}

export default Chart