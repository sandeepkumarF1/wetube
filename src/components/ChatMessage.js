import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='px-3 py-2 flex hover:bg-gray-200'>
        <img className='h-7 rounded-full' alt='user' src='https://yt4.ggpht.com/ytc/AOPolaQNuk271Y_J36kNtTwbawr5qNaUcLTPVKzeNAORs3UDUVHpt83JIKVtIoDutr0k=s32-c-k-c0x00ffffff-no-rj' />
        <div className='ms-3 w-full'>
            <span className='font-medium'>{name}</span>
            <span className='ms-2'>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage