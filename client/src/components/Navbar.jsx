import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';


const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();


  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-1 px-4 sm:px-20 xl:px-32'>
      <div className='flex cursor-pointer' onClick={() => navigate('/')}>
        <img src={assets.logo} alt="logo" className='h-9.5 w-9.5 mt-3' />
        <p className='p-3 text-4xl font-bold text-blue-500 ml-[-4px]'>KarNex</p>
      </div>

      {
        user ? (
          <UserButton />
        ) : (
          <button
            onClick={openSignIn}
            className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-blue-500 text-white px-10 py-2.5'
          >
            Get started <ArrowRight className='w-4 h-4' />
          </button>
        )
      }
    </div>
  );
};

export default Navbar;
