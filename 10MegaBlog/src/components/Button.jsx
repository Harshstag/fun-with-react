import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 .disabled:shadow-none ml-2" type="button" ${type} ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
