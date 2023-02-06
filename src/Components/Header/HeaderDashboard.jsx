import React from "react";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "../Header";

const HeaderDashboard = ({ mobileMenu, setMobileMenu }) => {
  return (
    <div
      className={`sticky lg:relative top-0 w-full bg-white z-50 px-8 border-b`}
    >
      <div className="px-2 lg:px-0 py-4 mx-auto bg-white">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-3 lg:gap-0 ">
            <div className="w-4">
              <MenuIcon mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
            </div>
            <div className="w-8/12 md:w-auto">
              <NavLink to="/">
                <h1 className="text-2xl font-extrabold">StarTech</h1>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDashboard;
