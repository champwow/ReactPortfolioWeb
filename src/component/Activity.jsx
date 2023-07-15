import React from "react";
import TobeIT from "../Image/tobeIT.jpg";
import ITOpenHouse from "../Image/openhouse.png";
function Activity() {
  return (
    <div className=" mt-32">
      <h1 className="text-3xl ">ACTIVITY</h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-12">
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="#">
            <img className="rounded-t-lg" src={TobeIT} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Staff IT TO BE 2020
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I will be a staff member at the To Be IT 2020 event, where my role
                will involve taking care of the incoming freshmen who are about
                to enter their first year. I will be responsible for organizing
                various activities for them.
              </p>
            </a>
          </div>
        </div>
        <div className="mt-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition duration-300 hover:-translate-y-1">
          <a href="#">
            <img className="rounded-t-lg" src={ITOpenHouse} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Staff IT Open House 2021
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                I will be a staff member at the IT Open House 2021 event, where
                my role will involve taking care of and answering various
                questions from the younger participants.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activity;
