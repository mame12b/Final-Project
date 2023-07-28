import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import {BsNewspaper } from 'react-icons/bs'
import { FaBars, FaTimes, FaHome, FaSignInAlt, FaInfoCircle, FaEnvelope } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import NavLogo from '../../public/assets/logo/sm.jpg'

export default function Navbar(){
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div   style={{ backgroundColor: `${navBg}` }}
    className={
      shadow
        ? 'sticky top-0 w-full h-30 shadow-2xl z-[100] ease-in-out duration-300 rounded-full'
        : ' w-full h-38 z-[100] rounded-lg p-auto sticky top-0'
    }
    >
      <div  className='flex justify-around items-center w-full h-full px-2 2xl:px-16'>
        <Link legacyBehavior href='/'>
        
        <a>
        {/* <h1 className="fixed top-0 bottom-0hidden sm:block sm:text-left  font-bold text-2xl text-[#134e4a]">Shareholder Management System</h1> */}
        <div className="flex justify-center mt-6 mb-10">
        <picture>
          <img
            className="w-28 h-auto rounded-3xl"
            src="/assets/logo/sm.jpg"
            alt="company logo"
          />
        </picture>
        </div>
            {/* <h1 className="fixed top-0 bottom-0hidden sm:block sm:text-left  font-bold text-2xl text-[#134e4a]">Shareholder Management System</h1> */}
          </a>
    
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className='hidden font-semibold md:flex pt-5 '>
            <li className='flex flex-row ml-10 text-sm uppercase hover:border-b hover:text-darkGrayishBlue'>
            <FaHome size={20} className="mr-2" />
              <Link href='/'>Home</Link> 
            </li>
            <li className='flex flex-row ml-10 text-sm uppercase hover:border-b  hover:text-darkGrayishBlue'>
            <FaInfoCircle size={20} className="mr-2" />
              <Link href='/#aboutus'>About</Link>
            </li>
            <li className='flex flex-row ml-10 text-sm uppercase hover:border-b hover:text-darkGrayishBlue'>
            <FaEnvelope size={20} className="mr-2" />
              <Link href='/#news'>News</Link>
            </li>

            <li className='flex flex-row ml-10 text-sm uppercase hover:border-b hover:text-darkGrayishBlue'>
            <FaEnvelope size={20} className="mr-2" />
              <Link href='/buy'>Buy</Link>
            </li>

            <li className='flex flex-row ml-10 text-sm uppercase hover:border-b hover:text-darkGrayishBlue'>
            <FaEnvelope size={20} className="mr-2" />
              <Link href='/#contact'>Contact</Link>
            </li>
          
        
            <li  >
           <div className="ml-10 bg-sky-500 hover:bg-sky-600 rounded-2xl w-20 h-10 -mt-3 py-2 text-center">
              <Link href='/login' legacyBehavior>
                <a className='  '>
                log in
                </a>
                </Link>
           </div>
            </li>
            
          </ul>
          
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
   
      </div>
     
      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link legacyBehavior href='/'>
              <a>
                  <Image
                    src={NavLogo}
                    width='80'
                    height='35'
                    alt='/'
                  />
              </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                welcome, feel as your home!
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='flex flex-row  text-sm uppercase hover:border-b hover:text-darkGrayishBlue py-4 '>
                <FaHome size={20} className="mr-2" />
                  Home
                </li>
              </Link>
              <Link href='/#Aboutus'>
                <li onClick={() => setNav(false)} className=' flex flex-row  text-sm uppercase hover:border-b hover:text-darkGrayishBlue py-4'>
                <FaInfoCircle size={20} className="mr-2" />
                About
                </li>
              </Link>

              <Link href='/#news'>
             
                <li onClick={() => setNav(false)} className='flex flex-row  uppercase hover:border-b hover:text-darkGrayishBlue py-4 text-sm'>
                <BsNewspaper size={20} className="mr-2" />
                 News
                </li>
              </Link>

              <Link href='/#Contact'>
            
                <li onClick={() => setNav(false)} className='flex flex-row  uppercase hover:border-b hover:text-darkGrayishBlue py-4 text-sm'>
                <FaEnvelope size={20} className="mr-2" />
                  Contact
                </li>
              </Link>
             
              <Link href='/login'>
            
              
                <li onClick={() => setNav(false)} className='flex flex-row text-sm uppercase hover:border-b  w-20 h-10 items-center rounded-lg bg-sky-500 hover:bg-sky-600 -mt-2" py-4'>
                <FaSignInAlt size={20} className="mr-2" />
                  Login
                </li>
              </Link>
            </ul>

            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/clint-briley-50056920a/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/fireclint'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};


