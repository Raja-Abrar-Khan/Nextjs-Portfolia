"use client";
import { GiWhiteBook } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import "../static/comp.css";
import Link from "next/link";
import { useDarkMode } from "../context/DarkModeContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className=" bg-white dark:bg-darkBg dark:text-darkText">
      <nav className="navbar pl-40 px-4 py-2.5 shadow-md">
        <div className="container flex justify-between items-center mx-auto">
          <Link href="/home" className="flex items-center">
            <span className="active font-extrabold  p-2 bg-orange-600  text-white dark:text-black rounded-full size-14 mt-1 mr-2 text-center">MU</span>
            <span className="text-4xl "><b>M</b>umair</span>
          </Link>
          <div className="hidden md:flex space-x-8 justify-between items-center">
            <button onClick={toggleDarkMode} className="ml-4">
              {darkMode ? <MdLightMode className="w-5 h-5"/> : <MdLightMode className="text-black w-5 h-5" />}
            </button>
            <Link href="/home" className="text-gray-800 hover:text-orange-600 dark:text-darkText">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-orange-600 dark:text-darkText">About Me</Link>
            <Link href="/services" className="text-gray-800 hover:text-orange-600 dark:text-darkText">Services</Link>
            <Link href="/projects" className="text-gray-800 hover:text-orange-600 dark:text-darkText">Projects</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-orange-600 dark:text-darkText">Testimonials</Link>
            <Link href="/contact-me" className="text-gray-800 hover:text-orange-600 dark:text-darkText">Contact</Link>
            <a href="#" className="text-white bg-orange-600 px-4 py-2 rounded-md hover:bg-orange-700">
              Download CV
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
}
