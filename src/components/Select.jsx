/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from 'react'
import { useId } from 'react'

function Select({
    options=[],
    label,
    className="",
    ...props
},ref) {
    const Id = useId();
  return (
    <div className='w-full'>
        {label &&
            <label htmlFor={Id} className=''>
                {label}
            </label>
        }
        <select
            id={Id}
            ref={ref}
            {...props}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {
                options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))
            }
        </select>
    </div>
    
  )
}

export default React.forwardRef(Select)