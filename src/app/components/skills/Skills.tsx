

export default function Skills() {
    const skills = [
      "JavaScript", "React","NextJs", "Node.js","MongoDb","C#", "Python", "MySQL","MsSQL", "Git",
      "AWS", "Docker", "GraphQL", "TypeScript", "Next.js", "Tailwind CSS", "Spring Boot","Java","Hibernate","Angular",
      "Redux","Ngrx","Flutter"
    ]
  
    return (
      <section id="skills" className="py-20  p-5 ">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-white text-[#80db66] px-4 py-2 rounded-full shadow-md">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }