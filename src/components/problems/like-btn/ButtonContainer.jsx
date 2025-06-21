import React, { useState } from "react";
import LikeButton from "./LikeButton";

const apiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.floor(Math.random() * 10) % 2) {
        resolve({ status: 200 });
        return;
      }
      reject({ status: 404 });
    }, 1000);
  });
};

const ButtonContainer = () => {
  const [currentState, setCurrentState] = useState("default");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setloading(true);
    apiCall()
      .then((res) => {
        if (res.status === 200) {
          setCurrentState((value) =>
            value === "default" ? "liked" : "default"
          );
          setError(null);
        }
      })
      .catch((err) => setError(err))
      .finally(() => {
        setloading(false);
      });
  };

  return (
    <div>
      <LikeButton
        handleClick={handleClick}
        state={currentState}
        loading={loading}
      />
      <p>{error && error.status && <span>{error.status}</span>}</p>
    </div>
  );
};

export default ButtonContainer;
