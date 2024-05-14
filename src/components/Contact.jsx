import React from 'react';

import facebook from '../assets/socials/facebook.png'
import email from '../assets/socials/email.png';
import Linkedin from '../assets/socials/Linkedin.png';
import github from '../assets/socials/github.png'; 



const Contact = () => {
  return (
    <div className="px-7 md:px-10 my-10" id='contact'>
      <div className="flex flex-col md:flex-row">
        {/* texts and icons */}
        <div className='md:w-1/2'>
          <h1 className="text-3xl mt-16 text-primary font-semibold">Connect with me</h1>
          <p className="text-white my-2 md:w-2/3 leading-[2]">
            Satisfied with me? Please contact me
          </p>
          
           {/* social icons */}
          <div className="flex">
            <a href="mailto:dilshanchamith99@gmail.com"><img src={email} alt=""/></a>
            <a href="https://www.linkedin.com/in/chamith-dilshan-b95034280/" className="ml-4"><img src={Linkedin} alt="" /></a>
            <a href="https://github.com/ChamithDilshanTharuka" className="ml-4"><img src={github} alt="" /></a>

          </div>
        </div>
           
      </div>
    </div>
  );
};

export default Contact;