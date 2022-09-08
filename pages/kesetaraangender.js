import Head from "next/head"
import Container from "../components/GlobalComponents/Container"
import EndingMateri1 from "../components/Page2/EndingMateri1"
import Intermezzo1 from "../components/Page2/Intermezzo1"
import IstilahKesetaraanGender from "../components/Page2/IstilahKesetaraanGender"
import PengertianKesetaraanGender from "../components/Page2/PengertianKesetaraanGender"
import Survey from "../components/Page2/Survey"

const Page2 = () => {
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
          <EndingMateri1/>
        </Container>
      </div>
    </>
  )
}

export default Page2