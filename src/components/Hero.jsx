/** @format */

import React, { useEffect, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa';
import { Link as ScrollLink } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);
  return (
    <div id='home' className='w-full h-auto text-center pt-40'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-3 flex justify-center items-center' ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          transition={{ duration: 0.5 }}>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m{" "}
            <span className='text-[#5651e5]'>
              <TypeAnimation
                sequence={["Saad", 1000]}
                wrapper='span'
                speed={500}
                repeat={Infinity}
              />
            </span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            <TypeAnimation
              sequence={["A Front-End Web Developer", 1000]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://twitter.com/SaadElmasrour'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsTwitterX/>
              </div>
            </a>
            <a href='mailto:saadelmasrour21@gmail.com' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/saad-el-masrour-89a1b1237/'
              target='_blank'
              rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a href='https://www.instagram.com/saad_webdeveloper/' target='_blank' rel='noreferrer'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaInstagram/>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
