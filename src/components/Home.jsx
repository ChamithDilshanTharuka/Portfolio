import React from 'react';
import heroimg from '../assets/Cvpic.png'

const Home = () => {
    return <div className='px-7 md:px-10 my-14 md:h-screeen bg-[#1a1a29]' id="home">
            <div>
                <div className="w-full flex flex-col md:flex-row items-center justify-between ">
                {/* texts */}
                <div className='text-white'>
                    <h6 className="text-3xl mt-12">Hello, I'm</h6>
                    <h1 className="font-semibold text-3xl md:text-5xl my-4">Chamith Dilshan</h1>
                    <p className="md:2-96">Undergraduate, with a passion 
                     for crafting simple and impactful digital experiences. </p>
         

                  {/* buttons */}
                  <div className="mt-5">
                  <a href="../assets/cv/CHAMITH DILSHAN.pdf" download="CHAMITH DILSHAN.pdf">
                    <button className="btn bg-primary py-2 px-4 text-white rounded
                     hover:bg-white hover:text-primary transition-all duration-500 ">Download My CV</button>
                  </a>
                  </div>
                </div>
                    {/* img */}
                    <div className="order-first md:order-last relative">
                        <img src={heroimg} alt="heroimg" className="rounded-full max-w-xs md:max-w-[500px]"/>
                    </div>
            </div>
             {/* divider */}
             <div className="w-full h-24 bg-[#181824] mx-auto absolute left-0 hidden md:block">
                       </div>
        </div>
    </div>

};

export default Home;