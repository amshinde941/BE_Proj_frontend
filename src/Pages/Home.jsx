import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { InputField, DropDown } from "../Components/InputField";
import { Table } from "../Components/Table";
import { AvatarCell } from "../Components/Table/Table";
import {
  PrimaryButton,
  SecondaryButton,
  TransparentButton,
} from "../Components/Button";
import { SubjectCard } from "../Components/Card";
import { Link } from "react-router-dom";
import { Button } from "../Components/Button/Button";

import { Teacherdata } from "../Models/TeacherData";

const options = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "JAVA", label: "JAVA" },
  { value: "REACT", label: "REACT" },
];

const getData = () => {
  return [...Teacherdata, ...Teacherdata, ...Teacherdata];
};

const Home = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <Layout>
      <div className="max-w-7xl w-11/12 mx-auto my-10">
        <div className="flex flex-row justify-between px-6 py-4">
          <Link to="/school/classes" className="underline text-blue-400">
            School Dashboard
          </Link>
          <Link to="/teacher/classes" className="underline text-blue-400">
            Teacher Dashboard
          </Link>
          <Link
            to="/student/class-dashboard"
            className="underline text-blue-400"
          >
            Student Dashboard
          </Link>
        </div>

        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Colors</h1>
          <hr />

          <div className="rounded py-2 text-white text-center bg-darkGreen">
            darkGreen
          </div>
          <div className="rounded py-2 text-center bg-lightGreen ">
            lightGreen
          </div>
          <div className="rounded py-2 text-white text-center bg-orange">
            orange
          </div>
        </div>
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Buttons</h1>
          <hr />
          <PrimaryButton className="w-1/5">Primary Button</PrimaryButton>
          <SecondaryButton className="w-1/5">Secondary Button</SecondaryButton>
          <TransparentButton className="w-1/5">
            Transparent Button
          </TransparentButton>
          <Button className="w-1/5">Button</Button>
        </div>
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Input Fields</h1>
          <hr />
          <InputField label="Name" placeholder="Enter Name" />
          <InputField
            type="textarea"
            label="Address"
            placeholder="Enter Address"
          />
          <InputField
            type="email"
            label="Email"
            placeholder="Enter Email"
            error="Some error in email"
          />
        </div>
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Dropdown Components</h1>
          <hr />
          <DropDown options={options} label={"Example"} />
        </div>
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Card Components</h1>
          <hr />
          <SubjectCard std="10th" subjectName="Science" link="/" />
        </div>
        <div className=" flex gap-2 flex-col my-8">
          <h1 className="text-2xl font-bold">Table Component</h1>
          <hr />
          <Table columns={columns} data={data} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
