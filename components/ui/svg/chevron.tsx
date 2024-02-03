import React from "react";

const Chevron = ({ direction, size = 24, color = "black", ...rest }: any) => {
  if (direction === "up")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill={color}
        {...rest}
      >
        <path
          fillRule="evenodd"
          d="M10 7.293l6.293 6.293a1 1 0 0 1-1.414 1.414L10 9.121 4.121 15.707a1 1 0 0 1-1.414-1.414l6.293-6.293a1 1 0 0 1 1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    );
};

export default Chevron;
