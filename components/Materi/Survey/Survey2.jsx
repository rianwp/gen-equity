import Chart from "./Chart"

const Survey2 = () => {
  const surveyData = [
    {
      id: 1,
      label: 1,
      count: 1,
    },
    {
      id: 2,
      label: 2,
      count: 1,
    },
    {
      id: 3,
      label: 3,
      count: 0,
    },
    {
      id: 4,
      label: 4,
      count: 0,
    },
    {
      id: 5,
      label: 5,
      count: 5,
    },
    {
      id: 6,
      label: 6,
      count: 2,
    },
    {
      id: 7,
      label: 7,
      count: 9,
    },
    {
      id: 8,
      label: 8,
      count: 12,
    },
    {
      id: 9,
      label: 9,
      count: 12,
    },
    {
      id: 10,
      label: 10,
      count: 2,
    },

  ]
  return (
    <Chart
      surveyData={surveyData}
      variant="bar"
      colors={["#700099"]}
    />
  )
}

export default Survey2