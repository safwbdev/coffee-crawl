import React from 'react'

const Title = ({ text }: { text: string }) => {
    return (
        <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
            <span className="text-4xl font-extrabold uppercase">{text}</span>
        </h1>
    )
}

export default Title