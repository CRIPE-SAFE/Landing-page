import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='py-4 border-b  px-4 fixed top-0 left-0 right-0 mb-12 bg-white z-20'>
        <div className='mx-auto flex justify-between items-center md:px-10'>
          <Link href="/">
             <Image src="/Group.svg" height={50} width={100}/>
          </Link>
           <button className='py-2 px-8  from-lightRed to-darkerRed bg-gradient-to-b rounded-full text-white transition'>
             Download
           </button>
        </div>
    </header>
  )
}

export default Navbar