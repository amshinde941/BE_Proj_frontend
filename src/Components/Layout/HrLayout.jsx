import React, { useState } from "react";
import LayoutDashboard from "./LayoutDashboard";
import { NavLink } from "react-router-dom";
import { HeaderDashboard } from "../Header";

const data = {
  headerdata: {
    isCompany: true,
    image:
      "https://production-cuvette.s3.ap-south-1.amazonaws.com/company/613fa44b83c4f428bad69a53/logo.jpg?d=1631863687203",
    name: "StarTech",
  },
};

const AdminSidebar = [
  {
    id: 1,
    name: "Dashboard",
    to: "/hr/dashboard",
    switch: "dashboard",
  },
  {
    id: 2,
    name: "Add Employee",
    to: "/hr/add-employee",
    switch: "add-employee",
  },
  {
    id: 3,
    name: "Recruitment",
    to: "/hr/recruitment",
    switch: "recruitment",
  },
  {
    id: 4,
    name: "Onboarding",
    to: "/hr/onboarding",
    switch: "onboarding",
  },
  {
    id: 5,
    name: "Appraisals",
    to: "/hr/appraisals",
    switch: "appraisals",
  },
  {
    id: 6,
    name: "Retention",
    to: "/hr/retention",
    switch: "retention",
  },
];

const HrLayout = ({ children, setCurrent }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <HeaderDashboard mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <LayoutDashboard>
        <ul className={mobileMenu ? "sticky  z-10 w-6/12 -my-4" : "hidden"}>
          <div
            className="flex flex-col pl-10 pt-4 absolute w-56 z-20 shadow-md bg-white
              "
            style={{ minHeight: "100vh" }}
          >
            {AdminSidebar.map((value) => {
              return (
                <div
                  className="flex flex-row justify-start items-center pt-4"
                  key={value.id}
                >
                  <NavLink
                    to={value.to}
                    className={(navData) =>
                      navData.isActive
                        ? " w-11/12 bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                        : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                    }
                    exact={"true"}
                    onClick={() => {
                      setCurrent(value.switch);
                    }}
                  >
                    {value.name}
                  </NavLink>
                </div>
              );
            })}
          </div>
        </ul>

        <div className="grid lg:grid-cols-6">
          <div
            className="bg-white lg:col-span-1 py-8 px-6 border-r hidden lg:block sticky top-0 left-0"
            style={{ minHeight: "100vh" }}
          >
            <div className="flex flex-col justify-center mx-auto">
              {AdminSidebar.map((value) => {
                return (
                  <div
                    className="flex flex-row justify-start items-center pt-4"
                    key={value.id}
                  >
                    <NavLink
                      to={value.to}
                      className={(navData) =>
                        navData.isActive
                          ? "w-full  bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                          : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                      }
                      exact={"true"}
                      onClick={() => {
                        setCurrent(value.switch);
                      }}
                    >
                      {value.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-5 m-4">{children}</div>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default HrLayout;
