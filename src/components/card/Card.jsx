import React from 'react'

function Card({children}) {
  return (
    <div className='border bg-gray-200 mt-3 w-full max-w-4xl rounded-lg p-2.5'>
        {children}
        </div>
  )
}

export default Card