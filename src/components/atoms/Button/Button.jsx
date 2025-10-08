import React from "react";

const Button = ({ children, variant = "primary", onClick, className = "" }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 active:scale-95";
  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-emerald-600 text-black font-bold neon-glow-hover neon-glow-active",
    secondary:
      "border-2 border-green-500 text-green-400 hover:bg-opacity-10 hover:bg-green-500 neon-border-glow",
    ghost: "text-green-400 hover:text-green-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
