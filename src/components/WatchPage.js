import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());   
    }, []);
  return (
    <div className='px-10 py-10 w-full '>
      <div className='overflow-hidden overflow-y-scroll scrollbar-hide scroll-smooth scrollbar-thumb-gray-500 scrollbar-thin scrollbar-rounded-full flex'>
        <div className=''>
          <div>
            <iframe width="800" height="450" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div>
            <CommentContainer />
          </div>
        </div>
        <div className='ms-5 h-[450px]  rounded-t-lg border border-black shadow-lg w-full overflow-y-scroll scrollbar-thin flex flex-col-reverse'>
          <LiveChat />
        </div>
        
      </div>
    </div>
  )
}

export default WatchPage














