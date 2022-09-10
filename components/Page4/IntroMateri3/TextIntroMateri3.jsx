import AnimatedInObject from "../../GlobalComponents/AnimatedInObject"

const TextIntroMateri3 = () => {
  const introMateri3Animation = {
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
    hidden: { opacity: 0 }
  }
  return (
    <div className="lg:w-1/2 md:w-3/4 w-full lg:mt-8 mt-4">
      <AnimatedInObject animation={introMateri3Animation}>
        <div className="text-justify text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs mb-8">
          Haloo sobat GE, gimana kabarnya ? Lee punya materi  tentang stereotipe tentang laki-laki nih. Pasti sobat GE kebanyakan mendengar tentang perempuan dalam kesetaraan gender bukan? Nah, sebenarnya sobat GE Dalam kesetaraan gender itu harus ada keseimbangan didalamnya.  Jadi Sobat, jangan Salah ya jika yang berhak mendapatkan keadilan itu bukan hanya perempuan, tapi juga laki-laki.
        </div>
        <div className="text-justify text-white md:indent-16 indent-8 font-poppins md:text-base sm:text-sm text-xs">
          Gimana sobat GE pengen tahu bukan? Bagaimana stereotipe yang Ada dalam masyarakat tentang laki-laki? Oke, mari simak materi berikut ini.
        </div>
      </AnimatedInObject>
    </div>
  )
}

export default TextIntroMateri3