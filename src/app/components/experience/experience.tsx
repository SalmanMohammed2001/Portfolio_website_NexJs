import Image from 'next/image';
import React from 'react'

const Experience = () => {
  return (
    <section id="projects" className="py-20  w-[100vw] relative">
        <div className="     mx-auto   flex flex-col-reverse  lg:flex-row container lg:max-w-[100%] gap-[80px]  ">

            <div className=' w-[100%] lg:w-[45%]  h-[450px] lg:h-auto  relative '>
             <Image src={"/work-img.jpg"} alt='dd' fill className='p-5 lg:p-0' />
            </div>

            <div className=' lg:w-[750px] '>
                <div className='lg:pt-[150px] lg:pb-[100px]  p-3'>
                  
                  <h3  className='text-[#80db66] font-[500] text-[18px]  tracking-[5px]'>Work Experience</h3>
                  <h3  className=' font-bold text-[48px]  tracking-[2px]'>My Experience</h3>
                  <p className='text-[#4d4d5c] text-lg'>Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem.

</p>
                <div>
                     {/* Masters in Computer Science */}
          <div className="flex items-center p-6 rounded-lg ">
            <div className="w-20 h-16 bg-green-500 text-white flex items-center justify-center rounded-md ">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0-5l-9 5m9-5l9 5" />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800">Masters in Computer Science</h2>
              <p className="text-gray-600">New York University (2012 - 2016)</p>
              <p className="text-gray-500 mt-2">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>

           {/* Bachelor in Computer Engineering */}
           <div className="flex items-center p-6 rounded-lg ">
            <div className="w-20 h-16 bg-green-500 text-white flex items-center justify-center rounded-md">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0-5l-9 5m9-5l9 5" />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800">Bachelor in Computer Engineering</h2>
              <p className="text-gray-600">Dhaka University (2008 - 2011)</p>
              <p className="text-gray-500 mt-2">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>

          {/* Diploma in Graphic Design */}
          <div className="flex items-center  p-6 rounded-lg ">
            <div className="w-20 h-16 bg-green-500 text-white flex items-center justify-center rounded-md">
              <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0-5l-9 5m9-5l9 5" />
              </svg>
            </div>
            <div className="ml-6">
              <h2 className="text-2xl font-bold text-gray-800">Diploma in Graphic Design</h2>
              <p className="text-gray-600">Bangla College (2006 - 2008)</p>
              <p className="text-gray-500 mt-2">
                Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>

                </div>

                </div>

          </div>

     
        </div>


    </section>
  )
}

export default Experience;