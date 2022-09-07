import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <a><img className="sm:h-10 h-5" src="../img/logo.png" alt="" /></a>
    </Link>
    
  )
}

export default Logo