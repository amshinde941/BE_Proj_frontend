import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="top-0 sticky shadow-md py-4 bg-white">
      <div className=" max-w-7xl w-11/12 mx-auto flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-extrabold">StarTech</h1>
        </Link>
      </div>
    </div>
  );
};
export default Header;
