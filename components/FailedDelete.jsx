
import React from 'react'
import { Toast, } from 'flowbite-react';
import { HiCheck, HiX, HiExclamation } from 'react-icons/hi';

const FailedDelete = () => {
  return (
    <div className='absolute top-4 inset-x-0  '>
        <Toast>
        <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
          <HiX className="h-5 w-5" />
        </div>
        <div className="ml-3 text-sm font-normal">
          Item has been deleted.
        </div>
        <Toast.Toggle />
      </Toast>
    </div>
  )
}

export default FailedDelete