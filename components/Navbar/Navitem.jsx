import Link from "next/link"

const Navitem = ({children, link}) => {
  return (
    <Link href={link}>
      <a className="text-white opacity-80 font-poppins hover:opacity-100 transition duration-200 px-4">{children}</a>
    </Link>
    
  )
}

export default Navitem