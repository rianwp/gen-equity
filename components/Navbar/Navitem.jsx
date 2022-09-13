import Link from "next/link"

const Navitem = ({children, link}) => {
  return (
    <Link href={link}>
      <a className="text-white opacity-80 font-lato hover:opacity-100 transition duration-200 sm:px-4 px-2 sm:text-base text-xs">{children}</a>
    </Link>
    
  )
}

export default Navitem