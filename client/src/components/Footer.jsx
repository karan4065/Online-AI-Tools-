import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()

  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32   w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-2 md:mb-10'>
                  <div className='flex cursor-pointer  '  onClick={()=> navigate('/')}>
                          <a href="#" className=''>
                             
                            <p className='p-3 flex gap-2 text-3xl font-bold  text-blue-500 ml-[-10px]'> <img src={assets.logo} alt="image" className='h-8 w-8 mt-0.5 '/> KarNex</p>
                          </a>
                         </div>
                <p className='text-gray-400 mt-0 md:mb-2'>Experience the power of AI with KarNex. <br /> Transform your content creation with our <br />suite of premium AI tools. Write articles,<br /> generate images, and enhance your workflow.</p>
            </div>
            <div className='w-full md:w-1/5 mb-2 md:mb-10'>
                <h3 className='text-gray-600 text-lg font-bold mb-2 mt-4'>Company</h3>
                <ul className='flex flex-col gap-1 text-gray-400'>
                    <a href="#Header" className='hover:text-slate-500'>Home</a>
                    <a href="#About" className='hover:text-slate-500'>About Us</a>
                    <a href="#Contact" className='hover:text-slate-500'>Contact Us</a>
                    <a href="#" className='hover:text-slate-500'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-gray-600 text-lg md:max-w-120 font-bold mt-4 mb-2'>
                    Subscribe to our newsletter
                </h3>
                <p className='text-gray-400 mb-2 md:mb-4 max-w-120'>
                    Get weekly updates on new listings tips delivered straight to your inbox.
                </p>
                <div className='flex md:flex-row gap-2 mb-1 md:mb-0'>
                    <input type="email" placeholder='Enter Your Email' className='p-2 rounded   text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto '/>
                    <button className='py-1 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t pt-3 border-gray-500 mt-4 text-center text-gray-500'>
          Copyright 2025 &copy; Karan Jadhav. All Right Reserved.
        </div>
    </div>
  )
}

export default Footer