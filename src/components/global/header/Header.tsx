"use client";

import { useState } from "react";

import '../../../app/globals.css';
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import HumberIcon from "./HumberIcon";
import Login from "@/components/Login/Login";
import DefaultBtn from "@/components/global/DefaultBtn";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex flex-wrap justify-between w-full px-4 xl:px-24 py-4 bg-white">
      <div className="flex items-center">
        <Link href="/">
            <Image
              src='/images/logo.svg'
              alt="logo"
              width={185}
              height={28}
              className="w-auto h-auto"
            />
        </Link>
      </div>
      <HumberIcon 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen= { setIsMenuOpen }
      />
      <Nav isMenuOpen={isMenuOpen} />
      <div className="flex items-center justify-between w-full md:w-[220px] mt-4 md:mt-0">
        <Link href="/login" className="flex w-full md:w-80 md:text-black text-white text-xl md:text-[14px] xl:text-xl px-2 py-2 md:p-0 
          hover:text-[#5DA389] font-medium transition-colors duration-300">
            Login
        </Link>
        <DefaultBtn 
          text="Start Writing"
          textColor="primary" 
          hovertextColor="secondary" 
          fontSize="20px"
          bgColor="#5DA389"
          hoverBgColor="black"
          size="small"
        />
      </div>
    </header>
  )
}
