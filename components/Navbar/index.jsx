import Container from "../GlobalComponents/Container"
import Logo from "./Logo"
import Navitems from "./Navitems"

const Navbar = () => {
  return (
    <div className="w-full bg-[#160040]/50 fixed top-0 z-50">
      <Container className="flex flex-row justify-between items-center py-4">
        <Logo/>
        <Navitems/>
      </Container>
    </div>
  )
}

export default Navbar