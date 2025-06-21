import React, { useEffect, useState } from "react";

const btnStyles = {
  default: "border-gray-700 text-gray-700 bg-white",
  hover: "border-red-500 text-red-500 bg-white",
  liked: "border-white text-white bg-red-500",
};

const LikeButton = ({ handleClick, state, loading }) => {
  const [currentStyle, setCurrentState] = useState(btnStyles[state]);

  useEffect(() => {
    setCurrentState(btnStyles[state]);
  }, [state]);

  return (
    <>
      <p>{state}</p>
      <button
        onClick={handleClick}
        onMouseOver={() => setCurrentState(btnStyles.hover)}
        onMouseOut={() => setCurrentState(btnStyles[state])}
        className={`flex gap-2 p-2 border ${currentStyle} hover:border-red-500 focus:outline-none `}
      >
        {!loading ? (
          <span>
            <svg
              className="w-6 h-6 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
              />
            </svg>
          </span>
        ) : (
          <span className="loading loading-spinner loading-md"></span>
        )}
        <span>Like</span>
      </button>
    </>
  );
};

export default LikeButton;
