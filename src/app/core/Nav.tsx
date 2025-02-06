import React from 'react'
import Image from "next/image";
import Link from 'next/link.js';

export default function Nav() {
  return (
    <div className=" fixed top-0 w-full z-40  p-8 bg-primary text-white flex items-center justify-around h-[10vh] ">
    <div className="flex items-center gap-2">
      <div className="text-3xl bg-btnBackground p-1 rounded-full max-ssm:text-xl">W</div>
      <h1 className=" text-xl max-sm:hidden">Wilfried<span className="text-3xl text-blue-">.</span></h1>
    </div>
    <div className="flex items-center gap-7">
      <nav>
        <ul className="flex items-center justify-center gap-5 max-ssm:gap-2">
          <li className="cursor-pointer"> <Link href={'/'}>Home</Link></li>
          <li className="cursor-pointer"><a href="#about">About</a></li>
          <li className="cursor-pointer"><a href="#services">Services</a></li>
          <li className="cursor-pointer"><a href="#projet">Projets</a></li>
          <li className="cursor-pointer"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className=' hidden md:visible'>
        <div className="md:flex gap-2">
          <a href="https://web.facebook.com/me/" >
            <Image src= "/assets/svg/facebook.svg" alt="" width={8} height={5} className='bg-btnBackground w-8 h-5 p-1 rounded-xl'></Image>
          </a>
          <a href="https://www.linkedin.com/in/tankwe-diffo-wilfried-686638280/" >
            <Image src="/assets/svg/linkedin.svg" alt='' width={8 } height={5} className='bg-btnBackground w-8 h-5 p-1 rounded-xl'></Image>
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}