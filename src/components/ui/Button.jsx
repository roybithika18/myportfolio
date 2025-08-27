import React from "react";

export const Button = ({ children, className = "", variant = "primary", ...props }) => {
  const base = "btn";
  const v = variant === "primary" ? "btn-primary" : "btn-ghost";
  return (
    <button className={`${base} ${v} ${className}`} {...props}>
      {children}
    </button>
  );
};
