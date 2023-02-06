import React from "react";

const TitleHeader = ({ children }) => {
  return (
    <>
      <h1 className="text-2xl font-bold">{children}</h1>
      <hr className="my-2" />
    </>
  );
};

export default TitleHeader;
