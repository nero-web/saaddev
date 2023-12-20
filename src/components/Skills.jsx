import React from 'react';
import Html from '../assets/skills/html-min.webp';
import Css from '../assets/skills/css.webp';
import Javascript from '../assets/skills/javascript.webp';
import ReactImg from '../assets/skills/react.webp';
import Tailwind from '../assets/skills/tailwind.webp';
import Github from '../assets/skills/github1.webp';
import NextJS from '../assets/skills/nextjs.webp';
import Sanity from '../assets/skills/sanity.webp';

const Skills = () => {
  return (
    <div id='skills' className='w-full h-auto px-3 pb-36'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <h1 className='text-xl tracking-widest text-[#5651e5] font-semibold'>
            Skills
          </h1>
        <h2 className='py-4 text-gray-600'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Html} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Css} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Javascript} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={ReactImg} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Tailwind} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Sanity} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Sanity</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={Github} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <img src={NextJS} width='64px' height='64px' alt='/'/>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;