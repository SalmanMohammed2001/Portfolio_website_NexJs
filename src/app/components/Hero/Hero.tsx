'use client'

import Image from 'next/image'
import style from './hero.module.css'

import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'

export default function Hero() {
    return (
        <main className={`${style.herocontainer} hero_section `}>


            <div className={`${style.sideLinks}  `}>

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



            <div className={`${style.outer}`}>
            <div className={`${style.textSectionContainer} `}>

                <div className='w-[100%]      flex flex-col  pt-8 '>

                    <h1 className={`${style.hello_text} text-green-400   `}>HELLO I'M</h1> 



                <div className='flex  flex-col items-center gap-[60px]'>

                <div className=' relative flex  last-child: ' >
                  <h1 className={`${style.name_text} `}>Mohammed <br/> <span className='pl-3'>Salman</span> </h1>
                  </div>
                
                 <div className={`${style.animationDiv}`}>
                 <h4 className={`${style.animationtext1}`}>A passinate Software</h4>
                 <span data-text="Developer..." className={`${style.animationtext2}`}>Developer...</span>
                 </div>
               
                 <a className='py-[20px] px-[55px] border  bg-green-400 text-white text-sm rounded-md cursor-pointe border-none'>Hire ME</a>

                </div>

               
                

                </div>
            </div>
            
            <div className={`${style.imageSectionContainer}`}>

            <div className='w-[100%]     flex flex-col gap-[40px] pt-8  items-center relative '>
                 
        
 
                 <Image src="/ct.png"      alt="Sunset"    className={style.heroImg}    
      
        height={100}
        width={400} />
                 
                </div>
           </div>
            </div>
        </main>
    )
    
}