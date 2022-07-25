import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import './FontGrad.css';
import photo from './photo.png'


function TopBody() {
  return (
    <>
      <div className=" flex md:justify-around flex-col md:flex-row p-9 m-9 md:h-screen md:w-full">
        <div className="flex flex-col sm:pt-32">
         
            <p className="text-gray-100 text-5xl font-normal font4 ">I am Nayan</p>
            <p className="text-orange-500 text-4xl py-3 font1 grad4 md:text-6xl"> I am a developer</p>
            <div className=" rounded-xl  flex flex-wrap "><p className="font5 text-white text-sm opacity-80 md:text-base">Welcome to my portfolio page. This page is created with the help if ReactJs, TailwindCss,<br></br> Boostrap and other features...</p></div>
           <div className="text-white  p-2 text-base md:text-xl flex-row flex"> <a href="" className="p-1"><FaFacebook /></a> <a href="" className="p-1"><FaInstagram /></a> <a href="https://www.linkedin.com/in/nayan-nath-8aa39a213" className="p-1"><FaLinkedin /></a> <a href="https://github.com/Nayan972" className="p-1"><FaGithub /> </a> </div>
        </div>
        <div className=" md:mx-4 md:px-6 md:h-auto md:w-2/5 sm:pt-32 md:pt-0">
          <img src={photo}  className="" alt="nayan "/>
        </div>
  
      </div>
    </>
  );
}

export default TopBody;
