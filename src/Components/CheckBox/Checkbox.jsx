import React, { useState } from "react";

const Checkbox = ({title, checkboxes}) => {
  // const [checkboxes, setCheckboxes] = useState([
  //   { id: 1, text: "Option 1", checked: false },
  //   { id: 2, text: "Option 2", checked: false },
  //   { id: 3, text: "Option 3", checked: false },
  //   { id: 4, text: "Option 4", checked: false },
  // ]);

  // const handleChange = (id) => {
  //   setCheckboxes(
  //     checkboxes.map((checkbox) => {
  //       if (checkbox.id === id) {
  //         checkbox.checked = !checkbox.checked;
  //       }
  //       return checkbox;
  //     })
  //   );
  // };

  return (
    <>
      <div className="flex flex-wrap justify-between">
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="w-1/4 p-2">
          <label className="block text-gray-700 font-medium">
            <input type="checkbox" className="mr-2" />
            {title}
          </label>
        </div>
      ))}
      </div>
    </>
  );
};

export default Checkbox;
