import React from 'react';


function Footer() {
    
  return (
   <>
   
<footer className="p-4  bg-zinc-900 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022  Nayan Nath. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <button  className="mr-4 hover:underline md:mr-6 ">About</button>
        </li>
        <li>
            <button  className="mr-4 hover:underline md:mr-6">Privacy Policy</button>
        </li>
        <li>
            <button  className="mr-4 hover:underline md:mr-6">Licensing</button>
        </li>
        <li>
            <button  className="hover:underline">Contact</button>
        </li>
    </ul>
</footer>

   </>
  )
}

export default Footer