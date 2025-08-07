import { buttonProps } from '@/types'
import clsx from 'clsx'
import React from 'react'

const Button = ({
    type,
    text,
    onClick,
    actionButton,
    bgColor,
    ...props
}: buttonProps) => {
    return (
        <div>
            <button onClick={onClick} type={type} className={clsx(
                actionButton &&
                'text-white hover:bg-blue focus:ring-4 font-medium founded-lg text-sm px-2 py-2 me-2 mb-2 focus:outline-none cursor-pointer',
                `${bgColor} hover:${bgColor} font-medium founded-lg text-sm px-2 py-2 me-2 mb-2 focus:outline-none rounded-lg`
            )}>
                {text}
            </button>
        </div>
    )
}

export default Button