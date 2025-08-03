import React from 'react'
import {PricingTable} from '@clerk/clerk-react'
const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-4'>
        <div className='text-center'>
            <h2 className='text-slate-700 font-semibold text-[42px]'>Choose Your Plan</h2>
           <p className='text-gray-500 max-w-lg mx-auto'>Start for free and upgrade anytime. Choose the plan that fits your content needs best.</p>
        </div>
        <div className='mt-14 md:mb-20 mb-5 max-sm:mx-8 '>
            <PricingTable/>
        </div>
    </div>
  )
}

export default Plan