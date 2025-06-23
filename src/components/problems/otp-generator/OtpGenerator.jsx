import React, { useEffect, useRef, useState } from "react";

const OTP_LENGTH = 4;

const OtpGenerator = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState([]);
  const [activeBox, setActiveBox] = useState(0);
  const inputRef = useRef([]);
  const [otpVerified, setOtpVerified] = useState("");

  const isActive = (x, y) => {
    return x === y;
  };
  console.log("OTP generated : ", otp);
  const generateOtp = () => {
    setOtp(
      Date.now()
        .toString()
        .slice(0 - OTP_LENGTH)
    );
  };

  const handleOtpSubmission = (ot) => {
    const enOtp = ot.join("");
    console.log("OTP");
    console.log("OTP mached : ", enOtp === otp);
    setActiveBox(null);
    setOtpVerified(enOtp === otp ? "OTP verified" : "OTP did not match");
  };

  const handleOtp = (e, index) => {
    let lastFilledItem = null;
    setEnteredOtp((pre) => {
      const value = e.target.value;
      // if (isNaN(value)) return;

      const num = parseInt(e.target.value);

      const ot = [...pre];
      ot[index] =
        (num >= 0 && num < 10) || e.target.value === ""
          ? num.toString()
          : ot[index];
      // ot[index] = value.at(-1);
      lastFilledItem = ot.join("").length - 1;

      setActiveBox(ot.join("").length);
      // setActiveBox(lastFilledItem);

      if (lastFilledItem === OTP_LENGTH - 1) handleOtpSubmission(ot);

      return ot;
    });
  };

  useEffect(() => {
    if (inputRef.current?.length && activeBox) {
      inputRef.current[activeBox]?.focus();
    }
  });

  return (
    <div>
      <h2>Otp Generator</h2>
      {!otp ? (
        <div className="flex flex-col w-[200px] gap-2">
          <input
            className="bg-slate-300 p-1"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />

          <button onClick={generateOtp} className="text-white self-center">
            Get OTP
          </button>
        </div>
      ) : (
        <div className="w-fit flex flex-col justify-center gap-4 mt-3">
          <div className="flex items-center justify-between w-[200px] gap-2 self-center">
            {[...Array(OTP_LENGTH)].map((_, index) => {
              return (
                <input
                  key={index}
                  min="0"
                  max="9"
                  ref={(item) => (inputRef.current[index] = item)}
                  autoFocus={isActive(index, activeBox)}
                  className="bg-slate-300 p-1 w-9"
                  type="number"
                  value={enteredOtp[index] || ""}
                  onChange={(e) => handleOtp(e, index)}
                />
              );
            })}
          </div>
          <p>{otpVerified}</p>
          <button
            onClick={handleOtpSubmission}
            className="text-white self-center"
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default OtpGenerator;
