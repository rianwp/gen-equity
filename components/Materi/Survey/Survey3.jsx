import Chart from "./Chart"

const Survey3 = () => {
  const surveyData = [
    {
      id: 1,
      label: "Ya",
      count: 4,
    },
    {
      id: 2,
      label: "Mungkin",
      count: 5,
    },
    {
      id: 3,
      label: "Tidak",
      count: 35,
    },
  ]
  return (
    <div className="sm:w-1/2 w-7/12 mx-auto">
      <Chart
        surveyData={surveyData}
        variant="pie"
        colors={["#93c47d", "#f1c232", "#e06666"]}
      />
    </div>
    
  )
}

export default Survey3