import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavLogo from '../../public/assets/logo/sm.jpg'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-2 md:py-12  bottom-0 w-full ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-4 flex flex-col md:flex-row justify-between">
        <div className="text-center md:text-left">
          <Link href="/" legacyBehavior>
            <a className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
            <Image
              src={NavLogo}
              alt='/'
              width='100'
              height='15'
              className='cursor-pointer'
            />
              <h1 className="ml-2 font-bold text-lg text-white">Shareholder Management System</h1>
            </a>
          </Link>
        </div>
        <div className="text-center md:text-right">
          <ul className="flex justify-center md:justify-end mb-4 md:mb-0">
            <li className="ml-6">
              <Link href="/" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#aboutus" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  About
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#news" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                 News
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/#contact" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Contact
                </a>
              </Link>
            </li>
            <li className="ml-6">
              <Link href="/login" legacyBehavior>
                <a className="text-white hover:text-gray-500 transition duration-300 ease-in-out">
                  Login
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-lg font-bold mb-2">About us</h2>
            <p className="text-sm">
              Shareholder Management System is a leading provider of shareholder management solutions for public and private companies. Our platform helps companies manage their shareholder communications, voting, and engagement processes with ease and efficiency.
            </p>
          </div>
          <div className="md:w-1/3 text-center">
            <h2 className="text-lg font-bold mb-2">Contact us</h2>
            <p className="text-sm">
              Shareholder Management System<br />
              Ethiopia
              Bahirdar 4<br />
              
            </p>
          </div>
          <div className="md:w-1/3 text-center md:text-right">
            <h2 className="text-lg font-bold mb-2">Connect with us</h2>
            <p className="text-sm">
              Follow us on social media for updates and news:
            </p>
           
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm">
            &copy; 2023 Shareholder Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;