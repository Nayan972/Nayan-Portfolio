import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./FontGrad.css";
import {Link} from 'react-router-dom'


function Navbar() {
  const [nav, setNav] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "",
    },
    {
      id: 3,
      name: "Services",
      link: "/services",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <div>
        <nav className="bg-zinc-900 text-gray-300 px-2 sm:px-4 py-2.5 w-full">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/"><button  className="flex items-center">
              <span className="self-center text-base p-3 whitespace-nowrap font6 hover:transition-transform hover:text-[15px] pl-10 ">
                Nayan Nath
              </span>
            </button></Link>
            <button
              onClick={() => {
                setNav(!nav);
              }}
            >
              <FaBars className="relative md:hidden right-4 z-10 " size={20} />
            </button>

            <div className="hidden w-screen md:flex md:w-auto  pr-20">
              <ul className="flex flex-col mt-4 md:flex-row  md:mt-0 md:text-sm md:font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                   <Link to={item.link} > <button
                      
                      className="flex justify-center items-center font5  py-2 pr-4 pl-3 md:text-[15px] capitalize  md:hover:-translate-y-2 md:hover:-translate-x-2 md:transition-transform duration-300 "
                    >
                      {item.name}
                    </button></Link>
                  </li>
                ))}
              </ul>
            </div>

            {nav && (
              <div className="md:hidden w-full flex duration-300 justify-center items-center h-full">
                <ul className="flex flex-col justify-center items-center py-32 capitalize">
                  {navItems.map((item) => (
                    <li key={item.id} className=" text-xl hover:text-3xl ">
                      <Link to={item.link}><button
                        
                        className="flex justify-center items-center text-white py-4 text-semibold hover:text-3xl"
                      >
                        {item.name}
                      </button></Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
