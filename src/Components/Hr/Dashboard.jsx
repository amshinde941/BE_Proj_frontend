import React from "react";
import { ProjectsData } from "../../Models/ProjectsData";
import { SecondaryButton } from "../Button";
import { BarChart, LineChart, PieChart } from "../Charts";

const Dashboard = () => {
  
  return (
    <>
      <div className="m-10">

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
