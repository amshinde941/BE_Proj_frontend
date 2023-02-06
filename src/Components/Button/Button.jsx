import React from "react";
import { classNames } from "../../utils/Utils";

export const Button = ({ children, className, onClick, ...otherProps }) => {
  return (
    <button
      className={classNames(
        "bg-lightGreen text-darkGreen px-5 rounded-full py-2 min-w-[7.5rem]",
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export const PageButton = ({ children, className, ...rest }) => {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
