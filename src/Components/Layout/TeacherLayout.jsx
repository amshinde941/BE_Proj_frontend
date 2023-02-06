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
    name: "Classes",
    to: "/teacher/classes",
  },
  {
    id: 2,
    name: "Students",
    to: "/teacher/students",
  },
  {
    id: 3,
    name: "Subject Teachers",
    to: "/teacher/subject-teacher",
  },
  {
    id: 4,
    name: "Study Material",
    to: "/teacher/study-material",
  },
  {
    id: 5,
    name: "Event/Meets",
    to: "/teacher/events",
  },
  {
    id: 6,
    name: "Marks",
    to: "/teacher/marks",
  },
  {
    id: 7,
    name: "Attendance",
    to: "/teacher/attendance",
  },
  {
    id: 8,
    name: "Notice Board",
    to: "/teacher/notices",
  },
];

const AdminLayout = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <HeaderDashboard mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
      <LayoutDashboard
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
        headerdata={data.headerdata}
      >
        <div>
          <ul className={mobileMenu ? "sticky z-10 w-6/12" : "hidden "}>
            <div
              className=" flex flex-col pl-10 pt-4 w-56 absolute z-20 shadow-md bg-white"
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
                          ? " w-11/12 bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                          : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                      }
                      exact={"true"}
                    >
                      {value.name}
                    </NavLink>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
        <div className=" grid lg:grid-cols-6">
          <div
            className="bg-white col-span-1 py-8 px-8 border-r hidden lg:block sticky left-0"
            style={{ minHeight: "100vh" }}
          >
            <div className=" flex flex-col justify-center mx-auto">
              {AdminSidebar.map((value) => {
                return (
                  <div
                    className="flex flex-row justify-start items-center pt-4"
                    key={value.id}
                  >
                    {/* <div className="w-4 xl:w-6 mr-4"></div> */}
                    <NavLink
                      to={value.to}
                      className={(navData) =>
                        navData.isActive
                          ? "w-full  bg-darkGreen px-2 py-1 text-base xl:text-lg text-white font-medium rounded-md"
                          : "text-base xl:text-lg py-2 px-1 2xl:px-2"
                      }
                      exact={"true"}
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
