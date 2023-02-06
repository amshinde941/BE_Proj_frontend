import React, { useState } from "react";
import Select from "react-select";

const DropDown = ({ name, label, options, place, error, ...otherProps }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.value);
  };
  return (
    <div className="w-full flex flex-col">
      <p className=" text-base font-semibold pb-2 text-black">{label}</p>
      <Select options={options} {...otherProps} onChange={handleChange} />

      {error ? (
        <div className={`flex items-center`}>
          <p className={`caption text-red-400 font-medium italic`}>{error}</p>
        </div>
      ) : null}
    </div>
  );
};

export default DropDown;
