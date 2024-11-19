import React from 'react'

const home = (props) => {
  return (
    <>
    <div className="mt-6 p-3 flex flex-col  sm:flex-row sm:space-x-3 sm:h-60 sm:items-center sm:mt-0">
      <div className='border-2 border-black text-center '>
    <h5>Card title</h5>
    <p>Some quick example text to build.</p>
    <a href={props.card1Link} className='bg-blue-700 '>Go somewhere</a>
  </div>
  
  <div className='border-2 border-black mt-3 text-center'>
    <h5>Card title</h5>
    <p>Some quick example text to build.</p>
    <a href={props.card2Link} className='bg-blue-700'>Go somewhere</a>
  </div>
  <div className='border-2 border-black mt-3 text-center'>
    <h5>Card title</h5>
    <p>Some quick example text to build.</p>
    <a href="#" className='bg-blue-700'>Go somewhere</a>
  </div>
  </div>
    </>
  )
}

export default home
