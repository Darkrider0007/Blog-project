/* eslint-disable no-unused-vars */
import React from 'react'

const Button = (
    children,
    type="button",
    bgColor="bg-blue-500",
    hoverBgColor="hover:bg-blue-700",
    textColor="text-white",
    className="",
    ...prop
) => {
  return (
    <button className={`py-2 px-4 rounded-lg ${bgColor} ${hoverBgColor} ${textColor} ${className}`} 
        {...prop}
        type={type}
    >
        {children}
    </button>
  )
}

export default Button