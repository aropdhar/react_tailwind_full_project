import React from 'react'
import logo from '../../assets/logo.png'
import Common_btn from '../../component/common_btn/Common_btn'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className='absolute bg-[#1C1E53] ml-0 mr-0 w-full py-[18px]'>
       <div className='container'>
           <div className='flex justify-between items-center'>
              <div>
                 <img src={logo} alt="Not Found" />
              </div>
              <div className='flex gap-x-[32px]'>
                 <ul className='flex gap-x-[32px] items-center'>
                     
                    <li><NavLink to="/" className='nav_text font-family'>Home</NavLink></li>
                    <li><NavLink to="/about" className='nav_text font-family'>About Us</NavLink></li>
                    <li><NavLink to="/feature" className='nav_text font-family'>Features</NavLink></li>
                    <li><NavLink to="/pricing" className='nav_text font-family'>Pricing</NavLink></li>
                    <li><NavLink to="/faq" className='nav_text font-family'>FAQ</NavLink></li>
                    <li><NavLink to="/blog" className='nav_text font-family'>Blog</NavLink></li>
                    <li><NavLink to="/contact" className='btn font-family'>Contact Us</NavLink></li>
                 </ul>
              </div>
           </div>  
       </div>
     </nav>  
    </>
  )
}

export default Navbar
