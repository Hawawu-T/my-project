import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaXmark, FaBars } from 'react-icons/fa6';
import logo from '../assets/images/images/logo.png'
import { useDarkMode } from './DarkModeContext';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';

const Header = () => {

  const { darkMode, toggleDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  const closedMenu = () => {
    setIsMenuOpen(false);
  }

  const navItem = [
    {
      link: 'Home', path:'home'
    },
    
    {
      link: 'About', path:'about'
    },
    {
      link: 'Properties', path:'propeties'
    },
    {
      link: 'Services', path:'services'
    },
    {
      link: 'Agents', path:'agents'
    },
    {
      link: 'Contact', path:'contact'
    }
  ]

  return (
    <header >
      <div className="flex justify-between item-cnter max-w-6xl mx-auto p-3">
        <h1 className="font-bold text- sm:text-xl p-5">
          Homey
        </h1>
        <nav>
          <ul className="flex items-center space-x-4 text-sm sm:text-lg">
            <li className="">Home</li>
            <li className="">Property</li>
            <li className="">Agents</li>
            <li
            >Sign In</li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header