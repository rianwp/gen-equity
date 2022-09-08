import Hero from "../components/Page1/Hero"
import Perkenalan from "../components/Page1/Perkenalan"
import Materi from "../components/Page1/Materi"
import About from "../components/Page1/About"
import Container from "../components/GlobalComponents/Container"
import Head from "next/head"

const Page1 = () => {
  return (
    <>
      <Head>
        <title>GenEquity</title>
      </Head>
      <div className="bg-home bg-cover bg-top bg-no-repeat overflow-hidden">
        <Container>
          <Hero/>
          <Perkenalan/>
          <Materi/>
          <About/>
        </Container>
      </div>
    </>
  )
}

export default Page1
