import React from "react";
import { ChangeEvent } from "react";

interface InputProps {
  label: string;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text", min, max, step }) => (
  <div>
    <label className="block text-sm font-medium text-[#6E7C87] mb-2">{label}</label>
    <input type={type} value={value} onChange={onChange} min={min} max={max} step={step} className="w-full p-3 text-sm border border-[#6E7C87] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0055FF] bg-white text-[#1A1A1A]" />
  </div>
);

export default Input;
