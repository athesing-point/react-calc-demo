import React, { useState, useEffect } from "react";

export const Calculator: React.FC = () => {
  const [loanType, setLoanType] = useState("personal");
  const [loanTerm, setLoanTerm] = useState(36);
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    calculateLoan();
  }, [loanType, loanTerm, loanAmount, interestRate]);

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanType === "personal" ? loanTerm : 360;
    const monthlyPayment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);

    setMonthlyPayment(Math.round(monthlyPayment));
    setTotalInterest(Math.round(monthlyPayment * numPayments - loanAmount));
    setTotalCost(Math.round(monthlyPayment * numPayments));
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-US");
  };

  const handleLoanAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value.replace(/,/g, ""));
    if (!isNaN(value) && value >= 1000 && value <= 100000) {
      setLoanAmount(value);
    }
  };

  const handleInterestRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 20) {
      setInterestRate(value);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#F7F9FC] rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-[#1A1A1A]">Home Improvement Loan Calculator</h2>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#6E7C87] mb-2">Loan type</label>
            <div className="flex space-x-2">
              <button onClick={() => setLoanType("personal")} className={`flex-1 py-3 text-sm font-medium rounded-md transition-colors ${loanType === "personal" ? "bg-[#0055FF] text-white" : "bg-white text-[#6E7C87] hover:bg-[#F7F9FC]"}`}>
                Personal loan
              </button>
              <button onClick={() => setLoanType("heloc")} className={`flex-1 py-3 text-sm font-medium rounded-md transition-colors ${loanType === "heloc" ? "bg-[#0055FF] text-white" : "bg-white text-[#6E7C87] hover:bg-[#F7F9FC]"}`}>
                HELOC
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6E7C87] mb-2">Loan term</label>
            <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))} className="w-full p-3 text-sm border border-[#6E7C87] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0055FF] bg-white text-[#1A1A1A]">
              {loanType === "personal" ? (
                [12, 24, 36, 48, 60, 72, 84, 96, 108, 120].map((months) => (
                  <option key={months} value={months}>
                    {months} months
                  </option>
                ))
              ) : (
                <option value={360}>10yr draw | 20yr repay</option>
              )}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6E7C87] mb-2">Loan amount</label>
            <div className="flex items-center space-x-4">
              <input type="text" value={formatNumber(loanAmount)} onChange={handleLoanAmountChange} className="w-1/2 p-3 text-sm border border-[#6E7C87] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0055FF] bg-white text-[#1A1A1A]" />
              <input type="range" min="1000" max="100000" step="1000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-1/2 h-2 bg-[#6E7C87] rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-[#6E7C87]">$1,000</span>
              <span className="text-xs text-[#6E7C87]">$100,000</span>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#6E7C87] mb-2">Interest rate</label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={interestRate}
                onChange={handleInterestRateChange}
                step="0.1"
                min="1"
                max="20"
                className="w-1/2 p-3 text-sm border border-[#6E7C87] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0055FF] bg-white text-[#1A1A1A]"
              />
              <input type="range" min="1" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-1/2 h-2 bg-[#6E7C87] rounded-lg appearance-none cursor-pointer" />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-[#6E7C87]">1%</span>
              <span className="text-xs text-[#6E7C87]">20%</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-[#6E7C87] mb-2">Monthly payment</h3>
            <p className="text-3xl font-bold text-[#1A1A1A]">${formatNumber(monthlyPayment)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-[#6E7C87] mb-2">Total interest</h3>
            <p className="text-3xl font-bold text-[#1A1A1A]">${formatNumber(totalInterest)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-[#6E7C87] mb-2">Total cost</h3>
            <p className="text-3xl font-bold text-[#1A1A1A]">${formatNumber(totalCost)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
