import Navitem from "./Navitem"

const Navitems = () => {
  return (
    <div className="flex flex-row items-center">
        <Navitem>Beranda</Navitem>
        <Navitem>Materi</Navitem>
        <Navitem>Tentang</Navitem>
    </div>
    
  )
}

export default Navitems