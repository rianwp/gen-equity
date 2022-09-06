import Head from "next/head"
import Container from "../components/GlobalComponents/Container"
import Intermezzo1 from "../components/Materi1/Intermezzo1"
import IstilahKesetaraanGender from "../components/Materi1/IstilahKesetaraanGender"
import PengertianKesetaraanGender from "../components/Materi1/PengertianKesetaraanGender"
import Survey from "../components/Materi1/Survey"

const KesetaraanGender = () => {
  return (
    <>
      <Head>
        <title>Pengertian Kesetaraan Gender</title>
      </Head>
      <div className="bg-materi1 bg-cover bg-top bg-no-repeat overflow-hidden">
        <Container className="mt-4 sm:mt-0">
          <Survey/>
          <Intermezzo1/>
          <PengertianKesetaraanGender/>
          <IstilahKesetaraanGender/>
        </Container>
      </div>
    </>
  )
}

export default KesetaraanGender