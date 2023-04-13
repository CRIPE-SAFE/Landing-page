import React from 'react'
import {FaTiktok} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {BsTwitter} from "react-icons/bs"
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between items-center px-16 text-sm py-5 border-t gap-4'>
        <div className='flex justify-center items-center gap-5'>
            <p>Terms of use</p>
            <p>Privacy Policy</p>
        </div>
        <p className='text-center'>© 2023 Cripe. All rights reserved</p>
        <div className='flex justify-start items-center gap-5'>
          <Link href="/">
            <AiFillInstagram size={24}/>
          </Link>
          <Link href="/">
            <BsTwitter size={24}/>
          </Link>
          <Link href="/">
            <FaTiktok size={24}/>
          </Link>
        </div>
    </div>
  )
}

export default Footer