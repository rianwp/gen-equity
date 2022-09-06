import Hero from "../components/Home/Hero"
import Perkenalan from "../components/Home/Perkenalan"
import Materi from "../components/Home/Materi"
import About from "../components/Home/About"
import Container from "../components/GlobalComponents/Container"
import Head from "next/head"

const Home = () => {
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

export default Home
