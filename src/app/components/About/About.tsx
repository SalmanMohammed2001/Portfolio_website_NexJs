'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import style from './about.module.css'


export default function About() {
    return (
      //  pr-80px pl-80px  xl:pl-[250px] xl:pr-[250px]
         <section id="about" className="py-20  w-[100vw]   ">
            <div className={` mx-auto px-6   `}>
                <motion.div
                    className="flex gap-2 flex-col lg:flex-row items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                
                    <div className="md:w-full mb-8 md:mb-0   flex justify-center relative py-5">
                      
                      <div className='   relative p-5'>
                      <Image
                            src="/pic6.png"
                            alt="John Doe"
                            width={500}
                            height={500}
                            className="rounded-lg border shadow-lg   z-10"
                        />
                         <div className='w-[100px] h-[100px]   flex  items-center justify-center rounded-full bg-white absolute bottom-0 left-0  md:w-[150px] md:h-[150px]   '>
                            <Image
                            src={'/download-bg.png'}
                            alt='img'
                            fill
                            /> 
                          <a href="" className='z-10'>
                          <Image
                            src={'/download-icon.png'}
                            alt='img'
                            width={20}
                            height={20}
                            className='z-10'
                            /> 
                          </a>

                         </div>

                         <div className='w-[40px] h-[60px]   flex items-center justify-center  bg-[#80db66]   absolute right-8 bottom-0    '>
                         </div>

                         <div className='md:w-[90px] md:h-[80px]  w-[40px] h-[40px] flex items-center justify-center  bg-[#80db66]  absolute left-0 top-20    '>
                                  </div>

                                  
                      </div>
                       

                       
                       

                    </div>



                    <div className="md:w-full md:pl-12    ">
                        <h2 className="text-[19px]   text-[#80db66]  tracking-widest font font-sans">ABOUT ME</h2>
                        <h2 className='text-[40px] font-medium mb-5 font-serif'>I Develop System that Works</h2>
                        <p className=" mb-6 text-[#4d4d5c] text-[18px] ">
                            Im a passionate creative developer with over 5 years of experience in web design and development.
                            I love bringing ideas to life through clean, efficient code and stunning visuals.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim 
                            id est laboru doloremque laudantium, totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
                        </p>

                     

                        <div className=' grid xl:grid-cols-2 gap-2 mt-3   border-t-2 border-b-2   mb-2'>

                          <div className='  flex  gap-[30px] p-2 '>
                           <div className=' flex flex-col justify-center  ' >
                            <h3 className='text-[18px] font-semibold text-[#4d4d5c] mb-2'>Name</h3>
                            <h3 className='text-[18px] font-semibold text-[#4d4d5c] mb-2'>Age</h3>
                            <h3 className='text-[18px] font-semibold text-[#4d4d5c] mb-2'>Occupation</h3>
                           </div>

                           <div className=' flex flex-col justify-center '>
                           <h3 className='text-[16px]  text-[#4d4d5c] mb-2'>Mohammed Salman</h3>
                            <h3 className='text-[16px]  text-[#4d4d5c] mb-2'>23 Years</h3>
                            {/* <h3 className='text-[16px]  text-[#4d4d5c] mb-2 border'>salmannisthar123@gmail.com</h3> */}
                            <h3 className='text-[16px]  text-[#4d4d5c] mb-2'>Full Stack Developer</h3>
                           </div>
                          </div>


                <hr className=' xl:hidden' />
                  

                              <div className='  flex   gap-[30px] p-2'>
                           <div className=' flex flex-col justify-start ' >
                            <h3 className='text-[18px] font-semibold text-[#4d4d5c] mb-2'>Phone</h3>
                          
                            <h3 className='text-[18px] font-semibold text-[#4d4d5c] mb-2'>Nationality</h3>
                           </div>

                           <div className=' flex flex-col justify-start '>
                           <h3 className='text-[16px]  text-[#4d4d5c] mb-2'>+94 76 008 8930</h3>
                        
                            <h3 className='text-[16px]  text-[#4d4d5c] mb-2'>SriLanka</h3>
                           </div>
                          </div>
                        </div>

                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <span className="text-primary mr-2">✓</span> Front-end Development
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary mr-2">✓</span> UI/UX Design
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary mr-2">✓</span> Backend-end Development
                            </li>
                            <li className="flex items-center">
                                <span className="text-primary mr-2">✓</span> Mobile Development

                            </li>
                        </ul>
                        {/* <a href="#" className="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-300">
                            Download CV
                        </a> */}
                    </div>
                </motion.div>
            </div>
        </section>
      
     
    )
}