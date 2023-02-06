import React from "react";
import { classNames } from "../../utils/Utils";

const SecondaryButton = ({ children, className, onClick, ...otherProps }) => {
  return (
    <button
      className={classNames(
        " bg-darkGreen px-5 text-white rounded-full py-2 min-w-[7.5rem]",
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default SecondaryButton;
