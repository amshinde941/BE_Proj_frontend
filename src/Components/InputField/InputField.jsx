import React from "react";

const InputField = ({
  placeholder,
  value,
  onChange,
  label,
  type,
  rows,
  error,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="text-base text-black font-semibold">{label}</div>
      <div className="flex items-center text-black">
        {type === "textarea" ? (
          <textarea
            rows={rows}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...otherProps}
            className="outline-none border-2 border-lightGreen focus:border-darkGreen rounded px-2 py-1 w-full"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...otherProps}
            className="outline-none border-2 border-lightGreen focus:border-darkGreen rounded px-2 py-1 w-full"
          />
        )}
      </div>
      {error && (
        <div className="flex items-center">
          <p className="text-red-400 text-sm font-medium">{error}</p>
        </div>
      )}
    </div>
  );
};
export default InputField;
