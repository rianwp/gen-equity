import React from 'react'
import Link from 'next/link'

const CardButton = ({link}) => {
  return (
    <Link href={link}>
      <a className="text-white font-poppins font-light lg:text-lg md:text-base text-sm mt-4 bg-gradient-to-b from-[#001d92] to-[#700099] rounded-3xl px-4 py-2">
        Mulai Baca
      </a>
    </Link>
    
  )
}

export default CardButton