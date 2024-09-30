import React from 'react'
import style from './stringht.module.css'
import Image from 'next/image'
const Stringht = () => {




  return (
    <section id="projects" className="py-20 bg-[#e2ecf6]  w-[100vw] ">
      <div className="container  p-5  mx-auto px-6">
       <div className={`  flex justify-center items-center flex-col p-3   md:grid   md:grid-cols-2  lg:grid-cols-3 2xl:grid-cols-4 gap-3` }>
        
        <div className={`${style.inner_dive} bg-white  flex  items-center shadow-md  p-3   w-[100%]`}>
       <div className='flex flex-col    gap-[30px]  w-[100%]' >
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