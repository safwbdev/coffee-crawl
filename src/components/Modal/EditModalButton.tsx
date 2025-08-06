'use client';
import React from 'react'
import { MdEdit } from 'react-icons/md';

const EditModalButton = () => {

    return (
        <button className={`text-blue-500 fixed bottom-20 right-20 cursor-pointer`}>
            <MdEdit size={41} />
        </button>)
}

export default EditModalButton