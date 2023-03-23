import React from "react";
import * as te from 'tw-elements';

import { ProjectsData } from "../../Models/ProjectsData";
import { SecondaryButton } from "../Button";
import { BarChart, LineChart, PieChart } from "../Charts";

const Dashboard = () => {
  return (
    <>
      <div className="m-10">
        <button
          class="mr-1.5 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          type="button"
          data-te-offcanvas-toggle
          data-te-target="#offcanvasTop"
          aria-controls="offcanvasTop"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Toggle top offcanvas
        </button>

        <div
          class="invisible fixed bottom-0 top-0 left-0 right-0 z-[1045] flex h-1/3 max-h-full max-w-full -translate-y-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-neutral-800 dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
          tabindex="-1"
          id="offcanvasTop"
          aria-labelledby="offcanvasTopLabel"
          data-te-offcanvas-init
        >
          <div class="flex items-center justify-between p-4">
            <h5
              class="mb-0 font-semibold leading-normal"
              id="offcanvasTopLabel"
            >
              Offcanvas top
            </h5>
            <button
              type="button"
              class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              data-te-offcanvas-dismiss
            >
              <span class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div class="flex-grow overflow-y-auto p-4">...</div>
        </div>

        {/* PROJECTS */}
        <h1 className="text-2xl font-bold">Projects</h1>
        <hr className="my-2" />
        <div
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}
        >
          {ProjectsData.map((project) => {
            return (
              <>
                <div>
                  <div
                    className="container"
                    style={{
                      marginBottom: "5px",
                      display: "flex",
                      flexDirection: "row",
                      padding: "40px",
                    }}
                  >
                    <div className="bg-lightGreen  p-6 rounded-md flex flex-col gap-3 shadow hover:shadow-md cursor-pointer">
                      <h3 className="text-sm font-medium ">{project.title}</h3>
                      <h3 className="text-sm font-medium">{project.size}</h3>
                      <h3 className="text-sm font-medium">
                        {project.description}
                      </h3>
                      <h3 className="text-sm font-medium">
                        {project.startDate}
                      </h3>
                      <h3 className="text-sm font-medium">
                        {project.scheduleDate}
                      </h3>

                      <SecondaryButton>
                        View Details
                        {/* <ArrowIcon /> */}
                      </SecondaryButton>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* EMPLOYEE DISTRIBUTION  */}
        <h1 className="text-2xl font-bold my-4">Employee Distibution</h1>
        <hr className="my-2" />
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4 my-8">
          <BarChart />
          <LineChart />
          <PieChart />
        </div>

        {/* ALL EMPLOYEES */}
        {/* <h1 className="text-2xl font-bold my-4">All Employees</h1>
        <hr className="my-2" />
        <div className="flex gap-2 flex-col">
          <Table columns={columns} data={data} />
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
