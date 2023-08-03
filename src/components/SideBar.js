import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function SideBar() {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 w-[18%] h-[40rem] scroll-smooth flex overflow-hidden overflow-y-scroll 
   scrollbar-thumb-gray-400 scrollbar-thin mt-4'>
      <div >

        <ul>
          <li><Link to="/"><i className="fa-solid fa-house me-5"></i>Home</Link></li>
          <li><i className="fa-solid fa-bolt fa-lg me-5 my-6"></i>Shorts</li>
          <li className='mb-5'><i className="fa-solid fa-clapperboard me-5 "></i>Subscription</li>
        </ul>
        <hr />
        <h1 className='font-medium mt-5 mb-2'>Explore</h1>
        <ul>
          <li><i className="my-3 me-5 fa-solid fa-fire"></i> Trending</li>
          <li><i className="my-3 me-5 fa-solid fa-bag-shopping"></i> Shopping</li>
          <li><i className="my-3 me-5 fa-solid fa-music"></i> Music</li>
          <li><i className="my-3 fa-solid fa-film me-5"></i> Movies</li>
          <li><i className="my-3 fa-solid fa-satellite-dish me-5"></i> Live</li>
          <li><i className="my-3 fa-solid fa-gamepad me-5"></i>Gaming</li>
          <li><i className="my-3 fa-solid fa-newspaper me-5"></i> News</li>
          <li><i className="my-3 fa-solid fa-trophy me-5"></i>Sports</li>
          <li><i className="my-3 fa-solid fa-lightbulb me-5"></i> Learning</li>
          <li><i className="my-3 fa-solid fa-hat-wizard me-5"></i>Fashion & Beauty</li>
        </ul>
        <hr className='my-5'/>
        <ul>
          <li><i className="my-3 me-5 fa-solid fa-gear"></i> Settings</li>
          <li><i className="my-3 me-5 fa-regular fa-font-awesome"></i> Report history</li>
          <li><i className="my-3 me-5 fa-regular fa-circle-question"></i> Help</li>
          <li><i className="my-3 me-5 fa-regular fa-message"></i> Send feedback</li>
        </ul>
        <hr className='my-5' />
        <p className='text-sm'>About  Press Copyright</p>
        <p className='text-sm'>Contact us Creators</p>
        <p className='text-sm'>Advertise Developers</p>
        <p className='text-sm mt-3'>Terms Policy & Safety</p>
        <p className='text-sm'>How Youtube works</p>
        <p className='text-sm mb-3'>Test new features</p>
        <p className='text-sm mb-3 opacity-50'>&copy; 2023 Google LLC</p>
      </div>
    </div>
  )
}

export default SideBar