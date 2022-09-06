import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <a><img className="h-10" src="../img/logo.png" alt="" /></a>
    </Link>
    
  )
}

export default Logo