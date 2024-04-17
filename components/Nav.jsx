"use client";

import Image from "next/image";
import Link from "next/link";
import Nlink from "./Nlink";
import { useState } from "react";
import { navLinks } from "@/constants";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="px-4 py-2 flex justify-between items-center lg:mx-8 lg:mr-16 font-semibold">
      <div className="flex justify-between z-20">
        <Image src="/assets/images/logo.png" alt="Logo" width={60} height={34} />
        <button onClick={toggleMenu} className="absolute sm:hidden  rounded-full top-3 right-5 focus:outline-none">
          <i className={`fa-2xl fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>
      <nav className="md:flex md:items-center space-x-4 ">
        <ul className="hidden sm:flex sm:items-center justify-center sm:space-x-4 font-bold">
          {navLinks.map((lien) => (
            <Nlink item={lien} key={lien.path}/>
          ))}
        </ul>
        <div> {
          isMenuOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 opacity-80 bg-slate-300 z-10" onClick={toggleMenu}></div>
          )
          } 
          {
          isMenuOpen ? (
              <div className="fixed top-16 left-4 bg-slate-50 h-1/2 w-80 z-30 pl-8 pr-4 pt-10 rounded-lg border-slate-400 text-xl">
                <ul className="flex flex-col gap-8">

                  <Link href={"#"} className="hover:opacity-70 flex justify-between">
                    <p>Work</p>
                    <i className="fa-solid fa-angle-right"></i>          
                  </Link>
                  <Link href={"#"} className="hover:opacity-70 flex justify-between">
                    <p>About</p>
                    <i className="fa-solid fa-angle-right"></i>          
                  </Link>
                  <Link href={"#"} className="hover:opacity-70 flex justify-between">
                    <p>Blog</p>
                    <i className="fa-solid fa-angle-right"></i>          
                  </Link>
                  <Link href={"#"} className="hover:opacity-70 flex justify-between">
                    <p>Contact</p>
                    <i className="fa-solid fa-angle-right"></i>          
                  </Link>
                  </ul>
              </div>
          ):(
            <div></div>
          )}
        </div>
      
      
      </nav>
    </header>
  );
};

export default Nav;
