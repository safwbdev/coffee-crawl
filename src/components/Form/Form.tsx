'use client';

import React, { useRef } from 'react'
import { formProps } from '@/types'

const Form = ({ children, action, className, onSubmit }: formProps) => {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <form
            className={className}
            onSubmit={onSubmit}
            ref={ref}
            action={async (formData) => {
                await action(formData);
                ref.current?.reset();
            }}
        >{children}</form>

    )
}

export default Form