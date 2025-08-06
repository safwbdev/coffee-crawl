"use client"
import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import EditForm from '../places/EditForm';
import { useCoffeeContext } from '@/context/CoffeeContext';

const EditModal = () => {
    const { openEditModal, setOpenEditModal, currentEditPlace, setCurrentEditPlace } = useCoffeeContext();

    const closeModal = () => {
        setOpenEditModal(false)
        setCurrentEditPlace(undefined)
    }

    return openEditModal && (
        <>
            <div className="absolute border-2 bg-slate-900 z-1 top-1/2 left-1/2 -translate-1/2 w-1/2 h-1/2">
                {/* <div className="flex justify-between ">
                    Edit  {currentEditPlace ? currentEditPlace.name : 'Place'}
                    <FaWindowClose onClick={closeModal} />
                </div> */}
                <div className="flex justify-between p-4">
                    <span className='font-bold uppercase flex justify-center'>
                        Edit  {currentEditPlace ? currentEditPlace.name : 'Place'}
                    </span>
                    <span className='text-large' onClick={closeModal}>
                        <FaWindowClose />
                    </span>
                </div>
                <div className="modalContent">
                    {/* <EditForm /> */}
                </div>
            </div>
            <div className='border-2 absolute w-full h-full justify-center items-center flex top-0 bg-gray-400 opacity-60' onClick={closeModal} />
        </>
    )
}

export default EditModal