import React from 'react';

const Projects = () => {
  const projects = [
  {
    title:"Todo List Web Application",
    description:"This simple web application is a Todo List App with MERN Stack.",
    photo: "/src/assets/projects/todo.png",
    githubLink: "https://github.com/ChamithDilshanTharuka/Todo-List" 
  },
  {
    title:"Perfume E-Commerce web site (Group Project)",
    description:"It offers a user-friendly platform and simplifies exam scheduling for the Exam Department.",
    photo: "/src/assets/projects/perfumeland.png",
    githubLink: "https://github.com/ChamithDilshanTharuka/PerfumeLand-Website"
  },
  {
    title:"Exam Scheduling Website for CINEC Campus Exam Department (Group Project)",
    description:"This simple web application is a Todo List App with MERN Stack.",
    photo: "/src/assets/projects/exam.png",
  },
  {
    title:"Weather App Web Application",
    description:"Web application which fetch data from API to search Weather in any city.",
    photo: "/src/assets/projects/weather.png",
    githubLink: "https://github.com/ChamithDilshanTharuka/Weather-App"
  },
];

  return <div className="px-7 md:px-10 my-8" id="projects">
       <h1 className="text-3xl mt-5 text-primary font-semibold">Projects</h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
          Here are some projects I have worked on,
        </p>


    {/* featured projects */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
      {
        projects.map((project, index) => <div key={index} className="flex flex-col shadow-sm md:w-[343px]
        bg-[#31313f] rounded p-4">
          <a href={project.photo} className="mb-4">
            <img src={project.photo} alt="" />
          </a>
          <h3 className="text-primary font-semibold text-lg">{project.title}</h3>
          <p className="text-white mt-1">{project.description}</p>

          {/* buttons */}
          <div className="mt-5">
          <a href={project.githubLink} className="btn outline px-10 py-2 rounded border-none text-white ml-10">GitHub</a>
                  </div>
        </div> )
      }
      </div>
    </div>;
};

export default Projects;