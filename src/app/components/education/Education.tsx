"use client"
import React, { useState, useEffect } from 'react';

const educationData = [
  {
    id: 'edu1',
    degree: "Master of Science",
    field: "Computer Science",
    institution: "Tech University",
    location: "San Francisco, CA",
    graduationYear: "2023",
    gpa: "3.9",
    courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems"],
    projects: [
      "Developed a distributed machine learning system for real-time data processing",
      "Created a blockchain-based voting system as part of the capstone project"
    ],
    achievements: [
      "Graduate Research Assistant",
      "Best Thesis Award"
    ]
  },
  {
    id: 'edu2',
    degree: "Bachelor of Science",
    field: "Software Engineering",
    institution: "State University",
    location: "New York, NY",
    graduationYear: "2021",
    gpa: "3.8",
    courses: ["Data Structures", "Web Development", "Database Systems"],
    projects: [
      "Built a full-stack e-commerce platform using React and Node.js",
      "Developed a mobile app for campus navigation"
    ],
    achievements: [
      "Dean's List 2019-2021",
      "Hackathon Winner 2020"
    ]
  }
];

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="py-4 px-6">{children}</div>}
    </div>
  );
};

const EducationPage = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-mount');
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
      }, index * 200);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 flex items-center animate-on-mount opacity-0">
        My Educational Journey
      </h1>
      
      {educationData.map((edu, index) => (
        <div key={edu.id} className="mb-8 animate-on-mount opacity-0 transition-all duration-500 ease-out transform translate-y-4 hover:shadow-lg bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{edu.degree} in {edu.field}</h2>
                <p className="text-lg text-gray-600">{edu.institution}, {edu.location}</p>
              </div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {edu.graduationYear}
              </span>
            </div>
            <p className="mt-4">GPA: {edu.gpa}</p>
            
            <div className="mt-6">
              <AccordionItem title="Key Courses">
                <ul className="list-disc pl-6">
                  {edu.courses.map((course, index) => (
                    <li key={index} className="animate-fade-in-left" style={{animationDelay: `${index * 100}ms`}}>{course}</li>
                  ))}
                </ul>
              </AccordionItem>
              
              <AccordionItem title="Notable Projects">
                <ul className="list-disc pl-6">
                  {edu.projects.map((project, index) => (
                    <li key={index} className="animate-fade-in-left" style={{animationDelay: `${index * 100}ms`}}>{project}</li>
                  ))}
                </ul>
              </AccordionItem>
              
              <AccordionItem title="Achievements">
                <ul className="list-disc pl-6">
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} className="animate-fade-in-left" style={{animationDelay: `${index * 100}ms`}}>{achievement}</li>
                  ))}
                </ul>
              </AccordionItem>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationPage;