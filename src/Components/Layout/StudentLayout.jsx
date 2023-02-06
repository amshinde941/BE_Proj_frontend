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
    name: "Class Dashboard",
    to: "/student/class-dashboard",
  },
  {
    id: 2,
    name: "Student Queries",
    to: "/student/queries",
  },
  {
    id: 3,
    name: "Notice Board",
    to: "/student/notices",
  },
  {
    id: 4,
    name: "Event/Meets",
    to: "/student/events",
  },
  {
    id: 5,
    name: "Diary",
    to: "/student/diary",
  },
  {
    id: 6,
    name: "Report Card",
    to: "/student/report",
  },
  {
    id: 7,
    name: "Achievements",
    to: "/student/achievements",
  },
];

const AdminLayout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <HeaderDashboard mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <LayoutDashboard>
        <div>
          <ul className={mobileMenu ? "sticky  z-10 w-6/12" : "hidden "}>
            <div
              className="flex flex-col pl-10 pt-4 absolute  w-56 z-20 shadow-md bg-white"
              style={{ minHeight: "140vh" }}
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
                          ? "w-11/12  bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                          : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                      }
                    >
                      {value.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
        <div className="grid lg:grid-cols-6">
          <div
            className="bg-white col-span-1 py-8 px-6 border-r hidden lg:block sticky left-0"
            style={{ minHeight: "100vh" }}
          >
            <div className=" flex flex-col justify-center mx-auto">
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
                          ? " w-full bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                          : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                      }
                    >
                      {value.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-5 m-8">{children}</div>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default AdminLayout;
