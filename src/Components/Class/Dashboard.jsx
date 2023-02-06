import React, { useState, useEffect } from "react";
import { TitleHeader } from "../Header";
import ShowPDF from "../PDFViewer/ShowPDF";
import TeacherTable from "./TeacherTable";
import StudentTable from "./StudentTable";
import { BarChart, LineChart, PieChart } from "../Charts";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <TitleHeader>Analytics</TitleHeader>
        <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-4">
          <BarChart />
          <LineChart />
          <PieChart />
        </div>
      </div>
      <div>
        <TitleHeader>Teachers</TitleHeader>
        <TeacherTable />
      </div>
      <div>
        <TitleHeader>Students</TitleHeader>
        <StudentTable />
      </div>
      <div>
        <TitleHeader>TimeTable</TitleHeader>
        <ShowPDF path="http://www.pdf995.com/samples/pdf.pdf" />
      </div>
    </div>
  );
};

export default Dashboard;
