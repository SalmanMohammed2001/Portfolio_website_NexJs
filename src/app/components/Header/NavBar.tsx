"use client"

import { useEffect, useRef, useState } from 'react'
import style from './navBar.module.css'
import Image from 'next/image';
import { IoIosCloseCircle, IoLogoTwitter } from 'react-icons/io';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


export default function NavBar() {


    const headerRef =  useRef<HTMLDivElement>(null); 

    const[open,setOpen]=useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    headerRef.current.classList.add(`${style.sticky_header}`);
                } else {
                    headerRef.current.classList.remove(`${style.sticky_header}`);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header className={`${style.navcontainer} `}  ref={headerRef}>
            <nav className={` container  hidden   justify-end  gap-[50px] items-center   lg:flex `}>
             <ul className={`flex gap-[40px] text-lg`}>
              <li><a href="#about" className="text-white hover:text-green-400">About</a></li>
              <li><a href="#skills" className="text-white hover:text-green-400">Skills</a></li>
              <li><a href="#skills" className="text-white hover:text-green-400">Education</a></li>
              <li><a href="#projects" className="text-white hover:text-green-400">Projects</a></li>
              <li><a href="#contact" className="text-white hover:text-green-400">Contact</a></li>
            </ul>
            <a className='py-[10px] px-[18px] border border-green-400 text-white text-sm rounded-md cursor-pointer hover:bg-green-400'>DOWNLOAD CV</a>
      </nav>
    
      <Image  alt='menu' className={style.menuMutton}src={'/menu.png'} width={20} height={30} onClick={()=>setOpen((pre)=>!pre)}/>


            {
                open &&   <div className={`${style.mobileLinks} lg:hidden`}>

                <div className='pr-5 pt-5 flex justify-end '>
                <IoIosCloseCircle  className={style.closeButton}  onClick={()=>setOpen((pre)=>!pre)}/>
                </div>

                <div className='w-[100%] h-[100%] gap-[50px] flex items-center justify-center flex-col' onClick={()=>setOpen((pre)=>!pre)}>   

                <ul className={`flex gap-[40px] text-lg items-center justify-center flex-col  `}>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#skills" className="text-white">Skills</a></li>
              <li><a href="#skills" className="text-white ">Education</a></li>
              <li><a href="#projects" className="text-white ">Projects</a></li>
              <li><a href="#contact" className="text-white ">Contact</a></li>
            </ul>

                <div className='w-[100%] h-[80px] border flex items-center justify-center gap-[20px]'>
                <div className={`${style.links}`}>
       
       <a href="" className='w-[100%] h-[100%] flex items-center justify-center'>
       <FaFacebookF className={style.rotate} size={30}/>
</a>
       
       </div>
       
       <div className={`${style.links}`}>
       <a href="" className='w-[100%] h-[100%] flex items-center justify-center'>
       <FaLinkedinIn className={style.rotate} size={30}/>
</a>
       </div>
       
       <div className={`${style.links}`}>
       <a href="" className='w-[100%] h-[100%] flex items-center justify-center'>
       <IoLogoTwitter  className={style.rotate} size={30}/>
</a>
       </div>
       
       <div className={`${style.links}`}>
       <a href="" className='w-[100%] h-[100%] flex items-center justify-center'>
       <FaInstagram className={style.rotate} size={30}/>
</a>
       
   </div>
                </div>


                    </div>    
   
                </div>
       
            }



        </header>
    )
}