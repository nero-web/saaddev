/** @format */

import React, { useRef, useEffect } from "react";
import car_rental from "../assets/projects/car-rental.webp";
import ecommerce from "../assets/projects/ecommercewebsite.webp";
import fitness from "../assets/projects/fitness.webp";
import photography from "../assets/projects/photography.webp";
import ecommerceshop from "../assets/projects/ecommerce-shopping.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {

  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, x: 0 });
    }
  }, [controls1, inView1]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, x: 0 });
    }
  }, [controls2, inView2]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, x: 0 });
    }
  }, [controls3, inView3]);

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, x: 0 });
    }
  }, [controls4, inView4]);

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1, x: 0 });
    }
  }, [controls5, inView5]);
  return (
    <div id='projects' className='w-full h-auto py-10'>
      <div className='max-w-[1240px] flex flex-col mx-auto justify-center h-full px-3'>
        <h1 className='text-xl tracking-widest text-[#5651e5] font-semibold'>
          Portfolio
        </h1>
        <h2 className='py-4 text-gray-600'>
          Each project is a unique piece of development
        </h2>
        <div className='w-full lg:h-auto py-7 flex items-center flex-col'>
          <motion.div className='item md:w-[80%] w-full lg:h-[25rem] h-[35rem] flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-lg gap-8 shadowbox mb-10' initial={{ opacity: 0, x: '100'}} animate={controls1} transition={{ duration: 1.6 }} ref={ref1}>
            <div className='rounded-lg lg:w-[53rem] w-auto h-auto shadowbox overflow-hidden trans'>
              <a href='https://car-rental-web-phi.vercel.app/' target="_blank" rel="noreferrer">
                <img src={car_rental} alt='' className=""/>
              </a>
            </div>
            <div className="lg:w-[30rem] w-auto h-auto flex justify-center">
            <div className='w-full h-auto flex flex-col justify-center items-center'>
              <h1 className='text-lg tracking-widest text-black font-bold uppercase'>
                Car Rental
              </h1>
              <p className='pro__textp mt-2'>
                A car rental website is an online platform that allows users to
                rent cars for personal or business use. The website provides an
                interface for searching, comparing, and reserving cars.
              </p>
              <div className='mt-[1rem] gap-[1rem] flex justify-center'>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  React
                </p>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  SCSS
                </p>
              </div>
              <a
                className='flex items-center mt-[2rem] flex-row justify-evenly gap-3'
                href='https://saadelmasrour.github.io/car-rental-web/'
                target="_blank" rel="noreferrer">
                <div className='gap-1'>Live Demo</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='tabler-icon tabler-icon-external-link'>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
              </a>
            </div>
            </div>
          </motion.div>


          <motion.div className='item md:w-[80%] w-full lg:h-[25rem] h-[35rem] flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-lg gap-8 shadowbox mb-10' initial={{ opacity: 0, x: "-100"}} animate={controls2} transition={{ duration: 1.6 }} ref={ref2}>
            <div className="lg:w-[30rem] w-auto h-auto flex justify-center">
            <div className='w-full h-auto flex flex-col justify-center items-center'>
              <h1 className='text-lg tracking-widest text-black font-bold uppercase'>
                Photographer portfolio
              </h1>
              <p className='pro__textp mt-2'>
              Explore a visual journey through captivating moments in this beautiful photographer portfolio. Immerse yourself in a world of stunning images, insightful blog posts and all what you need.
              </p>
              <div className='mt-[1rem] gap-[1rem] flex justify-center'>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  React
                </p>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  Tailwind
                </p>
              </div>
              <a
                className='flex items-center mt-[2rem] flex-row justify-evenly gap-3'
                href='https://photography-app-blue.vercel.app/'
                target="_blank" rel="noreferrer">
                <div className='gap-1'>Live Demo</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='tabler-icon tabler-icon-external-link'>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
              </a>
            </div>
            </div>
            <div className='rounded-lg lg:w-[53rem] w-auto h-auto shadowbox overflow-hidden'>
              <a href='https://photography-app-blue.vercel.app/' target="_blank" rel="noreferrer">
                <img src={photography} alt='' className=""/>
              </a>
            </div>
          </motion.div>


          <motion.div className='item md:w-[80%] w-full lg:h-[25rem] h-[35rem] flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-lg gap-8 shadowbox mb-10' initial={{ opacity: 0, x: "100"}} animate={controls3} transition={{ duration: 1.6 }} ref={ref3}>
            <div className='rounded-lg lg:w-[53rem] w-auto h-auto shadowbox overflow-hidden trans imgdiv'>
              <a href='https://ecommerce-website-contentful.vercel.app/' target="_blank" rel="noreferrer">
                <img src={ecommerce} alt='' className=""/>
              </a>
            </div>
            <div className="lg:w-[30rem] w-auto h-auto flex justify-center detdiv">
            <div className='w-full h-auto flex flex-col justify-center items-center'>
              <h1 className='text-lg tracking-widest text-black font-bold uppercase'>
              ECOMMERCE WEBSITE
              </h1>
              <p className='pro__textp mt-2'>
              With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.
              </p>
              <div className='mt-[1rem] gap-[1rem] flex justify-center'>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  React
                </p>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  Vanilla CSS
                </p>
              </div>
              <a
                className='flex items-center mt-[2rem] flex-row justify-evenly gap-3'
                href='https://ecommerce-website-contentful.vercel.app/'
                target="_blank" rel="noreferrer">
                <div className='gap-1'>Live Demo</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='tabler-icon tabler-icon-external-link'>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
              </a>
            </div>
            </div>
          </motion.div>



          <motion.div className='item md:w-[80%] w-full lg:h-[25rem] h-[35rem] flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-lg gap-8 shadowbox mb-10' initial={{ opacity: 0, x: '-100'}} animate={controls4} transition={{ duration: 1.6 }} ref={ref4}>
            <div className="lg:w-[30rem] w-auto h-auto flex justify-center">
            <div className='w-full h-auto flex flex-col justify-center items-center'>
              <h1 className='text-lg tracking-widest text-black font-bold uppercase'>
                fitness coaching website
              </h1>
              <p className='pro__textp mt-2'>
              With a focus on simplicity and clean design, this website prioritize user experience, making it easy for customers to find the all informations what her need and the best subscription for her situation.
              </p>
              <div className='mt-[1rem] gap-[1rem] flex justify-center'>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  React
                </p>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  Tailwind
                </p>
              </div>
              <a
                className='flex items-center mt-[2rem] flex-row justify-evenly gap-3'
                href='https://fitness-website-zeta-six.vercel.app/'
                target="_blank" rel="noreferrer">
                <div className='gap-1'>Live Demo</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='tabler-icon tabler-icon-external-link'>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
              </a>
            </div>
            </div>
            <div className='rounded-lg lg:w-[53rem] w-auto h-auto shadowbox overflow-hidden trans'>
              <a href='https://fitness-website-zeta-six.vercel.app/' target="_blank" rel="noreferrer">
                <img src={fitness} alt='' className=""/>
              </a>
            </div>
          </motion.div>


          <motion.div className='item md:w-[80%] w-full lg:h-[25rem] h-[35rem] flex justify-between lg:flex-row flex-col p-[1.2rem] bg-white rounded-lg gap-8 shadowbox mb-10' initial={{ opacity: 0, x: '100'}} animate={controls5} transition={{ duration: 1.6 }} ref={ref5}>
            <div className='rounded-lg lg:w-[53rem] w-auto h-auto shadowbox overflow-hidden'>
              <a href='https://ecommerce-shopping-nu.vercel.app/' target="_blank" rel="noreferrer">
                <img src={ecommerceshop} alt='' className=""/>
              </a>
            </div>
            <div className="lg:w-[30rem] w-auto h-auto flex justify-center">
            <div className='w-full h-auto flex flex-col justify-center items-center'>
              <h1 className='text-lg tracking-widest text-black font-bold uppercase'>
                Shopping website 
              </h1>
              <p className='pro__textp mt-2'>
              With a focus on simplicity and clean design with this awesome product page, this website prioritize user experience, making it easy for customers to find and purchase the products they need.
              </p>
              <div className='mt-[1rem] gap-[1rem] flex justify-center'>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  Next
                </p>
                <p className='py-2 px-3 shadow-md shadow-slate-200 stackp'>
                  SCSS
                </p>
              </div>
              <a
                className='flex items-center mt-[2rem] flex-row justify-evenly gap-3'
                href='https://ecommerce-shopping-nu.vercel.app/'
                target="_blank" rel="noreferrer">
                <div className='gap-1'>Live Demo</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='tabler-icon tabler-icon-external-link'>
                  <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6'></path>
                  <path d='M11 13l9 -9'></path>
                  <path d='M15 4h5v5'></path>
                </svg>
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;





















