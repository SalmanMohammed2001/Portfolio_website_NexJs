import Image from 'next/image'

export default function Projects() {
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
      <Image src="/fact-icon2.png" alt='' width={200} height={200} className='absolute bottom-[-100px] ri'/>
    </div>
      <div className="container    mx-auto px-6">
        <h2 className="text-3xl font-bold text-center  mb-8 text-white">My Recent Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md  transition-transform transform hover:scale-105 hover:bg-transparent hover:text-white ">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 "
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className=" mb-4 hover:text-white">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}