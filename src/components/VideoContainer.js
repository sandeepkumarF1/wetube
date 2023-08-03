import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from "./utils/constant"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
function VideoContainer() {
  const [videos, setVideos] = useState([]);
  useEffect(() =>{
    getVideos();
  }, []);
  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap justify-center mt-16 h-[40rem] overflow-hidden overflow-y-scroll scrollbar-hide scroll-smooth scrollbar-thumb-gray-500 scrollbar-thin scrollbar-rounded-full'>
      {videos.map(video => 
    <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} /></Link>
      )}
      {/* <VideoCard info={videos[1]} /> */}
    </div>
  )
}
export default VideoContainer