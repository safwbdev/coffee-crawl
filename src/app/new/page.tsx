import AddForm from '@/components/places/AddForm'
import Title from '@/components/Title'
import React from 'react'

const New = () => {
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <Title text='Add New place' />
            <AddForm />
        </div>
    )
}

export default New