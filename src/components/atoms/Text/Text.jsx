import React from "react";

const Text = ({ children, variant = "body", className = "" }) => {
  const variants = {
    h1: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent",
    h2: "text-4xl md:text-5xl font-bold text-green-400",
    h3: "text-2xl md:text-3xl font-semibold text-green-300",
    body: "text-lg text-gray-300",
    small: "text-sm text-gray-400",
  };

  return <p className={`${variants[variant]} ${className}`}>{children}</p>;
};

export default Text;
