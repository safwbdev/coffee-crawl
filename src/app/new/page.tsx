import AddForm from '@/components/places/AddForm'
import Title from '@/components/Title'
import * as actions from "@/actions"
import React from 'react'

const New = async () => {
    const tags = await actions.getTagCollection();

    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <Title text='Add New place' />
            <AddForm tagCollection={tags[0].tag} />
        </div>
    )
}

export default New