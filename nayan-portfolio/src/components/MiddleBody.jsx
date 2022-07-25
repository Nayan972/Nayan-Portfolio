import React from "react";
import "./FontGrad.css";
import {Link} from 'react-router-dom'


import { FaCode, FaDesktop,  FaMobileAlt} from "react-icons/fa"

function MiddleBody() {
  return (
    <>
      <div className="flex flex-col justify-center align-middle">
        <div className=" p-3"><p className=" font6 md:font-normal text-zinc-300 pl-20 md:pl-40">I like to work in </p></div>
        <div className=" flex pl-20 flex-col justify-center align-middle md:flex-row">
          <div className="font1 text-slate-900  p-9  flex flex-col text-xl    grad5 rounded-lg justify-between shadow-lg shadow-pink-900 hover:opacity-90 w-52 h-52 m-2  "><FaCode />Web Development <Link to="/webDev"><button className=" text-green-900 hover:text-emerald-800 text-sm">Explore  &#x2192;</button></Link></div>
          <div className="font1 text-slate-900  p-9  flex flex-col text-xl   grad6 rounded-lg justify-between shadow-lg shadow-yellow-900 hover:opacity-90 w-52 h-52 m-2  "><FaDesktop/> UI/UX <Link to="ui"><button className=" text-green-900 hover:text-emerald-800 text-sm">Explore  &#x2192;</button></Link></div>
          <div className="font1 text-slate-900  p-9  flex flex-col text-xl   grad7 rounded-lg justify-between shadow-lg shadow-cyan-900 hover:opacity-90 w-52 h-52 m-2  "><FaMobileAlt /> Design <Link to="design"><button className=" text-green-900 hover:text-emerald-800 text-sm">Explore  &#x2192;</button></Link></div>
        </div>
      </div>
      <div>
        <p className="text-yellow-50 text-2xl font4 justify-center flex pt-5 md:pt-16">
          My skillset includes
        </p>
        <div className="flex flex-col p-10 bg-zinc-900  md:flex-row md:justify-evenly md:m-20  md:p-32 ">
          <div className="flex p-10  m-2 w-24 font1 hover:bg-teal-800 bg-cyan-900 text-zinc-200 rounded-full text-lg lg:m-6 hover:text-xl">
            HTML/CSS
          </div>
          <div className="flex p-10  m-2 w-44 font1 hover:bg-pink-700 bg-orange-700 text-zinc-200 rounded-full text-lg lg:m-6 hover:text-xl">
            JavaScript
          </div>
          <div className="flex p-10  m-2 w-10 font1 hover:bg-lime-700 bg-green-700 text-zinc-200 rounded-full text-lg lg:m-6 hover:text-xl">
            ReactJs
          </div>
          <div className="flex p-10  m-2 w-36 font1 hover:bg-amber-700 bg-yellow-600 text-zinc-200 rounded-full text-lg lg:m-6 hover:text-xl">
            NodeJs
          </div><div className="flex p-10  m-2 w-10 font1 hover:bg-purple-700 bg-fuchsia-600 text-zinc-200 rounded-full text-lg lg:m-6 hover:text-xl">
            MongoDB
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleBody;
