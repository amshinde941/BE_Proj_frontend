import React from "react";
import { classNames } from "../../utils/Utils";

const TransparentButton = ({ children, className, onClick, ...otherProps }) => {
  return (
    <button
      className={classNames(
        " border-2 border-darkGreen px-5 rounded-full py-2 min-w-[7.5rem] text-darkGreen ",
        className
      )}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
export default TransparentButton;
