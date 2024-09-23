import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js.",
      image: "/project-images/project1.jpg",
      link: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A React Native mobile app for managing daily tasks and schedules.",
      image: "/project-images/project2.jpg",
      link: "https://github.com/johndoe/task-manager"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard using OpenWeatherMap API and Vue.js.",
      image: "/project-images/project3.jpg",
      link: "https://github.com/johndoe/weather-dashboard"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white border border-gray-950">
      <div className="container border border-gray-950  mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
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