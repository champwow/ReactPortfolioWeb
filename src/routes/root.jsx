import { Outlet } from "react-router-dom";
import SidebarToggle from "../component/SidebarToggle";
import Nav from "../component/Nav";
import NavMobile from "../component/NavMobile";
import { useState } from "react";

export default function Root() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-12">
        <div className=" w-64 z-10 sm:hidden">
          {!isSidebarOpen && <SidebarToggle onClick={handleSidebarToggle} />}
          {isSidebarOpen && <NavMobile />}
        </div>

        <div className="col-span-1 max-[640px]:hidden">
          <Nav />
        </div>
        <div className="col-span-5 ">
          <div
            className={`sticky top-10 sm:hidden ${
              isSidebarOpen == false ? "hidden" : ""
            }`}
          >
            <button
              className="absolute w-full h-screen  top-0 "
              onClick={handleSidebarToggle}
            ></button>
          </div>

          <Outlet />
        </div>
      </div>
    </>
  );
}
