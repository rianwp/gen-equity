import Container from "../GlobalComponents/Container"
import Logo from "./Logo"
import Navitems from "./Navitems"


const Navbar = () => {
  return (
    <div className="w-full bg-white/10 fixed top-0 z-40 backdrop-blur-md border-b border-white/30 rounded-b-md">
      <Container className="flex flex-row justify-between items-center p-4">
        <Logo/>
        <Navitems/>
      </Container>
    </div>
  )
}

export default Navbar