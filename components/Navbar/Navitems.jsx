import Navitem from "./Navitem"

const Navitems = () => {
  return (
    <div className="flex flex-row items-center">
        <Navitem link="/">Beranda</Navitem>
        <Navitem link="/#materi">Materi</Navitem>
        <Navitem link="/#tentang">Tentang</Navitem>
    </div>
    
  )
}

export default Navitems