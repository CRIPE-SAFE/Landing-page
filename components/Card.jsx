import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card from-lightRed to-darkerRed bg-gradient-to-b w-[278px] h-[398px] text-white flex justify-center items-center p-4  rounded-lg'>
       <p className='text-center text-sm'>{data}</p>
    </div>
  )
}

export default Card