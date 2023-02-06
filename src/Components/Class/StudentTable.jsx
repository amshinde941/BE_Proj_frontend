import React from "react";
import { Teacherdata } from "../../Models/TeacherData";
import { AvatarCell } from "../Table/Table";
import { Table } from "../Table";

const getData = () => {
  return [...Teacherdata];
};

const StudentTable = () => {
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
  return <Table columns={columns} data={data} />;
};

export default StudentTable;
