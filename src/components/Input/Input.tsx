import { InputProps } from '@/types'
import React from 'react'

const Input = ({ name, type, placeholder, value, onChange, isEdit, className, isSocial }: InputProps) => {

    if (isEdit && onChange) {

        return (<input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`block w-full ${!isSocial ? 'p-4 mx-2' : 'p-4'} border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-5 ${className}`}
        />)

    } else {
        return (<input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={`block w-full ${!isSocial ? 'p-4 mx-2' : 'p-4'} border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-5 ${className}`}
        />)
    }

}

export default Input