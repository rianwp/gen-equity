import Head from "next/head"
import Container from "../components/GlobalComponents/Container"
import EndingMateri2 from "../components/Page3/EndingMateri2"
import IntroMateri2 from "../components/Page3/IntroMateri2"
import MateriPerempuan from "../components/Page3/MateriPerempuan"

const Page3 = () => {
  return (
    <>
      <Head>
        <title>Lika-Liku Perempuan</title>
      </Head>
      <div className="bg-materi2 bg-cover bg-top bg-no-repeat overflow-hidden">
        <Container className="mt-4 sm:mt-0">
          <div className="px-4">
            <IntroMateri2/>
            <MateriPerempuan/>
            <EndingMateri2/>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Page3