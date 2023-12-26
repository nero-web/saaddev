import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import saad from "../assets/mylogo/logop.webp";

const Navbar = () => {

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
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#f7f7f7]'>
      <div className='flex justify-between items-center w-full h-full px-5 2xl:px-16'>
        <img src={saad} alt="" className='w-[175px] h-[175px]'/>
        <nav>
        <ul style={{ color: `${linkColor}` }} className='hidden md:flex font-semibold'>
            <li className='ml-10 text-sm uppercase'>
              <ScrollLink to='home'>Home</ScrollLink>
            </li>
            <ScrollLink to='about' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase'>
              About
            </li>
            </ScrollLink>
            <ScrollLink to='skills' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase'>
              Skills
            </li>
            </ScrollLink>
            <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase'>
              Projects
            </li>
            </ScrollLink>
            <ScrollLink to='contact' spy={true} smooth={true} duration={500}>
            <li className='ml-10 text-sm uppercase'>
              Contact
            </li>
            </ScrollLink>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </nav>
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
              ? ' rounded-r-xl fixed left-0 top-0 w-[80%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] px-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 ease-in duration-500 px-5'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <ScrollLink to='home'>
                  <img
                    src={saad}
                    alt='/'
                    className='w-[175px] h-[175px]'
                  />
              </ScrollLink>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 mb-4'>
              <p className='w-[85%] md:w-[90%] pb-4'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <ScrollLink to='home'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </ScrollLink>
              <ScrollLink to='about' spy={true} smooth={true} duration={500} >
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </ScrollLink>
              <ScrollLink to='skills' spy={true} smooth={true} duration={500}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </ScrollLink>
              <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </ScrollLink>
              <ScrollLink to='contact' spy={true} smooth={true} duration={500}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </ScrollLink>
            </ul>
            <div className='pt-16'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href='https://twitter.com/SaadElmasrour' target='_blank'
                  rel='noreferrer'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsTwitterX/>
                  </div>
                </a>
                <a href='mailto:saadelmasrour21@gmail.com' target='_blank'
                  rel='noreferrer'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href='https://www.instagram.com/saad_webdeveloper/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaInstagram/>
                  </div>
                </a>
                <a
                  href='https://www.linkedin.com/in/saad-el-masrour-89a1b1237/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
