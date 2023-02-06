import React from "react";
import {
  ParentInfo,
  PersonalInfo,
  AttendanceInfo,
  SubjectInfo,
  MarksInfo,
  AchievementsInfo,
  ImprovementsInfo,
} from "../../Models/ReportData";
import {
  ParentTable,
  PersonalTable,
  AttendanceTable,
  SubjectTable,
  MarksTable,
  AchievementsTable,
  ImprovementsTable,
} from "../Table";
import DownloadReportCard from "./DownloadReportCard";

const getData = () => {
  return [...PersonalInfo];
};

const getData1 = () => {
  return [...ParentInfo];
};

const getData2 = () => {
  return [...AttendanceInfo];
};

const getData3 = () => {
  return [...SubjectInfo];
};

const getData4 = () => {
  return [...MarksInfo];
};

const getData5 = () => {
  return [...AchievementsInfo];
};

const getData6 = () => {
  return [...ImprovementsInfo];
};

const ReportCard = () => {
  const downloadInfo = () => {
    console.log("Nicee");
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Personal Details",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "title",
      },
    ],
    []
  );

  const columns1 = React.useMemo(
    () => [
      {
        Header: "Parent Details",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "title",
      },
    ],
    []
  );

  const columns2 = React.useMemo(
    () => [
      {
        Header: "Subject",
        accessor: "name",
      },
      {
        Header: "Total",
        accessor: "title",
      },
      {
        Header: "Attended",
        accessor: "attended",
      },
      {
        Header: "%",
        accessor: "percentage",
      },
    ],
    []
  );

  const columns3 = React.useMemo(
    () => [
      {
        Header: "Subjects",
        accessor: "name",
      },
      {
        Header: "Teachers",
        accessor: "title",
      },
    ],
    []
  );

  const columns4 = React.useMemo(
    () => [
      {
        Header: "Subjects",
        accessor: "name",
      },
      {
        Header: "UT 1",
        accessor: "title1",
      },
      {
        Header: "UT 2",
        accessor: "title2",
      },
    ],
    []
  );

  const columns5 = React.useMemo(
    () => [
      {
        Header: "Achievements",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "title",
      },
    ],
    []
  );

  const columns6 = React.useMemo(
    () => [
      {
        Header: "Improvements Needed",
        accessor: "name",
      },
      {
        Header: "",
        accessor: "title",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);
  const data1 = React.useMemo(() => getData1(), []);
  const data2 = React.useMemo(() => getData2(), []);
  const data3 = React.useMemo(() => getData3(), []);
  const data4 = React.useMemo(() => getData4(), []);
  const data5 = React.useMemo(() => getData5(), []);
  const data6 = React.useMemo(() => getData6(), []);

  return (
    <div className="m-10">
      <div className="flex flex-wrap w-full justify-between">
        <h1 className="text-4xl font-bold">Download Report Card</h1>
        <DownloadReportCard
          rootElementId="pagetodownload"
          downloadFileName="testPage"
        />
      </div>

      <hr />

      <div id="pagetodownload">
        <div className=" flex gap-0 flex-col my-8">
          <h1 className="text-2xl font-bold">Student Details</h1>
          <hr />
        </div>

        <PersonalTable columns={columns} data={data} />
        <ParentTable columns={columns1} data={data1} />
        <AttendanceTable columns={columns2} data={data2} />
        <SubjectTable columns={columns3} data={data3} />
        <MarksTable columns={columns4} data={data4} />
        <AchievementsTable columns={columns5} data={data5} />
        <ImprovementsTable columns={columns6} data={data6} />
      </div>
    </div>
  );
};

export default ReportCard;
