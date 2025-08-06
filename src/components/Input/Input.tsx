import { InputProps } from '@/types'
import React from 'react'

const Input = ({ name, type, placeholder, value, onChange, isEdit }: InputProps) => {
    return isEdit ? (
        // <div>
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='block w-full p-4 mx-2 border rounded-lfg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-5 '
        />
        // </div>
    ) : (<input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className='block w-full p-4 mx-2 border rounded-lfg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-5 '
    />)
}

export default Input