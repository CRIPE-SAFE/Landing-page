import React from 'react'
import Link from 'next/link';
import {AiFillApple,AiFillAndroid} from "react-icons/ai"

const Hearder = () => {
  return (
    <div className='mx-auto flex flex-col justify-center items-center py-6 md:px-8 px-4 mt-14'>
       <h1 className='text-center font-bold md:text-8xl sm:text-6xl text-5xl pt-8 md:pb-4'>Share your experience</h1>
       <p className='text-center md:text-4xl sm:text-3xl text-lg pt-8 md:px-8 px-4'>A safe and supportive space for users to share their secrets and experiences without fear of judgment or reprisal.</p>
       <div className='container mx-auto flex md:flex-row flex-col justify-center items-center gap-8 mt-12'>
           <Link href="/" target='_blank' className='bg-black  flex justify-center items-center gap-4 text-white py-4  text-center rounded-full lg:w-[20%] md:w-[35%]  w-[80%]'>
            <AiFillApple/>
            <p>Coming soon</p>
           </Link>
           <Link href="https://play.google.com/store/apps/details?id=com.vent.cripe" target='_blank' className='bg-black flex justify-center items-center gap-4 text-white py-4 text-center rounded-full  lg:w-[20%] md:w-[35%]  w-[80%]'>
            <AiFillAndroid/>
             <p>Download for Andriod</p>
            </Link>
       </div>
    </div>
  )
}

export default Hearder