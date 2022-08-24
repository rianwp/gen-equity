const Navitem = ({children, href}) => {
  return (
    <a href={href} className="text-white opacity-80 font-lato hover:opacity-100 transition duration-200 px-4">{children}</a>
  )
}

export default Navitem