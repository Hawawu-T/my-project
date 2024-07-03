import React from 'react'
import { FaEdit, FaUser } from 'react-icons/fa'
import { profItem } from '../components/export'
import { useDarkMode} from '../components/DarkModeContext'

const Profile = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
  <div className={`${darkMode ?'dark ' :'bg-transparent'}`}>
  <div className='flex w-full h-screen items-center justify-center gap-4 flex-col'>
   <FaUser size={60} className='rounded-full bg-red-500 w  my-8' />
   <h1 className='text-2xl font-bold'> Hi, User</h1>
   
  {
    profItem.map((text,index)=>(
      <div key={index} className='flex flex-row items-center justify-center gap-3'>
      <input  type={text.type}  className=' w-96 p-2 border-b dark:bg-black dark:text-white' placeholder={text.edit}/>
      <FaEdit className=' rounded-full shadow-md shadow-red-500 dark:shadow-black dark:text-red-500'/>
      </div>
    ))
  }
          <button className='bg-red-600 dark:bg-black hover:bg-black dark:hover:opacity-90
          dark:hover:text-black  dark:text-red-500  text-lg px-10 py-4  text-black font-semibold w-auto  rounded-lg
          cursor-pointer transform hover:scale-110 transition-transform duration-300'>SAVE</button>

   </div>
   </div>
  )
}

export default Profile
