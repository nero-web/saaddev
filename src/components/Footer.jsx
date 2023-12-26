import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-auto mt-5">
            <div className="max-w-[1240px] mx-auto h-auto py-5 px-5">
                <div className="flex justify-between items-center md:flex-row flex-col">
                    <div className="font-semibold md:mb-5 mb-5 flex flex-col md:items-start items-center text-lg">
                        <div className="flex flex-row items-center mb-2">
                            <IoMailOutline size={25}/>
                            <a href="mailto:saadelmasrour21@gmail.com" className="ml-2">saadelmasrour21@gmail.com</a>
                        </div>
                        <div className="flex flex-row items-center mb-2">
                            <TbPhoneCall size={25}/>
                            <p className="ml-2">+212772248889</p>
                        </div>
                        <div className="text-center">© Copyright By Saad El Masrour.</div>
                    </div>
                    <div className="flex flex-col text-lg font-semibold">
                    <p className="mb-3">MY SOCIAL MEDIA</p>
                    <div className="gap-x-4 items-center flex justify-center">
                        <a href="https://www.instagram.com/saad_el_masrour/" className="max-w-full inline-block" target='_blank' rel='noreferrer'>
                        <FaInstagram size={25}/>
                        </a>
                        <a href="https://twitter.com/SaadElmasrour" className="max-w-full inline-block" target='_blank' rel='noreferrer'>
                        <BsTwitterX size={25}/>
                        </a>
                        <a href="mailto:saadelmasrour21@gmail.com" className="max-w-full inline-block" target='_blank' rel='noreferrer'>
                        <AiOutlineMail size={25}/>
                        </a>
                        <a href="https://www.linkedin.com/in/saad-el-masrour-89a1b1237/" className="max-w-full inline-block" target='_blank' rel='noreferrer'>
                        <FaLinkedinIn size={25}/>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;