import React from 'react'

const VideoCard = ({info}) => {
    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    // console.log(info);
  return (

    <div className='w-80 mx-3 my-5 shadow-sm'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url} />
        <ul>
            <li className='font-semibold mt-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard