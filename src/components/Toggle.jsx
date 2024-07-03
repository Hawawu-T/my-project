import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useDarkMode } from './DarkModeContext';
const Toggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <button  onClick={toggleDarkMode} className='flex  w-11 h-11 p-3 mr-15 rounded-full bg-orange-500 right-full sticky  sm:left-8'>
    {darkMode ? <FaMoon size={20} className='text-black'/>: <FaSun size={20} className='text-black' />}
  </button>
  )
}

export default Toggle;

