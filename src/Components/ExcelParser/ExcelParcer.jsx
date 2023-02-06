import React, { useState } from "react";
import PrimaryButton from "../Button/PrimaryButton";
import readXlsxFile from "read-excel-file";

const ExcelParcer = () => {
  const [file, setFile] = useState("");
  const [rows, setRows] = useState([]);

  const uploadExcel = () => {
    document.getElementById("excel-parser").click();
  };

  const parseExcel = (e) => {
    setFile(e.target.files[0].name);
    readXlsxFile(e.target.files[0]).then((rows) => {
      setRows(rows);
    });
  };

  return (
    <div>
      <h1 className="mb-1">Upload your Excel File here</h1>
      <input
        type="file"
        className="bg-darkGreen"
        name="excel-parser"
        id="excel-parser"
        hidden
        onChange={parseExcel}
      />
      <PrimaryButton onClick={uploadExcel}>Upload File</PrimaryButton>
      <span className="ml-1">{file}</span>
    </div>
  );
};

export default ExcelParcer;
