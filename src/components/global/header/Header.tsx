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
    <header className="flex justify-between w-full px-8 xl:px-24 py-4 bg-white">
      <div className="flex items-center w-48">
        <Link href="/">
            <Image
              src='/images/logo.svg'
              alt="logo"
              className="xs:w-full md:w-[180px] mb-2"
              width={266}
              height={40}
            />
        </Link>
      </div>
      <HumberIcon 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen= { setIsMenuOpen }
      />
      <Nav isMenuOpen={isMenuOpen} />
      <div className="flex items-center justify-between w-[220px]">
        <Login />
        <DefaultBtn 
          text="Start Writing"
          textColor="white" 
          bgColor="#5DA389"
          hoverBgColor="black"
          fontSize="20px"
        />
      </div>
    </header>
  )
}
