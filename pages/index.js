import Navbar from "../components/Navbar"
import Hero from "../components/Home/Hero"
import Perkenalan from "../components/Home/Perkenalan"
import Materi from "../components/Home/Materi"
import Container from "../components/GlobalComponents/Container"

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-home bg-cover bg-top bg-no-repeat overflow-hidden">
        <Container>
          <Hero/>
          <Perkenalan/>
          <Materi/>
        </Container>
      </div>
    </>
    
  )
}

export default Home
