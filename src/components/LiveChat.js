import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './utils/chatSlice';
import { generateRandomMessage, generateRandomName } from './utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMessage(20),
            }))
        },2000);
        return () => clearInterval(i);
        
    },[])
  return (
    <>
    <div>
        <h1 className='py-2 px-5 font-medium shadow sticky top-0 bg-white w-full'>Top chat   &#9660;</h1>

        {
            chatMessages.map((c, i) =>(
                <ChatMessage key={i} name={c.name} message={c.message} />
            ))
        }
    <form className='w-[406px] absolute border border-black rounded-b-lg'
    onSubmit={(e)=> {
        e.preventDefault();
        dispatch(addMessage({
            name:"Sandeep Kumar",
            message: liveMessage,
        }))    
        setLiveMessage("");
    }} >
        <input type='text' placeholder='Type message' className="px-2 w-full h-10 bottom-24"
            value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}
        />
        {/* <input className='border border-black rounded-b-lg h-10 bottom-24 w-96 bg-slate-200 absolute' type='text' /> */}
        <button className='bg-slate-800 hover:bg-gray-950 w-full text-white font-medium py-1'>Send</button>
    </form>
    </div>
    
    </>
  )
}

export default LiveChat