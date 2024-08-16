"use client";
import Link from "next/link";
import "../static/comp.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useDarkMode } from "../context/DarkModeContext";

export default function Footer() {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
    return (
      <footer className={` py-8 ${darkMode ? 'bg-darkBg text-darkText' : 'bg-grey-400 text-black'} `}>
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4 pb-6">
          {/* <a href="#" className="flex items-center"> */}
         <span className="active-footer text-white dark:text-black font-extrabold p-2 rounded-full size-10 mt-1 mr-2 text-center ">MU</span>
          <span className="text-3xl font-light"><b className="font-bold">M</b>umair</span>
        {/* </a> */}
          </div>
          <div className="flex justify-center space-x-8 pb-4">
            <Link href="/home">Home</Link>
            <Link href="/about">About Me</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact-me">Contact</Link>
          </div>
          <div className="pr-28 flex  justify-center space-x-4 mb-4 pb-4 ">
          <a className="pl-28" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl dark:text-darkText text-black " />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl dark:text-darkText text-black " />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl dark:text-darkText text-black " />
        </a>
        <a className="" href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl dark:text-darkText text-black " />
        </a>
          </div>
          <div className="flex flex-row justify-center bg-neutral-600 h-16">
            <span className=" flex flex-row m-6 text-white">
          <p className="text-white">&copy; 2023</p><p className="text-orange-600">&nbsp; Mumair&nbsp;</p> <p> All Rights Reserved , Inc.</p>
          </span>
          </div>
        </div>
      </footer>
    );
  }
  