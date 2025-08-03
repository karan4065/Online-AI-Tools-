import { Eraser } from 'lucide-react';
import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '@clerk/clerk-react';
import toast from 'react-hot-toast';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Removebackground = () => {
     
      const [input,setInput] = useState('')
      const [loading, setLoading] = useState(false)
      const [content, setContent] = useState('')
      
      const {getToken} = useAuth()
  
      const onSubmitHandler = async (e)=>{
        e.preventDefault();
        try {
          setLoading(true)
          
          const formData = new FormData()
          formData.append('image',input)

          const {data} = await axios.post('https://online-ai-tools-1.onrender.com/api/ai/remove-image-background',formData ,{headers:{
          Authorization: `Bearer ${await getToken()}`
        }})

         if(data.success){
          setContent(data.content)
        }else{
          toast.error(data.message)
        }

        } catch (error) {
           toast.error(error.message)
        }
        setLoading(false)
      }
  return (
   <div className='h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700'>
        {/* left side */}
        <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200'>
            <div className='flex items-center gap-3'>
                <Eraser className='w-6 text-[#b300ff]' />
                <h1 className='text-xl font-semibold'>Background Removal</h1>
            </div>
            <p className='mt-6 text-sm font-medium'>Upload Image</p>

            <input onChange={(e)=>setInput(e.target.files[0])} type="file" accept='image/*' className='w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 text-gray-600' required/>

            <p className='text-sm text-gray-500 font-light mt-1'>Support PNG, JPG, and all other image formats</p>

            <button disabled={loading} className='w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#9000ff] to-[#bb00ff] px-4 py-2 rounded-lg text-sm mt-6 cursor-pointer text-white'>
              {
                loading ? <span className='w-4 h-4 my-1 rounded-full border-2 border-t-transparent animate-spin'></span>
                :   <Eraser className='w-5'/>

              }
              Remove Background
            </button>
        </form>
        {/* right side */}
        <div className='w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 '>

          <div className='flex items-center gap-3'>
            <Eraser className='w-5 h-5 text-[#b300ff]'/>
            <h1 className='text-xl font-semibold'>Processed Image</h1>
          </div>


          {!content ? (
            <div className='flex-1 flex justify-center items-center'>
              <div className='text-sm flex flex-col items-center gap-5 text-gray-400 '>
                   <Eraser className='w-8 h-9 '/>
                   <p>Upload an Image and click "Remove Background "to get started </p>
              </div>
          </div>
          ) : (
              <img src={content} alt="image" className='mt-3 w-full h-full' />
          )}    
           

        </div>
    </div>
  )
}

export default Removebackground