import React from "react";

import tictactoe from "../Image/TicTacToe.png";
import trash from "../Image/Trash.png";
import rocket from "../Image/rocket.png";
import oldPortfolio from "../Image/portfolio(old).png";
import nws from "../Image/nws-8.jpg";
import air from "../Image/air-6.jpg";
import banana from "../Image/banana.png";
import Html_logo from "../Image/Html_logo.png";
import css_logo from "../Image/cssLogo.png";
import js_logo from "../Image/js logo.png";
import ue_logo from "../Image/ue4.png";
function Work() {
  return (
    <div className=" mt-32">
      <h1 className="text-3xl ">WEBSITE</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-12">
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://monumental-meringue-6dfffb.netlify.app/#">
            <img className="rounded-t-lg" src={tictactoe} alt="" />
          </a>
          <div className="p-5">
            <a href="https://monumental-meringue-6dfffb.netlify.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                TicTacToe Game
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This website is part of the Web defacement course, which is a
                multiplayer TicTacToe game with a ranking system and an AI
                system that can play TicTacToe and respond to us. The website
                also includes a registration and login system. It is developed
                using HTML, CSS, and JavaScript.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={Html_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={css_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={js_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://relaxed-cucurucho-0cbed9.netlify.app/">
            <img className="rounded-t-lg" src={trash} alt="" />
          </a>
          <div className="p-5">
            <a href="https://relaxed-cucurucho-0cbed9.netlify.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Your Waste Arrived
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This website is a collaboration with the Faculty of
                Architecture, and my role is to make the website look like the
                designs provided by the faculty. It is developed using HTML,
                CSS, and JS.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={Html_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={css_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={js_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://charming-sawine-ef6e8d.netlify.app/">
            <img className="rounded-t-lg" src={rocket} alt="" />
          </a>
          <div className="p-5">
            <a href="https://charming-sawine-ef6e8d.netlify.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sigestive System Website
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This website is a part of the Multimedia Programming course and
                it is a website related to the food delivery system.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={Html_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={css_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={js_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://sukawitportfolio.netlify.app/?fbclid=IwAR2K7I310G_LJmZOK88qT6d9cHrFVDiY67vKVKMrZ9Xi7vYvjtrzncw4-bk#workpage">
            <img className="rounded-t-lg" src={oldPortfolio} alt="" />
          </a>
          <div className="p-5">
            <a href="https://sukawitportfolio.netlify.app/?fbclid=IwAR2K7I310G_LJmZOK88qT6d9cHrFVDiY67vKVKMrZ9Xi7vYvjtrzncw4-bk#workpage">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Portfolio Website (old)
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This website is an old version of my own portfolio website,
                developed using HTML, CSS, and JS.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={Html_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={css_logo}
                alt="Rounded avatar"
              />
              <img
                className="w-10 h-10 rounded-full "
                src={js_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-3xl mt-24">GAME PROJECT</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-12">
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://www.youtube.com/watch?v=rlHjJx6sKOY&t=426s">
            <img className="rounded-t-lg" src={nws} alt="" />
          </a>
          <div className="p-5">
            <a href="https://www.youtube.com/watch?v=rlHjJx6sKOY&t=426s">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Naval Warfare Online
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This game was developed as a prototype that will be used as a
                basis for further development of a military training simulation
                system used by the Royal Thai Navy. This project is a
                collaborative effort with the Royal Thai Navy and is being
                developed using Unreal Engine 4.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={ue_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://www.youtube.com/watch?v=U1CR5ydyR9I">
            <img className="rounded-t-lg" src={air} alt="" />
          </a>
          <div className="p-5">
            <a href="https://www.youtube.com/watch?v=U1CR5ydyR9I">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Airforce Warfare Online
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This game has been developed as a prototype that will be used
                for further development of a military training simulation system
                used by the Royal Thai Air Force. This project is a
                collaborative effort with the Royal Thai Air Force and is being
                developed using Unreal Engine 4.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={ue_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="https://www.youtube.com/watch?v=vntbjeqXBaU">
            <img className="rounded-t-lg" src={banana} alt="" />
          </a>
          <div className="p-5">
            <a href="https://www.youtube.com/watch?v=vntbjeqXBaU">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Banan panic!
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                This game was developed as part of the Advanced Game Development
                course. It is a 2D side-scrolling game developed using Unreal
                Engine 4.
              </p>
            </a>
            <div className="flex flex-row  gap-2">
              <img
                className="w-10 h-10 rounded-full "
                src={ue_logo}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
