import Link from 'next/link'

const CardButton = ({link, onClick}) => {
  if(link !== undefined){
    return (
      <Link href={link}>
        <a
          className="text-white font-poppins font-light lg:text-lg md:text-base text-sm mt-4 bg-gradient-to-b from-[#001d92] to-[#700099] rounded-3xl md:px-4 md:py-2 px-3 py-1"
        >
          Mulai Baca
        </a>
      </Link>
    )
  } else{
    return (
      <a role="button" onClick={onClick} className="text-white font-poppins font-light lg:text-lg md:text-base text-sm mt-4 bg-gradient-to-b from-[#001d92] to-[#700099] rounded-3xl md:px-4 md:py-2 px-3 py-1">
        Mulai Baca
      </a>
    )
  }
  
}

export default CardButton