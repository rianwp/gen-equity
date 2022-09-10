import Head from "next/head"
import Container from "../components/GlobalComponents/Container"
import EndingMateri3 from "../components/Page4/EndingMateri3"
import IntroMateri3 from "../components/Page4/IntroMateri3"
import MateriLakiLaki from "../components/Page4/MateriLakiLaki"

const Page4 = () => {
  return (
    <>
      <Head>
        <title>Stereotipe Laki-Laki</title>
      </Head>
      <div className="bg-materi3 bg-cover bg-top bg-no-repeat overflow-hidden">
        <Container className="mt-4 sm:mt-0">
          <div className="px-4">
            <IntroMateri3/>
            <MateriLakiLaki/>
            <EndingMateri3/>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Page4