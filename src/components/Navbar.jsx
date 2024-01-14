import React, { useState } from 'react'
import { TfiWorld } from "react-icons/tfi";
import Profile from '../assets/Profile.png'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='flex  pt-8 justify-around items-center whitespace-nowrap animate__animated animate__fadeIn'>
      
      <section>
        <h1 className='text-3xl font-bold text-green-600 underline'>حفظني</h1>

      </section>

      <section className='hidden md:flex items-center justify-center gap-6 text-white'>
        <h1 className='cursor-pointer text-xl hover:text-green-600 ' >الرئيسية</h1>
        <h1 className='cursor-pointer text-xl hover:text-green-600 '>من نحن</h1>
        <h1 className='cursor-pointer text-xl hover:text-green-600 '>اراء الطلاب</h1>
        <h1 className='cursor-pointer text-xl hover:text-green-600 '>تواصل معنا</h1>
      </section>

      <section className='hidden  md:flex items-center justify-center text-white gap-3'>

        <div className='flex items-center justify-center  gap-1'>
          <h1>English</h1>
          <TfiWorld />
        </div>

        <div onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}  className='relative gap-1 rounded-lg p-2 border-2 border-[#0b7162] '>

          <div className='flex flex-row-reverse items-center justify-center gap-2 cursor-pointer'>
          {
            isSubMenuOpen ? <IoMdArrowDropup /> :   <IoMdArrowDropdown />
          }
          <h1>الطالب محمد احمد</h1>
          <img  className='rounded-full h-8 w-8' src={Profile} alt="" />  
          </div>


          {
            isSubMenuOpen && (
              <div className='absolute -bottom-[140px] left-0 bg-white h-[130px] w-[80%] transition-all rounded drop-shadow-md'>
                <span className='absolute -top-1 right-0 bg-white  w-[12px] h-[15px] rounded-tl-full'></span>

            <ul className='text-primary w-full h-full  flex flex-col items-center justify-evenly '>
              <li className='flex items-center justify-center gap-1 font-semibold w-[80%] cursor-pointer'>
                <h1>لوحة التحكم</h1>
                <CiViewList />
              </li>

              <li className='flex items-center justify-center gap-1 font-semibold w-[80%] cursor-pointer'>
                <h1>تسجيل خروج</h1>
                <RiLogoutCircleRLine />
              </li>

            </ul>
          </div>   
            )
          }         
        </div>

      </section>

      
      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden flex text-xl' >
      <CiMenuBurger />
      </div>



    </nav>
  )
}
