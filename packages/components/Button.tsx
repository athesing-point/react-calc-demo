import React from "react";

interface ButtonProps {
  onClick: () => void;
  active: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, active, children }) => (
  <button onClick={onClick} className={`flex-1 py-3 text-sm font-medium rounded-md transition-colors ${active ? "bg-[#0055FF] text-white" : "bg-white text-[#6E7C87] hover:bg-[#F7F9FC]"}`}>
    {children}
  </button>
);

export default Button;
