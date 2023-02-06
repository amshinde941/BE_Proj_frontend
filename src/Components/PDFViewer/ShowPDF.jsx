import React from "react";

const ShowPDF = ({ path }) => {
  return (
    <>
      <iframe src={path} title="Time Table" className="h-[50rem] w-full" />
    </>
  );
};

export default ShowPDF;
