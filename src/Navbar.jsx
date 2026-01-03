import React from 'react'

function Navbar() {
  return (
    <nav  className="bg-black sticky top-0">
        <div className="flex justify-between px-25 py-1.5 border border-b-sky-950 items-center">
        <h1 className='font-semibold text-white text-4xl'>Resume</h1>
        <div class="border-spacing-1.5 ml-17 border-2 rounded-full  border-sky-950 bg-gray-950">
          <ul class="flex space-x-15 px-50 py-5">
          <li><a href ="#" className='font-semibold text-white hover:text-sky-400 cursor-pointer'>Home</a></li>
          <li><a href="#" className='font-semibold text-white hover:text-sky-400 cursor-pointer'>About</a></li>
          <li><a href="#" className='font-semibold text-white hover:text-sky-400 cursor-pointer'>Skills</a></li>
          <li><a href="#" className='font-semibold text-white  hover:text-sky-400 cursor-pointer'>Services</a></li>
          <li><a href="#" className='font-semibold text-white hover:text-sky-400 cursor-pointer '>Project</a></li>
          <li><a href="#" className='font-semibold text-white  hover:text-sky-400 cursor-pointer'>Contact</a></li>
        </ul>
        </div>

        <div>
          
        </div>
        <button className="font-semibold py-5 px-10 text-black border-2 rounded-full bg-sky-500 hover:text-sky-400 cursor-pointer">  Let's Talk  </button>
        </div>
    </nav>
  )
}

export default Navbar