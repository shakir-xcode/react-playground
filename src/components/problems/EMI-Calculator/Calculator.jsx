import React, { useState } from "react";

const Calculator = () => {
  const [totalCost, setTotalCost] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [processingFee, setProcessingFee] = useState(0);
  const [downPercentage, setDownPercentage] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [totalDownPayment, setTotalDownPayment] = useState(0);
  const [totalLoanAmount, setTotalLoanAmount] = useState(0);
  const [tenure, setTenure] = useState(12);

  const [data, setData] = useState({
    totalCost: "",
    interestRate: "",
    processingFee: "",
    downPercentage: "",
    downPayment: "",
    totalDownPayment: "",
    totalLoanAmount: "",
    tenure: 12,
  });
  const handleInputChange = (e, item) => {
    if (!e.target.value) return;
    setData((pre) => ({ ...pre, [item]: e.target.value }));
  };

  return (
    <div>
      <h1>Calculator</h1>
      <p>Total Cost of Asset</p>
      <input
        className="bg-slate-200"
        type="number"
        value={data.totalCost}
        onChange={(e) => handleInputChange(e, "totalCost")}
      />

      <p>Interest Rate %</p>
      <input
        className="bg-slate-200"
        type="number"
        value={data.interestRate}
        onChange={(e) => handleInputChange(e, "interestRate")}
      />
      {/* 
      <p>Interest Rate %</p>
      <input
        className="bg-slate-200"
        type="number"
        value={data.interestRate}
        onChange={(e) => handleInputChange(e, "interestRate")}
      /> */}

      <p>Processing Fee %</p>
      <input
        className="bg-slate-200"
        type="number"
        value={data.processingFee}
        onChange={(e) => handleInputChange(e, "processingFee")}
      />

      <div>
        <p>Down Payment</p>
        <p> Total Down Payment{data.totalDownPayment}</p>
        <input
          className="bg-slate-200"
          type="number"
          value={data.downPercentage}
          onChange={(e) => handleInputChange(e, "downPercentage")}
        />
        <p>{data.downPayment}</p>
      </div>

      <div>
        <p>Loan Per Month</p>
        <p>Total loan Amount{data.totalLoanAmount}</p>
      </div>
    </div>
  );
};

export default Calculator;
