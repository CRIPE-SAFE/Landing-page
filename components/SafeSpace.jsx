import React from 'react';
import Image from 'next/image';

const SafeSpace = () => {
  return (
    <>
    <div className=' mx-auto grid md:grid-cols-4 grid-cols-1 px-10 w-full mt-4'>
         <div className='hidden md:flex col-span-1  justify-end items-center'>
              <h1 className=' from-lightRed to-darkerRed bg-gradient-to-b text-transparent bg-clip-text lg:text-[140px] md:text-8xl text-right font-bold lg:mr-[-7rem] md:mr-[-2rem]'>Safe</h1>
         </div>
         <div className='md:col-span-2 col-span-1 flex justify-center items-center z-10 w-full'>
              <Image src='/iPhone 16.svg' height={50} width={400}/>
         </div>
         <div className='hidden md:flex col-span-1 items-center'>
              <h1 className=' from-lightRed to-darkerRed bg-gradient-to-b text-transparent bg-clip-text lg:text-[140px] md:text-8xl text-left font-bold  lg:ml-[-7rem] md:ml-[-4rem]'>Space</h1>
         </div>

    </div>
    <div className='md:hidden flex flex-col justify-center items-center mt-8'>
       <h1 className='text-center text-7xl font-bold'>Safe</h1>
       <div className='h-1 w-9/12 bg-orange-400 my-4'/>
        <h1 className='text-center text-7xl font-bold'>Space</h1>
    </div>
    </>
  )
}

export default SafeSpace