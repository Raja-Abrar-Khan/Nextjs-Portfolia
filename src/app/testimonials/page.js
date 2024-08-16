"use client";
import Footer from "../footer/page";
import Navbar from "../nav/page";
import"../static/comp.css";
import { useDarkMode } from "../context/DarkModeContext";

export default function Testimonials() {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
  return (
    <>
      <Navbar />
      <div className={`min-h-screen w-full flex flex-col pt-4 items-center  ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'} `}>
        <h2 className="text-6xl font-bold text-center mt-10">Testimonials</h2>
        <p className="dark:text-darkText text-gray-600 text-center mt-4">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec<br /> morbi convallis pretium.Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className=" justify-center  mt-10 mb-16">

          <div className="flex flex-row marnig bg-gray-100 p-8 rounded-lg shadow-lg w-2/5 ">
            <img className="flex-col w-2/6 h-52 rounded-full" src="/Screenshot 2024-08-16 011437.png" alt="Person"  />
            <div className="flex-col">
              <p className="mt-4 text-gray-700 pl-2">
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.
              </p>
              <div>
                <p className="font-semibold pl-2">Name</p>
                <p className="text-sm text-gray-500 pl-2">CEO</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center space-x-1">
          <div className="h-3 w-10 rounded-lg bg-gray-200"></div>
          <div className="h-3 w-10 rounded-lg bg-orange-500"></div>
          <div className="h-3 w-10 rounded-lg bg-gray-200"></div>
          
          <div className="h-3 w-10 rounded-lg bg-gray-200"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
