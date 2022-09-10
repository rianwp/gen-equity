import Chart from "../../GlobalComponents/Chart"

const MateriLakiLaki2 = () => {
  const surveyData = [
    {
      id: 1,
      label: 1,
      count: 8,
    },
    {
      id: 2,
      label: 2,
      count: 2,
    },
    {
      id: 3,
      label: 3,
      count: 4,
    },
    {
      id: 4,
      label: 4,
      count: 2,
    },
    {
      id: 5,
      label: 5,
      count: 6,
    },
    {
      id: 6,
      label: 6,
      count: 6,
    },
    {
      id: 7,
      label: 7,
      count: 10,
    },
    {
      id: 8,
      label: 8,
      count: 6,
    },
    {
      id: 9,
      label: 9,
      count: 0,
    },
    {
      id: 10,
      label: 10,
      count: 0,
    },
  ]
  return (
    <>
    <div className="mb-8 text-white font-poppins md:text-xl text-sm font-bold">Kepala Keluarga Menggantikan Peran Sebagai Ibu Rumah Tangga</div>
    <div className="sm:w-3/4 w-full mb-8 bg-white rounded-md mx-auto p-2">
      <div className="text-black font-poppins md:text-sm text-xs text-center">
        Seberapa setujukah anda jika peran ibu rumah tangga digantikan oleh seorang kepala keluarga ?
      </div>
      <div className="w-full">
        <Chart
          surveyData={surveyData}
          variant="bar"
          colors={["#700099"]}
        />
      </div>
    </div>
    <div className="text-justify text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs mb-8">
      Dalam survey tersebut masih banyak responden yang kurang setuju nih sobat GE, kalau menurut kamu gimana? Nah kalau menurut Lee jika ada seorang kepala keluarga menggantikan peran sebagai ibu rumah tangga itu merupakan hal yang mulia nih, tetapi lingkungan sekitar menganggap hal tersebut kurang biasa dikarenakan biasanya laki-laki bekerja diluar rumah jadi jarang yang memegang urusan rumah tangga nih.
    </div>
    <div className="text-justify text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs">
      Padahal, jika di lihat lagi. Sebenarnya laki-laki itu yang melakukan itu semua, dikarenakan laki-laki berhak memenuhi kebutuhan rumah tangganya dari segi papan sandang dan pangan. Oleh karena itu sobat, pekerjaan rumah itu bukan sepenuhnya tugas isteri ya. Tapi juga suami. Jadi, jika ada seorang laki-laki Melaku pekerjaan rumah. Itu bukanlah hal yang tabu.
    </div>
    </>
  )
}

export default MateriLakiLaki2