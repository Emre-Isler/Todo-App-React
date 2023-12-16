import React from 'react'
import {FaRegThumbsUp,FaRegTrashAlt} from 'react-icons/fa'

function Tasks( {list} ) {
  return (
    <div className='w-1/2 mx-auto'>
        <ul className='unstyled mt-3 '>
            {list.map((item,index) => (
                <li key = {index} className='flex justify-between p-4 items-center rounded '>
                    <span className='text-3xl'>{item.text}</span>

                    <div className='flex gap-3 '>
                        <FaRegThumbsUp size={35} className='cursor-pointer hover:text-green-500'/>
                        <FaRegTrashAlt size={35} className='cursor-pointer hover:text-red-600'/>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Tasks