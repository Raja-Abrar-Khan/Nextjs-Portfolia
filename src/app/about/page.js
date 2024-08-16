"use client";
import Navbar from "../nav/page";
import Footer from "../footer/page";
import { useDarkMode } from "../context/DarkModeContext";

// pages/about.js
import React from 'react';

const About = () => {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
  return (
    <>
    <Navbar/>
    <div className={`about-me flex flex-row w-full h-full justify-center items-center min-h-screen  ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}`}>
        <div className="flex flex-col items-center w-2/4 h-full">
          <img
            src="/Screenshot_2024-08-14_181636-removebg-preview.png"
            alt="About Me"
            className="mt-28 w-3/4 h-max"
          />

          </div>



          <div className="flex flex-col w-2/4 pr-20">
          <h2 className="text-5xl font-bold mt-4">About Me</h2>
          <p className="dark:text-darkText text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        
        <div className="mt-8">
          <div className="mb-4">
            <span>UX</span>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: '90%' }}>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <span>Website Design</span>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span>App Design</span>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <span>Graphic Design</span>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-orange-500 h-full rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
        </div>

      </div>
      <Footer/>
    </>
  );
};

export default About;
