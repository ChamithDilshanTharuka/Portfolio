import React from 'react';

const About = () => {
  const skills = [
    { name: 'FRONT- END WEB DEVELOPMENT', image: 'src/assets/icons/code.png' },
    { name: 'BACK- END WEB DEVELOPMENT', image: 'src/assets/icons/code.png' },
    { name: 'FULL- STACK WEB DEVELOPMENT', image: 'src/assets/icons/code.png' },
    { name: 'UI & UX DESIGNING', image: 'src/assets/icons/ruler-pen.png' },
    
  ];
  return (
    <div className="px-7 md:px-10" id="about">
      {/* About Me section */}
      <div className="relative">
        <h1 className="text-3xl mt-5 text-primary font-semibold">About Me</h1>
        <p className="text-white my-2 md:w-2/3 leading-[2]">
          Hi, my name is Chamith Dilshan. I am eagerly seeking internship opportunities
          to apply and enhance my skills in front-end, back-end, and full-stack development.
        </p>
      </div>

      {/* experiences section */}
      <div className="md:flex items-center my-7 relative">
        <p className="text-primary text-8xl font-bold">2+</p>
        <p className="text-white text-2xl md:ml-5">
          Years of experience in web development
        </p>
      </div>

      <p className=" text-white text-4xl md:ml-5">
      INTERSTED   FEILDS
        </p>
      {/* skills card */}
      <div className="flex flex-col md:flex-row">
      
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500"
          >
            <img src={skill.image} alt="" />
            <p className="text-2xl mt-3 text-white font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
