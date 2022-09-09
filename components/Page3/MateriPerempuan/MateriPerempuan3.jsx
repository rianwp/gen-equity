import Chart from "../../GlobalComponents/Chart"

const MateriPerempuan3 = () => {
  const surveyData = [
    {
      id: 1,
      label: "Ya",
      count: 13,
    },
    {
      id: 3,
      label: "Tidak",
      count: 31,
    },
  ]
  return (
    <>
    <div className="mb-8 text-white font-poppins md:text-xl text-sm font-bold">Perempuan tidak bisa memimpin?</div>
    <div className="sm:w-3/4 w-full mb-8 bg-white rounded-md mx-auto p-2">
      <div className="text-black font-poppins md:text-sm text-xs text-center">
        Maukah anda di pimpin oleh seorang perempuan didalam bidang pekerjaan ?
      </div>
      <div className="sm:w-1/2 w-7/12 mx-auto">
        <Chart
          surveyData={surveyData}
          variant="pie"
          colors={["#93c47d", "#e06666"]}
        />
      </div>
    </div>
    <div className="text-justify text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs">
      Berdasarkan survey dari team Lee masih banyak yang tidak setuju nih kalau perempuan menjadi pemimpin kira-kira apa ya alasannya? Apakah karena dari perempuan memiliki sifaat yang tidak tega dalam memilih sesutau atau lebih mementingkan hati daripada logika? Sepertinya itu tanggapan yang kurang tepat, memang perempuan mempunyai hati yang lembut dan berfikir berdasarkan hati tetapi banyak juga perempuan diluar sana yang bisa menjadi pemimpin entah itu dari pekerjaan apapun, karena sebenarnya perempuan juga berhak untuk menjadi pemimpin dalam suatu bidang pekerjaan. Perempuan juga bisa mengambil keputusan yang tepat dan jika kita mendukungnya untuk menjadi pemimpin dia akan bekerja sekeras mungkin untuk menjalankan amanah yang telah dia pegang dan didapatkan. Nah sobat GE dukung yuk perempuan agar dia tidak insecure lagi dalam mengambil pilihan dalam menjadi pemimpin yang bertanggung jawab.
    </div>
    </>
  )
}

export default MateriPerempuan3