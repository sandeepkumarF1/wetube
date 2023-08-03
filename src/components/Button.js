import React from 'react'

function Button(props) {
  return (
    
    <div className='text-sm'>
        <button className='m-2 px-4 py-2 bg-gray-200 rounded-lg'>{props.name}</button>
    </div>
  )
}

export default Button;