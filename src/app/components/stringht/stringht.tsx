import React from 'react'
import style from './stringht.module.css'
import Image from 'next/image'
const Stringht = () => {



    const projects = [
        {
          title: "E-commerce Platform",
          description: "A full-stack e-commerce solution built with React and Node.js.",
          image: "/intro-ft-icon1.png",
          link: "https://github.com/johndoe/ecommerce-platform"
        },
        {
          title: "Task Management App",
          description: "A React Native mobile app for managing daily tasks and schedules.",
          image: "/intro-ft-icon2.png",
          link: "https://github.com/johndoe/task-manager"
        },
        {
          title: "Weather Dashboard",
          description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
          image: "/intro-ft-icon3.png",
          link: "https://github.com/johndoe/weather-dashboard"
        },
        {
            title: "Weather Dashboard",
            description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
            image: "/intro-ft-icon4.png",
            link: "https://github.com/johndoe/weather-dashboard"
          }
        
      ]
    
  return (
    <section id="projects" className="py-20 bg-[#e2ecf6]">
      <div className="container  p-5  mx-auto px-6">
       <div className={`  flex justify-center items-center flex-col  pl-8  md:grid   md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-3` }>
        
        <div className={`${style.inner_dive} bg-white  flex  items-center shadow-md  p-3`}>
       <div className='flex flex-col    gap-[30px]' >
       <Image
                src={'/intro-ft-icon1.png'}
                alt={"icon"}
                width={400}
                height={200}
                className="w-[50px] "/>

            <h1>Dedication</h1>
            <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</p>
       </div>
        </div>

        <div className={`${style.inner_dive} bg-white  shadow-md flex items-center p-3 lg:mt-[150px]`}>
        <div className='flex flex-col    gap-[30px]' >
        <Image
                src={'/intro-ft-icon2.png'}
                alt={"icon"}
                width={400}
                height={200}
                className="w-[50px] "/>

            <h1>Smart Work</h1>
            <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</p>
        </div>
        </div>

        <div className={`${style.inner_dive} bg-white  shadow-md flex  items-center p-3 `}>
        <div className='flex flex-col    gap-[30px]' >
        <Image
                src={'/intro-ft-icon3.png'}
                alt={"icon"}
                width={400}
                height={200}
                className="w-[50px] "/>

            <h1>Collaboration</h1>
            <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</p>
        </div>
        </div>
        <div className={`${style.inner_dive} bg-white  shadow-md flex  items-center p-3  lg:mt-[150px] `}>
        <div className='flex flex-col    gap-[30px]' >
        <Image
                src={'/intro-ft-icon4.png'}
                alt={"icon"}
                width={400}
                height={200}
                className="w-[50px] "/>

            <h1>Technology</h1>
            <p>Seaque ipsa quae ab illo inven tore veritatis et qua si architecto beatae atis et sopno vitae.</p>
        </div>
        </div>

       </div>
      </div>
    </section>
  )
}

export default Stringht