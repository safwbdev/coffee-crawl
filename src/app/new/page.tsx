import AddPlace from '@/components/places/AddPlace'
import React from 'react'

const New = () => {
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <h1 className="text-5xl fomnt-extrabold uppercase mb-5 text-center">
                <span className="text-4xl font-extrabold uppercase">Add New place</span>
            </h1>
            <AddPlace />
        </div>
    )
}

export default New