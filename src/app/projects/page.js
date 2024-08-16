"use client";
import Footer from "../footer/page";
import Navbar from "../nav/page";
import { useDarkMode } from "../context/DarkModeContext";

export default function Projects() {
    const { darkMode } = useDarkMode();
  
    console.log("Dark Mode is", darkMode); 
    return (
        <>
        <Navbar />
      <div className={`min-h-screen w-full flex flex-col pt-4 items-center ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}`}>
        <h2 className="text-6xl font-bold text-center mt-10">My Projects</h2>
        <p className={` text-center mt-4  ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}`}>
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat<br/> urna tellus.
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className="flex justify-center mt-10 space-x-4">
          <button className="bg-gray-200 text-black px-6 py-2 rounded-lg hover:bg-orange-600 hover:text-white">All</button>
          <button className="bg-gray-200 px-6 py-2 text-black rounded-lg hover:bg-orange-600 hover:text-white">UI/UX</button>
          <button className="bg-orange-500 px-6 text-white py-2 rounded-lg hover:bg-gray-300 hover:text-black">Web Design</button>
          <button className="bg-gray-200 px-6 py-2 text-black rounded-lg hover:bg-orange-600 hover:text-white">App Design</button>
          <button className="bg-gray-200 px-6 py-2 text-black rounded-lg hover:bg-orange-600 hover:text-white">Graphic Design</button>
        </div>
        <div className="grid grid-cols-3 gap-8 mt-10">
          <div className=" p-6 rounded-lg ">
            <img src="/Screenshot 2024-08-16 010127.png" alt="Project" className="rounded-lg mb-4"/>
            <p className="text-orange-600 text-sm">Web Design</p>
            <p className="font-semibold">AirCalling Landing Page Design</p>
          </div>
          <div className=" p-6 rounded-lg ">
            <img src="/Screenshot 2024-08-16 010148.png" alt="Project" className="rounded-lg mb-4"/>
            <p className="text-orange-600 text-sm">Web Design</p>
            <p className="font-semibold">Business Landing Page Design</p>
          </div>
          <div className=" p-6 rounded-lg ">
            <img src="/Screenshot 2024-08-16 010213.png" alt="Project" className="rounded-lg mb-4"/>
            <p className="text-orange-600 text-sm">Web Design</p>
            <p className="font-semibold">Ecom Web Page Design</p>
          </div>
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  