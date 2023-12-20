/** @format */

import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import des from "../assets/Mockup2.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ybe1dn",
        "template_mki2vdn",
        form.current,
        "DBUNlHG2kaCe_frIL"
      )
      .then(
        result => {
          console.log(result.text);
          form.current.reset();
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id='contact' className='w-full h-auto py-10'>
      <div className='max-w-[1240px] flex flex-col mx-auto justify-center h-auto px-3'>
        <div className='w-full h-auto flex justify-between lg:flex-row flex-col'>
          <div className='h-auto justify-between flex flex-col lg:w-[50%] w-full gap-y-10'>
            <h1 className='lg:text-start text-center'>Let's Connect</h1>
            <div className='text-lg'>
              I'm always open to new opportunities and collaborations. If you
              have a project in mind or want to discuss how I can contribute to
              your team, please don't hesitate to reach out. You can find my
              contact information on this site.
            </div>
            <div className='flex-col flex justify-between gap-y-5'>
              <div className='w-full flex flex-wrap lg:justify-start justify-center lg:gap-x-0 gap-x-6 gap-y-5'>
                <div
                  className='lg:w-[45%] w-auto'>
                  <div className='flex flex-row text-gray-500 items-center gap-5 h-auto text-xl font-bold'>
                    <div className=' bg-gray-500 text-white rounded-full'>
                      <a href="https://www.instagram.com/saad_el_masrour/" target='_blank' rel='noreferrer'>
                      <FaInstagram size={30} className='m-4' />
                      </a>
                    </div>
                    <p className='lg:block hidden'>Intagram</p>
                  </div>
                </div>
                <div
                  className='lg:w-[45%] w-auto'>
                  <div className='flex flex-row text-gray-500 items-center gap-5 h-auto text-xl font-bold'>
                    <div className=' bg-gray-500 text-white rounded-full'>
                      <a href="https://twitter.com/SaadElmasrour" target='_blank' rel='noreferrer'>
                      <BsTwitterX size={25} className='m-4' />
                      </a>
                    </div>
                    <p className='lg:block hidden'>Twitter</p>
                  </div>
                </div>
                <div
                  className='lg:w-[45%] w-auto'>
                  <div className='flex flex-row text-gray-500 items-center gap-5 h-auto text-xl font-bold'>
                    <div className=' bg-gray-500 text-white rounded-full'>
                      <a href="mailto:saadelmasrour21@gmail.com" target='_blank' rel='noreferrer'>
                      <AiOutlineMail size={30} className='m-4' />
                      </a>
                    </div>
                    <p className='lg:block hidden'>Email</p>
                  </div>
                </div>
                <div
                  className='lg:w-[45%] w-auto'>
                  <div className='flex flex-row text-gray-500 items-center gap-5 h-auto text-xl font-bold'>
                    <div className=' bg-gray-500 text-white rounded-full'>
                      <a href="https://www.linkedin.com/in/saad-el-masrour-89a1b1237/" target='_blank' rel='noreferrer'>
                      <FaLinkedinIn size={25} className='m-4' />
                      </a>
                    </div>
                    <p className='lg:block hidden'>LinkedinIn</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center lg:w-[45%] w-full'>
            <img src={des} alt='' className='w-full h-full' loading="lazy"/>
          </div>
        </div>
        <div className='w-full h-auto mt-20'>
          <div className='w-full '>
            <h1 className='mb-8 text-center text-3xl text-gray-600'>
              Send me an Email
            </h1>
            <div>
              <form
                autoComplete='off'
                action=''
                className='flex flex-col py-10'
                ref={form}
                method='send'
                onSubmit={sendEmail}>
                <div className='flex md:flex-row flex-col justify-center gap-x-3 items-center'>
                  <div className='flex flex-col md:w-[45%] w-full gap-y-10'>
                    <input
                      type='text'
                      name='from_name'
                      required
                      placeholder='Name'
                      className='w-full min-h-[40px] text-gray-700 border-b-2 bg-transparent h-[60px] px-2 py-3 text-2xl leading-7 block out border-gray-600 outline-none'
                    />
                    <input
                      type='email'
                      name='from_email'
                      required
                      placeholder='Email'
                      className='w-full min-h-[40px] text-gray-700 border-b-2 bg-transparent mb-4 h-[40px] px-2 py-3 text-2xl leading-7 block out border-gray-600 outline-none'
                    />
                  </div>
                  <textarea
                    name='message'
                    type='text'
                    maxLength={5000}
                    required
                    placeholder='Message ....'
                    className='md:w-[45%] w-full h-[300px] text-gray-700 bg-transparent rounded mb-4 px-2 py-3 text-2xl leading-7 block out border-2 border-gray-600 outline-none'></textarea>
                </div>
                <div className='w-full flex justify-end h-auto px-8'>
                  <input
                    className='bg-gray-600 hover:bg-black cursor-pointer w-24 text-white rounded py-3 border-2 transition duration-500 mt-4'
                    type='submit'
                    value='Send'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
