'use client'
import React from 'react'
import { FaCirclePlus } from 'react-icons/fa6'
import { useCoffeeContext } from '@/context/CoffeeContext'

const AddModalButton = () => {

    const { setOpenAddModal } = useCoffeeContext();
    return (
        <button
            className={`text-blue-500 fixed bottom-20 right-20 cursor-pointer`}
            onClick={() => setOpenAddModal(true)}>
            <FaCirclePlus size={41} />

        </button>
    )
}

export default AddModalButton