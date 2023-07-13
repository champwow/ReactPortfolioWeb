import React from "react";

import MyProfileImage from "../Image/MainProfile.jpg";
import htmlIcon from "../Image/Html_logo.png";
import cssIcon from "../Image/cssLogo.png";
import jsIcon from "../Image/js logo.png";
import reactIcon from "../Image/react_icon.png";
import pythonIcon from "../Image/Python-logo-notext.svg.png";
import mysqlIcon from "../Image/mysql_icon.png";
import bootsteapIcon from "../Image/Bootstrap_logo.svg.png";
import tailwindIcon from "../Image/Tailwind_CSS_Logo.svg.png";
import firebaseIcon from "../Image/firebase_icon.png";

function About() {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-56">
      <div className="mx-auto">
        <h1 className="text-3xl text-center">About Me</h1>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-2 lg:py-4 sm:mt-12 lg:mt-16">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src={MyProfileImage}
            alt="Rounded avatar"
          />
          <div className=" py-12 sm:gap-6">
            <div className="flex flex-row  gap-2">
              <p className=" text-lg font-normal text-gray-500 shrink-0">
                Name :{" "}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {" "}
                Sukawit Bualoy
              </p>
            </div>
            <div className="flex flex-row  gap-2">
              <p className=" text-lg font-normal text-gray-500 shrink-0">
                Nickname :
              </p>
              <p className="text-lg font-semibold text-gray-900"> Champ</p>
            </div>
            <div className="flex flex-row  gap-2">
              <p className=" text-lg font-normal text-gray-500 shrink-0">
                Age :
              </p>
              <p className="text-lg font-semibold text-gray-900">22</p>
            </div>
            <div className="flex flex-row  gap-2">
              <p className=" text-lg font-normal text-gray-500 shrink-0">
                {" "}
                Date of birth :
              </p>
              <p className="text-lg font-semibold text-gray-900">
                12 July 2001
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <h1 className="text-3xl text-center">Education</h1>
        <section className="bg-white  antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-2 lg:py-4">
            <div className="max-w-3xl "></div>

            <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
              <div className="-my-4 divide-y divide-gray-200 ">
                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                  <p className="w-32 text-lg font-normal text-gray-500 shrink-0">
                    High school
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <p>Bodindecha (sing singhaseni) 4</p>
                  </h3>
                </div>

                <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                  <p className="w-32 text-lg font-normal text-gray-500 shrink-0">
                    University
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    <p>
                      King mongkut's institute of technology ladkrabang faculty
                      of information technology major of multimedia and game development
                    </p>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto">
        <h1 className="text-3xl text-center">Skills</h1>
        <div className="max-w-screen-xl px-4 py-8 lg:px-6 sm:py-2 lg:py-4 sm:mt-12 lg:mt-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row gap-2">
              <img
                className="w-10 h-10 rounded"
                src={htmlIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">HTML</p>
            </div>
            <div className="flex flex-row gap-2">
              <img
                className="w-10 h-10 rounded"
                src={cssIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">CSS</p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
              <img
                className="w-10 h-10 rounded"
                src={jsIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">JS</p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
              <img
                className="w-10 h-10 rounded"
                src={reactIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">REACT</p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
              <img
                className="w-10 h-10 rounded"
                src={pythonIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">PYTHON</p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
              <img
                className="w-10 h-10 rounded"
                src={mysqlIcon}
                alt="Default avatar"
              ></img>
              <p className="text-lg font-semibold text-gray-900">MYSQL</p>
            </div>
            <div className="flex flex-row gap-2 mt-10">
            <img
              className="w-10 h-10 rounded"
              src={bootsteapIcon}
              alt="Default avatar"
            ></img>
            <p className="text-lg font-semibold text-gray-900">BOOTSTRAP</p>
          </div>
          <div className="flex flex-row gap-2 mt-10">
            <img
              className="w-10 h-10 rounded"
              src={tailwindIcon}
              alt="Default avatar"
            ></img>
            <p className="text-lg font-semibold text-gray-900">TAILWIND</p>
          </div>
          <div className="flex flex-row gap-2 mt-10">
            <img
              className="w-10 h-10 rounded"
              src={firebaseIcon}
              alt="Default avatar"
            ></img>
            <p className="text-lg font-semibold text-gray-900">FIREBASE</p>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
