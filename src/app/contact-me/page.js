"use client";
import Navbar from "../nav/page";
import Footer from "../footer/page";
import "../static/comp.css";
import { useDarkMode } from "../context/DarkModeContext";

export default function Contact() {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
    return (
        <>
        <Navbar />
      <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}`}>
        <h1 className="text-6xl font-bold">Lets Design Together</h1>
        <p className="dark:text-darkText mt-4 text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. <br/>Aliquet donec morbi convallis pretium.
        </p>
        <div className=" mt-8 flex flex-row pt-8 space-x-4 w-2/4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-3/4  pt-2 px-4 py-2 border bg-gray-100 border-gray-300 rounded focus:outline-none "
          />
          <button className="w-1/4 pl-4 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
            Contact Me
          </button>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  