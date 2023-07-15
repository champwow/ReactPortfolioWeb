import React from 'react'
import {  Link } from "react-router-dom";
import { useState, useEffect } from "react";



function Nav() {
    const [navStatus, setNavState] = useState("");

  

    const handleMenuClick = (menu) => {
      setNavState(menu);
      localStorage.setItem("selectedMenu", menu);
    };
  
    useEffect(() => {
      const storedMenu = localStorage.getItem("selectedMenu");
      if (storedMenu) {
        setNavState(storedMenu);
      }
    }, []);


  return (
    <div className='sticky top-0'>

            <div  id="sidebar" className=" h-screen 2xl:w-64 lg:w-40 bg-gray-200">
                <nav>
                  <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          onClick={() => handleMenuClick("home")}
                          to="/home"
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
                            navStatus == "home" ? " bg-gray-300" : ""
                          }`}
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleMenuClick("about")}
                          to="/about"
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
                            navStatus == "about" ? " bg-gray-300" : ""
                          }`}
                        >
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleMenuClick("work")}
                          to="/work"
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
                            navStatus == "work" ? " bg-gray-300" : ""
                          }`}
                        >
                          Work
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleMenuClick("activity")}
                          to="/activity"
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
                            navStatus == "activity" ? " bg-gray-300" : ""
                          }`}
                        >
                          Activity
                        </Link>
                      </li>
                    </ul>
                    <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                      <li>
                        <Link
                          onClick={() => handleMenuClick("contact")}
                          to="/contact"
                          className={`flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ${
                            navStatus == "contact" ? " bg-gray-300" : ""
                          }`}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
          
          </div>
   
  )
}

export default Nav