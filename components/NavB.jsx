"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavB = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div>
        <Image src="/assets/images/logo.png" alt="Logo" width={70} height={34} />
      </div>
      <div className={`absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${isMenuOpen ? '' : 'hidden'}`}>
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <Link href="#" className="hover:text-gray-500">Products</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-500">Solution</Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-500">Resource</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default NavB;
