'use client';
import React from 'react'
import { MdEdit } from 'react-icons/md';

const EditModalButton = () => {

    return (
        <button className={`text-white-500 fixed top-5 right-5 cursor-pointer`}>
            <MdEdit size={20} />
        </button>)
}

export default EditModalButton