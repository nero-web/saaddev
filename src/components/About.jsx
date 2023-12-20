/** @format */

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import about2 from "../assets/about2.webp";
import about from "../assets/about.webp";

const About = () => {
  return (
    <div id='about' className='w-full h-auto p-3 flex items-center py-36'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h1 className='text-xl tracking-widest text-[#5651e5] font-semibold'>
            A Little Background
          </h1>
          <h2 className='py-4 text-gray-600'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            As a Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind for frontend, and
            Sanity, Contentful for backend. I excel in designing and maintaining
            responsive websites that offer a smooth user experience. My
            expertise lies in crafting dynamic, engaging interfaces through
            writing clean and optimized code and utilizing cutting-edge
            development tools and techniques, What distinguishes me most is my love for challenges and problems-solving. I am also a team player who
            thrives in collaborating with cross-functional teams to produce
            outstanding web applications.
          </p>
          <p className='py-2 text-gray-600'></p>
          <ScrollLink to='projects' spy={true} smooth={true} duration={500}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </ScrollLink>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img src={about} className='rounded-xl' alt='/' loading="lazy" width='auto' height='auto'/>
        </div>
      </div>
    </div>
  );
};

export default About;
