import React from "react";

const Text = ({ children, variant = "body", className = "" }) => {
  const variants = {
    h1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-slate-900 via-indigo-700 to-violet-700 dark:from-white dark:via-indigo-200 dark:to-violet-300 bg-clip-text text-transparent leading-tight",
    h2: "text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight",
    h3: "text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white",
    body: "text-base sm:text-lg text-slate-500 dark:text-slate-400 leading-relaxed",
    small: "text-sm text-slate-400 dark:text-slate-500",
  };

  const tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    small: "span",
  };

  const Tag = tags[variant] || "p";

  return <Tag className={`${variants[variant]} ${className}`}>{children}</Tag>;
};

export default Text;
