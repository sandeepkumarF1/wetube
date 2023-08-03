import React from 'react'
// import Button from './Button'

const list = ["All", 'Live', 'Bigg Boss', 'Comedy', 'Music', 'Film criticisms','Gaming','Smartphones','Criket','Bollywood music','PUBG','Bollywood'];
function ButtonList() {
  return (
    <div className='mx-3  flex items-center fixed top-14 p-2 bg-white'>
      <button className='hover:bg-slate-200 px-3 py-2 opacity-40 mx-2 rounded-full'><i className="fa-solid fa-chevron-left fa-lg me-2"></i></button>
      <ul className='flex overflow-x-scroll whitespace-nowrap scrollbar-hide select-none flex-row gap-4 scroll-smooth'>
        {
          list.map((item) =>(
            <li key={item} className='px-2 py-1 flex bg-gray-200 opacity-95 rounded-lg cursor-pointer'>{item}</li>
            
          ))
        }
      </ul>
      <button className='hover:bg-slate-200 px-3 py-2 opacity-40 mx-2 rounded-full'><i className="fa-solid fa-chevron-right fa-lg ms-2"></i></button>
    </div>
  )
}

export default ButtonList;












{/* <div className='flex bg-red-200 whitespace-nowrap overflow-hidden'>
      
      </div> */}


// <Button name="All" />
//       <Button name="Live" />
//       <Button name="Bigg Boss" />
//       <Button name="Comedy" />
//       <Button name="Music" />
//       <Button name="Film criticisms" />
//       <Button name="Gaming" />
//       <Button name="Smartphones" />
//       <Button name="Cricket" />
//       <Button name="Bollywood music" />
//       <Button name="Bollywood music" />
//       <Button name="Bollywood music" />
//       <Button name="PUBG" />