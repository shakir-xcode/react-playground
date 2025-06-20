import React, { useState } from "react";
import usePassword from "./usePassword";

const PasswordGenerator = () => {
  //   const [password, setPassword] = useState("");
  const [characterLength, setCharacterLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Uppercase", status: false },
    { title: "Lowercase", status: false },
    { title: "Numbers", status: false },
    { title: "Symbols", status: false },
  ]);
  const [password, errorMessage, generatePassword] = usePassword();
  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedState = [...checkboxData];
    updatedState[i].status = !updatedState[i].status;
    setCheckboxData(updatedState);
  };

  const handleGeneratePassword = () => {
    generatePassword(checkboxData, characterLength);
  };

  const handlePasswordCopy = () => {
    if (!password || copied) return;

    navigator.clipboard.writeText(password);
    setCopied(true);
    console.log("copied..");

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const style = "flex justify-between";

  return (
    <div>
      <h1>Password Generator</h1>

      <div className="w-[300px]">
        {password && (
          <div className={style}>
            <p>{password}</p>
            <button
              //   disabled={copied}
              onClick={handlePasswordCopy}
              className="text-white"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
        <div className={style}>
          <p>Character length: {characterLength}</p>
          <input
            type="range"
            min="4"
            max="20"
            value={characterLength}
            onChange={(e) => setCharacterLength(e.target.value)}
          />
        </div>

        <div>
          {checkboxData.map((checkbox, index) => (
            <div className={style} key={index}>
              <p>{checkbox.title}</p>
              <input
                type="checkbox"
                name={checkbox.title}
                checked={checkbox.status}
                onChange={() => handleCheckboxChange(index)}
              />
            </div>
          ))}
        </div>

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}

        <button className="text-white" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
