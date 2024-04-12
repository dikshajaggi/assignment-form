import React from 'react'

interface inputprops {
    placeholder: string,
    property: string,
    type: string
}

const Input: React.FC<inputprops> = ({ placeholder, property, type }) => {
    return (
        <input type={type} className={`h-[40px] border border-gray-800 rounded-md px-2 ${property === "small" ? "w-[280px]" : "w-[600px]"}`}
            placeholder={placeholder} />
    )
}

export default Input
