import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useClerk } from '@clerk/clerk-react'

const Hero = () => {
    const navigate = useNavigate()
     const {openSignIn} = useClerk()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto'>Unleash creativity with <br />
            <span className='text-blue-500 '> AI tools</span></h1>
            <p className='mb-2 mt-2 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Use our AI tools to write, design, and improve your work. It's fast, easy, and helps you get more done.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs '> 
                <button onClick={()=>navigate('/ai')} className='bg-blue-500 text-white px-10 py-3  hover:scale-102 active:scale-95 transition cursor-pointer'>Use AI Tools</button>
                <button onClick={openSignIn} className='bg-white px-10 py-3   border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Login Now</button>
            </div>
        
    </div>
  )
}

export default Hero