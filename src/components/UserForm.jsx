import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

const UserForm = ({ formTitle, children }) => {
  const user = useContext(LoginContext);
  const [warningMessage, setWarningMessage] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const url = `http://localhost:4000/auth/${formTitle}`;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post(url, formData).then(function (response) {
      console.log("Response : ", response);
      handleResponse(response.data);
    });
  };

  const handleResponse = (response) => {
    if (!response.isValidUser) {
      setWarningMessage(response.authMessage);
      return;
    }
    navigate("/");
    user.setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-col items-center border max-w-xs mx-auto mt-10 pt-4 pb-9">
      <h1 className="text-4xl font-semibold">{formTitle}</h1>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="flex flex-col gap-3 mt-6"
      >
        {children}
        <div className="w-full flex gap-3 justify-between relative">
          <div className=" absolute right-1 -top-5 text-[12px] font-semibold text-red-600 ">
            {warningMessage}
          </div>
          <label htmlFor="username" className=" font-bold">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="rounded  px-1 bg-transparent border-2 "
          />
        </div>

        <div className="w-full flex gap-3 justify-between">
          <label htmlFor="password" className=" font-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="rounded px-1 bg-transparent border-2"
          />
        </div>
        <input
          type="submit"
          value={formTitle}
          className=" py-1 px-5 font-bold bg-purple-500 self-end rounded"
        />
      </form>
    </div>
  );
};

export default UserForm;
