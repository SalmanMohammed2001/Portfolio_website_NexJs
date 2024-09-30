import Image from 'next/image'
import React from 'react'

const Service = () => {

        const projects = [
          {
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution built with React and Node.js.",
            image: "https://blog.powr.io/hs-fs/hubfs/ecommerce-website-example-github.webp?width=801&height=450&name=ecommerce-website-example-github.webp",
            link: "https://github.com/johndoe/task-manager"
          },
          {
            title: "Task Management App",
            description: "A React Native mobile app for managing daily tasks and schedules.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa2n90sG3uFr6PSNqKOwF14Ye9GEXK1ceg_g&s",
            link: "https://github.com/johndoe/task-manager"
          },
          {
            title: "Weather Dashboard",
            description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKo2hdasSNC_JJ-r9LzxlVYPOXOoTotzROA&s",
            link: "https://github.com/johndoe/weather-dashboard"
          },
          {
            title: "Weather Dashboard",
            description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
            image: "https://www.tigren.com/blog/wp-content/uploads/2021/11/ecommerce-design-strategies.png",
            link: "https://github.com/johndoe/weather-dashboard"
          }
        ]




    
  return (
    <section id="projects" className="py-20 bg-[#25262f]  w-[100vw] relative ">

    <div>
      <Image src="/fact-icon2.png" alt='' width={200} height={200} className='absolute top-[-150px]'/>
    </div>

    <div>
      <Image src="/fact-icon2.png" alt='' width={200} height={200} className='absolute bottom-[-100px] right-0'/>
    </div>

      <div className="container    mx-auto px-6">
      <h2 className="text-[25px] font-[500] text-center tracking-[10px]  mb-2 text-green-400">SERVICE</h2>
        <h2 className="text-[60px] font-bold text-center  mb-8 text-white">What I offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8   px-[150px] py-5">
        
            <div  className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white ">

          
  
  <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4l3 8 4-16 3 8h4" />
              </svg>
          </div>
      </div>
      <h2 className="text-xl font-bold text-gray-800">Web Development</h2>
      <p className="text-gray-500 mt-2">Ludantium totam rem aperiam eaque ab tatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

  
     
    </div>

  

         </div>



         <div  className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white ">

          
  
<div className="bg-white p-6 rounded-lg shadow-lg text-center">
    <div className="flex justify-center mb-4">
      
        <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h4l3 8 4-16 3 8h4" />
            </svg>
        </div>
    </div>
    <h2 className="text-xl font-bold text-gray-800">Web Development</h2>
    <p className="text-gray-500 mt-2">Ludantium totam rem aperiam eaque ab tatis et quasi architecto beatae vitae dicta sunt explicabo.</p>


   
  </div>



       </div>



       <div  className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white ">
       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
                
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">System Development</h2>
            <p className="text-gray-500 mt-2">Ludantium totam rem aperiam eaque ab tatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>

       </div>




       <div  className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white ">
       <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 9.172a4 4 0 10-5.656 5.656M9.172 9.172A4 4 0 1010.5 13.5M15.5 12.5a7 7 0 10-11 11M7.5 17.5a5 5 0 106 6M3 9h2a5 5 0 0110 0h2a7 7 0 10-14 0zm8 7h2a5 5 0 110 10h-2a7 7 0 110-14z" />
                    </svg>
                </div>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Security Analysis</h2>
            <p className="text-gray-500 mt-2">Ludantium totam rem aperiam eaque ab tatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
        </div>

       </div>

        </div>
      </div>
    </section>
  )
}

export default Service